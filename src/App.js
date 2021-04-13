import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  const [filter, setFilter] = useState();

  useEffect(() => {
    const getTable = document.getElementById("getTable");
    const results = getTable.getElementsByTagName("tr");

    if (!filter) {
      return;
    }

    for (let i = 0; i < results.length; i++) {
      let txtResults = results[i];
      if (txtResults) {
        let txtContent = txtResults.textContent.toLowerCase();
        if (txtContent.indexOf(filter) > -1) {
          results[i].style.display = "";
        } else {
          results[i].style.display = "none";
        }
      }
    }
  }, [filter]);

  const handleInputChange = (event) => {
    setFilter(event.target.value);
    if (event.target.value === "") {
      setFilter(null)
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <div>
        <Header 
          search={filter}
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}/>
        <Container />
        <Footer />
      </div>
  );
}

export default App;
