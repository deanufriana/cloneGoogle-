import React, { Component } from 'react'
import { Picker } from 'native-base'

export default class PickerSocial extends Component {
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
            <Picker
                mode="dropdown"
                style={{ width: undefined, height: 10, marginTop: 6 }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
            >
                <Picker.Item label="Public" value="key0" />

                <Picker.Item label="People" value="key1" />

            </Picker>
        )
    }
}
