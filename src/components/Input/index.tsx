import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { Container, TextField, ErrorMessage } from './styles';

import { COLORS } from '~/globals/style';

interface Props extends TextInputProps {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  hasError: boolean;
  error?: string;
  ref?: React.Ref<TextInput>;
}

const Input = forwardRef(
  (
    { iconName, error, hasError, ...rest }: Props,
    ref: React.Ref<TextInput>
  ) => (
    <>
      <Container>
        <MaterialCommunityIcons
          name={iconName}
          size={24}
          color={hasError ? COLORS.error : COLORS.gray}
        />
        <TextField {...rest} error={hasError} ref={ref} />
      </Container>
      {error && hasError ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  )
);

export default Input;
