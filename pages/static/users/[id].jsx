const UserPage=(props)=>{
    console.log(props);

   return (
    <div>
    <h1>Profile Page of -- {props.data.firstName}</h1>
    <img  src= {props.data.image} alt="img"  />

    </div>
   ) 
}
export const getStaticPaths= async ()=>{
    const data=await(await fetch(`https://dummyjson.com/users`)).json()
    const alluserId=data.users.map(user=>user.id);
    console.log("alluserId",alluserId);
    return {
        paths:alluserId.map(alluserId=>({params:{id:`${alluserId}`}})),
       fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const id=context.params.id;
    const data=await(await fetch(`https://dummyjson.com/users/${id}`)).json()
   return{
     props:{
        data,
     }
   }
}
export default UserPage;