import { useRouter } from "next/router"
import{useState,useEffect} from 'react';
import useSWR from 'swr';

const UserInfo=()=>{
    const[usersInfo,setUsersInfo]=useState([])
    const router=useRouter();
    useEffect(()=>{
      const id=router.query.id;
      async function getUserById(id){
        const data = await fetch(`https://dummyjson.com/users/${id}`);
        setUsersInfo(await(data.json()))
    }
    getUserById(id)
    },[router.query.id])
    return (
        <div>
        <h1>email:{usersInfo?.email}</h1>
        </div>
    )
}
export default UserInfo