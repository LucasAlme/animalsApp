import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Icon } from 'react-native-elements';
import RecieveCode from '../pages/forgot/recieve-code';
import SendCode from '../pages/forgot/send-code';
import Forgot from '../pages/forgot';
import Login from '../pages/login';
import Main from '../pages/main';
import SignUp from '../pages/sign-up';
import { cores } from '../utils/Constants';
import { Telas } from '../utils/enums/telas'


const Stack = createNativeStackNavigator();

function App() {

    function cleanStyle(name) {
        return ({
            headerStyle: { elevation: 0, shadowColor: 'transparent', backgroundColor: cores.yellow }, headerTitle: name, headerBackTitle: '',
            headerRight: () => <Icon name="paw" type="font-awesome-5" size={35} color={cores.blue} />,
            headerBackTitleVisible: false, headerTintColor: cores.blue
        }
        )
    };


    function ForgotStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen options={() => cleanStyle('Minha conta')} name={Telas.forgot} component={Forgot} />
                <Stack.Screen options={() => cleanStyle('Minha conta')} name={Telas.recieveCode} component={RecieveCode} />
                <Stack.Screen options={() => cleanStyle('Minha conta')} name={Telas.sendCode} component={SendCode} />
            </Stack.Navigator>
        )
    };

    function MainStack() {
        return (
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name={Telas.main} component={Main} />
            </Stack.Navigator>
        )
    }

    function AuthStack() {
        return (
            <>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name={Telas.login} component={Login} />
                    <Stack.Screen options={() => cleanStyle('Minha conta')} name={Telas.signUp} component={SignUp} />
                    <Stack.Screen options={{ headerShown: false }} name={Telas.forgot} component={ForgotStack} />
                    <Stack.Screen options={{ headerShown: false }} name={Telas.main} component={MainStack} />
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