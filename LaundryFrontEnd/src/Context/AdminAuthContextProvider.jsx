import { createContext, useContext, useEffect, useState } from "react"



const adminAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [admins,setAdmins] = useState("");

  //const [name,setName]=useState('user');

  //user.length==0&&sessionStorage.getItem("role")?.length>0&& setUser(sessionStorage.getItem("role"));

 

  return (
    <adminAuthContext.Provider
      value={{admins,setAdmins}}
    >
      {children}
    </adminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  return useContext(adminAuthContext);
}
