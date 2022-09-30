const Button = ({ onClick, text, delta }) =>
    <button id="button" onClick={onClick} data-delta={delta}>{text}</button>;

export default Button;