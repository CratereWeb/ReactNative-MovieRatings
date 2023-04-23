import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useState, useEffect } from "react";

import Film from "../Film";

export default function FilmothequeScreen({navigation, route}) {
    
    const [films, setFilms] = useState([]);

    const QUERY_STRING = `https://api.themoviedb.org/3/movie/top_rated?api_key=4b4aa32f3c0e158f26c8184bf773ac36`;

    const MOVIES_AMOUNT = 8;

    useEffect(() => {
    
        fetch(QUERY_STRING)
            .then((res) => res.json() )
            .then((data) => {
                
                var filteredMovies = [];

                for(let i=0; i < MOVIES_AMOUNT; i++) {
                
                    let newMovie = {
                        title: data['results'][i]['title'],
                        rate: data['results'][i]['vote_average']
                    };
                
                    filteredMovies.push(newMovie);
                }
                
                setFilms(filteredMovies);
            })
            .catch((err) => console.log(err.message));

    }, [])

    // console.log("Films from API :", films);
    
    if(route.params) {
        console.log(route.params);
        films.push(route.params);
    }

    return (
        
        <View style={styles.screen}>

            <Text title="Filmothèque"></Text>
            
            <Button
                title="Ajouter un film"
                onPress={() => navigation.push("Ajouter un film")}
            ></Button>

            <ScrollView style={styles.films}>
                {films.map( (film, index) => {
                    return <Film key={index} data={film} style={styles.film} />
                })}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 24,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    films: {
        width: "100%",
        marginTop: 24,
        display: "flex",
        gap:16
    },
    film: {
        box: {
            backgroundColor: "beige",
            borderWidth: 1,
            borderColor: "#0a0a0a",
            borderRadius: 12,
            width: "100%",
            padding: 16,
            marginBottom: 24
        },
        title: {
            fontSize: 24,
            color: "#040404"
        },
        directorName: {
            fontSize: 20,
            color: "#040404"
        },
        rate: {
            fontSize: 28,
            fontWeight: 600,
            color: "#040404"
        }
    }
    
})
