import React, {useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const  SignupScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
        <Spacer>
        <Text h3>Sign Up For Tracker</Text>
        </Spacer>
        <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
        <Spacer /> 
        <Input label="Password" secureTextEntry value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} /> 
        <Spacer /> 
        <Spacer>
        <Button title="Sign Up" />
        </Spacer>
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
  container: {  
     flex: 1,
     justifyContent: "center",
     marginBottom: 200
 }
})

export default SignupScreen;