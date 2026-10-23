import React, { use } from 'react';
import UsersCard from './UsersCard';

const Users = ({userPromise}) => {
    const users = use(userPromise) ;
    return (
        <div>
            <h2> user length : {users.length}</h2>
            {
                users.map((user) => <UsersCard key ={user.id} user= {user}/>)
            }
        </div>
    );
};

export default Users;