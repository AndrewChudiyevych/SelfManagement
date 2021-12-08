export const getAllBoard =  async() => {
    const responce = fetch('https://borad-todo.herokuapp.com/api/boards/get-all?user=61b0741e9ee4f8499a70a491', {
            method: 'GET',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'test'
            }

        }).then((resp) => { return resp.json()}).catch((err) => { return err})
        console.log(responce);
        console.log(check);
        const check = await responce;
        return check;

};