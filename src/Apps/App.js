//App.js
import React from 'react';
import Content from "./components/content"
import NavigationSection from './components/navigation';
import Usehook from './components/week5';
import "./App.css"



const App = () => {

return (
      <div className="app">
        <NavigationSection/>

        <Content
          name="Elisha"
          age="27"
          number="234"
          country="Nigeria"
        />
        <Content
          name="Jude"
          age="21"
          number="234"
          country="Nigeria"
        />
        <div className='useHook'>
        <Usehook/>
        </div>
      </div>
  )
}

export default App;
