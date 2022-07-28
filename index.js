import styles from '../styles/Home.module.css';
import React from 'react';
import {storage} from "../firebase.js";
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid';
import axios from 'axios';

export default function Home()
{
  const [file, setFile] = React.useState(null);
  
  const uploadImage = () =>
  {
    console.log(storage);
    if(file == null)return;
    const imageRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytes(imageRef, file).then(() =>
    {
      const link = getDownloadURL(imageRef);
      console.log(link);
      axios.post('http://localhost:3000/api/imageFilter',
      {
        imgUrl: link
      })
      .then((res) =>
      {
        console.log(res.data);
      });
    });
  }

  return (
    <div>
      <input onChange = {(e) => setFile(e.target.files[0])} type = "file"/>
      <button onClick = {uploadImage}>Upload Image</button>
    </div>
  )
}
