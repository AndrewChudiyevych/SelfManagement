import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, FlatList } from 'react-native';
import { set } from 'react-native-reanimated';
import styled from 'styled-components'



import AddNoteInput from '../Components/AddNoteInput';
import NoteList from '../Components/NoteList';


export default function MyNotes () {
    const [note, setNote] = useState([]);
    const [data, setData] = useState([]);
    const [deleteNote, setDeleteNote] = useState(false);

    const getAllNote = (async() => {
        const responce = fetch('https://api-note-manager.herokuapp.com/v1/notes?user=61b0741e9ee4f8499a70a491', {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTYzODk1NDA0NSwiZXhwIjoxNjM5MDQxMDQ1fQ.MR9scvL9Wt1QuLlzRje8XmlEV2NCwCC5MfxXwf_kp8YGvVFHwjUEC-lJ65FWcXS-nro65Ff47tXsqOVUp7CyNA'
                }

            }).then((resp) => { return resp.json()}).catch((err) => { return err})
            const check = await responce;
            console.log(responce);
            console.log(check);

            if(check) {
                setNote(check);
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
            ...prevNote,
        ];
        });
    };


    const deleteItem = async (key) => {
        const responce = fetch(`https://api-note-manager.herokuapp.com/v1/notes/${key}`, {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTYzODk1NDA0NSwiZXhwIjoxNjM5MDQxMDQ1fQ.MR9scvL9Wt1QuLlzRje8XmlEV2NCwCC5MfxXwf_kp8YGvVFHwjUEC-lJ65FWcXS-nro65Ff47tXsqOVUp7CyNA'
                }
            }).then((resp) => { return resp.json()}).catch((err) => { return err})
            const check = await responce;
            console.log(responce);
            console.log(check);
            setDeleteNote(true);
            getAllNote();
        };

    return (

        <ComponentContainer>
        <View>
          <FlatList
            data={note}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <NoteList item={item} deleteItem={deleteItem}

              />
              
            )}
          />
          <View>
            <AddNoteInput submitHandler={submitHandler} setDeleteNote={setDeleteNote} setter={setNote} />
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