import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from "./style";

import database from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function AddTask({ navigation }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState("normal")

    function AddPriority(p){
        setPriority(p)
    }

    function addTask(){
        addDoc(collection(database, "Tasks"), {
            title: title,
            description: description,
            priority: priority,
            status: false,
        })
        navigation.navigate("Home")
    }

    function clear(){
        setTitle(''),
        setDescription('')
        setPriority("normal")
    }

    return (
        <View style={styles.contain}>
          <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
            <TextInput
                name="title"
                onChangeText={setTitle}
                value={title}
                style={styles.input}
                keyboardType="default" placeholder="Name of the task" />
            <Text style={styles.label}>Description</Text>
            <TextInput
                name="description"
                onChangeText={setDescription}
                value={description}
                style={styles.input}
                keyboardType="default" placeholder="What´s your objective" />
            <Text style={styles.labelPriority}>Priority</Text>
            <View style={styles.containPriority}>
                <TouchableOpacity
                    onPress={() => AddPriority("warning")}
                    style={styles.btnWarning}>
                    <Text>Warning</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => AddPriority("attention")}
                    style={styles.btnAttention}>
                    <Text>Attention</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => AddPriority("normal")}
                    style={styles.btnNormal}>
                    <Text>Normal</Text>
                </TouchableOpacity>
            </View>
          </View>
            <TouchableOpacity
                onPress={() => addTask()}
                style={styles.btnAdd}>
                <Text>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => clear()}
                style={styles.btnClear}>
                <Text>Clear</Text>
            </TouchableOpacity>
        </View>
    )
}