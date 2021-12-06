import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function AddNoteInput({ submitHandler,setDeleteToDo}) {
    const [value, setValue] = useState("");
    const myTextInput = React.createRef();

    const onChangeText = (text) => {
        setValue(text);
    };


    return(
        <ComponentContainer>
        <InputContainer>
          <Input ref={myTextInput}  placeholder="Add Note..." onChangeText={onChangeText} clearButtonMode='always' />
        </InputContainer>
        <SubmitButton 
          onPress={async() => {
            const responce = fetch('​​https://borad-todo.herokuapp.com/api/boards/create-board', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
              },
              body: JSON.stringify({
                "name": "Test Shool",
                "user": "61a3788b753e9771d447d400"
            })  
          }).then((resp) => { return resp.json()}).catch((err) => { return err})
            setValue(submitHandler(value));
            const check = await responce;
            console.log(responce);
            console.log(check);
            setDeleteToDo(true);
            myTextInput.current.clear();
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
  font-family: poppins-regular;
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


