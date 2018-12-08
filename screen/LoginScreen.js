import React, { Component } from 'react'
import { Container, Text, Button, Content, Item, Input, View, Left, Thumbnail, CheckBox, ListItem, Body, TouchEvent, Label, Right } from 'native-base'
import Icon from 'react-native-ionicons';

class LoginScreen extends Component {

    state = {
        register: true,
    };

    setregister = () => this.setState({ register: !this.state.register })


    ceker() {
        if (this.state.register) {
            return (
                <Item>
                    <Icon name='mail'>
                    </Icon>
                    <Input placeholder='Email'>
                    </Input>
                </Item>)
        } else {
            return (<Container></Container>)
        }

    }

    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
                        <Thumbnail source={require('../assets/logo.png')} />
                        <Text style={{ fontSize: 33, marginLeft: 12 }}>Google Plus</Text>
                    </View>

                    <View style={{ padding: 14 }}>

                        <Item>
                            <Icon name='person'>
                            </Icon>
                            <Input placeholder='Username'>
                            </Input>
                        </Item>


                        <Item>
                            <Icon name='eye'>
                            </Icon>
                            <Input placeholder='Password'>
                            </Input>
                        </Item>
                        {this.ceker()}
                        <ListItem>
                            <CheckBox />
                            <Body>
                                <Text>Remember Password ?</Text>
                            </Body>
                        </ListItem>

                        <Button block transparent bordered primary onPress={() => this.props.navigation.navigate('Beranda')} danger>
                            <Text> {this.state.register == true ? 'Register' : 'Login'}</Text>
                        </Button>
                    </View>
                    <ListItem>
                        <Left>
                            <Label>Belum Punya Akun Silahkan Centang Untuk Mendaftar</Label>
                        </Left>
                        <Right>
                            <CheckBox checked={this.state.register} onPress={this.setregister} />
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        )
    }
}

export default LoginScreen