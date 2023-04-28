import { useEffect, useState } from 'react';
import Axios from 'axios';
import "./ListUsers.css"
function ListUsers(){

    const [userList, setUserList] = useState([])

    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            setUserList(response.data)
        })
    }, [])


    return(
        <div className="ListUsers">
            <div className="container-users">
                <h1>Lista De Usuários Cadastrados</h1>
                {userList.map((val, key)=>{
                     return (
                        <h1>{val.nome}</h1>
                     )
                })}
            </div>
        </div>
    );
}

export default ListUsers;