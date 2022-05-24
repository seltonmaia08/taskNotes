import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddTask from './src/pages/add-task';
import Home from './src/pages/home';
import EditTask from './src/pages/edit-task'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}
          options={
            {
              headerTitleStyle: {fontWeight: "bold"},
              headerTitle: "Task Notes",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: '#fe4747' },
              headerTintColor: "#fff",
            }} />
        <Stack.Screen name="Task" component={AddTask}
          options={
            {
              headerTitleStyle: {fontWeight: "bold"},
              headerTitle: "New tasks",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: '#fe4747' },
              headerTintColor: "#fff",
            }} />
             <Stack.Screen name="Edit" component={EditTask}
          options={
            {
              headerTitleStyle: {fontWeight: "bold"},
              headerTitle: "Edit task",
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: '#fe4747' },
              headerTintColor: "#fff",
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}