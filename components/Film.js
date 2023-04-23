import { Container, View, Text, Button } from "react-native";
import { useState } from "react";

export default function Film(props) {

    return (
        <View style={props.style.box}>
            <Text style={props.style.title}>{props.data.title}</Text>
            <Text style={props.style.directorName}>{props.data.directorName}</Text>
            <Text style={props.style.rate}>{props.data.rate}</Text>
        </View>
    )
}

