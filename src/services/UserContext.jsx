import { createContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const userData = localStorage.getItem('user');
    let data = null;

    if (userData) {
        data = JSON.parse(userData);
    }

    const [user, setUser] = useState(data);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext, UserProvider };