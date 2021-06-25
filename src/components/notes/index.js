import React from 'react'
import { View, Text } from 'react-native'

const notes = ({navigation}) => {
    return (
        <View>
            <View>
                    <TouchableOpacity onPress={() => navigation.navigate("EDIT")}>
                        <View style={styles.card}>
                            <Text style={styles.teksCard}>ini catatan</Text>
                        </View>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default notes
