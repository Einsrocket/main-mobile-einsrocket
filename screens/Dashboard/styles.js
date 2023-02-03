import { StyleSheet, StatusBar } from "react-native";

import { colors } from "../../colors.js";

export default StyleSheet.create({
    dashboard_container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.background_secondary,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 30,
    },
    dashboard_content: {
        width: "100%",
        paddingRight: 15,
        paddingLeft: 15,
    },
    dashboard_h1: {
        color: colors.foreground_secondary,
        fontSize: 26,
        marginBottom: 5,
    },
    dashboard_text: {
        color: colors.foreground_secondary,
        fontSize: 18,
        marginBottom: 5,
    },
    dashboard_hashtag: {
        color: colors.foreground_tertiary,
        fontSize: 14,
    },

    dashboard_info_box: {
        width: "100%",
        marginTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
    },
    dashboard_info: {
        width: "100%",
        backgroundColor: colors.action_tertiary,
        borderWidth: 1,
        borderColor: colors.background_secondary,
    },
    dashboard_info_row: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    dashboard_info_row_sigla_container: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: colors.foreground_tertiary,
        marginRight: 40,
    },
    dashboard_info_row_sigla_box: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.violet,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.action_tertiary,
    },
    dashboard_info_row_sigla: {
        color: colors.foreground_primary,
        fontSize: 25,
    },

    dashboard_info_row_content_h2: {
        color: colors.foreground_secondary,
        fontSize: 20,
    },
    dashboard_btn: {
        marginTop: 20,
        backgroundColor: colors.violet,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
    },
    dashboard_btn_text: {
        color: colors.foreground_secondary,
    },

    dashboard_level: {
        width: "100%",
        borderWidth: 3,
        borderColor: "transparent",
        borderTopColor: colors.background_secondary,
        marginTop: 50,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 50,
    },
    dashboard_level_text: {
        marginTop: 10,
        color: colors.foreground_secondary,
        fontSize: 18,
    },
    dashboard_level_bg: {
        width: "100%",
        height: 10,
        marginTop: 20,
        backgroundColor: colors.violet_hover,
        borderRadius: 5,
    },
    dashboard_level_color: {
        width: "30%",
        height: 10,
        backgroundColor: colors.green_primary_dark,
        borderRadius: 5,
    },
});
