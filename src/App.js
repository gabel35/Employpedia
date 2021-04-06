import React from "react";
import Employees from "./pages/Chart";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
      <div>
        <Hero />
        <Container>
          <Employees/>
        </Container>
        <Footer />
      </div>
  );
}

export default App;
