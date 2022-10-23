const Button = ({handleClick, opinionId}) => {
  return (
    <button onClick={handleClick} value={opinionId}>Vote</button>
  );
};

export default Button;