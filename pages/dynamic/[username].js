import { useRouter } from "next/router"

export default function(){
    const {query}=useRouter();
 
    return (
        <h4>This is {query.username}  page</h4>
    )
}