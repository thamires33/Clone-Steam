import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SafetyScreen = () => {
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
                        <Text style={styles.headerTextRegular}>Safety </Text>
                        <Text style={styles.headerTextBold}>Steam</Text>
                    </View>
                </View>
                <View style={styles.tabBar}>
                    <View style={styles.tabItem}>
                        <Text style={styles.tabText}>Steam Guard</Text>
                    </View>
                    <View style={[styles.tabItem, { backgroundColor: "#303649" }]}>
                        <Text style={[styles.tabText, { color: '#566273' }]}>Confirmations</Text>
                    </View>
                </View>

                <View style={styles.container2}>
                    <Image source={require('../assets/safety.png')} style={styles.image2} />
                    <Text style={styles.text2}>N5KCV</Text>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomText}>You’ll enter your code each time you enter your
                        password to sign in to your Steam account.</Text>
                    <Text style={[styles.bottomText, styles.blueText]}>Tip: If you don't share your PC, you can select "Remember my password" when you sign in to the PC client to enter your password and authenticator code less often.</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Remove Authenticator</Text>
                    </TouchableOpacity>
                    <View style={styles.separator}></View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>My Recovery Code</Text>
                    </TouchableOpacity>
                    <View style={styles.separator}></View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Help</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }}>
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
        backgroundColor: '#1c202c'
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

    tabBar: {
        backgroundColor: '#303649',
        borderRadius: 8,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    tabItem: {
        backgroundColor: "#1c202c",
        height: 30,
        borderRadius: 8,
        alignItems: 'center',
        width: '50%',
        justifyContent: 'center',
    },
    tabText: {
        color: '#fff',
    },

    container2: {
        paddingTop: 20,
        width: '100%',
        height: 200, // Altura definida da View
        alignItems: 'center', // Centralizar conteúdo na horizontal
        justifyContent: 'center', // Centralizar conteúdo na vertical
    },
    image2: {
        width: '100%', // Largura ocupando 100% da largura da View
        height: '100%', // Altura ocupando 100% da altura da View
        resizeMode: 'cover', // Redimensionar a imagem para cobrir toda a área
    },
    text2: {
        position: 'absolute', // Posicionar o texto em relação à View pai
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },

    bottomContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
        flexWrap: 'wrap',

    },
    bottomText: {
        fontSize: 14,
        marginRight: 10,
        color: 'white',
    },
    blueText: {
        color: '#2FB4F1',
        paddingTop: 10,
    },

    buttonContainer: {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginTop: 10,
        borderColor: '#1c202c',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#202532',
    },
    button: {
        padding: 10,
        alignItems: 'left',
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
    },
    separator: {
        height: 1,
        backgroundColor: '#1c202c',
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
export default SafetyScreen