import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import styled from 'styled-components'



import AddNoteInput from '../Components/AddNoteInput';
import NoteList from '../Components/NoteList';


export default function MyNotes () {

    const [note, setNote] = useState([]);
    const [data, setData] = useState([]);
    const [deleteNote, setDeleteNote] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const getAllNote = (async() => {
      setIsLoading(true);
        const responce = fetch('https://borad-todo.herokuapp.com/api/boards/get-all?user=61a3788b753e9771d447d400', {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
                }

            }).then((resp) => { return resp.json()}).catch((err) => { return err}).finally( () => setIsLoading(false))
            const check = await responce;
            console.log(responce);
            console.log(check);

            if(!check.error) {
                setToDo(check.note);
            }
    });

    

    useEffect(() => {
        getAllNote();
    }, [deleteNote]);


    const submitHandler = (value) => {
        setData((prevNote) => {
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
            data={note}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <NoteList item={item} deleteItem={deleteItem}/>
              
            )}
          />
          <View>
            <AddNoteInput submitHandler={submitHandler} setDeleteToDo={setDeleteNote} />
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