import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { useEffect, useState } from 'react';
const Gallery = () => {
    const [images,setImages] = useState([])
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    useEffect(()=>{
        fetch('/img.json')
        .then(res => res.json())
        .then( data => setImages(data))
    },[])
   
    return (
        <div className="App ">
            <h1 className='my-10 font-semibold text-center lg:text-4xl md:text-3xl text-2xl'>CheckOut this <span className='text-blue-600'>Awesome</span> rooms</h1>
        <LightGallery
           elementClassNames='flex flex-wrap mx-auto justify-center gap-4 '
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            
        > 
        
        {
            images.map(image => <a className='max-w-[400px]' href={image}>
                <img  className='max-w-[400px]' alt="img1" src={image} />
            </a>
            )
        }
        
       
            
            
            
        </LightGallery>
    </div>
    );
};

export default Gallery;