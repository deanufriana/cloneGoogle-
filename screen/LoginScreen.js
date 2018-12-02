import React, { Component } from 'react'
import { Container, Text, Footer, FooterTab, Button, Header, Content, Title, Body, Form, Item, Input, View, Card, CardItem, Left, Label, Thumbnail, Right, Icon } from 'native-base'
import { StackActions, NavigationActions } from 'react-navigation'

class LoginScreen extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }} style={{ padding: 10 }}>
                    <View style={{ padding: 14, shadowColor: 'black', borderColor: 'black' }}>
                        <Form>
                            <Item>
                                <Input placeholder='Username'>
                                </Input>
                            </Item>
                            <Item last>
                                <Input placeholder='Password'>
                                </Input>
                            </Item>
                            <Button block onPress={() => this.props.navigation.dispatch(StackActions.reset({
                                index: 0, actions: [
                                    NavigationActions.navigate({ routeName: 'Beranda' })
                                ],
                            }))}>
                                <Text>Login</Text>
                            </Button>
                        </Form>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default LoginScreen