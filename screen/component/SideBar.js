import React, { Component } from 'react'
import { Text, View, Container, Thumbnail, ListItem, Left, Button, Body, List } from 'native-base'
import Icon from 'react-native-ionicons'
import { ImageBackground } from 'react-native'
import global from '../style/global'

export default class SideBar extends Component {
    render() {
        return (
            <Container>
                <ImageBackground source={{ uri: 'https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png' }} style={{ height: 130, width: null, flexDirection: 'row' }} blurRadius={3} >
                    <View style={{ padding: 20 }}>
                        <Thumbnail source={require('../../assets/user.png')} />
                        <Text style={{ color: 'white' }}>Devi Adi Nufriana</Text>
                        <Text>deanheart09@gmail.com</Text>
                    </View>
                </ImageBackground>
                <View>
                    <List>
                        <ListItem onPress={() => this.props.navigation.navigate('People')}>
                            <Icon style={global.icon} name="people" />
                            <Body>
                                <Text style={global.icon}>People</Text>
                            </Body>
                        </ListItem>
                        <ListItem onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon style={global.icon} name="log-out"></Icon>
                            <Body>
                                <Text style={global.icon}>Keluar</Text>
                            </Body>
                        </ListItem>
                    </List>
                </View>
            </Container>
        )
    }
}