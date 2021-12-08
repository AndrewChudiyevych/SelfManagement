import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { getAllToDo } from "../Helpers/FetchHelper";

export default function AddToDoInput({ submitHandler,setDeleteToDo , setter, boardId}) {
    const [value, setValue] = useState("");
    const [toDoName, setToDoName] = useState("");
    const myTextInput = React.createRef();
    //const [isLoading, setIsLoading] = useState(false);

    console.log(boardId);
    const onChangeText = (text) => {
        setValue(text);
    };

    return(
        <ComponentContainer>
        <InputContainer>
          <Input ref={myTextInput}  placeholder="Add Task..." onChangeText={text => setToDoName(text)} clearButtonMode='always' />
        </InputContainer>
        <SubmitButton 
          onPress={async() => {
            console.log(setToDoName);
            //setIsLoading(true);
            const responce = fetch('https://borad-todo.herokuapp.com/api/todo/create-todo', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
              },
              body: JSON.stringify({
                "name": toDoName,
                "user": "61a3788b753e9771d447d400",
                "board": boardId,
                "description": "do something ",
                "estimatedTime": "24",
                "priority": "HIGH"
            })  
          }).then((resp) => { return resp.json()}).catch((err) => { return err}) //.finally(() => setIsLoading(false))
            setValue(submitHandler(value));
            const check = await responce;
            //console.log(responce);
            //console.log(check);
            const getAllToDOCheck = await getAllToDo(boardId)
            setter(getAllToDOCheck.todos);
            console.log(getAllToDOCheck.todos);
            setDeleteToDo(true);
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


