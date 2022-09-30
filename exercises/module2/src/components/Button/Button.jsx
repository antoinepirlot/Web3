const Button = ({ onClick, text, delta }) =>
    <button onClick={onClick} data-delta={delta}>{text}</button>;

export default Button;