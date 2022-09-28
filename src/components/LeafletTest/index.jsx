import React, {useEffect, useState} from 'react'
import {Button} from 'antd';
import 'antd/dist/antd.css'

export default function LeafletTest(props) {
  let {setCm,setP} = props
  const setCM = (m) => {
    setCm(m)
  }
  const setPan = (m) => {
    setP(m)
  }
  return (
    <div className='leafletTest'>
      <div className='l-b'><Button type='primary' onClick={() => setCM(0)}>打开标记</Button></div>
      <div className='l-b'><Button type='primary' onClick={() => setCM(1)}>关闭标记</Button></div>
      <div className='l-b'><Button type='primary' onClick={() => setPan([39.508186, 116.397411])}>点击聚焦到A</Button></div>
      <div className='l-b'><Button type='primary' onClick={() => setPan([39.809186, 116.36411])}>点击聚焦到B</Button></div>
      <div className='l-b'><Button type='primary' onClick={() => setPan([39.707186, 116.396411])}>点击聚焦到C</Button></div>
      <div className='l-b'><Button type='primary' onClick={() => setPan([39.609186, 116.387411])}>点击聚焦到D</Button></div>
    </div>
  )
}
