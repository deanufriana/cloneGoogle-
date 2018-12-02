import {AppRegistry} from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation'
import LoginScreen from './screen/LoginScreen'
import Beranda from './screen/Beranda'


const Login = createBottomTabNavigator({
    Beranda: {
        screen: Beranda,
    },
},
)

const App = createStackNavigator(
    {
        Home: LoginScreen,
        Beranda: {
            screen: Login,
            navigationOptions: { title: 'Home' }
        }
    },
    {
        headerMode: 'none',
        initialRoute: 'Home'
    }
)

export default createAppContainer(App)