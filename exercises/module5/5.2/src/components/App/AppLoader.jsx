import {ProviderWrapper} from "../../contexts/opinionsContext/OpinionsContext";
import App from "./App.jsx";

const AppLoader = () => {
  return (
      <ProviderWrapper>
        <App/>
      </ProviderWrapper>
  );
};

export default AppLoader;