import React, { Component } from 'react'
import { Container, Header, Content, Title, Body, Card, CardItem, Left, Drawer, Thumbnail, Fab, Button, Right, Textarea, Text, LogoTitle } from 'native-base'
import { Modal, TouchableHighlight, View, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-ionicons'
import SideBar from './component/SideBar'
import PostScreen from './component/PostScreen'
import { TextInput } from 'react-native-gesture-handler'
import ModalPost from './component/ModalPost';


class Beranda extends Component {

    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
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
                            <ModalPost setModalVisible={this.setModalVisible.bind(this)} />
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
                                                        <TextInput onPress={() => this.setModalVisible(true)} placeholder='What New With U?'></TextInput>
                                                    </View>
                                                    <View style={{ justifyContent: 'center' }}>
                                                        <Icon onFocus={() => this.props.navigation.navigate('People')} name="send"></Icon>
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