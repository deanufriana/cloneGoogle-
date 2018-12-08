import React, { Component } from 'react'
import { Text, Button, Container, Footer, FooterTab, Body, Form, Item, Input, View, Card, CardItem, Left, Drawer, Thumbnail, Right, Content, List, ListItem } from 'native-base'
import Icon from 'react-native-ionicons'
import { Image } from 'react-native'
import user from '../data/user'
import { _ } from 'lodash'

export default class DetailScreen extends Component {

    getNama(users, id) {
        return _.find(users, { id: id })
    }

    render() {
        const ids = this.props.navigation.getParam('id', 'nodata');
        const data = _.find(user, { id: ids });
        return (
            <Container>
                {data.post.map((post, key) => {
                    return (
                        <Content key={key}>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={data.foto} />
                                        <View style={{ alignItems: 'stretch', marginLeft: 10 }}>
                                            <Text>{data.nama}</Text>
                                            <Text style={{ marginTop: 5 }}> <Icon style={{ fontSize: 16 }} name='globe'> Public</Icon>  </Text>
                                        </View>
                                    </Left>
                                    <Text note>2m</Text>
                                </CardItem>
                                <View>
                                    <CardItem>
                                        <Text note>{post.post}</Text>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image key={key} source={post.gambar} style={{ height: 200, width: null, flex: 1 }} />
                                    </CardItem>
                                    <CardItem>
                                        <Left>
                                            <Button transparent>
                                                <Icon active name="add" />
                                                <Text> {post.plus}</Text>
                                            </Button>
                                        </Left>
                                        <Right>
                                            <Button transparent onPress={() =>
                                            Share.share(
                                                {
                                                    message: post.post,
                                                    title: post.nama
                                                }, 
                                                {
                                                    dialogTitle: 'Bagikan Post ?'
                                                }
                                                )}>
                                                <Icon active name="share" />
                                                <Text>{post.bagikan}</Text>
                                            </Button>
                                        </Right>
                                        <Right>
                                            <Button transparent>
                                                <Icon active name="chatbubbles" />
                                                <Text>
                                                    {post.komentar.length}
                                                </Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                </View>
                            </Card>
                            <List style={{ marginBottom: 10 }}>
                                {post.komentar.map((komentar, key) => {
                                    return <ListItem avatar key={key}>
                                        <Left>
                                            <Thumbnail source={
                                                this.getNama(user, komentar.id).foto} />
                                        </Left>
                                        <Body>
                                            <Text>
                                                {this.getNama(user, komentar.id).nama}
                                            </Text>
                                            <Text note>{komentar.komentar}</Text>
                                        </Body>
                                        <Text note> 2m </Text>
                                    </ListItem>
                                })}
                            </List>
                        </Content>
                    )
                })}
                <Footer style={{ backgroundColor: 'white', borderTopColor: 'black' }}>
                    <FooterTab style={{ backgroundColor: 'white' }}>
                        <Input placeholder="Input Komentar">
                        </Input>
                        <View style={{ justifyContent: 'center' }}>
                            <Icon name='send' />
                        </View>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
