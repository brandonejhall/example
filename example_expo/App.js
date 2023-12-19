import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.note_container}>
        <View>
        <Text>3 October 2023</Text>
        <Text>A Heartfelt Day: Celebrating My Sister's 18th Birthday</Text>
        </View>
                <View style={styles.last_container} >
        <Text>
            Mood
          </Text>
          <View style={styles.mood_container}>
            <Text>Awesome</Text>
          </View>
        </View>
      </View>
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
  note_container:{
    width: '95%',
    height: '15%',
    backgroundColor:'#FCB39C',
    borderRadius: '5%',
    justifyContent:'space-evenly',
  },
  mood_container:{
    
    width: '30%',
    height: '60%',
    backgroundColor:"#FFFFFF",
    borderRadius:'5%'
  },
  last_container:{
    flex:1,
    flexDirection:'row',
    marginTop:'15%',
  }

});
