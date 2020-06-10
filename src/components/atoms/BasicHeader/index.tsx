import * as React from 'react';
import { Text } from 'react-native';

const BasicHeader = ({ text }: Props) => <Text>Hello World {text}!</Text>;

interface Props {
  text: string;
}

export default BasicHeader;
