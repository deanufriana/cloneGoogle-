import React, { Component } from 'react'
import { Container, Text, Button, Content, Form, Item, Input, View, Card } from 'native-base'

class LoginScreen extends Component {
    render() {
        return (
            <Container>
                <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }} style={{ padding: 10 }}>
                    <View style={{ padding: 14, shadowColor: 'black', borderColor: 'black' }}>
                        <Card>
                            <Form>
                                <Item>
                                    <Input placeholder='Username'>
                                    </Input>
                                </Item>
                                <Item last>
                                    <Input placeholder='Password'>
                                    </Input>
                                </Item>
                                <Button block onPress={() => this.props.navigation.navigate('Beranda')} info>
                                    <Text> Login</Text>
                                </Button>
                            </Form>
                        </Card>

                    </View>
                </Content>
            </Container>
        )
    }
}

export default LoginScreen