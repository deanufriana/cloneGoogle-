import React, { Component } from 'react'
import { Text, Button, Content, View, Card, CardItem, Left, Thumbnail, Right } from 'native-base'
import Icon from 'react-native-ionicons'
import { Image, TouchableOpacity } from 'react-native'
import Grid from 'react-native-grid-component'
import user from '../../data/user'
import { _ } from 'lodash'
import { Share } from 'react-native'

export default class PostScreen extends Component {

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (
            <Grid
                renderItem={this.renderItem}
                data={user}
                itemsPerRow={1}
                {...this.props} />

        );
    }
    renderItem(data, id) {
        return (
            <Content key={id}>
                {data.post.map((post, key) => {
                    return (
                        <View key={key}>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={data.foto} />
                                        <View style={{ alignItems: 'stretch', marginLeft: 10 }}>
                                            <Text>{data.nama}</Text>
                                            <Text style={{ marginTop: 5 }}> <Icon style={{ fontSize: 16 }} name='globe'> {post.privasi}</Icon>  </Text>
                                        </View>
                                    </Left>
                                    <Right>
                                        <Text note>2m</Text>
                                    </Right>
                                </CardItem>
                                <TouchableOpacity onPress={() => this.navigation.navigate('Detail', { id: data.id })}>

                                    <CardItem>
                                        <Text key={key} note>{post.post}</Text>
                                    </CardItem>
                                    <CardItem cardBody>
                                        <Image key={key} source={post.gambar} style={{ height: 200, width: null, flex: 1 }} />
                                    </CardItem>

                                </TouchableOpacity>
                                <CardItem>
                                    <Left>
                                        <Button transparent>
                                            <Icon active name="add" />
                                            <Text>{post.plus}</Text>
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
                                        <Button transparent onPress={() => this.navigation.navigate('Detail', { id: data.id })}>
                                            <Icon active name="chatbubbles" />
                                            <Text>
                                                {post.komentar.length}
                                            </Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        </View>
                    )
                })}
            </Content>
        )
    }
}

