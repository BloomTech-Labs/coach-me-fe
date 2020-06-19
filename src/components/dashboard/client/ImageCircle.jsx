import React from 'react';
import '../../../sass/dashboard/client/imageCircle.scss';
const ImageCircle = () => {
    
    
    // const upload = () =>{
    //     const data = new FormData();
    //     data.append('profile_image', files, files.name);
    //     axios.post('http://localhost:5000/api/media/upload_image', data, {
    //         headers: {
    //             'accept': 'application/json',
    //             'Accept-Language': 'en-US;en;q=0.8',
    //             'Content-Type': `multipart/form-data; boundary="${data._boundary}`
    //         }
    //     }).then(res=>{
    //         console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //     })
    // }

    return (
        <div className='image-circle'>
            <div className='upload-circle'>
                <button
                className='upload'><i className="fas fa-camera-retro fa-2x"></i></button>
            </div>
        </div>
    );
}

export default ImageCircle;
