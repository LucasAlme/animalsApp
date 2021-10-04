import { StyleSheet } from 'react-native';
import { cores } from '../../utils/Constants';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: cores.branco,

    },
    txt: {
        fontSize: 16,
        marginLeft: '5%',
        marginTop: 8,
        marginBottom: 4
    },
    btn: {
        width: 370,
        height: 50,
        alignSelf: 'center',
        marginTop: '5%',

    },
    txtbtn: {
        fontWeight: "bold",
        fontSize: 16
    },
    customPicker: {
        alignSelf: 'center',
        width: '90%'
    }
})