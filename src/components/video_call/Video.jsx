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
            const newStream = await navigator.mediaDevices.getUserMedia({audio: true, video: true, autoplay: true});
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
            <video poster="https://thumbs.gfycat.com/AlarmingMindlessFlamingo-small.gif" ref={ videoRef } autoPlay playsInline muted={props.muted}></video>
           { props.user === 'self' && <button className="start-video-btn" onClick={ handleClick }>{ !streamState.active ? <i className="fas fa-video"></i> : <i className="fas fa-video-slash"></i>}</button> }
        </div>
    );
}

export default Video;