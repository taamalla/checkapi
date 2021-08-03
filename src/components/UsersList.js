import React, { useEffect,useState } from 'react'
import {Container,Row} from 'reactstrap'
// import {list} from '../const/Const'
import UserCard from './UserCard'
import {Redirect} from 'react-router-dom'
import axios from 'axios'




function UsersList({isLogin}) {
const [users,setUsers]=useState([])
// useEffect(()=>
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response=>response.json())
// .then(res=>console.log(res))
// .catch(err=>console.log(err))
// ,[])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then(res=>setUsers(res.data))
.catch(err=>console.log(err))
},[])

    
    return (
   <>
   {!isLogin ? (<Redirect to='/'/>):
   
  ( <Container>
   <Row>
{ users.map((user,i)=><UserCard  key={i}  user={user} />)}
   </Row>
</Container>)
}
   </>
    )
}

export default UsersList
