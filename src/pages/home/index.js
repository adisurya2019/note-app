import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { signOut } from '../../controller/loginController'
import Axios from 'axios'
import { data } from 'browserslist'
import { not } from 'react-native-reanimated'



const home = ({ navigation }) => {
    const selectItem = (notes) => {
        console.log('selected item: ', notes);
    }
    const deleteNote = (notes) => {
        console.log(notes);
        Axios.delete(`http://192.168.43.242:8081/notes/${notes.id}`)
            .then(res => {
                console.log('res delete: ', res);
                getData();
            })
    }
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
            getData();
        }, 200);
    }
    const Notes = ({ title, deskripsi, onPress, onDelete }) => {
        return (
            <View>
                <View>
                    <View style={styles.card}>
                        <TouchableOpacity onPress={onPress}>
                            <View>
                                <Text style={styles.teksCardJudul}>{title}</Text>
                                <Text style={styles.teksCard}>{deskripsi}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onDelete}>
                            <Text style={{ textAlign: 'center', marginTop: 35, color: 'red', fontWeight: 'bold' }}>DELETE</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        Axios.get('http://192.168.43.242:8081/notes', data)
            .then(res => {
                console.log('res get data: ', res)
                setNotes(res.data);
            })
    }

    const [notes, setNotes] = useState([]);

    return (
        <View style={styles.background}>
            <View >
                <Text style={styles.teks}>CATATAN</Text>
            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                {notes.map(note => {
                    return <Notes
                        key={note.id}
                        title={note.title}
                        deskripsi={note.deskripsi}
                        onPress={() => selectItem(note)}
                        onDelete={() => deleteNote(note)}
                    />
                })}

            </ScrollView >

            <View style={{ marginBottom: 10, padding: 0 }}>
                <TouchableOpacity onPress={() => navigation.navigate("ADD")}>
                    <View style={styles.luar}>
                        <Text style={styles.dalam}>
                            +
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default home

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },
    teks: {
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black'
    },
    luar: {
        padding: 15,
        borderRadius: 60,
        fontWeight: 'bold',
        backgroundColor: 'black',
        marginHorizontal: 170
    },
    dalam: {
        fontSize: 30,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 11
    },
    card: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#000',
        margin: 10,

    },
    teksCardJudul: {
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold'
    },
    teksCard: {
        textAlign: 'center',
        fontSize: 14,
    }
});

