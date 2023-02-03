import { StyleSheet, View, Image, Text } from "react-native";
import { colors } from "../../colors";

export function UpdateScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.alert}>
                <Image
                    source={require("../../assets/img/Phone-maintenance-pana.png")}
                    style={styles.img}
                />
                <Text style={styles.alert_text}>
                    Oops... lamentamos o incomodo! parece que estás a usar uma
                    versão desatualizada do aplicativo. atualize o app na Play
                    Store ou visite o site oficial e baixe a mais recente versão
                    em einsrocket.netlify.app
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    alert: {
        width: "90%",
        paddingLeft: 18,
        paddingRight: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: 200,
        width: 200,
        resizeMode: "contain",
        marginBottom: 30,
    },
    alert_text: {
        color: colors.foreground_primary,
        fontSize: 18,
        textAlign: "justify",
    },
});
