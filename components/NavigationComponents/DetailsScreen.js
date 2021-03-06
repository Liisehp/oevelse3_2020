import React, { Component } from 'react'
import { View, Text, StyleSheet,Button } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import { Ionicons } from '@expo/vector-icons';

export default class DetailsScreen extends Component {
    static navigationOptions= {
        title:'Details'
    }

    GoToSettings = (route)=>{
        // Når en komponent bliver mounted via navigation, får den en prop ved navn "navigation" som indeholder funktioner mv. til at navigere i appen.
        this.props.navigation.navigate('Settings');
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Go to Settings</Text>
                <Button title="Take me to it!" onPress={this.GoToSettings} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        paddingTop:200,
        paddingBottom:200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:'100%'
    },
    text: {
        fontSize: 20,
    },
});