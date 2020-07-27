import React, { useState, useEffect, useRef } from 'react';
import VideoCall from './VideoCall';
import io from 'socket.io-client';

import '../../sass/chat/chat.scss';

import Video from './Video';
import { Caller, Available, OnlineUsers } from './PeerConnections';
import SessionNotes from './SessionNotes';

const Chat = () => {
    const [chatSession, setChatSession] = useState({
        partnerStream: null,
        partnerData: null,
        userStream: null,
        userId: null,
    });

    const [callData, setCallData] = useState({
        receivingCall: false,
        caller: {
            id: '',
            name: '',
            signal: null,
            stream: false,
        },
        callAccepted: false,
    });
    const [coachOnline, updateOnline] = useState({});
    const [usersOnline, updateOnlineUsers] = useState([]);
    const [callController, setCallController] = useState(false);

    const socket = useRef();
    const setUserStream = (stream) =>
        setChatSession({ ...chatSession, userStream: stream });
    const setPartnerStream = (stream) =>
        setChatSession({ ...chatSession, partnerStream: stream });

    useEffect(() => {
        socket.current = io('https://coach-me-be.herokuapp.com/');
        socket.current.on('init', (id) => {
            setCallController(new VideoCall(id, socket));
            setChatSession({ ...chatSession, userId: id });
        });
        socket.current.on('coachOnline', (coach) => {
            updateOnline({ ...coach });
        });
        socket.current.on('usersOnline', (users) => {
            updateOnlineUsers([...usersOnline, ...users]);
        });
        socket.current.on('aClient', () => console.log("I'm a Client"));
        socket.current.on('aCoach', () => console.log("I'm a Coach"));
        socket.current.on('callRequest', (data) => {
            setCallData({
                ...callData,
                caller: {
                    id: data.from,
                    name: data.from,
                    signal: data.signal,
                },
            });
        });
    }, []);
    return (
        <div className="chat-container">
            <div className="videos">
                {
                    // chatSession.partnerStream &&
                    <div
                        onClick={() => {
                            console.log('working...');
                            socket.current.emit('easy', 'hello');
                        }}
                        className="my-video"
                    >
                        <Video
                            poster="https://media.tenor.com/images/96abb4fe817afa8bb2d0ad9439b30f0b/tenor.gif"
                            user={callData.caller}
                            className="peers-video"
                            stream={chatSession.partnerStream}
                            callController={callController}
                        />
                    </div>
                }
                <div className="peers-video">
                    <Video muted user="self" setUserStream={setUserStream} />
                </div>
            </div>
            {callData.caller.signal && (
                <div className="incoming-call">
                    <h2>Incoming call!</h2>
                    <Caller
                        caller={callData.caller}
                        answer={callController.acceptCall}
                        userStream={chatSession.userStream}
                        answerCallback={setPartnerStream}
                    />
                </div>
            )}
            {usersOnline.length && (
                <div className="online-users">
                    <OnlineUsers
                        users={[...usersOnline]}
                        userStream={chatSession.userStream}
                        userId={chatSession.userId}
                        callPeer={callController.callPeer}
                        setPartnerStream={setPartnerStream}
                    />
                </div>
            )}
            {/* {callController && Object.entries(coachOnline).length && (
                    <Available
                        available={coachOnline}
                        userStream={chatSession.userStream}
                        userId={chatSession.userId}
                        callPeer={callController.callPeer}
                        setPartnerStream={setPartnerStream}
                    />
                )} */}
            <div className="session-note-section">
                <SessionNotes />
            </div>
        </div>
    );
};

export default Chat;
