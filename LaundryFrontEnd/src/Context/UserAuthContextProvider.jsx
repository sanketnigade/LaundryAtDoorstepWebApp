import { createContext, useContext, useEffect, useState } from "react"



const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState("");

  const [name,setName]=useState('user');

  user.length==0&&sessionStorage.getItem("role")?.length>0&& setUser(sessionStorage.getItem("role"));

 

  return (
    <userAuthContext.Provider
      value={{  user,setUser}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
