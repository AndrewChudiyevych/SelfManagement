export const getAllToDo = async (boardId) => {
    const responce = fetch(`https://borad-todo.herokuapp.com/api/todo/get-all?board=${boardId}`, {
                method: 'GET',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization': 'test'
                }

            }).then((resp) => { return resp.json()}).catch((err) => { return err}) 
            const check = await responce;
            return check;
}




