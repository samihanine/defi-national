import { createContext, useState } from "react";

// contexte de l'utilisateur
const UserContext = createContext();
const UserProvider = (props) => {
    const [user, setUser] = useState(null);  
    return <UserContext.Provider value={[user, setUser]}>{props.children}</UserContext.Provider>
};

export { UserContext, UserProvider };