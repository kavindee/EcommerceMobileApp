import { StyleSheet, Text, TouchableOpacity, View,TextInput } from 'react-native'
import React from 'react'
import { Stack,router,Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import InputF from '@/components/InputF'


type Props = {}

const SignUpScreen = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{headerTitle: "Sign Up", headerLeft: () => (
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name='close' size={24} color={Colors.black}/>
      </TouchableOpacity>
    )}} />
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <InputF placeholder='Email Address' placeholderTextColor={Colors.gray} autoCapitalize='none' keyboardType='email-address'/>
      <InputF placeholder='Password' placeholderTextColor={Colors.gray} autoCapitalize='none' secureTextEntry={true}/>
      <InputF placeholder='Confirm Password' placeholderTextColor={Colors.gray} autoCapitalize='none' secureTextEntry={true}/>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Sign Up</Text>
      </TouchableOpacity>


            <Text style={styles.loginTxt}>Already have an account? {" "}
      
            <Link href={"/signin"} asChild>
              <TouchableOpacity>
                <Text style={styles.loginTxtSpan}>SignIn</Text>
              </TouchableOpacity>
            </Link>
            </Text>

            <View style={styles.divider}/>
    </View>
    </>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600'
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  loginTxt:{
    marginBottom: 20,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 26,
  },
  loginTxtSpan:{
    color: Colors.primary,
    fontWeight: '600',
  },
  divider:{
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginBottom: 30
  }
  
})