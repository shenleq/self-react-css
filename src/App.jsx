// import React, { useEffect, useState, Provider } from 'react'
// import StudyCss from './pages/studyCss'
// import ReactStudy from './pages/ReactStudy'
// import {Route, Routes, Navigate, BrowserRouter, useRoutes, NavLink} from 'react-router-dom'
// import useMap from "./routes"

// // import Bar from './components/Echarts/Bar'
// // import LineEcharts from './components/Echarts/LineChart'
// // import SmoothedLineChart from './components/Echarts/SmoothedLineChart'
// // import TransverseChart from './components/Echarts/TransverseChart'
// // import Pie from './components/Echarts/Pie'

// export default function App() {
// 	const element = useRoutes(useMap)
// 	return (
// 		<div>
// 			<Routes>
// 				<Route path='/study-css' key="study-css" element={<StudyCss/>} />
// 			</Routes>
// 			<Routes>
// 				<Route path='/react-study' key="react-study" element={<ReactStudy/>} />
// 			</Routes>
// 			<NavLink to='study-css' target="_blank">我的css特效学习</NavLink>
// 			<NavLink to='react-study' target="_blank">我的react学习</NavLink>
// 			<video src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"></video>
// 		</div>
// 	)
// }
import React, { useEffect, useState } from 'react'
import { Watermark, FloatButton, message } from 'antd'
import Header from './components/Header'
import ContainerL from './components/ContainerL'
import AntTable from './components/AntTable'
import StudyCss from './pages/studyCss'
import Canvas from './components/Canvas'
import {Route, Routes, Navigate, BrowserRouter, useRoutes, NavLink} from 'react-router-dom'
import useMap from "./routes"
import mockjs from 'mockjs'

export default function ReactStudy() {
	const path = [
    {id:'001',path:'Bar'},
    {id:'002',path:'LineEcharts'},
    {id:'003',path:'SmoothedLineChart'},
    {id:'004',path:'TransverseChart'},
    {id:'005',path:'Pie'},
    {id:'006',path:'Self'},
    {id:'007',path:'Video'},
    {id:'008',path:'AHooks'},
    {id:'009',path:'TicTokStudy'},
    {id:'010',path:'JueJinStudy'},
  ]
  const element = useRoutes(useMap)
	const [mapState, setMapState] = useState(0) //控制地图模块显示
	useEffect(() => {
		window.__proto__.myMock = mockjs
	},[])
  return (
		<Watermark content="Wang QiPeng">
		<>
      	<div className='R-Echars'>
				<Header 
				  path={path}
					setMapState={setMapState}
				/>
				{/* <Routes>
					  	<Route path='/Bar' element={<Bar/>} />
					  	<Route path='/LineEcharts' element={<LineEcharts/>} />
					  	<Route path='/SmoothedLineChart' element={<SmoothedLineChart/>} />
					  	<Route path='/TransverseChart' element={<TransverseChart/>} />
					  	<Route path='/Pie' element={<Pie/>} />
							<Route path='/' element={<Navigate to="/Bar"/>} />
					  </Routes> */}
				{element}
				{
					mapState ? (
						<>
						  <div className='L-C'>
						    <ContainerL/>
						  {/* <ControlDiv setp={setp}/> */}
					    </div>
							<AntTable />
				      <Canvas />
						</>
					) : ''
				}
			</div>
    </>
		<FloatButton onClick={() => message.info("我去你的！")} />
    </Watermark>
		// <div><StudyCss></StudyCss></div>
  )
}







