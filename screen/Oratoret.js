import React, { Component } from 'react'
import user from '../data/user'
import { Container, Text, View } from 'native-base';

export default class Oratoret extends Component {
    render() {
        return (
            <Container>
                {
                    user.map((item, key)=>{
                        return(
                            <View key={key} >
                               <Text>id</Text> 
                                <Text>{item.id}</Text>
                                {
                                    item.post.map((pos, key)=> {
                                        return (
                                            <View key={key}>
                                               <Text> {item.nama}</Text>
                                               <Text> {pos.plus} </Text> 
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }
            </Container>
        )
    }
}
