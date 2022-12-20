import React, {useState} from 'react';
import s from './styles.module.css'
import axios from "axios";

const Add = () => {
  const [title, setTitle] = useState("")
  const [premiere, setPremiere] = useState("")
  const [rating, setRating] = useState(50)
  const [trailer, setTrailer] = useState("")
  const [cover, setCover] = useState("123")

  const addToDb = () => {
    const url = 'http://localhost:8000/series/'
    const Credentials = {title, premiere, rating, trailer, cover}
    console.log(Credentials)
    axios.post(url, Credentials)
      .then(response => {
        const result = response.data
        const {status, message} = result
        if (status !== 'Success') {
          alert(message, status)
        } else {
          alert(message)
          window.location.reload()
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return <div>
    <div>
      Title
      <input onChange={(e) => setTitle(e.target.value)}/>
    </div>
    <div>
      Premiere
      <input onChange={(e) => setPremiere(e.target.value)}/>
    </div>
    <div>
      Rating
      <input onChange={(e) => setRating(e.target.value)}/>
    </div>
    <div>
      Trailer
      <input onChange={(e) => setTrailer(e.target.value)}/>
    </div>
    <div>
      Cover
      <input onChange={(e) => setCover(e.target.value)}/>
    </div>
    <div>
      <button onClick={()=>{
        addToDb()}}>Добавить</button>
    </div>
  </div>
};

export default Add;