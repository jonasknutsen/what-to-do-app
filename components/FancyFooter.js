import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

class FancyFooter extends React.Component {
  render () {
    return (
      <View style={styles.footer}>
        <TouchableHighlight style={styles.whatContainer} onPress={this.onWhat} underlayColor={'#5C80BC'}>
          <Text style={styles.whatSymbol}>=</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.addContainer} onPress={this.onAdd} underlayColor={'#5C80BC'}>
          <Text style={styles.addSymbol}>+</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.listContainer} onPress={this.onList} underlayColor={'#5C80BC'}>
          <Text style={styles.listSymbol}>÷</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = {
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#000',
    width: '100%',
    paddingBottom: 15,
    height: 60
  },
  whatContainer: {
    backgroundColor: '#C73E1D',
    height: 72,
    width: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 12
  },
  addContainer: {
    backgroundColor: '#C73E1D',
    height: 96,
    width: 96,
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 24
  },
  listContainer: {
    backgroundColor: '#C73E1D',
    height: 72,
    width: 72,
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 12

  },
  whatSymbol: {
    fontSize: 72,
    lineHeight: 72,
    color: '#fff'
  },
  addSymbol: {
    fontSize: 96,
    lineHeight: 96,
    color: '#fff'
  },
  listSymbol: {
    fontSize: 72,
    lineHeight: 72,
    color: '#fff'
  }
}

export default FancyFooter
