import { StyleSheet } from 'react-native';
import { cores } from '../../utils/Constants';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: cores.yellow,
        justifyContent: 'center',
        alignItems: 'center'
    },

    img: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    containerLogin: {
        height: '33%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txt: {
        color: cores.blue,
        fontSize: 14

    },
    forgotSty: {
        alignSelf: 'flex-end',
        marginRight: '5%',
        textDecorationLine: 'underline'
    },
    customBtn: {
        width: 370,
        height: 50
    },
    containerDown: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    touch: {
        width: 370,
        height: 50,
        bottom: '20%',
        borderWidth: 1,
        borderColor: cores.blue,
        alignItems: 'center',
        justifyContent: 'center'
    }

})