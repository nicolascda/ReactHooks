import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState} from 'react';

export default function App() {
  const [name, setName] = useState("Josesvaldo☃🗡")
  const [number, setNumber] = useState(1)

  const changeNumber = () => {
    // setNumber( number + 1)
    // setNumber( number + 1)
    setNumber((prevNumber) => prevNumber + 1)    
    setNumber((prevNumber) => prevNumber * 2)
    setNumber((prevNumber) => prevNumber / 3)
  }

  return (
    <View style={styles.container}>
      <Text>Meu nome é {name}</Text>

      <TextInput
       onChangeText={setName}
       value={name}
       style = {styles.input}
      />

      <Text>O nϋmero é {number}</Text>
      <Button
       onPress={changeNumber}
       title='Do never press me'
       color='#841555'
      />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
