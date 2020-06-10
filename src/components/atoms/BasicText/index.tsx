import * as React from 'react';
import { Text } from 'react-native';

const BasicText = ({ text }: Props) => <Text>This Is text {text}!</Text>;

interface Props {
  text: string;
}

export default BasicText;
