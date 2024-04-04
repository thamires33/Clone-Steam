import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const imageWidth = windowWidth * 0.9; // Definindo a largura da imagem como 70% da largura da tela
const imageHeight = 200; // Definindo a altura da imagem
const imageBorderRadius = 20; // Raio de arredondamento das bordas da imagem
const slideMargin = 15; // Margem entre os slides
const ShopScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Image
                            source={require('../assets/community/steam.png')}
                            style={styles.logoImage}
                        />
                        <Text style={styles.headerTextRegular}>Loja </Text>
                        <Text style={styles.headerTextBold}>Steam</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <Image
                            source={require('../assets/search.png')}
                            style={styles.searchIcon}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>

                </View>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.slide}>
                        <Image source={require('../assets/jogos/Celeste.jpg')} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../assets/jogos/ChronoTrigger.jpg')} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
                    </View>
                    <View style={styles.slide}>
                        <Image source={require('../assets/jogos/CitiesSkyline.jpg')} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
                    </View>
                    {/* Adicione mais slides conforme necessário */}
                </ScrollView>

                <ScrollView horizontal style={styles.bottomMenu1}>
                    <TouchableOpacity style={styles.button1} onPress={() => { /* Adicione a ação do botão aqui */ }}>
                        <Text style={styles.buttonText}>Mais vendidos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação do botão aqui */ }}>
                        <Text style={styles.buttonText}>Grátis para jogar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação do botão aqui */ }}>
                        <Text style={styles.buttonText}>Antecipado</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação do botão aqui */ }}>
                        <Text style={styles.buttonText}>Recomendados</Text>
                    </TouchableOpacity>

                </ScrollView>

                <View style={styles.gameList}>
                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/GTAV.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Grand Theft Auto V</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/CivilizationVI.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Civilization VI</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/CSGO2.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>CSGO 2</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/DivinityOriginalSin2.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Divinity Original Sin 2</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/EldenRing.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Elden Ring</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/EuroTruckSimulator2.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Euro Truck Simulator 2</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/GranTurismo7.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Gran Turismo 7</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/Hades.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Hades</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/HollowKnight.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Hollow Knight</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/MarioKart8.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Mario Kart 8</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/Overcooked2.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Overcooked 2</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/PathofExile.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Path of Exile</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/Phasmophobia.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Phasmophobia</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/SuperMarketSimulator.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Super Market Simulator</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/TheWitcherIII.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>The Witcher III</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/Undertale.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Undertale</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={styles.gameItem}>
                        <Image
                            source={require('../assets/jogos/VampireSurvivors.jpg')}
                            style={styles.gameImage}
                            resizeMode="contain"
                        />
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameName}>Vampire Survivors</Text>
                            <Text style={styles.gameMessage}>Windows</Text>
                        </View>
                    </View>

                    <View style={{ height: 100 }}>
                    </View>

                </View>

            </ScrollView>
            <View style={styles.bottomMenu}>
                <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate('Safety')}>
                    <Image
                        source={require('../assets/community/shield.png')}
                        style={styles.bottomMenuImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate('Community')}>
                    <Image
                        source={require('../assets/community/community.png')}
                        style={styles.bottomMenuImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate('Chat')}>
                    <Image
                        source={require('../assets/community/message.png')}
                        style={styles.bottomMenuImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate('Shop')}>
                    <Image
                        source={require('../assets/community/shop.png')}
                        style={styles.bottomMenuImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require('../assets/community/profile.png')}
                        style={styles.bottomMenuImage}
                    />
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C202C',
    },
    gameList: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    gameItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },
    gameImage: {
        width: 80,
        height: 60,
        borderRadius: 20,
    },
    gameInfo: {
        justifyContent: 'space-evenly',
    },
    gameName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 5,
    },
    gameMessage: {
        color: '#7b8d9d',
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 5,
    },
    scrollViewContent: {
        paddingHorizontal: slideMargin / 2, // Adicionando um pequeno espaçamento horizontal entre os slides
    },
    slide: {
        marginHorizontal: slideMargin / 2, // Adicionando um pequeno espaçamento horizontal entre os slides
        borderRadius: imageBorderRadius, // Arredondando as bordas do contêiner do slide
        overflow: 'hidden', // Garantindo que a imagem seja cortada corretamente pelas bordas arredondadas
    },
    image: {
        resizeMode: 'cover',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#1C202C',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        flexDirection: 'row',
        maxWidth: '100%',
        flexWrap: 'wrap',
    },
    headerTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 30,
        height: 30,
        marginRight: 5,
        marginLeft: 10,
    },
    headerTextRegular: {
        fontSize: 32,
        color: '#ffffff',
    },
    headerTextBold: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        paddingTop: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
    },
    button: {
        backgroundColor: '#303649',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        height: 40, //altura botão
    },
    button1: {//migué
        backgroundColor: '#31BCFC',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        height: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    scrollView: {
        flex: 1,
        paddingTop: 10, //teste 
        backgroundColor: '#171A24',

    },
    bottomMenu1:{
        paddingTop: 30,
    },
    bottomMenu: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#12141C', // Cor de fundo do menu
        paddingVertical: 25,
    },
    bottomMenuItem: {

    },
    bottomMenuImage: {
        width: 20,
        height: 22,
    },

});

export default ShopScreen;