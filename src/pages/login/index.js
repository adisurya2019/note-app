import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { logo } from '../../assets'
import { login, subscribeToAuth } from '../../controller/loginController'
import { blackish, orangeish } from '../../color/Color'
import { color } from 'react-native-reanimated';
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
          
          <Text style={styles.judul}>DESSERT CAMP</Text>

          <Text style={styles.textHeadline}>Login</Text>
          <View style={styles.inputView}>
            <View style={styles.textInputView}>
              
              <TextInput style={styles.textInput}
                placeholder="Enter Email"
                placeholderTextColor={blackish}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={styles.textInputView}>
              
              <TextInput style={styles.textInput}
                placeholder="Enter password"
                placeholderTextColor={blackish}
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
              <View style={styles.twoside}>
              <TouchableOpacity onPress={nosePressed}>
                <View style={styles.loginView}>
                  <Text style={styles.textHeadlineTwo}>SignIn</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <View style={styles.loginView}>
                  <Text style={styles.textHeadlineTwo}>Register</Text>
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
    justifyContent: 'center',
    backgroundColor: '#ffc2b4'

  },
  logo: {
    marginTop: 50,
    height: 200,
    width: 200
  },
  judul: {
    marginTop: 10,
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffc2b4',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textInputView: {
    
    color: '#000'
  },
  textInput: {
    width: 300,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: '#000',
    margin: 10,
    textAlign: 'center'
  },
  textForInput: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: "600",
    color: '#777'
  },
  textHeadline: {
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: "700",
    margin: 10
  },
  loginView: {
    margin: 10,
    backgroundColor: blackish,
    width: 100,
    height: 55,
    borderWidth: 3,
    borderRadius: 25,
    alignSelf: 'center'
  },
  textHeadlineTwo: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: "700",
    margin: 10,
    color: "white",
  },
  twoside:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // flex : 0.2,
    width: "100%",

  },
  footer: {
    // flex : 0.2,
    width: "100%"
  }
})
