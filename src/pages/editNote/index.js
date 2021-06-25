import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

export default function editNote ({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.textInputView}>
                <TextInput style={styles.textInput}
                placeholder="Enter Title"
                placeholderTextColor={'black'}
                />
            </View>
            <View style={styles.textInputView}>
                <TextInput style={styles.textInput2}
                placeholder="Enter Description"
                placeholderTextColor={'black'}
                />
            </View>
            <View>
                <TouchableOpacity style={styles.loginView} onPress={() => navigation.navigate("home")}>
                    <Text style={styles.textForInput}>EDIT</Text>
                    </TouchableOpacity>
                    
            </View>
            <View>
            <TouchableOpacity style={styles.loginView2} onPress={() => navigation.navigate("home")}>
                    <Text style={styles.textForInput}>HAPUS</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      
      backgroundColor: 'white'
    },
    judul: {
      marginTop: 170,
      marginBottom: 100,
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black'
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    textInputView: {
      
      color: '#000'
    },
    textInput: {
      width: 390,
      height: 50,
      borderWidth: 2,
      borderRadius: 15,
      borderColor: '#777',
      margin: 10,
      textAlign: 'center'
    },
    textInput2: {
        width: 390,
        height: 400,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#777',
        margin: 10,
        textAlign: 'center'
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
      backgroundColor: 'black',
      width: 350,
      height: 55,
      borderWidth: 3,
      borderRadius: 15,
      alignSelf: 'center',
      marginTop: 50
    },
    loginView2: {
        margin: 10,
        backgroundColor: 'black',
        width: 350,
        height: 55,
        borderWidth: 3,
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 10
      },
    textHeadlineTwo: {
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: "700",
      margin: 10,
      color: "white",
    },
  })