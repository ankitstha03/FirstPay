// Login page
// Imports of necessary apis and components
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

// Imports of assests and constants
import logo from './images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'
import './Constants'

const { width:WIDTH} = Dimensions.get('window')

// Main export class
export default class Login extends React.Component {
  // Constructor defining hidepass and press variable to control password visibility
  constructor() {
    super()
    this.state={
      hidePass:true,
      press:false
    }
  }

  // hidepass variable state set
  hidePass=() => {
    if(this.state.press==false){
      this.setState({hidePass:false, press:true})
    } else {
      this.setState({hidePass:true, press:false})
    }
  }

  // Main render function
  render() {
    return (
      // Main View with ememelts of forms
      <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={logo} resizeMode={'contain'} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'md-contact'} size={28} color={PriColor} 
          style={styles.inputIcon} 
        />
        <TextInput
          style={styles.input}
          placeholder={'Username'}
          placeholderTextColor={'#777'}
          underlineColorAndroid={PriColor}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'md-lock'} size={28} color={PriColor} 
          style={styles.inputIcon} 
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry={this.state.hidePass}
          placeholderTextColor={'#777'}
          underlineColorAndroid={PriColor}
        />
        <TouchableOpacity style={styles.btnEye}
          onPress={this.hidePass.bind(this)}>
          <Icon name={this.state.press == false? 'ios-eye-outline':'ios-eye-off-outline'} size={26} color={PriColor}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnBg}>
          <Text style={styles.textBg}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnBg2}
      onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.textBg}>No Account? Sign Up</Text>
      </TouchableOpacity>


      </View>
      // End of main view
    );
  }
}

// styles used for Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logocontainer:{
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width:200,
    height:200,
  },
  inputContainer: {
    marginTop:20,
  },
  input: {
    width:WIDTH - 140,
    height: 40,
    borderRadius: 5,
    fontSize:16,
    paddingLeft:10,
    backgroundColor: PriColor +'30',
    color: '#777',
    marginHorizontal: 55, 
    left:17,
  },
  inputIcon:{
    position:'absolute',
    top: 7,
    left: 40,
  },
  btnEye:{
    position:'absolute',
    top: 7,
    right: 45,
  },
  btnLogin:{
    width:WIDTH - 105,
    height: 35,
    borderRadius: 5,
    backgroundColor: PriColor,
    justifyContent: 'center',
    marginTop:25,
  },
  text:{
    color:'#fff',
    fontSize:18,
    textAlign:'center',
    fontWeight: 'bold',
  },
  btnBg:{
    width:WIDTH - 105,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginTop:10,
  },
  textBg:{
    color:PriColor,
    fontSize:16,
    textAlign:'center'
  },
  btnBg2:{
    width:WIDTH - 105,
    height: 40,
    borderRadius: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    marginTop:80,
  },
});