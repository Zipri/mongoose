import React, {useEffect, useState} from 'react';
import s from './styles.module.css'
import axios from "axios";

const SeriesItem = ({item}) => <li className={s.series_item}>
  <h1><span className={s.series_item_label}>Title</span>: {item.title}</h1>
  <h2><span className={s.series_item_label}>Premiere</span>: {item.premiere}</h2>
  <h2><span className={s.series_item_label}>Rating</span>: {item.rating}</h2>
  <h2><span className={s.series_item_label}>Trailer</span>: {item.trailer}</h2>
  <h2><span className={s.series_item_label}>Cover</span>: {item.cover}</h2>
</li>

const Series = () => {
  const [seriesData, setSeriesData] = useState([])
  const getSeriesData = () => {
    const url = "http://localhost:8000/series/"
    axios.get(url).then(response => {
      const result = response.data
      const {status, message, data} = result
      if (status === "Success") {
        setSeriesData(data)
        console.log(seriesData)
      } else {
        alert(`${message}\n${status}`)
      }
    }).catch(error => console.log(error))
  }
  useEffect(() => {getSeriesData()}, [])
  return <article>
    <button className={s.btn_main}>
      Add new series
    </button>
    <ul>
      {seriesData.map(item => <SeriesItem item={item}/>)}
    </ul>
  </article>
};

export default Series;