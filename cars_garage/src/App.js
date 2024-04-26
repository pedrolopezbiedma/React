import "./styles.css";
import "bulma/css/bulma.css";

import CarForm from "./components/CarForm";
import CarSearch from "./components/CarSearch";
import CarList from "./components/CarList";
import CarValue from "./components/CarValue";

const App = () => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
