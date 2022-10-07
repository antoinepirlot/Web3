import {useState} from 'react'
import Button from "../Button/Button";
import Statistics from "../Statistics/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    console.log("Good note");
    setGood(good + 1);
  }

  const handleClickNeutral = () => {
    console.log("Neutral note");
    setNeutral(neutral + 1);
  }

  const handleClickBad = () => {
    console.log("Bad note");
    setBad(bad + 1);
  }

  return (
      <div>
        <h1>Give Feedback</h1>
        <Button handleClick={() => handleClickGood()} text="Good"/>
        <Button handleClick={() => handleClickNeutral()} text={"Neutral"}/>
        <Button handleClick={() => handleClickBad()} text={"Bad"}/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

export default App