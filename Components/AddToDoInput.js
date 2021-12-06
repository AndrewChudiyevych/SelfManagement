import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";

export default function AddToDoInput({ submitHandler,setDeleteToDo}) {
    const [value, setValue] = useState("");
    const myTextInput = React.createRef();
    const [isLoading, setIsLoading] = useState(false);

    const onChangeText = (text) => {
        setValue(text);
    };


    return(
        <ComponentContainer>
        <InputContainer>
          <Input ref={myTextInput}  placeholder="Add Task..." onChangeText={onChangeText} clearButtonMode='always' />
        </InputContainer>
        <SubmitButton 
          onPress={async() => {
            setIsLoading(true);
            const responce = fetch('https://borad-todo.herokuapp.com/api/todo/create-todo', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
              },
              body: JSON.stringify({
                "name": "test4",
                "user": "61a3788b753e9771d447d400",
                "board": "61a3a23112cf9b8eff8f8d7e",
                "description": "do something ",
                "estimatedTime": "24",
                "priority": "HIGH"
            })  
          }).then((resp) => { return resp.json()}).catch((err) => { return err}).finally(() => setIsLoading(true))
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


