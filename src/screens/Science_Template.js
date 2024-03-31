import React from 'react';
import { Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';
import science from './science-data/science.json'

class Science_Template extends Component {
    factName = this.props.navigation.getParam('Name', 'Pranayama').toString();

    getInfo(){
        return science[this.factName];
    }

    render(){
        return(
            <ScrollView>
                <Text style = {styles.mainText}> {this.getInfo()}</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    // title:{
    //     fontSize: 50,
    //     textAlign: 'center',
    //     fontWeight: 'bold',
    //     fontFamily: 'Helvetica',
    //     color: 'blue',
    // },
    mainText:{
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Helvetica',
        color: 'blue',
        fontFamily: 'Helvetica'
    }
})

export default Science_Template;