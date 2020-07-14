import Peer from 'simple-peer';

class VideoCall {
    constructor(userId, socket){
        this.userId = userId;
        this.socket = socket;
    }

    callPeer = (id, stream, setPartnerVideo) => {
        const peer = new Peer({
        initiator: true,
        trickle: false,
        config: {
            iceServers: [
              {
                "url":"stun:global.stun.twilio.com:3478?transport=udp",
                "urls":"stun:global.stun.twilio.com:3478?transport=udp"
                },
                {
                "url":"turn:global.turn.twilio.com:3478?transport=udp",
                "username":"277ebeb5637a3d78866798255e557131b2935931de64ec6a0f6c554f491f4eea",
                "urls":"turn:global.turn.twilio.com:3478?transport=udp",
                "credential":"HINug75Mo0E/Msy2ja1gQohp4uEoLJCZoFTdIPlmGVk="
                },
                {
                "url":"turn:global.turn.twilio.com:3478?transport=tcp",
                "username":"277ebeb5637a3d78866798255e557131b2935931de64ec6a0f6c554f491f4eea",
                "urls":"turn:global.turn.twilio.com:3478?transport=tcp",
                "credential":"HINug75Mo0E/Msy2ja1gQohp4uEoLJCZoFTdIPlmGVk="
                },
                {
                "url":"turn:global.turn.twilio.com:443?transport=tcp",
                "username":"277ebeb5637a3d78866798255e557131b2935931de64ec6a0f6c554f491f4eea",
                "urls":"turn:global.turn.twilio.com:443?transport=tcp",
                "credential":"HINug75Mo0E/Msy2ja1gQohp4uEoLJCZoFTdIPlmGVk="
                }
            ],
            sdpSemantics: 'unified-plan'
        },
        stream: stream,
        });

        peer.on("signal", data => {
          this.socket.current.emit("callUser", { userToCall: id, signalData: data, from: this.userId })
        });

        peer.on("stream", stream => {
          setPartnerVideo(stream);
        });

        this.socket.current.on("callAccepted", signal => {
          peer.signal(signal);
        });
    }

  acceptCall = ( caller, setPartnerVideo, userStream ) => {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: userStream,
    });

    peer.on("signal", data => {
      this.socket.current.emit("acceptCall", { signal: data, to: caller.id })
    });

    peer.on("stream", stream => {
      setPartnerVideo(stream);
    });

    peer.signal(caller.signal);
  }
  
}

export default VideoCall;