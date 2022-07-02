import './index.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Settings from './components/settings';
import Footer from './components/Footer';
import Tutorial from './components/Tutorial';

function App() {
  
  let [theme, setTheme] = useState('light');
  let [settings, displaySettings] = useState(false);
  let [tutorial, displayTutorial] = useState(false);
  let [display, setDisplay] = useState('full');
  let [answer, setAnswer] = useState(0);
  let [easy, setEasy] = useState(false)

  let bg1 = 'rgb(198 198 198 / 70%)';
  let bg2 = 'white';
  let color = 'text-gray-900';

  if (theme === 'light'){
    bg1 = 'rgb(198 198 198 / 70%), transparent';
    bg2 = 'white, transparent';
    color = 'text-gray-900';
  } else if (theme === 'dark'){
    bg1 = 'rgb(22, 1, 82), black';
    bg2 = 'rgb(125, 48, 116), black';
    color = 'text-gray-400';
  }

  return (
    <div className="py-16 w-screen h-screen absolute top-0 bottom-0 left-0 right-0 transition-all" style={{background: `radial-gradient(at center top, ${bg1}), radial-gradient(at center bottom, ${bg2}) no-repeat fixed`}}>
      <Header displayTutorial={displayTutorial} color={color} settings={settings} displaySettings={displaySettings} />
      <Body easy={easy} answer={answer} theme={theme} setAnswer={setAnswer} color={color} display={display}
            setDisplay={setDisplay} displaySettings={displaySettings} displayTutorial={displayTutorial} />
      {
        settings && 
        <Settings easy={easy} setEasy={setEasy} setTheme={setTheme} theme={theme} displaySettings={displaySettings}/>
      }
      {
        tutorial &&
        <Tutorial color={color} setDisplay={setDisplay} theme={theme} displayTutorial={displayTutorial} />
      }
      <Footer color={color} />
    </div>
  );
}

export default App;
