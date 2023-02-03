import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width } = Dimensions.get("window");
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
        marginTop: 40,
    },
    discover_start: {
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: colors.action_tertiary,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 3,
        marginBottom: 50,
    },
    discover_start_h1: {
        alignItems: "center",
        color: colors.foreground_secondary,
        fontSize: 23,
        fontWeight: "500",
    },
    discover_start_btn: {
        backgroundColor: colors.violet,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        marginTop: 10,
        borderRadius: 5,
    },
    discover_start_text: {
        color: colors.foreground_primary,
        fontSize: 18,
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
        marginBottom: 30,
    },
    discover_course_h1: {
        color: colors.foreground_secondary,
        fontSize: 22,
        marginBottom: 10,
        fontWeight: "600",
    },
    discover_course_text: {
        color: colors.foreground_secondary,
        fontSize: 18,
    },
});
