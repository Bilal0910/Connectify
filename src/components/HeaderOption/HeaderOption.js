import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'

const HeaderOption = ({Icon, title, avatar, onClick}) => {
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && <Avatar className='headerOption__icon' style={{border: "0.2px solid rgb(126, 126, 126)"}} src={avatar}/>}
        <h4 className='headerOption__title'>{title}</h4>
      
    </div>
  )
}

export default HeaderOption
