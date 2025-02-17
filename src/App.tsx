import "./App.css";
import Nav from "./components/Nav/Nav";
import FileExplorer from "./components/FileExplorer/FileExplorer";
import styled from "styled-components";
import Main from "./components/Main/Main";
import { AccordionProvider } from "./stateManagement";
import { useEffect, useState } from "react";
import { getFolders } from "../service";

const Div = styled.div`
  display: grid;
  grid-template-columns: 2.5% 25% 70%;
`;

function App() {
  const [apiData, setApiData] = useState();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await getFolders();
    setApiData(response as any);
  };

  return (
    <>
      {apiData && <AccordionProvider apiData={apiData}>
        <Div>
          <Nav />
          <FileExplorer title="Folders & Documents" />
          <Main />
        </Div>
      </AccordionProvider>}
    </>
  );
}

export default App;
