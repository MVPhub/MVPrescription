import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AlertDetail from './AlertDetail.js';
import dummy from '../dummyData.js';

const styles =StyleSheet.create({
  header: {
    color: '#696969',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
})

export default class AlertScreen extends Component {
  constructor(){
    super();
    this.state = {
      medList: dummy
    }
  }

  render(){
    return(
      <View>
        <Text style={styles.header}>ALERTS</Text>

        <AlertDetail data={this.state.medList}/>
      </View>
    );
  }
}