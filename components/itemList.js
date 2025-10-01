import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// ItemList receives `tasks` array via props and renders them
export default function ItemList({ tasks = [] }) {
    return (
        <View style={styles.container}>
            {tasks.map((task) => (
                <View key={task.id} style={styles.item}>
                    <Text>{task.text}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 16
    },
    item: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    }
});