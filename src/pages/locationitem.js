import React, { PureComponent } from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native';

class LocationItem extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {datos:''};
  }

  _handlePress = () => {
    AsyncStorage.setItem('datos',datos)
  }



  render() {
    return (
      <TouchableOpacity style={styles.root} onPress={this._handlePress}  >
        <Text value={this.state.datos}> {this.props.description} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center'
  }
})

export default LocationItem;