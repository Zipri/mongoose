import React, {useState} from 'react';
import s from './styles.module.css'
import axios from "axios";

const Find = () => {
  const [Data, setData] = useState([])
  const [Name, setName] = useState("")
  console.log(Name)
  const getSer = () => {
    const url = 'http://localhost:8000/series/title/' + Name
    axios.get(url)
      .then(response => {
        const result = response.data
        const {status, message, data} = result
        if (status !== 'SUCCESS') {
          alert(message, status)
        } else {
          setData(data)
          console.log(data)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }



  return <div>
    <div>
      Введите название сериала:
      <input onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => {
        getSer('1')
      }}>Найти
      </button>
    </div>
    <div>
      Title
      <label> {Data.title}</label>
    </div>
    <div>
      Premiere
      <label> {Data.premiere}</label>
    </div>
    <div>
      Rating
      <label> {Data.rating}</label>
    </div>
    <div>
      Trailer
      <label> {Data.trailer}</label>
    </div>
    <div>
      Cover
      <label> {Data.cover}</label>
    </div>
    <div>
      Seasons
      <label> {Data.seasons}</label>
    </div>
  </div>
};

export default Find;