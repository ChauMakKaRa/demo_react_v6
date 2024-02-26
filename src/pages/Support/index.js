import React, { useState, useRef } from 'react';

const Support = () => {
    const [messages, setMessages] = useState([]);
    const inputRef = useRef();

    const handleSendMessage = () => {
        const messageText = inputRef.current.value;
        if (messageText) {
            setMessages((prevMessages) => [...prevMessages, { text: messageText, sender: 'user' }]);
            // Gửi tin nhắn tới hệ thống hỗ trợ (có thể sử dụng API tương ứng)
            inputRef.current.value = ''; // Xóa input text sau khi gửi tin nhắn
        }
    };

    return (
        <div>
            <div style={{ height: '400px', overflowY: 'scroll' }}>
                {messages.map((message, index) => (
                    <div key={index} style={{ textAlign: message.sender === 'user' ? 'right' : 'left' }}>
                        <span
                            style={{
                                padding: '5px 10px',
                                borderRadius: '6px',
                                backgroundColor: message.sender === 'user' ? '#DCF8C6' : '#E6E6E6',
                            }}
                        >
                            {message.text}
                        </span>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <input type="text" ref={inputRef} />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Support;
