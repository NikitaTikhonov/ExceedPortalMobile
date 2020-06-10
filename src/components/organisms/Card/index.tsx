import * as React from 'react';
import { BasicDefinition } from '_molecules/index';
import { View, StyleSheet } from 'react-native';

const Card = ({ backgroundColor, ...other }: Props) => {
  return (
    <View
      style={StyleSheet.flatten([
        defaultStyles.Card,
        { backgroundColor: backgroundColor },
      ])}>
      <BasicDefinition {...other} />
    </View>
  );
};

interface Props {
  headerText: string;
  text: string;
  backgroundColor: string;
}

const defaultStyles = StyleSheet.create({
  Card: {
    backgroundColor: 'white',
  },
});

export default Card;
