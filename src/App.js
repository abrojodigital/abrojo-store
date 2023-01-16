import * as React from "react";
import { Container } from "react-bootstrap";
import BodyHomePage from "./components/BodyHomePage";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Container>
      <NavBar />
      <BodyHomePage />
    </Container>
  )
}