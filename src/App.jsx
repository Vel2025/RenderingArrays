import students from './utilities/data.mjs';
import Learner from './components/Learner';
import { useState } from 'react';
import './App.css'

function App() {
  const [learners, setlearners] = useState ({learners: students});
  //console.log(learners.learners[0].scores[0])
  let learnerList = learners.learners.map((el) =>{
    return <Learner key={i} {...el}/>;
  });
  return <>(learnerList)</>;
  
}

export default App
