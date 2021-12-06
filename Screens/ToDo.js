import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components'



import AddToDoInput from '../Components/AddToDoInput';
import TodoList from '../Components/ToDoList';


export default function ToDo () {

    const [toDo, setToDo] = useState([]);
    const [data, setData] = useState([]);
    const [deleteToDo, setDeleteToDo] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getAllToDo = (async() => {
        setIsLoading(true);
        const responce = fetch('https://borad-todo.herokuapp.com/api/todo/get-all?board=61a3a23112cf9b8eff8f8d7e', {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
                }

            }).then((resp) => { return resp.json()}).catch((err) => { return err}).finally(() => setIsLoading(true))
            const check = await responce;
            console.log(responce);
            console.log(check);

            if(!check.error) {
                setToDo(check.todos);
            }
    });

    /*const getAllToDo = () => {
      setIsLoading(true)
      let URL = 'https://borad-todo.herokuapp.com/api/boards/get-all?user=61a3788b753e9771d447d400'
      fetch(URL).then(res => res.json()).then(res => {
        setData(res)
      }).finally(() => setIsLoading(true))
    }*/

    useEffect(() => {
        getAllToDo();
    }, [deleteToDo]);


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
        //setData((prevTodo) => {
        //return prevTodo.filter((todo) => todo.key != key);
        //});

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
            onRefresh = {getAllToDo}
            refreshing = {isLoading}
          />
          <View>
            <AddToDoInput submitHandler={submitHandler} setDeleteToDo={setDeleteToDo} />
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