
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { COLORS } from '../../globals/style';

interface Props extends TouchableOpacityProps {
  title: string
}

const Button = ({ title, ...rest }: Props) => (
    <TouchableOpacity style={styles.container} {...rest}>
        <Text style={styles.title}>{title}</Text>           
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 15,
      backgroundColor: COLORS.bluePrimary,
      borderRadius: 10
    },
  
    title: {
      color: COLORS.white,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 22
    },
  
  });


export default Button