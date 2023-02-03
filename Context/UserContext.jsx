import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext(null);

const UserContext = ({ children }) => {
    // states
    const [currentRoom, setCurrentRoom] = useState("Community Group");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    const [password, setPassword] = useState("");
    const [isLogged, setIsLogged] = useState(
        AsyncStorage.getItem("user") ? true : false
    );

    const getUserInfo = async () => {
        let info = await AsyncStorage.getItem("user");
        let userObj = JSON.parse(info);
        setUserInfo(userObj.username);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    var contextValues = {
        userInfo,
        currentRoom,
        setCurrentRoom,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        isLogged,
        setIsLogged,
    };

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};

export default UserContext;
