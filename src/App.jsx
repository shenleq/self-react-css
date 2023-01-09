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
import React from 'react'
import Header from './components/Header'
import ContainerL from './components/ContainerL'
import AntTable from './components/AntTable'
import StudyCss from './pages/studyCss'
import Canvas from './components/Canvas'
import {Route, Routes, Navigate, BrowserRouter, useRoutes, NavLink} from 'react-router-dom'
import useMap from "./routes"

export default function ReactStudy() {
  const element = useRoutes(useMap)
  return (
    <>
      	<div className='R-Echars'>
				<Header />
				{/* <Routes>
					  	<Route path='/Bar' element={<Bar/>} />
					  	<Route path='/LineEcharts' element={<LineEcharts/>} />
					  	<Route path='/SmoothedLineChart' element={<SmoothedLineChart/>} />
					  	<Route path='/TransverseChart' element={<TransverseChart/>} />
					  	<Route path='/Pie' element={<Pie/>} />
							<Route path='/' element={<Navigate to="/Bar"/>} />
					  </Routes> */}
				{element}
				<div className='L-C'>
					<ContainerL/>
					{/* <ControlDiv setp={setp}/> */}
				</div>
				<AntTable />
				<Canvas />
			</div>
    </>
		// <div><StudyCss></StudyCss></div>
  )
}







