import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from '~/globals/style';

interface Props extends TextInputProps {
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  hasError: boolean;
}

const Input = ({ iconName, hasError, ...rest }: Props) => (
  <Container>
    <MaterialCommunityIcons
      name={iconName}
      size={24}
      color={hasError ? COLORS.error : COLORS.gray}
    />
    <TextField {...rest} error={hasError} />
  </Container>
);

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const TextField = styled(TextInput)`
  width: 100%;
  border-bottom-width: 1px;
  padding: 20px;
  border-color: ${({ error }: { error: boolean }) =>
    error && `${COLORS.error}`};
`;

export default Input;
