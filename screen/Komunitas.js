import React, { Component } from 'react'
import { Content, CardItem, Button, Text, Card, Left, Title, Container, Header, Right, Body, View } from 'native-base';
import Icon from 'react-native-ionicons'
import { Image } from 'react-native'
import komunitas from '../data/komunitas'
import Grid from 'react-native-grid-component'

export default class Komunitas extends Component {
    renderItem(data, key) {
        return (
            <Content key={key}>
                <Card>
                    <CardItem cardBody>
                        <Image source={data.background} style={{ height: 100, width: null, flex: 1 }} />
                    </CardItem>
                    <View style={{ margin: 10 }}>
                        <Text>{data.nama}</Text>
                        <Text note>{data.member} member</Text>

                    </View>
                    <Button transparent>
                        <Text>Join</Text>
                    </Button>
                </Card>
            </Content>
        )
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'green' }}>
                    <Left>
                        <Icon style={{ color: 'white' }} name='menu' />
                    </Left>
                    <Body>
                        <Title name='body'> Komunitas </Title>
                    </Body>
                    <Right>
                        <Icon style={{ color: 'white' }} name='search' />
                    </Right>
                </Header>
                <Text note style={{ padding: 10 }}>Rekomendasi Komunitas</Text>
                <Grid
                    data={komunitas}
                    renderItem={this.renderItem}
                    itemsPerRow={2}
                >
                </Grid>

            </Container>

        )
    }
}
