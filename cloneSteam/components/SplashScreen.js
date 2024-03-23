import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simule um tempo de carregamento 
        const timer = setTimeout(() => {
            navigation.replace('Login');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigation]);
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
        }}>
            <Image
                source={require('../assets/steam-logo-steam-icon.png')}
                style={{ width: 110, height: 100, marginBottom: 20 }}
                resizeMode="contain"
            />
            <Text style={{
                color: "#ff0000", fontSize: 40, fontFamily: 'Brush Script MT',
                fontWeight: 'bold', fontStyle: 'italic'
            }}>Tela Steam</Text>
        </View>
    );
};
export default SplashScreen; 