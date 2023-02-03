import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./StackRoutes.js";

export default function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}
