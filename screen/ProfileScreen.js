import React, { Component } from 'react'
import { Thumbnail, Container, Body, Text, View, Content, Button } from 'native-base';
import { ImageBackground } from 'react-native'
import PostScreen from './component/PostScreen';
import Icon from 'react-native-ionicons';

export default class ProfileScreen extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <ImageBackground source={{ uri: 'https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png' }} style={{ height: 150, width: null }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Button onPress={() => this.props.navigation.goBack()} transparent style={{ flex: 1 }}>
                                <Icon name='arrow-back' style={{ color: 'white', padding: 12, flex: 1 }} />
                            </Button>

                            <Button transparent>
                                <Text style={{ color: 'white' }}>About</Text>
                            </Button>
                        </View>

                    </ImageBackground>
                    <Body style={{
                        transform: [{ translateY: -50 }], height: 160
                    }}>
                        <Thumbnail style={{ height: 100, width: 100 }} source={require('../assets/user.png')} />
                        <Text style={{ fontSize: 30 }}>Devi Adi Nufriana</Text>
                        <Text style={{ margin: 10 }} note>Seorang yang senang belajar hal baru. dalam hal pemrograman</Text>
                    </Body>

                    <View>
                        <Text note style={{ marginLeft: 20 }}>Devi Adi Nufriana</Text>
                    </View>

                    <PostScreen {...this.props} />

                </Content>
            </Container>
        )
    }
}
