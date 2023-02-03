import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../../colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 18,
        paddingRight: 18,
        width: "100%",
        backgroundColor: colors.background_secondary,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 30,
    },
    container_box: {
        paddingLeft: 14,
        paddingRight: 14,
        paddingBottom: 30,
        paddingTop: 10,
        width: "100%",
        backgroundColor: colors.action_tertiary,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    h1: {
        color: colors.foreground_primary,
        fontSize: 18,
    },
    text: {
        color: colors.foreground_secondary,
        marginTop: 30,
        marginBottom: 10,
    },
    input: {
        width: "100%",
        height: 60,
        backgroundColor: colors.background_secondary,
        color: colors.foreground_secondary,
        fontSize: 16,
        borderRadius: 5,
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
    },
    text_area: {
        width: "100%",
        minHeight: 60,
        backgroundColor: colors.background_secondary,
        color: colors.foreground_secondary,
        fontSize: 16,
        borderRadius: 5,
        alignItems: "flex-start",
        paddingLeft: 8,
        paddingRight: 8,
    },

    cancel_btn: {
        height: 55,
        borderWidth: 2,
        borderColor: colors.violet,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 50,
    },
    confirm_btn: {
        height: 55,
        backgroundColor: colors.violet,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 30,
    },
    btn_text: {
        color: colors.foreground_secondary,
    },
});
