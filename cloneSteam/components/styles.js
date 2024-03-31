import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    
    container: {
        flex:1,
        justifyContent: 'top',
        alignItems: 'center',
        backgroundColor:'#2b2b35'

    },
    login__signin: {
        marginTop:30,
        marginBottom: 30,
        fontSize: 40,
        fontFamily:'Arial',
        color: "white",
        
    },
    login__msg: (text = 'none') => ({
        fontWeight: "bold",
        fontSize: 22,
        color: "red",
        display: text
    }),
    login__form: {
        width: "80%",
    },
    login__form__txt:{
        fontSize: 14,
        color: "white",
        fontFamily:'Arial',
    },

    login__input: {
        backgroundColor: "#1f1f27",
        fontSize: 19,
        padding: 10,
        alignSelf: 'center',
        marginBottom: 30,
        marginTop:10,
        borderRadius: 5,
        width: 300
    },
    login__button: {
        padding: 12,
        backgroundColor: "#216caf",
        alignSelf: "center",
        borderRadius: 5,
        padding: 10,
        width: 300
    },
    login__buttonText: {
        fontSize: 22,
        color: "white",
        alignSelf: 'center',
        fontFamily:'Arial',
    },
    login__help:{
        fontSize: 14,
        color: "white",
        fontFamily:'Arial',
        alignSelf: 'center',
    },
    login__helpText1:{
        marginTop: 15,
        fontSize: 16,
        color: "#707175",
        fontFamily:'Arial',
        alignSelf: 'center',
        textDecorationLine: 'underline'

    },
    login__helpText2:{
        marginTop: 45,
        fontSize: 20,
        color: "white",
        fontFamily:'Arial',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    },
    login__txt__descript:{
        marginTop: 20,
        fontSize: 14,
        color: "#707175",
        fontFamily:'Arial',
        alignSelf: 'center',
    },
    login__helpText3:{
        marginTop: 15,
        fontSize: 14,
        color:'#707175',
        fontFamily:'Arial',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    }
});
export default styles; 