import React, { Component } from 'react'
import { Container, Text, Footer, FooterTab, Button, Header, Content, Title, Body, Form, Item, Input, View, Card, CardItem, Left, Label, Thumbnail, Right, Icon } from 'native-base'
import { Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


class Beranda extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1, padding: 10 }}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <View style={{ flexDirection: 'row', flex: 1 }}>
                                        <View style={{ flex: 2 }}>
                                            <Left>
                                                <Thumbnail source={require('../assets/user.png')} />
                                            </Left>
                                        </View>
                                        <View style={{ flex: 8, marginLeft: 3 }}>
                                            <TextInput placeholder='What New With U?'></TextInput>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../assets/user.png')} />
                                <Body>
                                    <Text>Devi Adi Nufriana</Text>
                                    <Text note>Belajar React Native</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://cdn-images-1.medium.com/max/800/1*SluXAlSPIxxWjwUsiqD2Kw.png' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="add" />
                                    <Text>12</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon active name="share" />
                                    <Text>4</Text>
                                </Button>
                            </Right>
                            <Right>
                                <Button transparent>
                                    <Icon active name="chatbubbles" />
                                    <Text>4</Text>
                                </Button>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default Beranda