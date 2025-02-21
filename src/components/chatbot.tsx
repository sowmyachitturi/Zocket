"use client";

import React, { useState } from "react";
import "./chatbot.css";

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");
        setLoading(true);

        try {
            // Using a more suitable endpoint for chat (Mistral-7B-Instruct)
            const response = await fetch(
                "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_HUGGINGFACE_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        inputs: input,
                        parameters: {
                            max_new_tokens: 150,
                            return_full_text: false, // Only get the generated response
                        },
                    }),
                }
            );

            const data = await response.json();
            console.log("🔍 Full API Response:", JSON.stringify(data, null, 2));

            let botResponse = "Sorry, I couldn't generate a response.";

            if (!response.ok) {
                throw new Error(`API Error: ${data.error || "Unknown error"}`);
            }

            // Updated response parsing
            if (Array.isArray(data) && data[0]?.generated_text) {
                botResponse = data[0].generated_text.trim();
            } else if (data?.generated_text) {
                botResponse = data.generated_text.trim();
            } else {
                console.warn("⚠️ Unexpected response structure:", data);
            }

            const botMessage = { role: "assistant" as const, content: botResponse };
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("🚨 Chatbot error:", error);
            // Use type assertion to treat error as an object with a message property
            const errorMessage = { role: "assistant" as const, content: `Error: ${(error as Error).message}` };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !loading) {
            handleSend();
        }
    };

    return (
        <div className="chatbot-container">
            <h3>AI Task Assistant</h3>
            <div className="chatbox">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
                {loading && <div className="message assistant">Thinking...</div>}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask for task recommendations..."
                    disabled={loading}
                />
                <button onClick={handleSend} disabled={loading}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chatbot;