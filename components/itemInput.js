import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

// ItemInput is a controlled component that accepts an onAddItem prop
export default function ItemInput({ onAddItem }) {
    const [currValue, setCurrValue] = useState('');

    const inputTyped = (text) => {
        setCurrValue(text);
    };

    const buttonClicked = () => {
        if (!currValue || currValue.trim() === '') return;
        onAddItem(currValue.trim());
        setCurrValue('');
    };

    return (
        <View style={styles.inputView}>
            <TextInput
                placeholder="enter ur task here"
                style={styles.input}
                value={currValue}
                onChangeText={inputTyped}
            />
            <Button title="Add" onPress={buttonClicked} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        flex: 1,
        marginRight: 8
    }
});
