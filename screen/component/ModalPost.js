import React, { Component } from 'react'
import { Container, Header, Content, Title, Body, Card, CardItem, Left, Drawer, Thumbnail, Fab, Button, Right, Textarea, Text, Icon } from 'native-base'
import { Modal, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';
import PickerSocial from './Picker';

export default class ModalPost extends Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };
    }
    render() {
        return (
            <Container style={{ backgroundColor: "rgba(0,0,0,0.5)" }} >
                <TouchableOpacity style={{ position: 'absolute', bottom: 0, right: 0, top: 0, left: 0, }} onPress={() => this.props.setModalVisible(false)} >
                </TouchableOpacity>
                <View style={{ margin: 15, backgroundColor: 'white', height: 250, borderRadius: 10 }}>
                    <View style={{ padding: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Thumbnail source={require('../../assets/user.png')}>
                            </Thumbnail>
                            <View style={{ flex: 3, padding: 5 }}>

                                <Text>Devi Adi Nufriana</Text>
                                <PickerSocial />

                            </View>
                            <Button  disabled={this.state.text != '' ?false: true} style={{ flex: 1, marginTop: 13,backgroundColor:this.state.text != '' ?'blue': 'gray' }}  small onPress={() => alert('wewe')}>
                                <Text style={{ fontSize: 10 }}> Post </Text>
                            </Button>
                        </View>

                        <Textarea onChangeText={(text) => this.setState({text})} style={{ alignItems: 'stretch' }} placeholder="Tulis Sesuatu" style={{ height: 150 }}>
                        </Textarea>
                        <Icon name='camera' style={{ marginLeft: 5 }}>
                        </Icon>
                    </View>
                </View>
            </Container>

        )
    }
}
