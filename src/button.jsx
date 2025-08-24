import React from 'react'

function Buttan({ text, link, }) {
  return (
    <div>
         <a href={link}><button>{text}</button></a>
    </div>
  )
}

export default Buttan;