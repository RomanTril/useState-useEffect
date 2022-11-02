import React from 'react';

const User = ({user,chooseUser}) => {


    return (
        <div>

            <div> {user.id}--{user.name}</div>
            <div>{user.email}</div>
            <div>{user.address.city}</div>

            <button onClick={()=>{chooseUser(user)}}>Choose User</button>

        </div>
    );
};

export default User;