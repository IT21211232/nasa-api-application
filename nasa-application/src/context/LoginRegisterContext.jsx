import React, { useState ,createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export const LoginRegisterContext = createContext(null)

export default function LoginRegisterContextProvider(props) {
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUsername, setCurrentUsername] = useState(null);

    const navigate = useNavigate();

    const setUserData = (id, username) => {
      setCurrentUserId(id)
      setCurrentUsername(username)
    }

    const isLogged = () => {
      const curUsername = localStorage.getItem('username');
      const curId = localStorage.getItem('userid');
      if((curUsername != '') && (curId != '')){
        return true;
      }
      else{
        return false
      }
    }

    const loginUser = (id, username) => {
      localStorage.setItem('userid', id);
      localStorage.setItem('username', username);
      setCurrentUserId(id);
      setCurrentUsername(username);
    }
    
    const logoutUser = () => {
      localStorage.setItem('userid', '');
      localStorage.setItem('username', '');
      setCurrentUserId(null);
      setCurrentUsername(null);
      navigate('/')
    }

    const initializeLoginData = () => {
      const storedUsername = localStorage.getItem('username');
      const storedUserId = localStorage.getItem('userid');

      if (storedUsername && storedUserId) {
          setCurrentUserId(storedUserId);
          setCurrentUsername(storedUsername);
      } else {
          localStorage.setItem('userid', '');
          localStorage.setItem('username', '');
          setCurrentUserId(null);
          setCurrentUsername(null);
      }
    }

    useEffect(()=> {
      initializeLoginData();
    }, [])

    const loginRegisterContextExports = {
        currentUsername,
        setCurrentUsername,
        setUserData,
        isLogged,
        loginUser,
        logoutUser
    }
  return (
    <LoginRegisterContext.Provider value={loginRegisterContextExports}>
      {props.children}
    </LoginRegisterContext.Provider>
  )
}
