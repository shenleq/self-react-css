import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Header(props) {
  const {setMapState} = {...props}
  const path = props.path
  // const ThemeContext = React.createContext(path);
  const navigate = useNavigate();
  return (
    <div className='header'>
        {path.map(p => {
          if(p.id==='001'||p.id==='002'||p.id==='003')
        //  链接路由跳转 
            return (
            <li key={p.id} className='Li' onClick={() => {setMapState(1)}}>
            <NavLink 
              to={`/${p.path}`}  
            >点击跳转到{p.path}</NavLink>
            </li>)
          else 
        {/* 编程路由跳转 */}
            return (
            <button key={p.id} onClick={() => {
              if(p.id == "007" || p.id==='008'||p.id==='009'){
                setMapState(0)
              }else{
                setMapState(1)
              }
              navigate(`/${p.path}`)}}>点击跳转到{p.path}</button>
            )
        })} 
    </div>
  )
}
