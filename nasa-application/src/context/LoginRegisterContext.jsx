import React, { useState ,createContext, useEffect } from 'react'
export const LoginRegisterContext = createContext(null)

export default function LoginRegisterContextProvider(props) {
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUsername, setCurrentUsername] = useState(null);

    console.log(currentUserId);
    console.log(currentUsername);

    const setUserData = (id, username) => {
      setCurrentUserId(id)
      setCurrentUsername(username)
    }

    const isLogged = () => {
      if(currentUserId !== null && currentUsername !== null){
        return true;
      }
      else{
        return false
      }

    }

    const loginRegisterContextExports = {
        currentUsername,
        setCurrentUsername,
        setUserData,
        isLogged
    }
  return (
    <LoginRegisterContext.Provider value={loginRegisterContextExports}>
      {props.children}
    </LoginRegisterContext.Provider>
  )
}
