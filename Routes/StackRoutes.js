import { Register } from "../screens/Register/Register.jsx";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/Login/Login.jsx";
import { Lesson } from "../screens/Lesson/index.jsx";
import { Trail } from "../screens/Trail/index.jsx";
import { TabRoutes } from "./TabRoutes.js";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" component={Login} />

            <Stack.Screen name="register" component={Register} />

            <Stack.Screen name="dashboard" component={TabRoutes} />

            <Stack.Screen name="trail" component={Trail} />

            <Stack.Screen name="lesson" component={Lesson} />
        </Stack.Navigator>
    );
}
