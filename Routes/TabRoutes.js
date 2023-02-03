import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import { Dashboard } from "../screens/Dashboard/index.jsx";
import { Discover } from "../screens/Discover/index.jsx";
import { Profile } from "../screens/Profile/index.jsx";
import { colors } from "../colors.js";

export function TabRoutes() {
    const { Screen, Navigator } = createBottomTabNavigator();

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: colors.foreground_primary,
                tabBarInactiveTintColor: colors.background_primary,
                tabBarStyle: {
                    backgroundColor: colors.pure_violet,
                    borderColor: "transparent",
                    borderTopWidth: 0,
                },
            }}
        >
            <Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Screen
                name="discover"
                component={Discover}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="school"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />

            <Screen
                name="perfil"
                component={Profile}
                options={{
                    headerShown: false,
                    // tabBarBackground:
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="person"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Navigator>
    );
}
