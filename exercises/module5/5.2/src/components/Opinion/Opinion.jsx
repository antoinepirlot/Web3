import Button from "../Button/Button";

const Opinion = ({opinion, vote}) => {
  return (
      <li>
        {opinion.name} : {opinion.votes} <Button handleClick={vote}
                                                 opinionId={opinion.id}/>
      </li>
  );
};

export default Opinion;