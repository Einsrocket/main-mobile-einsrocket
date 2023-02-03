import {
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { colors } from "../../colors";

export function Login({ navigation }) {
    // state
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [renderPage, setRenderPage] = useState(false);

    async function checkAuth() {
        let loggedIn = await AsyncStorage.getItem("loggedIn");
        console.log(loggedIn);
        if (loggedIn == "true") {
            navigation.navigate("dashboard");
        }
        if (loggedIn !== "true") {
            setRenderPage(true);
        }
    }

    const loginUser = async () => {
        setMessage("");
        // console.log(message);

        const values = {
            username,
            password,
        };

        if (username && password) {
            if (isLoading === false) {
                setIsLoading(true);

                let server = await AsyncStorage.getItem("server");

                fetch(`${server}/users/login`, {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setMessage(data.message);
                        console.log(data);

                        if (data.succes) {
                            //creating user sigla
                            let i = username.split("");
                            for (let index = 0; index < i.length; index++) {
                                if (i[index] == " ") {
                                    let b = username.split(" ");
                                    AsyncStorage.setItem(
                                        "sigla",
                                        `${b[0].split("")[0]}`
                                    );
                                    break;
                                } else {
                                    let b = username.split("");
                                    AsyncStorage.setItem(
                                        "sigla",
                                        `${b[0].split("")[0]}`
                                    );
                                }
                            }

                            AsyncStorage.setItem("token", data.token);
                            AsyncStorage.setItem("username", username);
                            AsyncStorage.setItem("loggedIn", "true");
                            AsyncStorage.setItem(
                                "userid",
                                `${data.userData.id}`
                            );
                            setIsLoading(false);

                            navigation.navigate("dashboard");
                        } else {
                            setIsLoading(false);
                        }
                    })
                    .catch((err) => {
                        setMessage("falha ao fazer login");
                        setIsLoading(false);
                        console.log(err);
                    });
            } else {
                setIsLoading(false);
            }
        } else {
            setMessage("preencha todos os campos");
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {renderPage && (
                    <View style={styles.login_container}>
                        <View style={styles.login_box}>
                            <Text style={styles.login_h1}>FAÇA LOGIN</Text>

                            {/* INPUTS  */}
                            <TextInput
                                placeholderTextColor={
                                    colors.foreground_secondary
                                }
                                style={styles.input}
                                value={username}
                                onChangeText={(text) => setUsername(text)}
                                placeholder="Seu nome"
                            />
                            <TextInput
                                placeholderTextColor={
                                    colors.foreground_secondary
                                }
                                style={styles.input}
                                value={password}
                                type="password"
                                onChangeText={(text) => setPassword(text)}
                                placeholder="Sua senha"
                            />

                            {/* TEXT  */}
                            {message !== "" && (
                                <Text
                                    style={{
                                        alignSelf: "center",
                                        color: "violet",
                                    }}
                                >
                                    {message}
                                </Text>
                            )}
                            <Text style={styles.login_text}>
                                Não tem uma conta?
                                <TouchableOpacity
                                    onPress={() =>
                                        navigation.navigate("register")
                                    }
                                    style={{ alignSelf: "center" }}
                                >
                                    <Text style={styles.login_text_violet}>
                                        {" "}
                                        Registe-se
                                    </Text>
                                </TouchableOpacity>
                            </Text>

                            {/* BUTTON  */}
                            {isLoading === true ? (
                                <TouchableOpacity style={styles.login_button}>
                                    <Text style={styles.login_button_text}>
                                        Processando...
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={styles.login_button}
                                    onPress={() => loginUser()}
                                >
                                    <Text style={styles.login_button_text}>
                                        LOGIN
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}
