import { StyleSheet, Dimensions, StatusBar } from "react-native";

// screen width
const { height } = Dimensions.get("window");
import { colors } from "../../colors.js";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        minHeight: height,
        backgroundColor: colors.background_secondary,
    },
    login_container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: StatusBar.currentHeight + 15,
    },
    login_box: {
        width: "90%",
        backgroundColor: colors.action_tertiary,
        paddingBottom: 50,
        paddingLeft: 18,
        paddingRight: 18,
    },
    login_h1: {
        color: colors.foreground_primary,
        fontSize: 20,
        fontWeight: "600",
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 40,
    },
    input: {
        width: "100%",
        height: 60,
        backgroundColor: colors.background_secondary,
        color: colors.foreground_secondary,
        marginBottom: 18,
        fontSize: 16,
        borderRadius: 5,
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
        borderWidth: 0.5,
        borderColor: colors.violet,
    },
    login_text: {
        color: colors.foreground_secondary,
        fontSize: 16,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    login_text_violet: {
        color: colors.violet,
        alignSelf: "center",
    },
    login_button: {
        backgroundColor: colors.violet,
        width: "100%",
        height: 50,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
    },
    login_button_text: {
        color: colors.foreground_primary,
        fontWeight: "500",
    },
});
