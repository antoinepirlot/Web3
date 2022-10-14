import {useState} from 'react'
import Person from "./components/Person/Person";
import Filter from "./components/Filter/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      number: "040-1234567"
    }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personsToShow = filter === ""
      ? persons
      : persons.filter(person => person.name.includes(filter));

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      id: persons[persons.length - 1].id + 1,
      name: newName,
      number: newNumber
    }
    persons.push(newPerson);
    setPersons(persons);
    setNewName("");
    setNewNumber("");
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  return (
      <div>
        <h2>Phonebook</h2>
        <Filter onChange={handleFilterChange}/>
        <h2>add a new</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName} onChange={handleNameChange}/>
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange}/>
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        <ul>
          {personsToShow.map(person =>
              <Person key={person.name} person={person}/>)}
        </ul>
      </div>
  )
}

export default App