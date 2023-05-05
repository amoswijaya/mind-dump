import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>inih amos!</Text>
      <Image
          style={{width: 100, height: 200}}
          source={{uri: 'https://media1.giphy.com/media/1r91ZwKcE2J7WhUqrh/giphy.gif?cid=e32173ca11zv4y04vhtqelb28u0rzrnads5tl659p6r2tg59&ep=v1_gifs_search&rid=giphy.gif&ct=g'}} /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
