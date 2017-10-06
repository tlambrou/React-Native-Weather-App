import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cityDate}>
          <Text style={styles.city}>San Francisco</Text>
          <Text style={styles.fullDate}>Sunday, October 1</Text>
        </View>
        <Text style={styles.temp}>57˚</Text>
        <Text style={styles.weatherDesc}>Partly Cloudy</Text>
        <View style={styles.humidityContainer}>
          <Text style={styles.humidityTitle}>Humidity</Text>
          <Text style={styles.humidity}>78%</Text>
        </View>
        <View style={styles.windContainer}>
          <Text style={styles.windTitle}>Wind</Text>
          <Text style={styles.wind}>Moderate</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "50%",
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cityDate: {
    alignItems: 'center',
    width: '100%'
  },
  city: {
    fontSize: 34,
  },
  fullDate: {
    fontWeight: '200',
  },
  temp: {
    alignItems: 'center',
    fontSize: 100,
    marginLeft: 50
  },
  weatherDesc: {
    justifyContent: 'center'
  },
  humidityContainer: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: "50%"
  },
  humidityTitle: {
    justifyContent: 'flex-end',
  },
  humidity: {
    justifyContent: 'flex-end',

  },
  windContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center'
  },
  windTitle: {
    width: "50%",

    justifyContent: 'flex-end',

  },
  wind: {
    justifyContent: 'flex-end',
  },
})
