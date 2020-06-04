import * as React from 'react';
import { BasicHeader, BasicText } from '@atoms';

const BasicDefinition = ({ text, headerText }: Props) => {
  return (
    <>
      <BasicHeader text={text} />
      <BasicText text={headerText} />
    </>
  );
};

interface Props {
  headerText: string;
  text: string;
}

export default BasicHeader;
