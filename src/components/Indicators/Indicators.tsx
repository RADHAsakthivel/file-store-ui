import styled from "styled-components";
import { SizeIndicator } from "../Shared/SizeIndicator";
import { Folder } from "@styled-icons/boxicons-regular";
import { FileEmpty } from "@styled-icons/icomoon";

const IndicatorsDiv = styled.div`
  display: flex;
`;

const StyledFolder = styled(Folder)`
  width: 35px;
  height: 40px;
`;

const StyledFile = styled(FileEmpty)`
  width: 30px;
  height: 40px;
`;

export const Indicators = () => {

  return (
    <>
      <IndicatorsDiv>
        <SizeIndicator
          icon={StyledFolder}
          name="Folders"
          size={844}
          otherStyles="border-right: 1px solid #dddddd;"
        />
        <SizeIndicator icon={StyledFile} name="Documents" size={844} />
      </IndicatorsDiv>
    </>
  );
};

export default Indicators;
