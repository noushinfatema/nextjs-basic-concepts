"use client" ;
import Users from "./Users";
import { Suspense } from "react";

const userPromise = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users') ;
    return res.json() ;
}

const UserParent = () => {
    return (
        <div>
            <Suspense fallback={<p>Loading...</p>}>
                <Users userPromise = {userPromise()} />

            </Suspense>
        </div>
    );
};

export default UserParent;