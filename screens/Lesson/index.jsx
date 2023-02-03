import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRef, useEffect, useState } from "react";
import { Video } from "expo-av";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

export function Lesson({ navigation }) {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    var [isLiked, setIsLiked] = useState(false);
    const [lesson, setLesson] = useState([]);
    var [isLiked, setIsLiked] = useState(false);
    var [lessonLikes, setLessonLikes] = useState("");

    async function fetchLesson() {
        let lessonId = await AsyncStorage.getItem("lesson");
        let server = await AsyncStorage.getItem("server");

        await fetch(`${server}/lessons/lesson/${lessonId}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log("\n\n\n\n\n");
                // console.log(data);
                setLesson(data.result);
                setLessonLikes(data.result.likes);
            })
            .catch((err) => console.log(err));
    }

    async function checkIfLiked() {
        let lessonId = await AsyncStorage.getItem("lesson");
        let server = await AsyncStorage.getItem("server");
        let username = await AsyncStorage.getItem("username");

        await fetch(`${server}/lessons/check_like`, {
            method: "POST",
            body: JSON.stringify({
                author: username,
                lesson_id: lessonId,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.like === true) {
                    setIsLiked(true);
                }
            })
            .catch((err) => console.log(err));
    }

    //handles like adding
    const handleLikesAdding = async () => {
        //change the display of the likes
        if (isLiked) {
            setLessonLikes(lessonLikes - 1);
            setIsLiked(false);
        }
        if (!isLiked) {
            setLessonLikes(lessonLikes + 1);
            setIsLiked(true);
        }

        let lessonId = await AsyncStorage.getItem("lesson");
        let server = await AsyncStorage.getItem("server");
        let username = await AsyncStorage.getItem("username");

        //values to submit when adding a like
        let values = {
            author: username,
            lesson_id: lessonId,
        };

        await fetch(`${server}/lessons/add_like`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log("\n\n\n\n\n");
                // console.log(data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchLesson();
        checkIfLiked();
    }, []);

    return (
        <View style={styles.discover_container}>
            <ScrollView>
                <View style={styles.video_container}>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{
                            uri: lesson?.video,
                        }}
                        useNativeControls
                        resizeMode="contain"
                        onPlaybackStatusUpdate={(status) =>
                            setStatus(() => status)
                        }
                    />
                </View>

                <View style={styles.discover_content}>
                    <Text style={styles.discover_text}>
                        Aula {lesson?.lesson_number} - {lesson?.title}
                    </Text>
                    <Text style={styles.discover_text}>
                        {lesson?.description && lesson?.description.length > 180
                            ? lesson?.description.substring(0, 180) + "..."
                            : lesson?.description}
                    </Text>

                    <View style={styles.info_container}>
                        <Image
                            style={styles.img}
                            source={{
                                uri: lesson?.teacher_avatar,
                            }}
                        />
                        <View style={styles.sd}>
                            <Text style={styles.info_text}>
                                {lesson?.teacher}
                            </Text>
                            <Text style={styles.info_text}>
                                {lesson?.teacher_ocupation}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.like_container}>
                        {!isLiked ? (
                            <TouchableOpacity
                                style={styles.profile_banner_pen}
                                onPress={() => handleLikesAdding()}
                            >
                                <AntDesign
                                    name="like2"
                                    color="tomato"
                                    size={30}
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.profile_banner_pen}
                                onPress={() => handleLikesAdding()}
                            >
                                <AntDesign
                                    name="like1"
                                    color="tomato"
                                    size={30}
                                />
                            </TouchableOpacity>
                        )}
                        <Text style={styles.like_text}>
                            {`${lessonLikes} Likes`}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
