import React from "react";


const UserContext = React.createContext({ email: "", id: "", author: false });
const UserProvider = ({ children }) => {
    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState({ email: "", id: "", author: false });
    const login = (email, id) => {
        setUser((user) => ({
            email: email,
            id: id,
            author: true
        }))
        localStorage.setItem("accessToken", true);
        localStorage.setItem("email", email);
        localStorage.setItem("userId", id);
    }
    const logout = (email) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("email");
        localStorage.removeItem("userId");
        setUser((user) => ({
            email: "",
            id: "",
            author: false
        }))
    }

    const addCart = (newCount) => {
        setCount(newCount);
    };

    return (
        <UserContext.Provider value={{ user, login, logout, addCart, count }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }