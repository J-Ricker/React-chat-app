import React from 'react';

const DUMMY_DATA = [
    {
    senderId: "perborgen",
    text: "who'll win?"
    },
    {
    senderId: "janedoe",
    text: "who'll win?"
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div>{message.text}</div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList