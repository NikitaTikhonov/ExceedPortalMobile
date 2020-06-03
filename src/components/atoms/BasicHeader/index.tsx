import * as React from 'react';
import { Text } from 'react-native';

const Index = ({ text }: Props) => <Text>Hello World {text}!</Text>;

interface Props {
  text: string;
}

export default Index;
