import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { cores } from '../../utils/Constants';
export default StyleSheet.create({
    content: {
        height:50,
        borderRadius: 10,
        width: "100%",
        backgroundColor: cores.branco,
        
        paddingLeft: 10,
        alignSelf: "center",
        borderRadius: 5,
        borderWidth:1,
        borderColor:cores.cinzaEscuro
    },
    txtPicker: {
        color: cores.cinza,
        top: "10%",
        fontSize: 15,
    },
    boxPicker: {
        bottom: "23%",
        height: 10,
        width: 50,
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "center"
    },
    fieldPicker: {
        justifyContent: "center",
        height: 50,
        width: "100%",
        
    },
    iconPicker: { width: 23, height: 14 },
    txtOptions: {
        
        color: cores.cinzaEscuro,
        alignSelf:"center"
    },
    containerOption:{
        borderBottomWidth:1,
        padding:10,
        width:'100%',
        justifyContent:"center",
        alignItems:"center",
        borderColor:cores.cinza
    },
    containerHeader:{
        height:40,
        justifyContent:"center",
        borderBottomWidth:1,
        borderColor:cores.blue
    },
    txtHeader:{
        marginLeft:5,
        color:cores.blue,
    }
});