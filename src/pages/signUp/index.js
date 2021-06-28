import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { blackish, orangeish } from '../../color/Color'
import { signUp } from '../../controller/loginController'

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const nosePressed = () => {
        signUp(email, password, signUpComplete)
    }

    const signUpComplete = () => {
        navigation.navigate("home")
    }

    return (
        <View style={styles.container}>
            <ScrollView
                enableOnAndroid={true}
                scrollEnabled={true}
                enableAutomaticScroll={true}
                contentContainerStyle={{ paddingTop: 10 }}
            >
                <View style={styles.background}>
                    <Text style={styles.judul}>REGISTER YOURSELF</Text>
                    
                    <View style={styles.inputView}>
                        <View style={styles.textInputView}>

                            <TextInput style={styles.textInput}
                                placeholder="Enter new Email"
                                placeholderTextColor={'white'}
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                            />
                        </View>
                        <View style={styles.textInputView}>

                            <TextInput style={styles.textInput}
                                placeholder="Enter new password"
                                placeholderTextColor={'white'}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                            />
                             <TextInput style={styles.textInput}
                                placeholder="Confirm new password"
                                placeholderTextColor={'white'}
                                secureTextEntry={true}
                            />
                            <View style={{marginTop: 90}}>
                                <TouchableOpacity onPress={nosePressed}>
                                    <View style={styles.loginView}>
                                        <Text style={styles.textHeadlineTwo}>register</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <View style={styles.loginView}>
                                        <Text style={styles.textHeadlineTwo}>back</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#1E1A3C'
  },
  judul: {
    marginTop: 170,
    marginBottom: 100,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInputView: {

    color: '#000'
  },
  textInput: {
    width: 390,
    height: 50,
    borderWidth: 0,
    borderRadius: 15,
    borderColor: '#777',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#3E3364'
  },
  textInput2: {
    width: 390,
    height: 400,
    borderWidth: 0,
    borderRadius: 15,
    borderColor: '#777',
    margin: 10,
    textAlign: 'center',
    backgroundColor: '#3E3364'
  },
  textForInput: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: "600",
    textAlign: 'center',
    color: 'white',
    marginTop: 10
  },
  textHeadline: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: "700",
    margin: 10
  },
  loginView: {
    margin: 10,
    backgroundColor: '#3E3364',
    width: 350,
    height: 55,
    borderWidth: 0,
    borderRadius: 15,
    alignSelf: 'center',
  },
  textHeadlineTwo: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: "700",
    margin: 10,
    color: "white",
  },
})