import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./ListUsers.css"
function ListUsers(){

    const [userList, setUserList] = useState([]);
    const [novoNome, setNovoNome] = useState("");

    useEffect(()=>{
        Axios.get("http://localhost:3001/").then((response)=>{
            setUserList(response.data)
        })
    }, [])

    const updateNome =  async(id) => {
        try {
            const response = await Axios.put("http://localhost:3001/update/", {
                id: id,
                novoNome: novoNome,
            })
        } catch (err) {
            console.log(err)
        }    
    }

    const deleteUser = async (id) =>{
        try {
            await Axios.delete("http://localhost:3001/delete/${id}")
        } catch (err) {
            console.log(err)
        }
    }
    return(
        <div className="ListUsers">
            <div className="container-users">
                <h1>Lista De Usuários Cadastrados</h1>
                <div className='wrap-nomes'>{userList.map((user)=>{
                     return (
                        <React.Fragment>
                            <div className='item-user' key={user._id}>
                            <h3>{user.nome}</h3>
                            <h3>{user.email}</h3>
                            <div className='campo-edicao'>
                            <input type='text' placeholder='Novo Nome...' onChange={(event)=>{
                                setNovoNome(event.target.value)
                            }
                            }/>
                            <button className='bt-remover-editar' onClick={()=> updateNome(user._id )}>Update</button>
                            </div>
                            <button className='bt-remover-editar' onClick={()=> deleteUser(user._id)}>Delete</button>
                            </div>
                        </React.Fragment>
                        
                     ) 
                })}</div>
            </div>
        </div>
    );
}

export default ListUsers;