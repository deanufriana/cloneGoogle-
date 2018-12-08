import React, { Component } from 'react'
import user from '../data/user'
import { Container, Text, View } from 'native-base';
import { StyleSheet, Button, Image } from 'react-native'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'

class Oratoret extends Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: Oratoret,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
});

export default MyApp = createAppContainer(MyDrawerNavigator);

