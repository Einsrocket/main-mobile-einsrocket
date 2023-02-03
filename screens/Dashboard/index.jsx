import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

export function Dashboard({ navigation }) {
    // states
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [id, setId] = useState();
    const [formatedUsername, setFormatedUsername] = useState("");
    const [sigla, setSigla] = useState("");

    // function to get information of the user
    async function getUserInfo() {
        let server = await AsyncStorage.getItem("server");
        let user = await AsyncStorage.getItem("username");
        setSigla(await AsyncStorage.getItem("sigla"));

        await fetch(`${server}/users/single/${user}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log("\n\n\n\n");
                // console.log(data.result);
                setUsername(data.result.username);
                setId(data.result.id);

                if (data.result.made_tutorial === "false") {
                    setIsModalVisible(true);
                }
            })
            .catch((err) => console.log(err));
    }

    async function getFormatedUsername() {
        let username = await AsyncStorage.getItem("username");
        let splitedUsername = await username.split("");

        for (let index = 0; index < splitedUsername.length; index++) {
            if (splitedUsername[index] === " ") {
                let newSplitedUsername = username.split(" ");

                setFormatedUsername(newSplitedUsername[0]);
                break;
            }
        }
    }

    useEffect(() => {
        getUserInfo();
        getFormatedUsername();
    }, []);

    return (
        <View style={styles.dashboard_container}>
            <ScrollView>
                <View style={styles.dashboard_content}>
                    <Text style={styles.dashboard_h1}>
                        Olá, {formatedUsername ? formatedUsername : username}!
                    </Text>
                    <Text style={styles.dashboard_text}>
                        Sua jornada rumo ao proximo nivel está apenas começando!
                    </Text>
                    <Text style={styles.dashboard_hashtag}>
                        #neverStopLearning!
                    </Text>
                </View>

                <View style={styles.dashboard_info_box}>
                    <View style={styles.dashboard_info}>
                        <View style={styles.dashboard_info_row}>
                            <View
                                style={
                                    styles.dashboard_info_row_sigla_container
                                }
                            >
                                <View
                                    style={styles.dashboard_info_row_sigla_box}
                                >
                                    <Text
                                        style={styles.dashboard_info_row_sigla}
                                    >
                                        {sigla}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.dashboard_info_row_content}>
                                <Text
                                    style={styles.dashboard_info_row_content_h2}
                                >
                                    Meu perfil
                                </Text>
                                <TouchableOpacity
                                    style={styles.dashboard_btn}
                                    onPress={() =>
                                        navigation.navigate("perfil")
                                    }
                                >
                                    <Text style={styles.dashboard_btn_text}>
                                        Visualizar perfil
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.dashboard_level}>
                            <Text style={styles.dashboard_level_text}>
                                Nivel do perfil:
                            </Text>
                            <View style={styles.dashboard_level_bg}>
                                <View
                                    style={styles.dashboard_level_color}
                                ></View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
