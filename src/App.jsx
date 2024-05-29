import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  const [city, setCity] = useState("");

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header
        title="Weather App"
        subtitle="Your city's weather at a glance"
        onSearch={handleSearch}
      />
      <Main city={city} />
      <Footer />
    </div>
  );
};

export default App;
