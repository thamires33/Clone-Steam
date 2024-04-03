import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChatScreen = () => {
  const navigation = useNavigation();

  return (

    <View style={styles.container}>

      <View style={{ height: 65, backgroundColor: '#1c202c', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px', marginLeft: '20px', marginRight: '20px' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/logoSteam.png')}
            style={{ width: 30, height: 30, borderRadius: '15px', alignItems: 'baseline' }}
            resizeMode="contain"
          />
          <Text style={{ color: '#fff', fontSize: '22px' }}>Chat </Text>
          <Text style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold' }}>Steam</Text>
        </View>
        <Image
          source={require('../assets/search.png')}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />



      </View>


      <View style={{ backgroundColor: '#303649', borderRadius: '8px', height: '35px', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '2px', marginLeft: '20px', marginRight: '20px' }}>
        <View style={{ backgroundColor: "#1c202c", height: '30px', borderRadius: '8px', alignItems: 'center', width: '50%', justifyContent: 'center' }}>
          <Text style={{ color: '#fff' }}>Conversas Abertas</Text>
        </View>

        <View style={{ backgroundColor: "#303649", height: '30px', borderRadius: '8px', alignItems: 'center', width: '50%', justifyContent: 'center' }}>
          <Text style={{ color: '#566273' }}>Meus Amigos</Text>
        </View>
      </View>



      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p1.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>Mark Dyson</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Ja tô começando</Text>
        </View>
      </View>

      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p2.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>Mark Dyson</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Ja tô começando</Text>
        </View>
      </View>

      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p3.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>Ruster Xoomer</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Ja tô começando</Text>
        </View>
      </View>

      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p4.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>Xing Ling</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Ja tô começando</Text>
        </View>
      </View>

      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p5.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>PLayer</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Eae an!</Text>
        </View>
      </View>

      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p6.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>DENTIK</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Ja tô começando</Text>
        </View>
      </View>

      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p7.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>Jägermeister</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Não</Text>
        </View>
      </View>

      <View style={{ marginLeft: '20px', marginTop: '20px', flexDirection: 'row' }}>
        <Image
          source={require('../assets/chat/p8.png')}
          style={{ width: 60, height: 60, borderRadius: '30px', alignItems: 'baseline' }}
          resizeMode="contain"
        />
        <View style={{ justifyContent: 'space-evenly' }}>
          <Text style={{ color: '#fff', marginLeft: '5px', fontSize: '18px', fontWeight: '600' }}>Expresso #=_-#</Text>
          <Text style={{ color: '#7b8d9d', marginLeft: '5px', fontSize: '13px', fontWeight: '600' }}>Ok</Text>
        </View>
      </View>

     


      <StatusBar style="auto" />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c202c'

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
export default ChatScreen;