import { StyleSheet, StatusBar } from "react-native";

import { colors } from "../../colors.js";

export default StyleSheet.create({
    discover_container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.background_secondary,
        paddingTop: StatusBar.currentHeight,
    },
    discover_content: {
        width: "100%",
        paddingRight: 15,
        paddingLeft: 15,
    },
    discover_h1: {
        color: colors.foreground_secondary,
        fontSize: 29,
        fontWeight: "600",
        marginBottom: 5,
    },
    discover_text: {
        color: colors.foreground_secondary,
        fontSize: 18,
        marginBottom: 5,
    },
    discover_boxes_container: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 50,
    },
    discover_course: {
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: colors.action_tertiary,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 3,
        marginTop: 100,
        position: "relative",
    },
    discover_course_lesson_number_box: {
        position: "absolute",
        top: -25,
        width: 50,
        height: 50,
        borderWidth: 4,
        borderRadius: 50,
        borderColor: colors.blue_primary_dark,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    discover_course_lesson_number: {
        color: colors.foreground_secondary,
        fontSize: 22,
        fontWeight: "600",
    },
    discover_course_h1: {
        color: colors.foreground_secondary,
        fontSize: 22,
        marginBottom: 10,
        fontWeight: "600",
    },
    discover_course_text: {
        color: colors.foreground_tertiary,
        fontSize: 18,
    },
});
