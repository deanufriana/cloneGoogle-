import React, { Component } from 'react'
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './screen/LoginScreen'
import Beranda from './screen/Beranda'
import Icon from 'react-native-ionicons'
import ProfileScreen from './screen/ProfileScreen'
import PeopleScreen from './screen/PeopleScreen'
import DetailScreen from './screen/DetailScreen'
import PostScreen from './screen/component/PostScreen'
import Oratoret from './screen/Oratoret';
import Komunitas from './screen/Komunitas';



const Login = createBottomTabNavigator(
    {
        Beranda: {
            screen: Beranda,
        },
        Komunitas: {
            screen: Komunitas
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarVisible: false,
            }
        },
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return ({
                tabBarIcon: ({ focused, horizontal, tintColor }) => {

                    const { routeName } = navigation.state;
                    let IconName;
                    if (routeName === 'Beranda') {
                        IconName = 'home'
                    } else if (routeName === 'Profile') {
                        IconName = 'person'
                    } else {
                        IconName = 'aperture'
                    }
                    return <Icon name={IconName} size={horizontal ? 20 : 25} color={tintColor} />;
                },
            })
        },
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }
    }

)

const App = createStackNavigator(
    {
        Home: LoginScreen,
        Beranda: Login,
        People: PeopleScreen,
        Detail: DetailScreen,
        PostScreen: PostScreen,
        Profile: ProfileScreen,
        Orat: Oratoret,
    },
    {
        headerMode: 'none',
        initialRouteName: 'Home'
    }
)

export default createAppContainer(App)