// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// // import { useTheme } from "react-native-paper";
// import { ImageBackground, StyleSheet } from "react-native";
// import Tasks from "./Tasks";
// import NewTasks from "./NewTask";

// const Tab = createMaterialBottomTabNavigator();

// const Menu = () => {
//   return (
//     <Tab.Navigator
//       tabBarActivateBackgroundColor="#ffff"
//       activeColor="#000"
//       inactiveColor="#95a5a6"
//       barStyle={styles.navigationBar}
//     >
//       <Tab.Screen
//         name="Tareas"
//         component={Tasks}
//         options={{
//           tabBarLabel: "Tarea",
//           tabBarIcon: () => <Icon name="list-ul" color="#000" size={24} />,
//         }}
//       />
//       <Tab.Screen />
//       <Tab.Screen
//         name="Nueva tarea"
//         component={NewTasks}
//         options={{
//           tabBarLabel: "Nueva Task",
//           tabBarIcon: () => <Icon name="add-to-list" color="#000" size={24} />,
//         }}
//       />
//       <Tab.Screen />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   navigationBar: {
//     backgroundColor: "#fff",
//   },
// });

// export default Menu;

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// import { useTheme } from "react-native-paper";
import { ImageBackground, StyleSheet } from "react-native";
import Tasks from "./Tasks";
import NewTasks from "./NewTask";

const Tab = createMaterialBottomTabNavigator();

const Menu = () => {
  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor="#ffff"
      activeColor="#000"
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Tareas"
        component={Tasks}
        options={{
          tabBarLabel: "Tareas",
          tabBarIcon: () => (
            <Icon name="format-list-numbered" color="#000" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Nueva tarea"
        component={NewTasks}
        options={{
          tabBarLabel: "Nueva tarea",
          tabBarIcon: () => (
            <Icon name="playlist-plus" color="#000" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#fff",
  },
});

export default Menu;
