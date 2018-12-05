import React, { Component } from 'react'
import { Text, Button, Container, Header, Content, Title, Body, Form, Item, Input, View, Card, CardItem, Left, Drawer, Thumbnail, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import { Image, TouchableOpacity } from 'react-native'
import Grid from 'react-native-grid-component'
import user from '../../data/user'
import { _ } from 'lodash'

export default class PostScreen extends Component {

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        const datas = _.find(user, { id: this.props.idItem });
        return (
            <Grid
                renderItem={this.renderItem}
                data={datas || user}
                itemsPerRow={1}
                {...this.props}
            >
            </Grid>
        );
    }    
    renderItem(data, key) {
        return (
            <Content key={key}>
                <TouchableOpacity onPress={() => this.navigation.navigate('Detail', { id: data.id })}>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={data.foto} />

                                <View style={{ alignItems: 'stretch', marginLeft: 10 }}>
                                    <Text>{data.nama}</Text>
                                    <Text style={{marginTop: 5}}> <Icon style={{ fontSize: 16 }} name='globe'> Public</Icon>  </Text>
                                </View>

                            </Left>

                            <Right>
                                <Text note>
                                    2m
                                </Text>
                            </Right>
                        </CardItem>
                        <CardItem>
                            {data.post.map((post, key) => {
                                return (
                                    <Text key={key} note>{post.post}</Text>
                                )
                            })}
                        </CardItem>
                        <CardItem cardBody>

                            {data.post.map((gambar, key) => {
                                return (
                                    <Image key={key} source={gambar.gambar} style={{ height: 200, width: null, flex: 1 }} />
                                )
                            })}

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
                </TouchableOpacity>
            </Content>

        )
    }
}

