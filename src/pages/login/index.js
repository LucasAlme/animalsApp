import React, { useState } from "react";
import { View, Text, StatusBar, Image, KeyboardAvoidingView, TouchableOpacity, Alert } from "react-native";
import { cores } from "../../utils/Constants";
import styles from "./style";
import { Icon } from 'react-native-elements';
import Input from '../../components/input';
import Button from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { Telas } from "../../utils/enums/telas";
import DismissKeyboard from "../../components/dismissKeyboard";
import { Account } from "../../models/account";

export default function Login() {

    const navigation = useNavigation();
    const [account, setAccount] = useState(new Account());

    function isValid() {
        const listErrors = [];
        if (!validarEmail(account.email)) listErrors.push('O email inserido não é valido');
        if (account.nome.length < 3) listErrors.push('O Nome deve ter mais que 3 caracteres');
      
        if (listErrors.length > 0) {
            Alert.alert('Campos preenchidos incorretamente', `${listErrors.join('\n\n')}`)
            return false
        }
        Alert.alert('Conta Criada!', 'Faça Login com seu Usuário!')
        navigation.goBack();
        return true
    }

    return (
        <DismissKeyboard>
            <KeyboardAvoidingView keyboardVerticalOffset={-300} behavior={'height'} contentContainerStyle={{ flex: 1 }} style={{ flex: 1 }}>
                <View style={styles.background}>
                    <StatusBar backgroundColor={cores.yellow} barStyle="light-content" />
                    <View style={styles.containerLogin}>
                        <Icon name="paw" type="font-awesome-5" size={100} color={cores.blue} />
                        <Input width={'90%'} placeholder="E-mail" value={account.email} type="email-address" onChangeText={(txt) => setAccount({ ...account, email: txt })} />
                        <Input width={'90%'} placeholder="Senha" password value={account.senha} onChangeText={(txt) => setAccount({ ...account, senha: txt })} />
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
                        <TouchableOpacity onPress={() => navigation.navigate(Telas.main)}>
                            <Text style={[styles.txt, { textDecorationLine: 'underline' }]}>Começar sem Login {">"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </DismissKeyboard>
    )
}