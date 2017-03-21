/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class reactTrio extends Component {
  constructor(props) {
    super(props);
    this.state = {data: 'asdf'}
  }

  _onLoad() {
    fetch('https://s3.amazonaws.com/ianderekaaron/index.json')
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({data: responseData.test})
    })
    .done();
  }

  render() {
    this._onLoad();
    let output = this.state.data
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to ReactTrio!
        </Text>
        <Text style={styles.instructions}>
          {output}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactTrio', () => reactTrio);
