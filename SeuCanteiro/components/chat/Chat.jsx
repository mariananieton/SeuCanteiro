import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Menu from "../menu/Menu";

const Chat = ({ navigation }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [resposta, setResposta] = useState("");

    const sendMessage = async () => {
        try {
            if (message.trim() !== "") {
                const response = await fetch("http://IP:8080/api/v1/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        message,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Falha ao enviar mensagem");
                }

                const respostaDoServidor = await response.text();
                setResposta(respostaDoServidor);

              
                setMessages([{ text: message }]);
                setMessage("");
            }
        } catch (error) {
            console.error("Erro ao enviar mensagem:", error.message);
        }
    };

    return (
        <View style={styles.container}>
       
            <View style={styles.chatContainer}>
                <View style={styles.messagesContainer}>
                    {messages.map((msg, index) => (
                        <Text key={index} style={styles.message}>
                            {msg.text}
                        </Text>
                    ))}
                    {resposta !== "" && (
                        <Text style={styles.resposta}>
                            {resposta}
                        </Text>
                    )}
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua mensagem"
                        value={message}
                        onChangeText={setMessage}
                    />
                    <TouchableOpacity style={styles.button} onPress={sendMessage}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Menu navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chatContainer: {
        flex: 1,
        marginTop: 20,
    },
    messagesContainer: {
        flex: 1,
        padding: 10,
    },
    message: {
        fontSize: 16,
        marginBottom: 5,
    },
    resposta: {
        fontSize: 16,
        marginBottom: 5,
        color: "#079204", 
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "#06980C",
        borderRadius: 30,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    button: {
        backgroundColor: "#A2FF82",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 30,
    },
    buttonText: {
        color: "#000",
        fontSize: 14,
        fontWeight: "bold",
    },
});

export default Chat;