import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {AuthContext } from '../context/AuthContext';

const Messages = () => {
    const { user } = useContext(AuthContext);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [receiver, setReceiver] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/messages', {
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                    },
                });
                setMessages(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchMessages();
    }, []);

    const handleSend = async () => {
        try {
            const res = await axios.post(
                'http://localhost:5000/api/messages',
                { receiver, content: newMessage },
                {
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                    },
                }
            );
            setMessages([...messages, res.data]);
            setNewMessage('');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div>
                {messages.map((msg) => (
                    <div key={msg._id}>
                        <strong>{msg.sender.username}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                placeholder="Receiver ID"
                value={receiver}
                onChange={(e) => setReceiver(e.target.value)}
            />
            <textarea
                placeholder="Type your message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Messages;
