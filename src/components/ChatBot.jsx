import { useState } from "react";

const botReplies = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("project")) {
        return "I have built multiple projects using React, Tailwind CSS, Node.js and MongoDB. My projects focus on clean UI, responsiveness and real-world use cases.";
    }

    if (msg.includes("skill")) {
        return "My key skills are HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, MongoDB and MySQL.";
    }

    if (msg.includes("who are you") || msg.includes("about you")) {
        return "I am Hemlal Kumar, a passionate Full Stack Developer who loves building modern and user-friendly web applications.";
    }

    return "That's a great question! You can ask me about my projects, skills, or who I am 🙂";
};

const ChatBot = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi 👋 I am Hemlal's AI Assistant. How can I help you?" }
    ]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        const botMsg = { sender: "bot", text: botReplies(input) };

        setMessages([...messages, userMsg, botMsg]);
        setInput("");
    };

    return (
        <>
            {/* CHAT BUBBLE */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 left-6 bg-blue-500 text-white p-4 rounded-full shadow-lg z-50"
            >
                🤖
            </button>

            {/* CHAT BOX */}
            {open && (
                <div className="fixed bottom-20 left-6 w-80 bg-black border border-blue-500 rounded-lg shadow-lg z-50">
                    <div className="p-3 font-bold text-blue-400 border-b border-blue-500">
                        AI Chatbot
                    </div>

                    <div className="p-3 h-64 overflow-y-auto text-sm space-y-2">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`p-2 rounded ${msg.sender === "user"
                                        ? "bg-blue-500 text-white text-right"
                                        : "bg-gray-800 text-gray-200"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex border-t border-blue-500">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask something..."
                            className="flex-1 p-2 bg-black text-white outline-none"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-blue-500 px-4"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
