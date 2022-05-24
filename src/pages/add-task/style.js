import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contain: {
        width: "100%",
        height: "100%",
        paddingTop: 50,
        alignItems: "center",
        padding: 20
    },
    form:{
        width: "100%",
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: "#fe4747"
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#fe4747",
        width: "100%",
        color: "#000",
        marginBottom: 25,
        backgroundColor: "#cececece",
        borderRadius: 10,
        padding: 10

    },
    labelPriority: {
        fontSize: 18,
        marginBottom: 10,
        color: "#fe4747"


    },
    containPriority: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    btnWarning: {
        backgroundColor: "#fe4747",
        padding: 20,
        borderRadius: 50,
    },
    btnAttention: {
        backgroundColor: "#d8ff00",
        padding: 20,
        borderRadius: 50
    },
    btnNormal: {
        backgroundColor: "#00a9ff",
        padding: 20,
        borderRadius: 50
    },
    btnAdd: {
        backgroundColor: "#16f971",
        width: "95%",
        height: "10%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 100
    },
    btnClear: {
        backgroundColor: "#00a9ff",
        width: "95%",
        height: "10%",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 25
    },
})

export default styles