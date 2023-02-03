import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

export function Trail({ navigation }) {
    const [lessonsList, setLessonsList] = useState([]);
    const [course, setCourse] = useState("");

    async function getTrails() {
        let trailName = await AsyncStorage.getItem("trail");
        setCourse(await AsyncStorage.getItem("trail"));
        let server = await AsyncStorage.getItem("server");

        await fetch(`${server}/lessons/get/${trailName}`)
            .then((res) => res.json())
            .then((data) => {
                setLessonsList(data.result);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getTrails();
    }, []);
    return (
        <View style={styles.discover_container}>
            <ScrollView>
                <View style={styles.discover_content}>
                    <Text style={styles.discover_h1}>Modulo {course}</Text>
                    <Text style={styles.discover_text}>
                        As aulas estão ordenadas de acordo com a jornada ideal,
                        comece pela primeira aula e não pule etapas!
                    </Text>
                </View>

                <View style={styles.discover_boxes_container}>
                    {lessonsList &&
                        lessonsList.map((value) => {
                            return (
                                <TouchableOpacity
                                    key={value.id}
                                    onPress={() => {
                                        AsyncStorage.setItem(
                                            "lesson",
                                            `${value.id}`
                                        );
                                        navigation.navigate("lesson");
                                    }}
                                >
                                    <View style={styles.discover_course}>
                                        <View
                                            style={
                                                styles.discover_course_lesson_number_box
                                            }
                                        >
                                            <Text
                                                style={
                                                    styles.discover_course_lesson_number
                                                }
                                            >
                                                {value.lesson_number}
                                            </Text>
                                        </View>
                                        <Text style={styles.discover_course_h1}>
                                            Aula {value.lesson_number}
                                        </Text>
                                        <Text
                                            style={styles.discover_course_text}
                                        >
                                            {value.description &&
                                            value.description.length > 132
                                                ? value.description.substring(
                                                      0,
                                                      130
                                                  ) + "..."
                                                : value.description}
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
