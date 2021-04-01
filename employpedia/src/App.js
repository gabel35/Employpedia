import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from "./pages/Chart";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  return (
    <Router>
      <div>
        <Hero />
        <Container>
          <Route exact path="/" component={Chart} />
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
