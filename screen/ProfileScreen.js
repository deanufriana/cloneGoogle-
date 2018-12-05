import React, { Component } from 'react'
import { Thumbnail, Container, Body, Text, View, Content } from 'native-base';
import { Image } from 'react-native'
import PostScreen from './component/PostScreen';


export default class ProfileScreen extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Image source={{ uri: 'https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png' }} style={{ height: 150, width: null }} />
                    <Body style={{
                        transform: [{ translateY: -50 }]
                    }}>
                        <Thumbnail style={{ height: 100, width: 100 }} source={require('../assets/user.png')} />
                        <Text style={{ fontSize: 30 }}>Devi Adi Nufriana</Text>
                        <Text note>Belajar React Native</Text>
                    </Body>

                    <View>
                        <Text note style={{marginLeft: 20}}>Devi Adi Nufriana</Text>
                    </View>

                    <PostScreen {...this.props} />

                </Content>
            </Container>
        )
    }
}
