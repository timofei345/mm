import React from 'react'
import "./SplashScreen.scss"
import Muchmoney from "../../../../assets/MuchMoney.png"

function SplashScreen() {
  return (
    <section className="splash_screen">
      <div className="logo">
      <img src={Muchmoney} alt="logo" />
      </div>

    </section>

  )
}


export default SplashScreen

