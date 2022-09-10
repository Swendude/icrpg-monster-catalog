import React from "react";
import styled from "styled-components";
import EditableText from "./components/EditableText";

const AppBody = styled.div`
  font-family: "Courier New", Courier, monospace;
`;

function App() {
  return (
    <AppBody>
      <EditableText placeholder="Monster name" />
    </AppBody>
  );
}

export default App;
