import React from 'react'
import { Text, View, Button } from 'react-native'

export default function HomeScreen({props,navigation}) {

    const onPressLearnMore = () => {
        navigation.navigate('Login')
    }    
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                onPress={onPressLearnMore}
                title="Logout"
                color="#841584"
            ></Button>
        </View>
    )
}

