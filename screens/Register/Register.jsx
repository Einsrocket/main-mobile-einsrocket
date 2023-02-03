import {
    Text,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import { useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../colors";

import styles from "./styles";

export function Register({ navigation }) {
    // state
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const registerUser = async () => {
        setMessage("");
        console.log(message);

        const values = {
            username,
            password,
            email,
        };

        if (username && password && email) {
            if (isLoading === false) {
                setIsLoading(true);

                let server = await AsyncStorage.getItem("server");

                fetch(`${server}/users/register`, {
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

                            setIsLoading(false);

                            navigation.navigate("login");
                        } else {
                            setIsLoading(false);
                        }
                    })
                    .catch((err) => {
                        setMessage("falha ao criar conta, tente novamente.");
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

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.register_container}>
                    <View style={styles.register_box}>
                        <Text style={styles.register_h1}>CRIE SUA CONTA</Text>

                        {/* INPUTS  */}
                        <TextInput
                            placeholderTextColor={colors.foreground_secondary}
                            style={styles.input}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholder="Seu E-mail"
                        />
                        <TextInput
                            placeholderTextColor={colors.foreground_secondary}
                            style={styles.input}
                            value={username}
                            onChangeText={(text) => setUsername(text)}
                            placeholder="Seu nome"
                        />
                        <TextInput
                            placeholderTextColor={colors.foreground_secondary}
                            style={styles.input}
                            value={password}
                            type="password"
                            onChangeText={(text) => setPassword(text)}
                            placeholder="Sua senha"
                        />

                        {/* TEXT  */}
                        {message !== "" && (
                            <Text
                                style={{ alignSelf: "center", color: "violet" }}
                            >
                                {message}
                            </Text>
                        )}
                        <Text style={styles.register_text}>
                            Ao continuar voce concorda com os
                            <Text style={styles.register_text_violet}>
                                {" "}
                                nossos termos{" "}
                            </Text>
                            de uso e a
                            <Text style={styles.register_text_violet}>
                                {" "}
                                nossa politica de privacidade
                            </Text>
                        </Text>
                        <TouchableOpacity
                            style={styles.go_back_to_login}
                            onPress={() => navigation.navigate("login")}
                        >
                            <Text style={styles.register_text_violet}>
                                VOLTAR PARA LOGIN
                            </Text>
                        </TouchableOpacity>

                        {/* BUTTON  */}
                        {isLoading === true ? (
                            <TouchableOpacity style={styles.register_button}>
                                <Text style={styles.register_button_text}>
                                    Processando...
                                </Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.register_button}
                                onPress={() => registerUser()}
                            >
                                <Text style={styles.register_button_text}>
                                    CADASTRAR
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
