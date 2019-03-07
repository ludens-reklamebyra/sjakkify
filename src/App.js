import React, { useState } from 'react';
import Form from './components/Form';
import Score from './components/Score';
import './App.css';

function App() {
  const [score, setScore] = useState(null);

  return (
    <>
      <h1>Sjakkify</h1>
      <Form onSubmit={data => setScore(data.newRating)} />
      {score !== null && <Score>{score}</Score>}
    </>
  );
}

export default App;
