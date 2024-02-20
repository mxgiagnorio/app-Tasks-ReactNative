import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Menu from "./screens/Menu";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Mis tareas",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#000",
            },
            headerTintColor: "#000",
            headerTitleStyle: {
              font: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
