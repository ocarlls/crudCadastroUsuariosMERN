import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./ListUsers.css"
function ListUsers(){

    const [userList, setUserList] = useState([]);
    const [novoNome, setNovoNome] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:3001/read").then((response)=>{
            setUserList(response.data)
        })
    }, [])

    const updateNome =  (id) => {
        Axios.put("http://localhost:3001/update", {
            id: id,
            novoNome: novoNome,
        })
    }

    const deleteUser = (id) =>{
        Axios.delete('http://localhost:3001/delete/${id}')
    }
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
                            <div className='campo-edicao'>
                            <input type='text' placeholder='Novo Nome...' onChange={(event)=>{
                                setNovoNome(event.target.value);
                            }}/>
                            <button className='bt-remover-editar' onClick={()=>{
                                updateNome(val._id.toString());
                            }}>Update</button>
                            </div>
                            <button className='bt-remover-editar' onClick={()=>deleteUser(val._id)}>Delete</button>
                            </div>
                        </React.Fragment>
                        
                     ) 
                })}</div>
            </div>
        </div>
    );
}

export default ListUsers;