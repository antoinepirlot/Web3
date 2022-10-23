import {useContext, useState} from "react";
import {
  Context as opinionsContext
} from "../../contexts/opinionsContext/OpinionsContext";
import Opinion from "../Opinion/Opinion";
import Form from "../Form/Form";
import {v1 as uuidv1} from "uuid";

const App = () => {
  const [newName, setNewName] = useState("");
  const [vote, setVote] = useState(1);
  const [opinions, setOpinions] = useState([
    {id: uuidv1(), name: "Opinion A", votes: 3},
    {id: uuidv1(), name: "Opinion B", votes: 8},
    {id: uuidv1(), name: "Opinion C", votes: 1}
  ]);

  const {sortedOpinions} = useContext(opinionsContext);

  const addOpinion = (event) => {
    event.preventDefault();
    const newOpinion = {id: uuidv1(), name: newName, votes: 1};
    setOpinions(opinions.concat(newOpinion));
    setNewName("");
  };

  const handleOpinionNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleVote = (event) => {
    const opinion = opinions.find(opinion => opinion.id === event.target.value);
    setVote(opinion.votes += 1)
  };

  return (
      <div className="App">
        <ul>
          {
            sortedOpinions(opinions).map(
                opinion => <Opinion key={opinion.id} opinion={opinion}
                                    vote={handleVote}/>)
          }
        </ul>
        <Form addOpinion={addOpinion}
              handleOpinionNameChange={handleOpinionNameChange}
              newName={newName}/>
      </div>
  );
}

export default App;
