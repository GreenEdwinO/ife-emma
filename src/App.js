import React from 'react'
import Section from './Section'
import TheHead from './Header'
import IfeData from './IfeData'


export default function App() {
  const IfeItems = IfeData.map(IfeThings => {
    return (
      <Section
      key={IfeThings.id}
      {...IfeThings}/>
      )
  })

  return (
    <div>
      <TheHead />
      <h3 className="seemore">Last updated 01 August, 2022. Come back again to see more of my new updates...</h3>
      <div className="ife-div-In-app">
      {IfeItems}
      </div>
    </div>
  )
}


