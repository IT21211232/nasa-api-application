import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useState ,createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
export const LoginRegisterContext = createContext(null)

export default function LoginRegisterContextProvider(props) {
    const [currentUsername, setCurrentUsername] = useState(null);
    const [authUser, setAuthUser] = useState(null);

    const navigate = useNavigate();

    const setUserData = (id, username) => {
      setCurrentUsername(username)
    }

    const isLogged = () => {
      const curUsername = localStorage.getItem('username');
      if(curUsername != ''){
        return true;
      }
      else{
        return false
      }
    }

    const loginUser = (id, username) => {
      localStorage.setItem('username', username);
      setCurrentUsername(username);
    }
    
    const logoutUser = () => {
      localStorage.setItem('username', '');
      setCurrentUsername(null);
      signOut(auth).then(()=> {
        console.log('Sign out successful');
      }).catch((err)=> {
        console.log(err);
      })
      navigate('/')
    }

    const initializeLoginData = () => {
      const storedUsername = localStorage.getItem('username');
      const storedUserId = localStorage.getItem('userid');

      if (storedUsername && storedUserId) {
          setCurrentUsername(storedUsername);
      } else {
          localStorage.setItem('userid', '');
          localStorage.setItem('username', '');
          setCurrentUsername(null);
      }
    }

    useEffect(()=> {
      // initializeLoginData();

      const listen = onAuthStateChanged(auth, (user) => {
        if(user){
          setAuthUser(user);
          localStorage.setItem('username', user.email)
          
        }
        else{
          setAuthUser(null);
        }
      })
    }, [])

    const loginRegisterContextExports = {
        currentUsername,
        setCurrentUsername,
        setUserData,
        isLogged,
        loginUser,
        logoutUser,
        authUser
    }
  return (
    <LoginRegisterContext.Provider value={loginRegisterContextExports}>
      {props.children}
    </LoginRegisterContext.Provider>
  )
}
