import { StyleSheet, View, StatusBar, Image, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "./colors";

import Routes from "./Routes/Routes";
import { useEffect, useState } from "react";
import { UpdateScreen } from "./screens/Update";

export default function App() {
    const version = 1;
    AsyncStorage.setItem("server", "https://einsrocket-server.cyclic.app");
    AsyncStorage.setItem("version", `${version}`);

    const [showUpdateFeedback, setShowUpdateFeedback] = useState(false);

    async function checkAppVersion() {
        fetch(
            `https://einsrocket-server.cyclic.app/check_current_mobile_version`
        )
            .then((res) => res.json())
            .then((data) => {
                if (version == data?.result?.current_version) {
                    console.log(
                        "\n\n\nusing latest app version",
                        version,
                        data.result.current_version
                    );
                }

                if (version != data?.result?.current_version) {
                    console.log("\n\n\nusing old app version");
                    setShowUpdateFeedback(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        checkAppVersion();
    }, []);

    return (
        <View style={styles.app_container}>
            <StatusBar
                backgroundColor={colors.background_secondary}
                animated={true}
                barStyle="light-content"
            />
            {showUpdateFeedback == true ? <UpdateScreen /> : <Routes />}
        </View>
    );
}

const styles = StyleSheet.create({
    app_container: {
        flex: 1,
        backgroundColor: "hsl(220, 26%, 14%)",
    },
});
