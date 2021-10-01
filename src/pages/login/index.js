import React from "react";
import { View, Text, StatusBar, Image } from "react-native";
import { cores } from "../../utils/Constants";
import styles from "./style";
import { Icon } from 'react-native-elements';
import Input from '../../components/input';
import Button from "../../components/button";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login() {
    return (
        <View style={styles.background}>
            <StatusBar backgroundColor={cores.yellow} barStyle="light-content" />
            <View style={styles.containerLogin}>
                <Icon name="paw" type="font-awesome-5" size={100} color={cores.blue} />
                <Input width={'90%'} placeholder="E-mail ou CPF" />
                <Input width={'90%'} placeholder="Senha" />
                <Text style={[styles.txt, styles.forgotSty]}>Esqueci minha senha</Text>
            </View>
            <View style={styles.containerDown}>
                <Button value="Entrar" customStyle={styles.customBtn} />
                <TouchableOpacity style={styles.touch}>
                    <Text style={styles.txt}>Ainda não tem conta? Clique Aqui.</Text>
                </TouchableOpacity>
            </View>
            <View style={{bottom: '15%'}}>
                <TouchableOpacity >
                    <Text style={[styles.txt, {textDecorationLine: 'underline'}]}>Começar sem Login {">"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}