import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

export default function AddFilmScreen({ navigation }) {

    const [title, setTitle] = useState('');
    const [directorName, setDirectorName] = useState('');
    const [rate, setRate] = useState(0);

    return (
        <View style={styles.screen}>
            
            <Text title="Ajouter un film"></Text>

            <TextInput
                value={title}
                placeholder='Titre du film'
                onChangeText={setTitle}
                style={styles.input}
            ></TextInput>

            <TextInput
                value={directorName}
                placeholder='Réalisateur'
                onChangeText={setDirectorName}
                style={styles.input}
            ></TextInput>

            <Text>Note</Text>
            <Picker
                style={styles.picker}
                selectedValue={rate}
                onValueChange={(itemValue) => setRate(itemValue)}
            >
                <Picker.Item label="0" value="0" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
                <Picker.Item label="7" value="7" />
                <Picker.Item label="8" value="8" />
                <Picker.Item label="9" value="9" />
                <Picker.Item label="10" value="10" />

            </Picker>


            <Button
                style={styles.button}
                title="Ajouter à la filmothèque"
                onPress={() => navigation.navigate("Filmothèque", {
                    title: title,
                    directorName: directorName,
                    rate: rate
                })}
            ></Button>

        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        margin: 40,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        minWidth: 300,
        padding: 10,
        borderWidth: 1,
        marginBottom: 40
    },
    picker: {
        width: 120,
        marginBottom: 100
    },
    button: {
        marginTop: 200
    }
});