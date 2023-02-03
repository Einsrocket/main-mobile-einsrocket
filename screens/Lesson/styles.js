import { StyleSheet, StatusBar } from "react-native";

import { colors } from "../../colors.js";

export default StyleSheet.create({
    discover_container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.background_secondary,
        // paddingTop: StatusBar.currentHeight - 15,
    },
    video_container: {
        width: "100%",
        height: 210,
        marginBottom: 30,
    },
    video: {
        width: "100%",
        height: "100%",
    },

    discover_content: {
        width: "100%",
        paddingRight: 15,
        paddingLeft: 15,
    },
    discover_text: {
        color: colors.foreground_secondary,
        fontSize: 18,
        marginBottom: 20,
    },

    like_container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    like_text: {
        color: "tomato",
        marginLeft: 20,
    },

    info_container: {
        marginTop: 5,
        marginBottom: 20,
        flexDirection: "row",
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 15,
    },
    info_text: {
        color: colors.foreground_secondary,
    },
});
