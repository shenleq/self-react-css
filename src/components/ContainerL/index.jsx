import React, {useEffect,useState} from 'react'
import LeafletTest from '../LeafletTest'
import Leaflet from '../Leaflet'

export default function ContainerL(props) {
  const [cm,setCm] = useState(0)
  const [pan,setPan] = useState([39.508186, 116.397411])
  return (
    <div>
      <Leaflet cm = {cm} pan= {pan}/>
      <LeafletTest setCm = {setCm} setP={setPan}/>
    </div>
  )
}
