import React,{Component} from 'react';
import { Constants } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Image, Text, StyleSheet, AsyncStorage, Button,ScrollView, TextInput, ActivityIndicator } from 'react-native';
import {
  NavigationActions
} from 'react-navigation';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import {Card, Input} from "react-native-elements";

import LocationItem from './locationItem';


export default class App extends React.Component {

  state={
    datos:[],
  }
  componentDidMount(){
    this._loadedinitialstate().done();
  }
  _loadedinitialstate =async() => {
    AsyncStorage.getItem('datos');
  }

  render() {
    return (
      <View style={styles.container}>
        <GoogleAutoComplete apiKey={'AIzaSyB2HyNTBm1sQJYJkwOOUA1LXRHAKh4gmjU'} debounce={20} minLength={2} getDefaultValue={() => ''}  onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);}}   returnKeyType={'default'} fetchDetails={true}
>
          {({
            locationResults,
            isSearching,
            clearSearchs,
            datos,
            handleTextChange
          }) => (
            <React.Fragment>
              <View style={styles.inputWrapper}>
                <Input
                  style={styles.textInput}
                  placeholder="Ingresa tu direccion"
                  onChangeText={(datos) => this.setState({datos})}
                  value={datos}
                />

              </View>
              {isSearching && <ActivityIndicator size="large" color="red" />}
             <ScrollView>
               {locationResults.map(el => (
                 <LocationItem
                   {...el}
                   key={el.id}
                 />
               ))}
             </ScrollView>
            </React.Fragment>
          )}
        </GoogleAutoComplete>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  inputWrapper: {
    marginTop: 80,
    flexDirection: 'row'
  },
});