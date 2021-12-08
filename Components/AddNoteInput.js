import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { getAllNote } from "../Helpers/FetchNotes";

export default function AddNoteInput({ submitHandler, setDeleteNote, setter}) {
    const [value, setValue] = useState("");
    const myTextInput = React.createRef();
    const [noteName, setNoteName] = useState("");

    const onChangeText = (text) => {
        setValue(text);
    };


    return(
        <ComponentContainer>
        <InputContainer>
          <Input ref={myTextInput}  placeholder="Add Note..." onChangeText={text => setNoteName(text)} clearButtonMode='always' />
        </InputContainer>
        <SubmitButton 
          onPress={async() => {
            console.log(setNoteName)
            const responce = fetch('https://api-note-manager.herokuapp.com/v1/notes', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0QGdtYWlsLmNvbSIsImlhdCI6MTYzODk1NDA0NSwiZXhwIjoxNjM5MDQxMDQ1fQ.MR9scvL9Wt1QuLlzRje8XmlEV2NCwCC5MfxXwf_kp8YGvVFHwjUEC-lJ65FWcXS-nro65Ff47tXsqOVUp7CyNA'
              },
              body: JSON.stringify({
                "body": noteName,
                "user": "61b0741e9ee4f8499a70a491" 
            })  
          }).then((resp) => { return resp.json()}).catch((err) => { return err})
            setValue(submitHandler(value));
            const check = await responce;
            console.log("Create request")
            console.log(check)
            //console.log(responce);
            const getAllNoteCheck = await getAllNote();
            setter(getAllNoteCheck);
            console.log("GE Notes")
            console.log(getAllNoteCheck);
            setDeleteNote(true);
          }}
        >
          <AntDesign name="plus" size={24} color="midnightblue" />
        </SubmitButton>
      </ComponentContainer>
    );
}


const ComponentContainer = styled.View`
  flex-direction: row;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin-bottom: 20px;
  border-radius: 50px;
`;


