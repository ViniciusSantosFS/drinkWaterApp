import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './globals/style';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';

import Logo from './assets/logo.svg';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';


export default function App() {    
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
           <ScrollView showsVerticalScrollIndicator={false}>
           <StatusBar style="auto" />
            <View style={{alignItems: 'center', marginTop: 100 }}>
                <Logo width={200} height={200}/>
            </View>

            <View style={styles.contentContainer}>
                <Title>Login</Title>
                
                <View style={styles.formContainer}>
                    <Input placeholder='Email ID' iconName="email-outline"/>
                    <View style={{ marginVertical: 10 }}/>
                    <Input placeholder='Password'iconName="lock-outline"/>
                </View>
                
                <Button title="Login" />
            </View>
           </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  formContainer: {
    marginVertical: 40, 
    marginRight: 20
  },

  contentContainer: {
    margin: 20,
  }
});
