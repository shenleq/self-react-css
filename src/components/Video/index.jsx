import React, { useEffect, useState } from 'react'
import processor from '../../config/processor';
import { Button } from 'antd';

import './index.css'
import 'antd/dist/antd.min.css'


export default function Video() {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    // const video = document.getElementsByTagName('video')
    // captureVideoPoster(V,fileName,'png')
    processor.doLoad()
  }, [])
  
  return (
    <div className='Video'>
      <video id='video'
        style={{
          width: 400,
          height: 239
        }}
        controls
        crossOrigin="anonymous"
        disablePictureInPicture={true}
        src="http://localhost:8000/video"></video>
      <div className='c-c'>
        <canvas id='canvas' width='800px' height='480px'
          style={{
            width: 400,
            height: 240
          }}></canvas>
          <div>
          <Button id='cut' onClick={() => {
          setImgUrl(processor.cut())
          // console.log(imgUrl)
          // if(typeof imgUrl !== undefined){
          //   dataURIToFile(imgUrl, 'D:\self-Study\study\self_react_s\react-Router-Echarts-Leaflet\public\saveimg')
          // }
        }} >截图</Button>
        <Button>录制</Button>
          </div>
      </div>
      <img src={imgUrl} alt="截图" className='img-catch' />
      {/* <img src={imgUrl} alt="" /> */}
    </div>
  )
}