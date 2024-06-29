import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import { Routes } from "./Routes";
import Dashboard from "../screen/Dashboard/Dashboard";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator >
            <Stack.Screen name={Routes.Dashboard} component={Dashboard}/>
        </Stack.Navigator>
    )
}

export default MainNavigation;