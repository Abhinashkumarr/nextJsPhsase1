import { useRouter } from "next/router"

export default function Page(){
    const router=useRouter();
     console.log("router",router);
    return (
        <>
        <h4>This is settings page for {router.query.username}</h4>
        <button onClick={(e)=>router.push({
          pathname:'dynamic/[username]/settings',
          query:{username:router.query.username}
        })}>open Settings page</button> 
       <br />
       <button onClick={(e)=>router.push("/")}>Home</button>
        </>
    )
}