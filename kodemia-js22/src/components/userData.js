import React, { useState, useEffect } from 'react'



function GetUser() {

    const [Usuarios, setUsers] = useState([]);

    const getData = () => {
            fetch('https://randomuser.me/api/')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setUsers(data.results)
            })
        }

    // useEffect(getData,
    //     [])
    
    return (
        <div>
            <ul>
                {Usuarios.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
    
    }



export default GetUser;