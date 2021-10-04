import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Icon } from 'react-native-elements';
import Login from '../pages/login';
import SignUp from '../pages/sign-up';
import { cores } from '../utils/Constants';
import { Telas } from '../utils/enums/telas'


const Stack = createNativeStackNavigator();

function App() {

    const cleanStyle = {
        headerStyle: { elevation: 0, shadowColor: 'transparent', backgroundColor: cores.yellow}, headerTitle: 'Minha conta', headerBackTitle: '',
        headerRight: () =><Icon name="paw" type="font-awesome-5" size={35} color={cores.blue} />,
        headerBackTitleVisible: false, headerTintColor: cores.blue
    };

    function AuthStack() {
        return (
            <>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name={Telas.login} component={Login} />
                    <Stack.Screen options={cleanStyle} name={Telas.signUp} component={SignUp} />
                </Stack.Navigator>

            </>
        )
    };

    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    )
};

export default App;