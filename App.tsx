import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [theme, setTheme] = useState('#ffffff');
  const [sequare, setSequare] = useState('#ffffff');
  const [triangle, setTriangle] = useState('#ffffff');
  const [circleOne, setCircleOne] = useState('#ffffff');
  const [circleTwo, setCircleTwo] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    const getRandomColor = () => {
      let color = '#';

      for (let i = 0; i < 6; i++) {
        color += hexRange[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    setTheme(getRandomColor());
    setSequare(getRandomColor());
    setTriangle(getRandomColor());
    setCircleOne(getRandomColor());
    setCircleTwo(getRandomColor());
  };
  return (
    <>
      <StatusBar backgroundColor={theme} />
      <View style={[styles.container, {backgroundColor: theme}]}>
        <View style={styles.shapeContainer}>
          <View style={[styles.square, {backgroundColor: sequare}]}></View>
          <View style={[styles.triangle, {backgroundColor: triangle}]}></View>
        </View>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionText}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.shapeContainer}>
          <View style={[styles.circle, {backgroundColor: circleOne}]}></View>
          <View style={[styles.circle, {backgroundColor: circleTwo}]}></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionText: {
    fontSize: 24,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  shapeContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 20,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 45,
    borderBottomWidth: 90,
    borderLeftWidth: 45,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  square: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  circle: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'yellow',
  },
});
