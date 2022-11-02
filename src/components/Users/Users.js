import React, {useEffect, useState} from 'react';

import User from "../User/User";

const Users = () => {
    const [users,setUsers]=useState([]);

    const [user,setUser]=useState(null);

    const chooseUser=(user)=>{
        setUser (user)
    }



    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
           .then(value => value.json())
           .then(value => {
               setUsers(value)
           })
    },[])


    return (
        <div>


            <div>{user?.username}</div>
            <div>{user?.company.name}</div>
            <hr/>



            {users.map((user,index)=>(<User user={user} key={index} chooseUser={chooseUser}/>))}

        </div>
    );
};

export default Users;