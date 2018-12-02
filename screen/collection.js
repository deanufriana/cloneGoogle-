<View style={{ flex: 1, justifyContent: "center" }}>
    <View style={{ marginTop: 20, flex: 1, flexDirection: 'row' }}>
        <View style={{ marginLeft: 20, flex: 6 }}>
            <TextInput value={this.state.input} onChangeText={(text) => this.setState({ input: text })} placeholder='Masukan'></TextInput>
        </View>
        <View style={{ flex: 2 }}>
            <Button onPress={() => this.setState({ awal: this.state.input })}>
                <Text>Kirim</Text>
            </Button>
        </View>
    </View>
    <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text>
            {this.state.awal}
        </Text>
    </View>
</View>