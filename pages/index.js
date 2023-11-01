import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import img from '../public/img/img.jpg'
import {useSession,signIn,signOut } from 'next-auth/react';

export default function Home() {
  const session=useSession();
  console.log("sessn",session);
  if(session.data === null){
    return <button onClick={signIn}>Login</button>
  }
  return (
    <div className={styles.container}>
     <Image src={img} alt="image" width={1600} height={1100}
     
     
    /> 
    <h4>Hello{session?.data?.user.name}</h4>
  <button onClick={signOut}>LogOut</button>
    </div>
  )
}
