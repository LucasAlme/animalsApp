import React, { useState } from "react";
import { View, Text, Alert } from "react-native";
import styles from "./style";
import Input from '../../../components/input';
import Button from "../../../components/button";
import { Account } from "../../../models/account";
import { useNavigation } from "@react-navigation/native";
import { Telas } from "../../../utils/enums/telas";

export default function SendCode() {

    const navigation = useNavigation();
    const [code, setCode] = useState('');
    const [account, setAccount] = useState(new Account());


    function isValid() {
        const listErrors = [];

        if (account.senha !== account.confirmSenha) listErrors.push('As senhas não coincidem');
        if (account.senha.length < 6) listErrors.push('Sua senha deve conter pelo menos 6 caracteres');
        if (listErrors.length > 0) {
            Alert.alert('Campos preenchidos incorretamente', `${listErrors.join('\n\n')}`)
            return false
        }
        Alert.alert('Sucesso!', 'Faça Login com sua nova senha!')
        navigation.navigate(Telas.login);
        return true
    }

    return (
        <View style={styles.background}>
            <Text style={styles.txtTitle}>Esqueci minha senha</Text>
            <View style={styles.container}>
                <Text style={[styles.txt, { fontWeight: 'bold' }]}>E-mail enviado com sucesso!</Text>
                <Text style={styles.txt}>Verifique a Caixa de Entrada do seu serviço de e-mail.</Text>
                <Text style={styles.txt}>Caso o e-mail não chegue em alguns minutos, verifique também sua caixa de Spam/Lixo Eletrônico.</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Input width="50%" placeholder="Digite o código" onChangeText={(txt) => setCode(txt)} value={code} type="number-pad" customStyle={styles.vInputs} />
                    <Text style={[styles.txt, { marginTop: '8%' }]}>Reenviar código</Text>
                </View>
                <View style={styles.containerDown}>
                    <Input width="90%" placeholder="Nova senha" onChangeText={(txt) => setAccount({ ...account, senha: txt })} value={account.senha} type="number-pad" customStyle={styles.vInputs} password />
                    <Input width="90%" placeholder="Confirme a senha" onChangeText={(txt) => setAccount({ ...account, confirmSenha: txt })} value={account.confirmSenha} type="number-pad" customStyle={styles.vInputs} password />
                    <Button customStyle={styles.btn} value="Alterar a senha" onPress={() => isValid()} />
                </View>

            </View>
        </View>
    )
}