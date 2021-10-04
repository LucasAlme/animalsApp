import React, { useEffect, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './style';
import Input from '../../components/input';
import { cores } from '../../utils/Constants';
import Button from '../../components/button';
import { ScrollView } from 'react-native-gesture-handler';
import Picker from '../../components/picker';
import { Account } from '../../models/account';
import { validarEmail } from '../../utils/Validacoes';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const navigation = useNavigation();
    const [genders, setGenders] = useState(["Homem", "Mulher", "Não-Binário", "Outro", "Prefiro não dizer"]);
    const [gender, setGender] = useState({ descricao: 'Selecione um Genêro' });
    const [account, setAccount] = useState(new Account());


    useEffect(() => {
        setAccount({...account, genders: gender.descricao})
    }, [gender])

    function isValid() {
        const listErrors = [];
        if (!validarEmail(account.email)) listErrors.push('O email inserido não é valido');
        if (account.nome.length < 3) listErrors.push('O Nome deve ter mais que 3 caracteres');
        if (account.gender == '') listErrors.push('Gênero Inválido');
        if (account.senha !== account.confirmSenha) listErrors.push('As senhas não coincidem');
        if (account.senha.length < 6) listErrors.push('Sua senha deve conter pelo menos 6 caracteres');
        if (listErrors.length > 0) {
            Alert.alert('Campos preenchidos incorretamente', `${listErrors.join('\n\n')}`)
            return false
        }
        Alert.alert('Conta Criada!', 'Faça Login com seu Usuário!')
        navigation.goBack();
        return true
    }


    return (
        <ScrollView style={styles.background}>
            <View style={{ marginTop: '5%' }}>
                <Text style={styles.txt}>Nome Completo</Text>
                <Input width="90%" customStyle={{ alignSelf: 'center' }} placeholder="Digite seu nome" value={account.nome} onChangeText={(txt) => setAccount({ ...account, nome: txt })} />
                <Text style={styles.txt}>E-mail</Text>
                <Input width="90%" customStyle={{ alignSelf: 'center' }} placeholder="Digite seu email" type="email-address" value={account.email} onChangeText={(txt) => setAccount({ ...account, email: txt })} />
                <Text style={styles.txt}>DDD + Celular</Text>
                <Input width="90%" customStyle={{ alignSelf: 'center' }} placeholder="Digite seu telefone celular (Não Obrigatório)" type="number-pad" value={account.celular} onChangeText={(txt) => setAccount({ ...account, celular: txt })} />
                <Text style={styles.txt}>DDD + Telefone</Text>
                <Input width="90%" customStyle={{ alignSelf: 'center' }} placeholder="Digite seu telefone residêncial (Não Obrigatório)" type="number-pad" value={account.telefone} onChangeText={(txt) => setAccount({ ...account, telefone: txt })} />
                <Text style={styles.txt}>Genêro</Text>
                <Picker customStyle={styles.customPicker} options={genders} title="Selecione seu Gênero" onChange={(selected) => setGender({ descricao: selected })} value={gender.descricao} />
                <Text style={styles.txt}>Senha</Text>
                <Input width="90%" customStyle={{ alignSelf: 'center' }} placeholder="Digite sua senha" value={account.senha} onChangeText={(txt) => setAccount({ ...account, senha: txt })} password />
                <Text style={styles.txt}>Confirme sua Senha</Text>
                <Input width="90%" customStyle={{ alignSelf: 'center' }} placeholder="Digite sua senha" value={account.confirmSenha} onChangeText={(txt) => setAccount({ ...account, confirmSenha: txt })} password />
                <Button customStyle={styles.btn} value="CADASTRAR" txtStyle={styles.txtbtn} onPress={isValid} />
            </View>
        </ScrollView>
    )
}

