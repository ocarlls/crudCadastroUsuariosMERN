import React, { useEffect, useState } from 'react';
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
                <div className='wrap-nomes'>{userList.map((val, key)=>{
                     return (
                        <React.Fragment>
                            <div className='item-user'>
                            <h3>{val.nome}</h3>
                            <h3>{val.email}</h3>
                            </div>
                        </React.Fragment>
                        
                     ) 
                })}</div>
            </div>
        </div>
    );
}

export default ListUsers;