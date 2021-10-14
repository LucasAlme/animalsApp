import { StyleSheet } from 'react-native';
import { cores } from '../../utils/Constants';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: cores.branco,

    },
    header: {
        width: "100%",
        height: 60,
        backgroundColor: cores.yellow,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    inputSty: {
        width: '80%',
        height: 50,
        backgroundColor: cores.branco,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    vAvatar: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        paddingVertical: 10
    },
    txt: {
        color: cores.cinza,
        alignSelf: 'center'
    },
    imgStyle: {
        width: 450,
        height: 320,
        marginLeft: 20,
        position: 'absolute',
    }

})