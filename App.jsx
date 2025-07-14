import {useState} from 'react'
import './App.css'
import parrot from './assets/parrot.png';
import nov from './assets/nov.png';

function App(){
  
  return (
    <>
      <h1>Samyak Infotech</h1>
      <img className='img' src={parrot} />
     
      <div className='child'>
      </div>
      <div className='honor'>
         <div className='parent'>
        
      </div>
      </div>
      <p>This is nature beauti <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit nisi expedita reprehenderit veniam obcaecati, magni tenetur voluptatem amet ipsam! Nostrum corrupti doloribus repudiandae, ipsam reiciendis incidunt aliquid possimus consectetur
      This is nature beauti <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium sit nisi expedita reprehenderit veniam obcaecati, magni tenetur voluptatem amet ipsam! Nostrum corrupti doloribus repudiandae, ipsam reiciendis incidunt aliquid possimus consectetur.</p>
       <img className='nov' src={nov} />
    </>
    )
  };
export default App;
