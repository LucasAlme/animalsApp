import React from "react";
import { View, Text, StatusBar, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { cores } from "../../utils/Constants";
import styles from "./style";
import { Icon } from 'react-native-elements';
import Input from '../../components/input';
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { Telas } from "../../utils/enums/telas";
import DismissKeyboard from "../../components/dismissKeyboard";

export default function Login() {

    const navigation = useNavigation();

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView keyboardVerticalOffset={-300} behavior={'height'} contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
                <View style={styles.background}>
                    <StatusBar backgroundColor={cores.yellow} barStyle="light-content" />
                    <View style={styles.containerLogin}>
                        <Icon name="paw" type="font-awesome-5" size={100} color={cores.blue} />
                        <Input width={'90%'} placeholder="E-mail ou CPF" />
                        <Input width={'90%'} placeholder="Senha" />
                        <TouchableOpacity onPress={() => navigation.navigate(Telas.forgot)} style={{ alignSelf: 'flex-end' }}>
                            <Text style={[styles.txt, styles.forgotSty]}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerDown}>
                        <Button value="Entrar" customStyle={styles.customBtn} />
                        <TouchableOpacity style={styles.touch} onPress={() => navigation.navigate(Telas.signUp)}>
                            <Text style={styles.txt}>Ainda não tem conta? Clique Aqui.</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity >
                            <Text style={[styles.txt, { textDecorationLine: 'underline' }]}>Começar sem Login {">"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    )
}