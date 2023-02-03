import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { UpdateModal } from "./update_modal";

export function Profile({ navigation }) {
    const [showModal, setShowModal] = useState(false);

    const [userData, setUserData] = useState();
    const [biography, setBiography] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [ocupation, setOcupation] = useState();
    const [entryDate, setEntryDate] = useState();
    const [modalVisible, setmodalVisible] = useState(false);
    const [formatedUsername, setFormatedUsername] = useState("");
    const [sigla, setSigla] = useState("");

    async function logOutUser() {
        AsyncStorage.setItem("loggedIn", "false");
        navigation.navigate("login");
    }

    async function getUserInfo() {
        let server = await AsyncStorage.getItem("server");
        let user = await AsyncStorage.getItem("username");
        setSigla(await AsyncStorage.getItem("sigla"));

        await fetch(`${server}/users/single/${user}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setEntryDate(data.entry_date);
                setUserData(data.result);
                setEmail(data.result.email);
                setPhone(data.result.phone);
                setOcupation(data.result.ocupation);
                setBiography(
                    data.result.biography == "null"
                        ? null
                        : data.result.biography
                );
            })
            .catch((err) => console.log(err));
    }

    async function getFormatedUsername() {
        let username = await AsyncStorage.getItem("username");
        let splitedUsername = username.split("");

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
        <View style={styles.profile_container}>
            {showModal ? (
                <ScrollView>
                    <UpdateModal
                        updateValues={() => getUserInfo()}
                        closeModal={() => setShowModal(false)}
                    />
                </ScrollView>
            ) : (
                <ScrollView>
                    <View style={styles.profile_banner}>
                        <TouchableOpacity style={styles.profile_banner_pen}>
                            <MaterialIcons
                                name="photo"
                                color="hsl(210, 38%, 95%)"
                                size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.log_out}
                            onPress={() => logOutUser()}
                        >
                            <MaterialIcons
                                name="logout"
                                color="hsl(210, 38%, 95%)"
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.profile_column}>
                        <View style={styles.profile_column_box}>
                            <View style={styles.profile_sigla_container}>
                                <View style={styles.profile_sigla_box}>
                                    <Text style={styles.profile_sigla}>
                                        {sigla}
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.profile_username}>
                                {userData?.username.length > 20
                                    ? formatedUsername
                                    : userData?.username}
                            </Text>

                            <View style={styles.profile_member_since}>
                                <Text style={styles.member_since_txt}>
                                    MEMBRO DESDE: {entryDate}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.profile_banner_pen}
                                onPress={() => setShowModal(true)}
                            >
                                <MaterialIcons
                                    name="edit"
                                    color="hsl(210, 38%, 95%)"
                                    size={25}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.profile_column_box}>
                            <Text style={styles.profile_column_box_title}>
                                Sobre mim
                            </Text>
                            {biography ? (
                                <Text style={styles.profile_column_box_text}>
                                    {biography}
                                </Text>
                            ) : (
                                <View style={styles.profile_add_info_box}>
                                    <TouchableOpacity
                                        onPress={() => setShowModal(true)}
                                    >
                                        <View style={styles.profile_add_info}>
                                            <MaterialIcons
                                                name="add"
                                                color="rgba(157, 109, 235, 0.856)"
                                                size={30}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>

                        {email && email !== "null" && (
                            <View style={styles.profile_column_box}>
                                <Text style={styles.profile_column_box_title}>
                                    E-mail
                                </Text>
                                <Text style={styles.profile_column_box_text}>
                                    {email}
                                </Text>
                            </View>
                        )}
                        {phone && phone !== "null" && (
                            <View style={styles.profile_column_box}>
                                <Text style={styles.profile_column_box_title}>
                                    Telefone
                                </Text>
                                <Text style={styles.profile_column_box_text}>
                                    {phone}
                                </Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            )}
        </View>
    );
}
