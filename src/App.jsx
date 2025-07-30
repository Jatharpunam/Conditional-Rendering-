import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './components/RegisterForm';
import LoginFrom from './components/LoginFrom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState('Punam')

  return (
    <>
    <RegisterForm/>
    <LoginFrom/>
      {isLoggedIn ? (
        <>
        <h1 className='redFont'>User Logged In</h1>
        {/* {<button onClick={()=> setIsLoggedIn(false)}>Logout</button>} */}
        </>
      ) : (
        <>
        <h1 className='greenFont'>Please Login</h1>
       {/* { <button onClick={()=> setIsLoggedIn(true)}>Login</button>} */}
        </>
      )}

      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      <h1 className= {`${isLoggedIn ? 'greenBlock' : 'blueBlock'}`}>Best Style In Focus</h1>

      <h1 className='user'>{isLoggedIn && <span>{user}</span>}</h1>
    </>
  )
}

export default App
