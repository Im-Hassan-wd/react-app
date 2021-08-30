import React from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Header from './components/header';

const App = () => {
  return (
    <div className="hello">
      <Header/>
    </div>
  )
}


ReactDOM.render(<App/>, document.querySelector('#root'));
