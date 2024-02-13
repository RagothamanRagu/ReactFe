import React from 'react'
import one from "../assets/sai/one.jpg"
import two from "../assets/Sai/two.jpg"
import three from "../assets/Sai/three.jpg"
import four from "../assets/Sai/four.jpg"
import five from "../assets/Sai/five.jpg"
import six from "../assets/Sai/six.jpg"
import seven from "../assets/Sai/seven.jpg"
import eight from "../assets/Sai/eight.jpg"
import nine from "../assets/Sai/nine.jpg"
import ten from "../assets/Sai/ten.jpg"
import "./imagecomp.css"

export default function Imagecomp() {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1>different souls</h1>

      <img src={onece} alt='Mountain' />
      <p>"Never measure the height of a mountain until you reach the top.Then you see how low it  was"</p>

      <img src={two} alt="ocean" />
      <p>"It can be calm or still,and rough or rigid,But in the end,it is always beautifull"</p>

      <img src={three} alt="sunset" />
      <p>"Every sunset is an Opportunity to reset"</p>

      <img src={four} alt="Lion" />
      <p>"If You Want To Be a Winner Then Be a Fearless" </p>

      <img src={five} alt="Night" />
      <p>"Without the dark,we'd Never see the stars."</p>

      <img src={six} alt="The living world" />
      <p>"Nature Always Wears The Color Of Sprit"</p>

      <img src={seven} alt="If YOU are Bad,I'm your Dad" />
      <p>"No Guts.No Glorry,No Legend.No History"</p>

      <img src={eight} alt="Dead line" />
      <p>"Stay Strong.There is a Rainbow After Every Strom"</p>

      <img src={nine} alt="Teaches kindness" />
      <p>"Real is Better than Perfect"</p>

      <img src={ten} alt="strenthen Our mentallity" />
      <p>"Self-love is the key to a joyful life"</p>

    </div>

  )
}
