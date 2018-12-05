import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import Icon from 'react-native-ionicons'
export default class PeopleScreen extends Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Icon onPress={() => this.props.navigation.goBack()} name='arrow-back'></Icon>
                    </Left>
                    <Body>
                        <Text>People</Text>
                    </Body>
                    <Right>
                        <Icon name="search"></Icon>
                    </Right>
                </Header>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail source={require('../assets/user.png')} />
                            </Left>
                            <Body>
                                <Text>Kumar Pratik</Text>
                                <Text note>Doing what you like will always keep you happy . .</Text>
                            </Body>
                    
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}