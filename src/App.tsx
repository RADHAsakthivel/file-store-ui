import "./App.css";
import Nav from "./components/Nav/Nav";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import styled from "styled-components";
import Main from "./components/Main/Main";
import { AccordionProvider } from "./stateManagement";

const Div = styled.div`
  display: grid;
  grid-template-columns: 2.5% 25% 70%;
`;

function App() {

  return (
    <>
      <AccordionProvider>
        <Div>
          <Nav />
          <FileExplorer title="Folders & Documents" />
          <Main />
        </Div>
      </AccordionProvider>
    </>
  );
}

export default App;
