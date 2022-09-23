import sc from "Header/star_citizen_Quantum_Drive.jpeg";

const Header = (props) => {
  return (
      <div>
        <img src={sc} alt={"Star_Citizen_Quantum_Drive"}/>
        <h1>{props.course}</h1>
      </div>
  );
}

export default Header;