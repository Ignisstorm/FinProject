import React from "react";
import { Container, Typography } from "@material-ui/core";
import NavBar from "./components/NavBar";
import AccountDetails from "./components/AccountDetails";
import "./App.css";
import Tabs from "./components/Tabs";
import Alert from "./components/Alert";
import Modal from "./components/Modal";
import FinModal from "./components/FinModal";

function App() {
  return (
    <>
      <NavBar />
      <br />
      <Container>
        <Typography variant="h4" gutterBottom align="center">
          Debit Summary View
        </Typography>
        <br />
        <AccountDetails />
        <br />
        <Tabs />
        <br />
        <Alert />
        <br />
        <Modal />
        <br />
        <FinModal />
        <br/>
      </Container>
    </>
  );
}

export default App;
