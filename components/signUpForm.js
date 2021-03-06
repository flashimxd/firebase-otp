import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-fir-otp-80c8d.cloudfunctions.net';

class SignUpForm extends Component {
    state = { phone: '' }
    handleSubmit = () => {
        axios.post(`${ROOT_URL}/createUser`, {
            phone: this.state.pone
        })
        .then(() => {

        });
    }
    render() {
        return (
            <View>
                <View style={{ marginBottom: 10 }}>
                    <FormLabel>Enter Phone Number</FormLabel>
                    <FormInput 
                            value={this.state.phone} 
                            onChangeText={phone => this.setState({ phone })} 
                    />
                </View>
                <Button onPress={this.handleSubmit} title='Submit' />
            </View>
        );
    }
}

export default SignUpForm;
