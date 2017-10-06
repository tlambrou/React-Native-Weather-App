import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WeekDayTemp extends React.Component {

  render() {

    const dayTemps = [
      { day: "Mon", temp: "76˚"},
      { day: "Tues", temp: "79˚"},
      { day: "Wed", temp: "71˚"},
      { day: "Thurs", temp: "73˚"},
      { day: "Fri", temp: "74˚"},
      { day: "Sat", temp: "77˚"},
      { day: "Sun", temp: "79˚"}
    ]
    //indent components
    const weekDayTemps = dayTemps.map((dayTemp) => {
      return (
        <View style={styles.container} >
            <Text style={styles.day}>{dayTemp.day}</Text>
            <Text style={styles.temp}>{dayTemp.temp}</Text>
        </View>
      )
    })

    return (
      {weekDayTemps}
    );
  }
}

const styles = StyleSheet.create({
  container: {
      //fill these out
  }
});
