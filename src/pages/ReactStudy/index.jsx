import React from 'react'
import Header from '../../components/Header'
import ContainerL from '../../components/ContainerL'
import AntTable from '../../components/AntTable'
import {Route, Routes, Navigate, BrowserRouter, useRoutes, NavLink} from 'react-router-dom'
import useMap from "../../routes"

export default function ReactStudy() {
  const element = useRoutes(useMap)
  return (
    <div>
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
			</div>
    </div>
  )
}
