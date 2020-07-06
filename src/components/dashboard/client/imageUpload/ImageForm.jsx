import React,{useState} from 'react';
import axios from 'axios';
import '../../../../sass/dashboard/client/imageUpload/imageForm.scss';

const ImageForm = (props) => {
    const [file, setfile] =useState('')


    const changeHandler = (e) => {
        setfile(e.target.files[0]);
        console.log(file)
    }
    const upload = () =>{
        const data = new FormData();
        data.append('profile_image', file, file.name);
        axios.post('${process.env.REACT_APP_BACKEND}/media/upload_image', data, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US;en;q=0.8',
                'Content-Type': `multipart/form-data; boundary="${data._boundary}`
            }
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        alert(file)
        upload()
    }
    return (
        <div className='form-boi'>
            <form>
                <div className="file-chooser">
                    <label htmlFor="file">Choose a file</label>
                    <input 
                    type="file" 
                    className='file-input' 
                    id='file'
                    onChange={changeHandler}
                    />
                </div>
                <button
                onClick={submitHandler}
                 className='upload-image'>Upload</button>
            </form>

            <i
            onClick={()=>props.setImageIsGettingUploadedDawg(false)} 
            className="far fa-window-close cancel"></i>
        </div>
    );
}

export default ImageForm;
