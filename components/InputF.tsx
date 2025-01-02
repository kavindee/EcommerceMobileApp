import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

type Props = {}

const InputF = (props: React.ComponentProps<typeof TextInput>) => {
  return (
    <TextInput style={styles.inputField} {...props}/> 
  )
}

export default InputF

const styles = StyleSheet.create({
    inputField: {
            backgroundColor: Colors.white,
            paddingVertical: 12,
            paddingHorizontal: 18,
            alignSelf: 'stretch',
            borderRadius: 10,
            fontSize: 16,
            color: Colors.black,
            marginBottom: 20
        },
})