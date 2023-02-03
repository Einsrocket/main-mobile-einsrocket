import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "../../../colors";

export function UpdateModal({ closeModal, updateValues }) {
    // states
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [biography, setBiography] = useState();
    const [ocupation, setOcupation] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [country, setCountry] = useState();
    const [id, setId] = useState();
    const [isLoading, setIsLoading] = useState(false);

    async function getUserInfo() {
        let user = await AsyncStorage.getItem("username");
        let server = await AsyncStorage.getItem("server");

        await fetch(`${server}/users/single/${user}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log("\n\n\n\n\n\n\n\n");
                // console.log(data);
                setEmail(data.result.email);
                setPhone(data.result.phone);
                setBiography(data.result.biography);
                setOcupation(data.result.ocupation);
                setCity(data.result.city);
                setState(data.result.state);
                setCountry(data.result.country);
                setId(data.result.id);
            })
            .catch((err) => console.log(err));
    }

    // submit values
    const handleSubmit = async () => {
        let user = await AsyncStorage.getItem("username");
        let server = await AsyncStorage.getItem("server");
        let id = await AsyncStorage.getItem("userid");

        // object to be submited
        const valuesToSubmit = {
            id,
            email,
            city,
            state,
            country,
            ocupation,
            biography,
            phone,
        };

        if (isLoading === false) {
            fetch(`${server}/users/update_info`, {
                method: "POST",
                body: JSON.stringify(valuesToSubmit),
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.succes) {
                        // console.log(data);
                        closeModal();
                        updateValues();
                    } else setIsLoading(false);
                })
                .catch((err) => console.log(err));
        } else setIsLoading(false);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.container_box}>
                    <View style={styles.row}>
                        <Text style={styles.h1}>Meu perfil</Text>
                        <TouchableOpacity onPress={() => closeModal()}>
                            <MaterialIcons
                                name="close"
                                color={colors.foreground_primary}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.text}>Seu E-mail</Text>
                    <TextInput
                        placeholderTextColor={colors.foreground_secondary}
                        style={styles.input}
                        value={email !== "null" ? email : ""}
                        onChangeText={(text) => setEmail(text)}
                        placeholder="Seu E-mail"
                    />
                    <Text style={styles.text}>Seu Telefone</Text>
                    <TextInput
                        placeholderTextColor={colors.foreground_secondary}
                        style={styles.input}
                        value={phone !== "null" ? phone : ""}
                        onChangeText={(text) => setPhone(text)}
                        placeholder="Seu Telefone"
                    />
                    <Text style={styles.text}>Sua ocupação</Text>
                    <TextInput
                        placeholderTextColor={colors.foreground_secondary}
                        style={styles.input}
                        value={ocupation !== "null" ? ocupation : ""}
                        onChangeText={(text) => setOcupation(text)}
                        placeholder="Sua ocupação"
                    />
                    <Text style={styles.text}>Sua biografia</Text>
                    <TextInput
                        placeholderTextColor={colors.foreground_secondary}
                        style={styles.text_area}
                        value={biography !== "null" ? biography : ""}
                        multiline={true}
                        onChangeText={(text) => setBiography(text)}
                        placeholder="Sua biografia"
                    />

                    <TouchableOpacity
                        onPress={() => closeModal()}
                        style={styles.cancel_btn}
                    >
                        <Text style={styles.btn_text}>CANCELAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => handleSubmit()}
                        style={styles.confirm_btn}
                    >
                        <Text style={styles.btn_text}>
                            CONFIRMAR ALTERAÇÕES
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
