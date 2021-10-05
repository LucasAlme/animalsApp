import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Input from '../../../components/input';
import Button from "../../../components/button";
import { Account } from "../../../models/account";
import { CheckBox } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { Telas } from "../../../utils/enums/telas";

export default function RecieveCode() {
    const navigation = useNavigation();
    const [account, setAccount] = useState(new Account());
    const [checkedEmail, setCheckedEmail] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
        <View style={styles.background}>
            <Text style={styles.txtTitle}>Esqueci minha senha</Text>
            <View style={styles.container}>
                <Text style={[styles.txt,]}>Escolha o endereço de e-mail ou o número do telefone celular para receber o seu código de redefinição de senha.</Text>
                <Text style={styles.txt}>Quero receber o código por:</Text>
                <CheckBox title="E-mail: l**********1@gmail.com" containerStyle={styles.checkBoxSty}
                    checkedIcon='check'
                    checked={checkedEmail}
                    onPress={() => setCheckedEmail(checked ? null : !checkedEmail)}
                />
                <CheckBox title="Celular: ******0515" containerStyle={styles.checkBoxSty}
                    checkedIcon='check'
                    checked={checked}
                    onPress={() => setChecked(checkedEmail ? null : !checked)}
                />
                <Button customStyle={styles.btn} value="Continuar" onPress={() => navigation.navigate(Telas.sendCode)} />
            </View>
        </View>
    )
}