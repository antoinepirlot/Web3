import Display from "../Display/Display";
import Button from "../Button/Button";
import {useState} from "react";

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const changeCounter = (delta) => setCounter(counter + delta);

  function handleClick(e) {
    changeCounter(parseInt(e.target.dataset.delta));
  }

  return (
      <div>
        <Display counter={counter}/>
        <Button
            onClick={handleClick}
            text='plus'
            delta={+1}
        />
        <Button
            onClick={handleClick}
            text='zero'
            delta={-counter}
        />
        <Button
            onClick={handleClick}
            text='minus'
            delta={-1}
        />
      </div>
  )
}

export default App;