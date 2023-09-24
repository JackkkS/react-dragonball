import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import characters from './components/datas/characters'
import Charecter from './components/Charecter'
import Header from './components/Header'
import Description from './components/Description'
import SearhCharecter from './components/SearhCharecter'

function App() {
  const [info, setInfo] = useState(null)
  const [searchText, setSearchText] = useState('')

  const openInfo =(theInfo)=>{
    setInfo(theInfo)
  }

  const closeInfo =()=>{
    setInfo(null)
  }
  
  const charecterData = characters.filter((charec)=>{
    return charec.name.includes(searchText);
  }).map((char, idx)=>{
      return <Charecter key={idx} char={char} openInfo={openInfo} />
  })

  let itemInfo = null
  if(!!info){
    itemInfo = <Description description={info} closeInfo={closeInfo} />
  }
   
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <div className="search">
            <SearhCharecter value={searchText} onValueChange={setSearchText}/>
          </div>
          <div className="grid">
            {charecterData}
          </div>
          </div>
          {itemInfo}
      </section>
      
      
    </>
  )
}

export default App
