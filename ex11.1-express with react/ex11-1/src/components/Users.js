import React,{useState, useEffect} from 'react'
import axios from 'axios'

 const Users = ()=> {
     const [users, setUsers] = useState([]);
     const [user, setUser] = useState({
         name : '',
         age : '',
         email : ''
     })

     useEffect(()=>{
        getUsers()


     },[]) 

const getUsers = ()=> {
axios.get('http://localhost:5000/').then(res=>{
    setUsers(res.data.persons);
    
})
}
const addUser = ()=> {

}
const textHandler = (e)=> {
    setUser( {
        ...user,
        [e.target.name]: e.target.value
    })
    console.log('state:',user);
}
    return (
        <div>
            <h1>Users list</h1>
            <ul>
          {
              users.map(usr=>{
              return <li key={usr.id}><p>name:{usr.name}</p> <p>age: {usr.age}</p></li>
            
          })
          }
          </ul>
          <div>
              Add new user: <br/>
              name: <input type='text' value={user.name} name={'name'} onChange={textHandler} />
              name: <input type='text' value={user.age}  name={'age'} onChange={textHandler} />
              name: <input type='text' value={user.email}  name={'email'} onChange={textHandler} />
              name: <input type={'button'} value={'add'} onClick={addUser} />
          </div>

        </div>
    )
}

export default Users
