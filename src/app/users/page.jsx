// import UserParent from "@/components/UserParent";
import UsersCard from "@/components/UsersCard";


const getUsersData = async ()=> {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {next : {revalidate: 15}}) ;
    return res.json() ;
}


const  UsersPage = async () => {
    const users = await getUsersData() ;
    console.log(users)
    return (
        <div>
            <div>
            <h2>Users : {users.length}</h2>
        </div>
        <div className="grid grid-cols-2 gap-5">
            {
                users.map((user)=>( 
                <UsersCard key={user.id} user= {user}/>
                ) 
            )
            }
        </div>
        {/* <UserParent/> */}
        </div>
    );
};

export default UsersPage;