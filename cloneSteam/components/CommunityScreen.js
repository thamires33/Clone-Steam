import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ComunityScreen = () => {
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
          <Text style={styles.headerTextRegular}>Comunidade </Text>
          <Text style={styles.headerTextBold}>Steam</Text>
        </View>
        <Text style={styles.description}>
          Comunidades e conteúdos oficiais para todos os jogos e softwares da Steam
        </Text>
        <ScrollView horizontal style={styles.bottomMenu1}>
        <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação do botão aqui */ }}>
          <Image
            source={require('../assets/community/search.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button1} onPress={() => { /* Adicione a ação do botão aqui */ }}>
          <Text style={styles.buttonText}>Tudo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação do botão aqui */ }}>
          <Text style={styles.buttonText}>Capturas de tela</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação do botão aqui */ }}>
          <Text style={styles.buttonText}>Art</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { /* Adicione a ação do botão aqui */ }}>
          <Text style={styles.buttonText}>Workshop</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
      
        {/* Estrutura do feed */}
        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/community/perfil.png')}
              style={styles.profileImage}
            />
            <Text style={styles.username}>Eurogamer</Text>
          </View>
          <Image
            source={require('../assets/community/peixe.png')}
            style={styles.postImage}
          />
          <Text style={styles.PostTextBold}>Florida tourist attraction sues Fortnite, seeks removal of in-game castle</Text>
          <Text style={styles.postDescription}>
            Coral Castle Museum, a tourist attraction near Miami, is suing Fortnite maker Epic Games for trademark infringement and unfair competition.
          </Text>
          <View style={styles.postButtonContainer}>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/like.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/comments.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonRight} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/share.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/community/perfil3.png')}
              style={styles.profileImage}
            />
            <Text style={styles.username}>Adrenaline</Text>
          </View>
          <Image
            source={require('../assets/community/gtavi.png')}
            style={styles.postImage}
          />
          <Text style={styles.PostTextBold}>Rumors about GTA 6 being postponed are exaggerated, says Bloomberg</Text>
          <Text style={styles.postDescription}>
          According to the publication, there is too much time left until the release of GTA 6 to be able to talk about it
          </Text>
          <View style={styles.postButtonContainer}>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/like.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/comments.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonRight} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/share.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/community/perfil3.png')}
              style={styles.profileImage}
            />
            <Text style={styles.username}>Adrenaline</Text>
          </View>
          <Image
            source={require('../assets/community/ps5.png')}
            style={styles.postImage}
          />
          <Text style={styles.PostTextBold}>Requirements to obtain the PS5 Pro Enhanced seal are revealed</Text>
          <Text style={styles.postDescription}>
          The PS5 Pro Enhanced seal will indicate games that take advantage of the power of the new PlayStation 5 Pro; check details
          </Text>
          <View style={styles.postButtonContainer}>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/like.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/comments.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonRight} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/share.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/community/perfil2.png')}
              style={styles.profileImage}
            />
            <Text style={styles.username}>Mkt8master</Text>
          </View>
          <Image
            source={require('../assets/community/mkt8.png')}
            style={styles.postImage}
          />
          <Text style={styles.PostTextBold}>The worst player in the world</Text>
          <Text style={styles.postDescription}>
          I know a guy who is horrible at Mario Kart and he insists on challenging me, how do I tell him that Stevie Wonder drives better without hurting him?
          </Text>
          <View style={styles.postButtonContainer}>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/like.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/comments.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonRight} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/share.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.username}></Text>
          </View>
          <Text style={styles.PostTextBold}></Text>
          <Text style={styles.postDescription}>
          </Text>
          <View style={styles.postButtonContainer}>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/like.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonLeft} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/comments.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButtonRight} onPress={() => { /* Adicione a ação do botão aqui */ }}>
              <Image
                source={require('../assets/community/share.png')}
                style={styles.postButtonImage}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Mais posts aqui */}

      </ScrollView>
      
      {/* Menu de navegação não funcionou como deveria*/}
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
 <TouchableOpacity style={styles.bottomMenuItem} onPress={() => navigation.navigate('Jogos')}>
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
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#1C202C',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
    flexWrap: 'wrap',
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Alinhar imagem e texto verticalmente
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
  description: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'left',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
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
  buttonImage: {
    width: 20,
    height: 20,
  },
  scrollView: {
    flex: 1,
    paddingTop: 10, //teste 
    backgroundColor: '#171A24',
    
  },
  postContainer: {
    backgroundColor: '#1C202C',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  postImage: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
  PostTextBold: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  postDescription: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'left',
    marginBottom: 10,
  },

  postButtonContainer: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
  },
  postButtonLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C202C',
    padding: 10,
    borderRadius: 5,
  },
  postButtonRight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1C202C',
    padding: 10,
    borderRadius: 5,
  },
  postButtonImage: {
    width: 20,
    height: 20,
    marginRight: 5,
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

export default ComunityScreen;
