import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
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
            <Text style={styles.headerTextRegular}>Chat </Text>
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

        <View style={styles.tabBar}>
          <View style={styles.tabItem}>
            <Text style={styles.tabText}>Conversas Abertas</Text>
          </View>
          <View style={[styles.tabItem, { backgroundColor: "#303649" }]}>
            <Text style={[styles.tabText, { color: '#566273' }]}>Meus Amigos</Text>
          </View>
        </View>

        {/* Lista de chats */}
        <View style={styles.chatList}>
          {/* Cada item do chat */}
          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p1.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Mark Dyson</Text>
              <Text style={styles.chatMessage}>Já tô começando  • 14 Jun</Text>
            </View>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p2.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Mark Dyson</Text>
              <Text style={styles.chatMessage}>Você: flwss mano  • 14 Jun</Text>
            </View>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p3.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Ruster Xoomer</Text>
              <Text style={styles.chatMessage}>Você: Ok  • 14 Jun</Text>
            </View>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p4.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>森派</Text>
              <Text style={styles.chatMessage}>Погнали в контру!  • 12 Jun</Text>
            </View>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p5.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Player</Text>
              <Text style={styles.chatMessage}>Eae man! • 12 Jun</Text>
            </View>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p6.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>DENTIK</Text>
              <Text style={styles.chatMessage}>Você: Boora, começa esse jog… • 11 Jun</Text>
            </View>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p7.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Jägermeister</Text>
              <Text style={styles.chatMessage}>Não. • 9 Jun</Text>
            </View>
          </View>

          <View style={styles.chatItem}>
            <Image
              source={require('../assets/chat/p8.png')}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>💎ϟ∑χρŗêssσϟ#=_-#</Text>
              <Text style={styles.chatMessage}>Ok • 5 Jun</Text>
            </View>
          </View>
          
          <View style={{ height: 100 }}> 
          </View>

        </View>

        <StatusBar style="auto" />

      </ScrollView>
      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate('Login')}>
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
  chatList: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  chatInfo: {
    justifyContent: 'space-evenly',
  },
  chatName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
  },
  chatMessage: {
    color: '#7b8d9d',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 5,
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
  bottomMenuImage: {
    width: 20,
    height: 22,
  },
});
export default ChatScreen;