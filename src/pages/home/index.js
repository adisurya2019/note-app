import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import Axios from 'axios'
import { data } from 'browserslist'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'



const home = ({ navigation }) => {
    const selectItem = (notes) => {
        navigation.navigate("EDIT")
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
                            <MaterialCommunityIcons name={'delete'} size={30} color={'#ff79c6'} style={{ marginTop: 35, alignSelf: 'center' }} />
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
                        <View style={styles.dalam}>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft:20 }}>TAMBAH CATATAN</Text>
                            <Feather name={'file-plus'} size={30} color={'#ff79c6'} style={{ alignSelf: 'center', marginRight:20 }} />
                        </View>
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
        backgroundColor: '#1E1A3C'
    },
    teks: {
        marginLeft: 20,
        marginTop: 25,
        marginBottom: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff'
    },
    luar: {
        padding: 12,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 60,
        fontWeight: 'bold',
        backgroundColor: '#3E3364',
    },
    dalam: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    card: {
        padding: 15,
        borderWidth: 0,
        borderRadius: 15,
        borderColor: '#fff',
        margin: 10,
        backgroundColor: '#3E3364'

    },
    teksCardJudul: {
        textAlign: 'center',
        fontSize: 21,
        fontWeight: 'bold',
        color: '#fff'
    },
    teksCard: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 14,
        color: '#fff'
    }
});

