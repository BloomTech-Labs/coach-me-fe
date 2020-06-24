import React,{useState} from 'react';
import {connect,useSelector} from 'react-redux';
import ImageForm from './ImageForm';
import '../../../../sass/dashboard/client/imageUpload/imageCircle.scss';
const ImageCircle = (props) => {
    
    
    const [imageIsGettingUploadedDawg, setImageIsGettingUploadedDawg] =useState(false);
    const state = useSelector((state) => state.client);
    console.log(props.state)
    return (
        <div className='image-circle-container'>
            {imageIsGettingUploadedDawg ? <ImageForm setImageIsGettingUploadedDawg={setImageIsGettingUploadedDawg} /> 
            : <div className='image-circle'>
            <div className='upload-circle'>
                <button
                onClick={()=>setImageIsGettingUploadedDawg(true)}
                className='upload'><i className="fas fa-camera-retro fa-2x"></i></button>
            </div>
        </div> }
        
        </div>
        
    );
}
const mapStateToProps = (state) => {
	return {
		state: state.client.client_data,
	};
};

export default connect(mapStateToProps)(ImageCircle);
