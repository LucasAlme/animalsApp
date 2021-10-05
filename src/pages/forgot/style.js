import { StyleSheet } from 'react-native';
import { cores } from '../../utils/Constants';

export default styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: cores.branco,
        justifyContent: 'space-between',
        
    },
    txtTitle: {
        fontSize: 18,
        color: cores.blue,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginTop: '5%'
    },
    txt: {
        fontSize: 14,
        color: cores.cinzaEscuro,
        marginBottom: 10,
        marginTop: 5,
        marginRight: '17%'
    },
    container: {
        height: '85%',
        alignItems: 'center',
        
    },
    btn:{
        width: '90%',
        height: 50,
        marginTop: '5%'
    }

})