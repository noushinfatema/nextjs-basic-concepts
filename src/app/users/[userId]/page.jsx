
const UserDetailsPage = async ({ params }) => {
    const {userId} = await params ;
    console.log(userId) ;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache : "no-store"})
    const user = await res.json() ;
    return (
        <div>
            <h2>This is the users's name : {user.name}</h2>
            <h2>This is the users's email : {user.email}</h2>
            <h2>This is the users's phone : {user.phone}</h2>
        </div>
    );
};

export default UserDetailsPage ;