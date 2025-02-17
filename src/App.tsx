import "./App.css";
import Nav from "./components/Nav/Nav";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import styled from "styled-components";
import Main from "./components/Main/Main";
import { AccordionProvider } from "./stateManagement";
import { useEffect } from "react";
import { getFolders } from "../service";
import { useAccordion } from "./stateManagement";
import AccordionContextProps from "./interfaces/AccordionContextProps";

const Div = styled.div`
  display: grid;
  grid-template-columns: 2.5% 25% 70%;
`;

function App() {
  const { apiData, setAccoridionsData }: AccordionContextProps = useAccordion();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await getFolders();
    setAccoridionsData(response);
  };

  return (
      <Div>
        <Nav />
        <FileExplorer title="Folders & Documents" />
        <Main />
      </Div>
  );
}

export default App;
