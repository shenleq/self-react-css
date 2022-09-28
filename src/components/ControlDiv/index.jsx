import React, {useState, useEffect} from "react";
import { Button } from "antd";

import "./index.css"

function ControlDiv(props){
  const {setp} = props
  const [ViewList, setViewList] = useState([
    {
      id:"001",
      title:"Test1",
      axis:[39.909186, 116.397411]
    },
    {
      id:"002",

      title:"Test2",
      axis:[39.907186, 116.397411]
    },
    {
      id:"003",
      title:"Test3",
      axis:[39.909186, 116.36411]
    },
    {
      id:"004",
      title:"Test4",
      axis:[39.908186, 116.397411]
    },
  ])
  useEffect(() => {
    console.log(setp)
  },[])
  return (
    <div className="control-div">
      {ViewList.map(list => {
        return ( <div className='c-list' key={list.id}>
        <Button onClick = {() => {
            console.log("我真的服了")
            props.setp(list.axis)}}>
          点击聚焦到{list.title}
        </Button>
      </div>)
      })}
    </div>
  )
}
export default ControlDiv