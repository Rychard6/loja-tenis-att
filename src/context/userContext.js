import React, {useState} from 'react';

export const UserContext = React.createContext();
 
export default function Context({children}) {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}