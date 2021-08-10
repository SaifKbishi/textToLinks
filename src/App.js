import React, {useState} from 'react';
import UploadText from './Components/UploadText/UploadText';
import {linksContext} from './linksContext';
import Links from './Components/Links/Links';
import './App.css';

function App() {
  const [links, setLinks] = useState('');
  const {Provider} = linksContext;

  return (
    <div className="App">
      <header className="App-header">     
        <Provider value={{links, setLinks}}>
          <UploadText/>
          <Links />
        </Provider>        
      </header>
    </div>
  );
}

export default App;
