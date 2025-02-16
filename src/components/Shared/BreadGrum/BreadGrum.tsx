import styled from "styled-components";
import { ChevronRight } from "@styled-icons/bootstrap";

interface BreadGrumProps {
  titles: string[];
}

const Div = styled.div`
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin-right: 10px;
`;

export default function BreadGrum({ titles }: BreadGrumProps) {

  return (
    <>
      <Div>
        {titles.map((item, index) => {
          return (
            <Div key={index}>
              <P>{item}</P>
              {index != titles.length - 1 && (
                <ChevronRight
                  color="#A9B5DF"
                  width={"15"}
                  height={"15"}
                  style={{ marginRight: 10 }}
                />
              )}
            </Div>
          );
        })}
      </Div>
    </>
  );
}
