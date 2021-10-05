import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./style";
import Input from '../../components/input';
import Button from "../../components/button";
import { Account } from "../../models/account";
import { useNavigation } from "@react-navigation/native";
import { Telas } from "../../utils/enums/telas";

export default function Forgot() {

    const navigation = useNavigation();
    const [account, setAccount] = useState(new Account());

    return (
        <View style={styles.background}>
            <Text style={styles.txtTitle}>Esqueci minha senha</Text>
            <View style={styles.container}>
                <Text style={styles.txt}>Para recuperar sua senha, informe seu CPF:</Text>
                <Input width="90%" placeholder="Informe seu CPF" mask="cpf" onChangeText={(string, txt) => setAccount({ ...account, cpf: txt })} value={account.cpf} type="number-pad" />
                <Button customStyle={styles.btn} value="Continuar" onPress={() => navigation.navigate(Telas.recieveCode)} />
            </View>
        </View>
    )
}