import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { login, subscribeToAuth } from '../../controller/loginController'


export default function Login({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const nosePressed = () => {
    login(email, password, loginComplete)
  }

  const loginComplete = () => {
    navigation.navigate("home")
  }

  

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.background}>
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 50}}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.judul}>NOTE APP</Text>
          </View>
          <View style={styles.inputView}>
            <View style={styles.textInputView}>
              
              <TextInput style={styles.textInput}
                placeholder="Enter Email"
                placeholderTextColor={'white'}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.textInputView}>
              
              <TextInput style={styles.textInput}
                placeholder="Enter password"
                placeholderTextColor={'white'}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
              <View style={{marginTop: 160}}>
              <TouchableOpacity onPress={nosePressed}>
                <View style={styles.loginView}>
                  <Text style={styles.textHeadlineTwo}>login</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <View style={styles.loginView}>
                  <Text style={styles.textHeadlineTwo}>register</Text>
                </View>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        
    </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E1A3C'
  },
  judul: {

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
  logo: {
    height: 100,
    width: 100
  },
})