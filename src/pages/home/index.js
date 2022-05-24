import react, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from 'react-native'

import styles from "./style";

import database from "../../config/firebase";
import { collection, doc, onSnapshot, deleteDoc, } from "firebase/firestore";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Home({ navigation }) {

    const [task, setTask] = useState([])


    //Connection firestore

    useEffect(() => {
        const db = onSnapshot(collection(database, "Tasks"), (doc) => {
            const list = []
            doc.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])

    function deleteItem(id) {
        deleteDoc(doc(database, "Tasks", id))

    }

    //Render items

    const Item = ({ title, description }) => (
        <View>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text>{description}</Text>
        </View>
    );

    const renderItem = ({ item }) => {
        const bg = bgColor => {
            if (item.priority === "warning") {
                bgColor = "#fccccc"
            }
            else if (item.priority === "attention") {
                bgColor = "#f9f9c9"
            }
            else {
                bgColor = "#caeaf9"
            }
            return bgColor
        }
        return (
            <View style={[styles.taskItem, { backgroundColor: bg() }]}>
                <View style={styles.itemTitle}>
                    <Item title={item.title} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Edit',
                            {
                                id: item.id,
                                title: item.title,
                                description: item.description,
                                priority: item.priority
                            })}
                        style={styles.btnEdit}>
                        <FontAwesome5 name="pen" size={15} />
                    </TouchableOpacity>
                </View>
                <View style={styles.intemDescription}>
                    <Item title={item.description} />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity
                        style={styles.btnDone}>
                        <Text>Done</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => deleteItem(item.id)}
                        style={styles.btnDelete}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.contain}>
            <FlatList
                data={task}
                renderItem={renderItem}
                keyExtractor={item => item.id} />
            <TouchableOpacity
                onPress={() => navigation.navigate('Task')}
                style={styles.btnAdd}>
                <Text style={styles.textBtn}>+</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}