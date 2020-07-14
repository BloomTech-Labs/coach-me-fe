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
        axios.post('http://localhost:5000/api/media/upload_image', data, {
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
        upload()
    }
    return (
        <div data-testid="image-form" className='form-boi'>
            <form>
                <div data-testid="chooser" className="file-chooser">
                    <label htmlFor="file">Choose a file</label>
                    <input 
                    type="file" 
                    className='file-input' 
                    id='file'
                    data-testid="image-input"
                    onChange={changeHandler}
                    />
                </div>
                <button
                data-testid="submit"
                onClick={submitHandler}
                 className='upload-image'>Upload</button>
            </form>

            <i
            data-testid="cancel"
            onClick={()=>props.setImageIsGettingUploadedDawg(false)} 
            className="far fa-window-close cancel"></i>
        </div>
    );
}

export default ImageForm;
