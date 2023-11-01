import Styles from '../../../styles/User.module.css'

const UsersPage=(props) =>{
    console.log(props,"ssg");
    return (
        <div>
        <h1>Users Page (SSG)</h1>
        {
            props.data.users.map((user)=>(
                <li  className={Styles.text} key={user.id}>{user.firstName}</li>
            ))
        }
        </div>
    )
}
export const getStaticProps=async()=>{
    console.log("task running on staticSiteGeneration");
    const data=await(await fetch('https://dummyjson.com/users')).json()
    return {
      props:{
          data,
      }
    }
}

export default UsersPage;