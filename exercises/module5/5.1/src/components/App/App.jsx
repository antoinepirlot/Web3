import Button from "../Button/Button";
import {Context as CounterContext} from "../../contexts/CounterContext";
import {useContext} from "react";

function App() {
  const props = useContext(CounterContext);

  return (
      <div className="App">
        <ul>
          <li>
            Good : {props.good} <Button handleClick={props.increaseGood}
                                        value={"increase good"}/>
          </li>
          <li>
            Ok : {props.ok} <Button handleClick={props.increaseOk}
                                    value={"increase ok"}/>
          </li>
          <li>
            Bad : {props.bad} <Button handleClick={props.increaseBad}
                                      value={"increase bad"}/>
          </li>
        </ul>
        <Button handleClick={props.resetAll} value={"reset scores"}/>
      </div>
  );
}

export default App;
