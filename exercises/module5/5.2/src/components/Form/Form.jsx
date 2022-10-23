const Form = ({addOpinion, newName, handleOpinionNameChange}) => {

  return (
      <form onSubmit={addOpinion}>
        <input value={newName} onChange={handleOpinionNameChange}/>
        <button type={"submit"}>Add Opinion</button>
      </form>
  );
}

export default Form;