import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import entities from './entities';
import Physics from './Physics';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
function BestGameEver(props) {
  const [isRunning, setIsRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [score, setScore] = useState(0);
  useEffect(() => {
    setIsRunning(false);
  }, []);
  const onEvent = e => {
    switch (e.type) {
      case 'game_over':
        setIsRunning(false);
        gameEngine.stop();
        break;
      case 'new_point':
        setScore(prev => prev + 1);
        break;

      default:
        break;
    }
  };
  const onGameStart = () => {
    setScore(0);
    setIsRunning(true);
    gameEngine.swap(entities());
  };
  return (
    <View style={{flex: 1}}>
      <Text style={styles.scoreTextStyle}> {score} </Text>
      <GameEngine
        ref={ref => setGameEngine(ref)}
        style={styles.container}
        running={isRunning}
        entities={entities()}
        onEvent={onEvent}
        systems={[Physics]}
      />
      <StatusBar hidden />

      {!isRunning && (
        <TouchableOpacity
          onPress={onGameStart}
          style={styles.startTouchableOpacitySTyle}>
          <Text style={styles.startTextStyle}> Start </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default BestGameEver;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  player: {
    position: 'absolute',
    backgroundColor: 'pink',
  },
  startTextStyle: {
    backgroundColor: 'black',
    color: 'white',

    width: 250,
    textAlign: 'center',
    height: 60,
    textAlignVertical: 'center',
    fontSize: 30,
  },
  startTouchableOpacitySTyle: {
    position: 'absolute',
    top: height / 2,
    left: width / 2 - 125,
    elevation: 5,
  },
  scoreTextStyle: {
    position: 'absolute',
    top: 0,
    color: 'black',
    zIndex: 10,
    fontSize: 30,
    alignSelf: 'center',
    fontWeight: '900',
    margin: 5,
  },
});
