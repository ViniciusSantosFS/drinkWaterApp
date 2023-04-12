import { TextInput, View, Text } from 'react-native';
import styled from 'styled-components/native';

import { COLORS } from '~/globals/style';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const TextField = styled(TextInput)`
  width: 100%;
  border-bottom-width: 1px;
  padding: 20px;
  border-color: ${({ error }: { error: boolean }) =>
    error ? `${COLORS.error}` : `${COLORS.black}`};
`;

export const ErrorMessage = styled(Text)`
  color: ${COLORS.error};
  font-size: 12px;
  font-weight: 500;
  margin: 8px 22px;
`;
