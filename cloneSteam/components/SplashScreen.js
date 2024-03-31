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
            backgroundColor: '#292c35'
        }}>
            <Image
                source={require('../assets/logo-branco.png')}
                style={{ width: 220, height: 200, marginBottom: 20 }} 
                resizeMode="contain"
            />
            <Text style={{
                color: "white", fontSize: 100, fontFamily:'Arial',
                fontWeight: 'bold', fontStyle: 'italic'
            }}>STEAM</Text>
        </View>
    );
};
export default SplashScreen; 