import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <p className="banner-header">This is a banner header</p>
      <p className="header">This is a header</p>
      <p className="header highlight">This is a highlighted header</p>
      <button className='btn btn-primary font-primary'>Click me</button>
      <button className='btn btn-secondary font-primary'>Click me</button>
      <p className='p'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sequi neque nostrum expedita iure id quo animi exercitationem facere aspernatur quas, vitae doloribus quia beatae labore repellat sint culpa eveniet?</p>
      <input type="text" className="text-input input-field font-secondary" placeholder='Example' />
      <textarea name="message" placeholder='Message' className='text-input text-area font-secondary'></textarea>
      <div className="d-flex center">
        <button className="btn btn-secondary font-primary">One</button>
        <button className="btn btn-secondary font-primary">Two</button>
        <button className="btn btn-secondary font-primary">Three</button>
        <button className="btn btn-secondary font-primary">Four</button>
      </div>
    </div>
  );
}

export default App;
