/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  StyleSheet
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Text style={styles.txt}>
            ola mundo 
          </Text>
        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor : '#FF0000',
  },

})