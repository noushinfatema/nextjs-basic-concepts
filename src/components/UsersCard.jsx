'use client' ;
import { use } from "react";

import CounterContext from "@/context/CounterProvider";
import Link from "next/link";

const UsersCard = ({user}) => {
  const { count, setCount } = use(CounterContext) ;
    return (
        <div>
            <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{user.name}</h2>
    <p>{user.email}</p>
    <div className="card-actions justify-end">
      <Link href={`/users/${user.id}`}>
      <button className="btn btn-primary">Details { count }</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default UsersCard;