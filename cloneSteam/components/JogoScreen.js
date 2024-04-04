import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const dadosJogos = [
    
    { nome: 'Chrono Trigger', preco: 'R$ 23,94', genero: 'Aventura', urlImagem: 'assets\jogos\Chrono Trigger.jpg' },
    { nome: 'The Witcher III', preco: 'R$ 48,52', genero: 'Aventura', urlImagem: 'assets\jogos\The Witcher III.jpg' },
    { nome: 'Divinity Original Sin II', preco: 'R$ 109,87', genero: 'RPG', urlImagem: 'assets\jogos\Divinity Original Sin II.jpg' },
    { nome: 'Mario Kart 8', preco: 'R$ 199,99', genero: 'Corrida', urlImagem: 'assets\jogos\Mario Kart 8.jpg' },
    { nome: 'Undertale', preco: 'R$ 16,50', genero: 'RPG', urlImagem: 'assets\jogos\Undertale.jpg' },
    { nome: 'CS GO 2', preco: 'Gratuito', genero: 'FPS', urlImagem: 'assets\jogos\CS GO 2.jpg' },
    { nome: 'Hades', preco: 'R$ 36,24', genero: 'Roguelike', urlImagem: 'assets\jogos\Hades.jpg' },
    { nome: 'GTA V', preco: 'R$ 89,48', genero: 'Ação', urlImagem: 'assets\jogos\GTA V.jpg' },
    { nome: 'Celeste', preco: 'R$ 18,35', genero: 'Indie', urlImagem: 'assets\jogos\Celeste.jpg' },
    { nome: 'Elden Ring', preco: 'R$ 168,05', genero: 'Aventura', urlImagem: 'assets\jogos\Elden Ring.jpg' },
    { nome: 'Gran Turismo 7', preco: 'R$ 184,68', genero: 'Corrida', urlImagem: 'assets\jogos\Gran Turismo 7.jpg' },
    { nome: 'Civilization VI', preco: 'R$ 135,84', genero: 'Estratégia', urlImagem: 'assets\jogos\Civilization VI.jpg' },
    { nome: 'Path of Exile', preco: 'Gratuito', genero: 'MMO', urlImagem: 'assets\jogos\Path of Exile.jpg' },
    { nome: 'Hollow Knight', preco: 'R$ 32,95', genero: 'Gênero 2', urlImagem: 'assets\jogos\Hollow Knight.jpg' },
    { nome: 'Phasmophobia', preco: 'R$ 7,88', genero: 'Gênero 2', urlImagem: 'assets\jogos\Phasmophobia.jpg' },
    { nome: 'Euro Truck Simulator 2', preco: 'R$ 62,94', genero: 'Simulação', urlImagem: 'assets\jogos\Euro Truck Simulator.jpg' },
    { nome: 'SuperMarket Simulator', preco: 'R$ 29,74', genero: 'Simulação', urlImagem: 'assets\jogos\SuperMarket Simulator.jpg' },
];

const JogoScreen = () => {
    const navigation = useNavigation();
    return (
        dadosJogos.map((data, index) => (
            <View key={index} style={styles.areaJogo}>
                <Image
                    style={styles.imagemJogo}
                    source={{uri: data.urlImagem}}
                />
                <Text style={styles.textoJogo}>Nome: {data.nome}</Text>
                <Text style={styles.textoJogo}>Preço: {data.preco}</Text>
                <Text style={styles.textoJogo}>Gênero: {data.genero}</Text>
            </View>
        ))
    );
};


const styles = StyleSheet.create({
    areaJogo: {
        flexDirection: 'row',
        backgroundColor: '#222',
        height: 150,
        marginBottom: 25,
        padding: 15,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    textoJogo: {
        color: '#FFF',
    },
    imagemJogo: {
        width: 216,
        height: 121,
    },
});

export default JogoScreen;