import { useEffect, useState } from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import useSWR from 'swr';


const fetcher=(...args) =>fetch(...args).then(res=>res.json());

export default function Users() {

    // const [users, setUsers] = useState([]);
    // console.log(users);
    // useEffect(() => {
    //     async function fetchUsers() {
    //         try {
    //             const data = await fetch("https://dummyjson.com/users");
    //             const jsonData = await data.json();

    //             if (Array.isArray(jsonData)) {
    //                 setUsers(jsonData);
    //             } else if (jsonData && Array.isArray(jsonData.users)) {
    //                 setUsers(jsonData.users);
    //             } else {
    //                 console.error("Unable to extract user data from the response.");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     }

    //     fetchUsers();
    // }, []);
    const {data,error} =useSWR('https://dummyjson.com/users',fetcher);
   console.log(data,"data");
   if(error){
    return <h1>Error!</h1>
   }
   if(!data) return <h1>loading...</h1>
    return (
        <div className={styles.maincontainer}>
            <div className={styles.carditem}>
                {data.users &&
                    data.users.map((data, i) => (
                    <Link href={`/csr/${data.id}`} key={i}>{data.firstName}</Link>
                ))}
            </div>
        </div>
    );
}
