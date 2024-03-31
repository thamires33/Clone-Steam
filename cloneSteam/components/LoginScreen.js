import React, {useState} from 'react'; 
import { View, Text, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, ImageBackground, } 
from 'react-native'; 
import css from './styles'; 
 
const LoginScreen = () => { 
     
    const [display, setDisplay]=useState('none'); 
 
    return ( 
        <KeyboardAvoidingView style={[css.container, css.darkbg]}> 
                <Text
                style={css.login__signin}>SIGN IN</Text>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text> 
            
            <View style={css.login__form}> 
                <Text style={css.login__form__txt}> STEAM ACCOUNT NAME</Text>
                <TextInput style={css.login__input} placeholder='Usuário:' /> 
                <Text style={css.login__form__txt}> PASSWORD</Text>
                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true} /> 
                <TouchableOpacity style={css.login__button} onPress={() => setDisplay('flex')}> 
                    <Text style={css.login__buttonText}>Sign in</Text> 
                </TouchableOpacity> 
                <TouchableOpacity style={css.login__help} onPress={() => setDisplay('flex')}>
                    <Text style={css.login__helpText1}> I need help signing in </Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.login__help} onPress={() => setDisplay('flex')}>
                    <Text style={css.login__helpText2}> Don't have a Steam account? </Text>
                </TouchableOpacity>
                <Text style={css.login__txt__descript}> It's free and easy. Discover thoudands of PC games to 
                play with millions of new friends.</Text>
                <TouchableOpacity style={css.login__help} onPress={() => setDisplay('flex')}>
                    <Text style={css.login__helpText3}> Learn more about Steam </Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView> 
    ); 
}; 
 
export default LoginScreen; 