import { Button, View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import {  } from 'react-native-web';
const logo = require('../assets/logo.png');
const facebook = require('../assets/facebook.png');
const google = require('../assets/google.png');

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <View style={styles.inputs}>
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        placeholder='Email or username'
                    />
                    <TextInput 
                        style={styles.input}
                        placeholderTextColor="#fff" 
                        secureTextEntry
                        placeholder='Password'
                    />
                </View>

                <TouchableOpacity
                    style={styles.btnContainer}
                    onPress={() => navigation.navigate("main")}
                >
                    <Text 
                        style={{
                            fontFamily: 'Poppins', 
                            fontWeight: '600', 
                            fontSize: '1.24rem'}}
                    >
                        Login
                    </Text>
                </TouchableOpacity>

                <View style={styles.fLogs}>
                    <Image
                        style={styles.logs}
                        source={google}
                    />
                    <Image
                        style={styles.logs}
                        source={facebook}
                    />
                </View>
                    
                <View>
                    <Text 
                        style={{
                            fontFamily: 'Poppins', 
                            fontWeight: '500', 
                            fontSize: '1rem',
                            display: 'flex',
                            gap: '4px',
                            color: '#fff',
                            marginTop: '3rem'}}
                    >
                        Doesn`t have an account?
                        <Text
                            onPress={() => navigation.navigate("cadastro")}
                            style={{
                                fontFamily: 'Poppins', 
                                fontWeight: '600', 
                                fontSize: '1rem',
                                textDecorationLine: '',
                                color: 'black'}}
                        >
                            Register
                        </Text>
                    </Text>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080708',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF902B',
        borderRadius: '12px',
        width: '180px',
        maxHeight: '50px',
        marginTop: '2rem'
    },
    box: {
        flex: 1,
        gap: 20,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        bottom: '0',
        padding: '24px',
        borderRadius: '24px',
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        width: '100vw',
        height: '75vh',
        backgroundColor: '#786452'

    },
    logo: {
        marginTop: '20px',
        width: '114px',
        height: '58px',
        resizeMode: 'contain',
        
    },
    inputs: {
        width: "80%",
        maxHeight: '12rem',
        flex: 1,
        justifyContent: 'center',
        gap: '20px',
    },
    input: {
        width: "100%",
        backgroundColor: "#080708",
        color: "#fff",
        fontFamily: 'Poppins',
        height: '4rem',
        borderRadius: '12px',
        paddingLeft: '15px',
        fontSize: '1rem'
    },
    fLogs: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '250px',
        flexDirection: 'row',
        gap: 15,
    },
    logs: {
        marginTop: '20px',
        width: '50px',
        height: '50px',
        resizeMode: 'contain',
        
    },
   
});