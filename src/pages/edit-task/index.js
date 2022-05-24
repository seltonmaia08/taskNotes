import react, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from "./style";

import database from "../../config/firebase";
import { setDoc, doc } from "firebase/firestore";


export default function EditTask({ navigation, route }) {

    const [titleEdit, setTitleEdit] = useState(route.params.title)
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const [priorityEdit, setPriorityEdit] = useState(route.params.priority)
    const id = route.params.id

    function AddPriority(p){
        setPriorityEdit(p)
    }

    function EditTask(){
        setDoc(doc(database, "Tasks", id), {
            title: titleEdit,
            description: descriptionEdit,
            priority: priorityEdit,
            status: false,
        })
        navigation.navigate("Home")
    }

    return (
        <View style={styles.contain}>
          <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
            <TextInput
                name="title"
                onChangeText={setTitleEdit}
                value={titleEdit}
                style={styles.input}
                keyboardType="default" placeholder="Name of the task" />
            <Text style={styles.label}>Description</Text>
            <TextInput
                name="description"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
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
                onPress={() => EditTask()}
                style={styles.btnAdd}>
                <Text>Update</Text>
            </TouchableOpacity>
        </View>
    )
}