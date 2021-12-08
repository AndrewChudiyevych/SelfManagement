import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components'



import AddToDoInput from '../Components/AddToDoInput';
import TodoList from '../Components/ToDoList';


export default function ToDo ({route}) {

    const {boardId} = route.params;
    const [toDo, setToDo] = useState([]);
    const [data, setData] = useState([]);
    const [deleteToDo, setDeleteToDo] = useState(false);

    const getAllToDo = (async() => {
        const responce = fetch(`https://borad-todo.herokuapp.com/api/todo/get-all?board=${boardId}`, {
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
            console.log('request is here!')

            if(!check.error) {
                setToDo(check.todos);
            }
    });

    useEffect(() => {
        getAllToDo();
    }, [deleteToDo, boardId]);


    const submitHandler = (value) => {
        setData((prevTodo) => {
        return [
            {
            value: value,
            key: Math.random().toString(),
            },
            ...prevTodo,
        ];
        });
    };


    const deleteItem = async (key) => {

        const responce = fetch(`https://borad-todo.herokuapp.com/api/todo/delete-one?todoID=${key}`, {
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
            getAllToDo();

        };

    return (

        <ComponentContainer>
        <View>
          <FlatList
            data={toDo}
            keyExtractor = {(item) => item.key}
            renderItem = {({ item }) => (
              <TodoList item={item} deleteItem={deleteItem}/>
              
            )}
          />
          <View>
            <AddToDoInput boardId={boardId} submitHandler={submitHandler} setDeleteToDo={setDeleteToDo} setter={setToDo}/>
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