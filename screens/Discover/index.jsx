import {
    Text,
    SafeAreaView,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

export function Discover({ navigation }) {
    const [coursesList, setCoursesList] = useState([]);

    async function getCoursesInfo() {
        let server = await AsyncStorage.getItem("server");

        await fetch(`${server}/courses/all`)
            .then((res) => res.json())
            .then((data) => {
                setCoursesList(data.result);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getCoursesInfo();
    }, []);

    return (
        <View style={styles.discover_container}>
            <ScrollView>
                <View style={styles.discover_content}>
                    <Text style={styles.discover_h1}>Discover</Text>
                    <Text style={styles.discover_text}>
                        Aprenda a falar ingles do zero!
                    </Text>
                </View>

                <View style={styles.discover_boxes_container}>
                    <View style={styles.discover_start}>
                        <Text style={styles.discover_start_h1}>
                            Inicie seus estudos
                        </Text>
                        <TouchableOpacity
                            style={styles.discover_start_btn}
                            onPress={() => {
                                AsyncStorage.setItem("trail", "Conectar");
                                navigation.navigate("trail");
                            }}
                        >
                            <Text style={styles.discover_start_text}>
                                Iniciar jornada
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {coursesList &&
                        coursesList.map((value) => {
                            return (
                                <TouchableOpacity
                                    key={value.id}
                                    onPress={() => {
                                        AsyncStorage.setItem(
                                            "trail",
                                            value.title
                                        );
                                        navigation.navigate("trail");
                                    }}
                                >
                                    <View style={styles.discover_course}>
                                        <Text style={styles.discover_course_h1}>
                                            {value.title}
                                        </Text>
                                        <Text
                                            style={styles.discover_course_text}
                                        >
                                            {value.second_description}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                </View>
            </ScrollView>
        </View>
    );
}
