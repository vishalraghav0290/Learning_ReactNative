
import { View, Text, StyleSheet, FlatList } from 'react-native';
// ItemList receives `tasks` array via props and renders them
export default function ItemList({ tasks = [] }) {

    return (
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text>{item.text}</Text>
                </View>
            )}
            extraData={tasks}
            contentContainerStyle={styles.container}
            style={{ flex: 1 }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 16,
        backgroundColor:'skyblue',
        paddingVertical: 8
    },
    item: {
        padding: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',

    }
});