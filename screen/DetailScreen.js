import React, { Component } from 'react'
import { Text, Button, Container, Footer, FooterTab, Body, Form, Item, Input, View, Card, CardItem, Left, Drawer, Thumbnail, Right, Content } from 'native-base'
import Icon from 'react-native-ionicons'
import { Image, TouchableOpacity } from 'react-native'
import user from '../data/user'
import { _ } from 'lodash'
import { TextInput } from 'react-native-gesture-handler';

export default class DetailScreen extends Component {
    render() {
        const id = this.props.navigation.getParam('id', 'NoData');
        const data = _.find(user, { id: id });
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={data.foto} />
                                <Body>
                                    <Text>{data.nama}</Text>
                                    <Text note>{data.deskripsi}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={data.background} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="add"/>
                                    <Text>{data.plus}</Text>
                                </Button>
                            </Left>
                            <Right>
                                <Button transparent>
                                    <Icon active name="share" />
                                    <Text>{data.share}</Text>
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
                <Footer style={{ backgroundColor: 'white' }}>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Input placeholder="Input Komentar">
                        </Input>
                        <Icon nama='send' />
                    </FooterTab>
                </Footer>
            </Container>

        )
    }
}
