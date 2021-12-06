import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components'



import AddBoardInput from '../Components/AddBoardInput';
import BoardList from '../Components/BoardList';


export default function MyBoards () {

    const [board, setBoard] = useState([]);
    const [data, setData] = useState([]);
    const [deleteBoard, setDeleteBoard] = useState(false);

    const getAllBoard = (async() => {
        const responce = fetch('https://borad-todo.herokuapp.com/api/boards/get-all?user=61a3788b753e9771d447d400', {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
                }

            }).then((resp) => { return resp.json()}).catch((err) => { return err})
            const check = await responce;
            console.log(responce);
            console.log(check);

            if(!check.error) {
                setToDo(check.board);
            }
    });

    useEffect(() => {
        getAllBoard();
    }, [deleteBoard]);


    const submitHandler = (value) => {
        setData((prevBoard) => {
        return [
            {
            value: value,
            key: Math.random().toString(),
            },
            ...prevBoard,
        ];
        });
    };


    const deleteItem = async (key) => {
        //setData((prevTodo) => {
        //return prevTodo.filter((todo) => todo.key != key);
        //});

        const responce = fetch(`https://borad-todo.herokuapp.com/api/boards/delete-one?user=61a37838753e9771d447d3fc&boardID=${key}`, {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
                }

            }).then((resp) => { return resp.json()}).catch((err) => { return err})
            const check = await responce;
            console.log(responce);
            console.log(check);
            setDeleteToDo(true);

        };

    return (

        <ComponentContainer>
        <View>
          <FlatList
            data={board}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <BoardList item={item} deleteItem={deleteItem}/>
              
            )}
          />
          <View>
            <AddBoardInput submitHandler={submitHandler} setDeleteToDo={setDeleteBoard} />
          </View>
        </View>
      </ComponentContainer>

    )
}


const ComponentContainer = styled.View`
  background-color: #4fe8ff;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;