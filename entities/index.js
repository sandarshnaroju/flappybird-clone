import React from 'react';
import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';
import {Dimensions} from 'react-native';
import Obstacle from '../components/Obstacle';
import {getPipeSizePosPair} from '../utils/random';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function restart(props) {
  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0.4;

  const pipeSize = getPipeSizePosPair();
  const pipeSizeB = getPipeSizePosPair(width * 0.9);
  return {
    physics: {engine, world},
    Bird: Bird(world, 'red', {x: 50, y: 300}, {height: 40, width: 40}),
    ObstacleTop1: Obstacle(
      world,
      'ObstacleTop1',
      'green',
      pipeSize.pipeTop.pos,
      pipeSize.pipeTop.size,
    ),
    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      'blue',
      pipeSize.pipeBottom.pos,
      pipeSize.pipeBottom.size,
    ),
    ObstacleTop2: Obstacle(
      world,
      'ObstacleTop2',
      'green',
      pipeSizeB.pipeTop.pos,
      pipeSizeB.pipeTop.size,
    ),
    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      'blue',
      pipeSizeB.pipeBottom.pos,
      pipeSizeB.pipeBottom.size,
    ),
    Floor: Floor(
      world,
      'brown',
      {x: width / 2, y: height},
      {height: 40, width: width},
    ),
  };
}

export default restart;
