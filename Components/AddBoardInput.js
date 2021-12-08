import React, { useState } from "react";
import styled from "styled-components";
import { AntDesign } from "@expo/vector-icons";
import { getAllBoard } from "../Helpers/FetchBoards";

export default function AddBoardInput({ submitHandler,setDeleteBoard, setter}) {
    const [value, setValue] = useState("");
    const myTextInput = React.createRef();
    const [boardName, setBoardName] = useState("");

    const onChangeText = (text) => {
        setValue(text);
    };


    return(
        <ComponentContainer>
        <InputContainer>
          <Input ref={myTextInput}  placeholder="Add Board..." onChangeText={text => setBoardName(text)} clearButtonMode='always' />
        </InputContainer>
        <SubmitButton 
          onPress={async() => {
            console.log(setBoardName);
            const responce = fetch( 'https://api-gate.herokuapp.com/api/boards/create-board', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
              },
              body: JSON.stringify({
                "name": boardName,
                "user": "61b0741e9ee4f8499a70a491"
            })  
          }).then((resp) => { return resp.json()}).catch((err) => { return err})
          setValue(submitHandler(value));
          const check = await responce;
          console.log("Create request")
          console.log(check)
          //console.log(responce);
          //console.log(check);
          const getAllBoardCheck = await getAllBoard()
          setter(getAllBoardCheck.boards);
          console.log(getAllBoardCheck.boards);
          setDeleteBoard(true);
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


