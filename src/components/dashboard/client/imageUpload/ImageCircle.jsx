import React,{useState} from 'react';
import {connect,useSelector} from 'react-redux';
import ImageForm from './ImageForm';
import '../../../../sass/dashboard/client/imageUpload/imageCircle.scss';
const ImageCircle = (props) => {
    
    
    const [imageIsGettingUploadedDawg, setImageIsGettingUploadedDawg] =useState(false);
    const state = useSelector((state) => state.client);
    return (
        <div data-testid="image-container" className='image-circle-container'>
            {imageIsGettingUploadedDawg ? <ImageForm setImageIsGettingUploadedDawg={setImageIsGettingUploadedDawg} /> 
            : <div className='image-circle'>
            <div data-testid="image-uploader" className='upload-circle'>
                <button
                data-testid="image-upload-button"
                onClick={()=>setImageIsGettingUploadedDawg(true)}
                className='upload'><i className="fas fa-camera-retro fa-2x"></i></button>
            </div>
        </div> }
        
        {<h1 data-testid="client-display-name" className='client-name'>{props.state.first_name} {props.state.last_name}</h1>}
        
        </div>
        
    );
}
const mapStateToProps = (state) => {
	return {
		state: state.client.client_data,
	};
};

export default connect(mapStateToProps)(ImageCircle);
