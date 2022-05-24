import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contain: {
        width: "100%",
        height: "100%",
        padding: 10,
    },
    btnAdd: {
        width: 70,
        height: 70,
        backgroundColor: "#fe4747",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 20,
        bottom: 40,
    },
    textBtn: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    },
    taskItem: {
        height: 110,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 15
    },
    itemTitle: {
        width: "100%",
        alignItems: "center",
        fontSize: 18,
        fontWeight: "bold"
    },
    btnEdit: {
        position: "absolute",
        top: 3,
        right: 15,
    },
    intemDescription: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    btns: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        width: "100%",
        right: 0,
        height: 30
    },
    btnDone: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00a9ff",
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    btnDelete: {
        width: "50%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fe4747",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },
    messageError: {
        backgroundColor: "#fe8787",
        width: "95%",
        height: "5%",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
    },
    textError: {
        fontWeight: "bold",
        color: "#fff"
    }


})

export default styles