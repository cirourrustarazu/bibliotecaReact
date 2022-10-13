import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({item}) => {
    const bookContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        color:'white',
        textDecoration:'none'
    }
    const bookInfoStyle = {
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center'
    }
  return (
    <div style={bookContainerStyle}>
        <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width="200" alt={item.title}/>
        <div>{item.title}</div>
        </Link>
    </div>
  )
}

export default Book