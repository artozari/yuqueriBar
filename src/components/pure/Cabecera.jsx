import React from 'react'
import yuqueImg from "../../images/yuqueriSVG.svg"
import "../../styles/cabecera.css"

export default function Cabecera() {
  return (
    <div>
      <div className="cabecera">
        <img src={yuqueImg} alt="BarYuqueri" className="imageMain" />
      </div>
    </div>
  )
}
