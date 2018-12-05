import React, { Component } from 'react'
import { Text, View, Container, Thumbnail, ListItem, Left, Button, Body, List } from 'native-base'
import Icon from 'react-native-ionicons'
import { Image } from 'react-native'
import User from '../../data/user'

export default class SideBar extends Component {
    render() {
        return (
            <Container>
                <Image source={{ uri: 'https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png' }} style={{ height: 130, width: 289, flexDirection: 'row' }} blurRadius={1} />
                <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, padding: 20 }}>
                    <Thumbnail source={require('../../assets/user.png')} />
                    <Text style={{ color: 'white' }}>Devi Adi Nufriana</Text>
                    <Text>deanheart09@gmail.com</Text>
                </View>
                <View>
                    <List icon>
                        <ListItem onPress={() => this.props.navigation.navigate('People')}>
                            <Icon name="people" />
                            <Body>
                                <Text>People</Text>
                            </Body>
                        </ListItem>
                        <ListItem>
                            <Icon name="log-out"></Icon>
                            <Body>
                                <Text>Keluar</Text>
                            </Body>
                        </ListItem>
                    </List>

                </View>

            </Container>
        )
    }
}
