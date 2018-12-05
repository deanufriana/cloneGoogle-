import React, { Component } from 'react'
import { Container, Header, Content, Title, Body, Card, CardItem, Left, Drawer, Thumbnail, Fab, Button, Right, Textarea, Text, Picker } from 'native-base'
import { Modal, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons'
import SideBar from './SideBar'
import PostScreen from './PostScreen'
import { TextInput } from 'react-native-gesture-handler'


class Beranda extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1"
        };
    }
    onValueChange(value) {
        this.setState({
            selected: value
        });
    }

    render() {
        return (
            <Container>
                <Drawer
                    styles={{
                        backgroundColor: 'black',
                    }}
                    ref={(ref) => { this.drawer = ref; }}
                    content={<SideBar {...this.props} navigator={this.navigator} />}
                    tapToClose={true}
                    onClose={() => this.drawer._root.close()}>
                    <Container>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={this.state.modalVisible}
                            onRequestClose={() => this.setModalVisible(!this.state.modalVisible)}
                        >
                            <Container style={{ backgroundColor: "rgba(0,0,0,0.5)" }} >
                                <TouchableOpacity style={{ position: 'absolute', bottom: 0, right: 0, top: 0, left: 0, }} onPress={() => this.setModalVisible(!this.state.modalVisible)} >
                                </TouchableOpacity>
                                <View style={{ margin: 15, backgroundColor: 'white', height: 250, borderRadius: 10 }}>
                                    <View style={{ padding: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Thumbnail source={require('../assets/user.png')}>
                                            </Thumbnail>
                                            <View style={{ flex: 3, padding: 5 }}>
                                                <Text>Devi Adi Nufriana</Text>
                                                <Picker
                                                    mode="dropdown"
                                                    style={{ width: undefined, height: 10, marginTop: 6 }}
                                                    selectedValue={this.state.selected}
                                                    onValueChange={this.onValueChange.bind(this)}
                                                >
                                                    <Picker.Item label="Public" value="key0" />

                                                    <Picker.Item label="People" value="key1" />

                                                </Picker>

                                            </View>

                                            <Button style={{ flex: 1, marginTop: 13 }} primary small>
                                                <Text style={{ fontSize: 10 }}> Post </Text>
                                            </Button>

                                        </View>

                                        <Textarea style={{ alignItems: 'stretch' }} placeholder="Tulis Sesuatu" style={{ height: 150 }}>
                                        </Textarea>
                                        <Icon name='camera' style={{marginLeft:5}}>

                                        </Icon>
                                    </View>
                                </View>
                            </Container>

                        </Modal>
                        <Content>
                            <Header style={{
                                backgroundColor: 'white'
                            }}>
                                <Left>
                                    <Icon onPress={() => this.drawer._root.open()} name='menu' style={{ color: '#808080' }} />
                                </Left>
                                <Body>
                                    <Title style={{ color: '#808080' }}>Home</Title>
                                </Body>
                                <Right>
                                    <Icon name="search" />
                                </Right>
                            </Header>
                            <Content>
                                <View style={{ flex: 1 }}>
                                    <Card>
                                        <CardItem>
                                            <Body>
                                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                                    <View style={{ flex: 2 }}>
                                                        <Left>
                                                            <Thumbnail source={require('../assets/user.png')} />
                                                        </Left>
                                                    </View>
                                                    <View style={{ flex: 8, marginLeft: 3, justifyContent: 'center' }}>
                                                        <TextInput placeholder='What New With U?'></TextInput>
                                                    </View>
                                                    <View style={{ justifyContent: 'center' }}>
                                                        <Icon onPress={() => this.props.navigation.navigate('People')} name="send"></Icon>
                                                    </View>
                                                </View>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <PostScreen {...this.props} />
                            </Content>
                        </Content>
                        <Fab
                            direction="up"
                            containerStyle={{}}
                            style={{ backgroundColor: '#5067FF' }}
                            position="bottomRight"
                            onPress={() => this.setModalVisible(true)}>
                            <Icon name="create" />
                        </Fab>
                    </Container>
                </Drawer>

            </Container>
        )
    }
}



export default Beranda