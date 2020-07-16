import React, {useState, useEffect, useRef} from 'react';

const Video = props => {
    const [streamState, setStreamState] = useState({
        stream: false,
        active: false
    });
    const videoRef = useRef();
  
    useEffect(() => { 
      if( streamState.stream ){
        videoRef.current.srcObject = streamState.stream;
      }
    }, [streamState.stream]);

    useEffect(() => { 
      if( props.stream ){
        setStreamState({ stream: props.stream, active: true });
      }
    }, [props.stream]);

    const startStream = async () => {
        try {
            const newStream = await navigator.mediaDevices.getUserMedia({audio: true, video: true});
            setStreamState({stream: newStream, active: true});
            props.setUserStream(newStream);
        } catch(err){
            console.error(err);
        }
    }

    const stopStream = () => {
        streamState.stream.getTracks().forEach(track => track.stop());
        setStreamState({...streamState, active: false})
    }

    const handleClick = () => {
        streamState.active ? stopStream() : startStream();
    }

    return (
        <div className="stream-block">
            <video style={{'background': 'black'}} ref={ videoRef } autoPlay playsInline muted controls></video>
           { props.user === 'self' && <button onClick={ handleClick }>{ streamState.active ? 'Stop' : 'Start' } Video </button> }
        </div>
    );
}

export default Video;