import logo from './logo.svg';
import './App.css';
import ColorPatternInput from './ColorPatternInput';
import { useState } from 'react';

const App = () => {
  const [colorPattern, setColorPattern] = useState<string[]>(Array(13).fill('#000000'));
  return (
    <div className="App">
      <section>
        <ColorPatternInput colorPattern={colorPattern} onColorPatternChange={setColorPattern}/>
      </section>
    </div>
  );
};

export default App;
