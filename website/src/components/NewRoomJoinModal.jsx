import React, { useState } from 'react';

import Close from './../images/Close.png';

const NewRoomJoinModal = ({ handleRoomJoin, closeModal, roomId }) => {
    const [newRoomId, setNewRoomId] = useState(roomId);

    const handleNewRoomIdChange = (e) => {
        const value = e.target.value;
        setNewRoomId(value);
    };

    return (
        <div className="my-modal-background">
            <div className="my-modal-container">
                <div className="close-btn">
                    <button onClick={closeModal}>
                        <img src={Close} alt="Close" />
                    </button>
                </div>
                <div className="my-modal-content">
                    <h2>Join room</h2>
                    <div className="roomIdInput">
                        <input value={newRoomId} placeholder="Enter room Id" onChange={handleNewRoomIdChange} />
                    </div>
                    <button className="custom-btn" onClick={() => handleRoomJoin(newRoomId)}>
                        Join
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewRoomJoinModal;
