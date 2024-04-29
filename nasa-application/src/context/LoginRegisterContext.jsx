import React, { useState ,createContext, useEffect } from 'react'
export const LoginRegisterContext = createContext(null)

export default function LoginRegisterContextProvider(props) {
    const [currentUserId, setCurrentUserId] = useState(null);
    const [currentUsername, setCurrentUsername] = useState(null);

    const loginRegisterContextExports = {
        currentUsername,
        setCurrentUsername,
    }
  return (
    <LoginRegisterContext.Provider value={loginRegisterContextExports}>
      {props.children}
    </LoginRegisterContext.Provider>
  )
}
