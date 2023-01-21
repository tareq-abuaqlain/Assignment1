import './App.css';
import React from 'react';
import { Button, DatePicker } from 'antd';

function App() {
  return (
    <div className="App">
      <Button type="primary">PRESS ME</Button>
      <DatePicker placeholder="select date" />    
    </div>
  );
}

export default App;



