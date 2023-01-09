import React, { useEffect, useState, memo } from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.min.css';

function ChoseCuontry(props) {
  let { setcontrol } = props
  const chosecontrol = val => { setcontrol(val) }
  return (
    <div className='chose-country'>
      <Button onClick={() => {
        console.log("G")
        chosecontrol(0)
      }}>中国</Button>
      <Button onClick={() => {
        console.log("G")
        chosecontrol(1)
      }}>澳大利亚</Button>
    </div>)
}

export default memo(ChoseCuontry);