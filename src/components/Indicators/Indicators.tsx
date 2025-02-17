import styled from "styled-components";
import { SizeIndicator } from "../Shared/SizeIndicator";
import { Folder } from "@styled-icons/boxicons-regular";
import { FileEmpty } from "@styled-icons/icomoon";
import {useAccordion} from "../../stateManagement";
import AccordionContextProps from "../../interfaces/AccordionContextProps"
import {getTotalCount, getFolderCount} from "../../../Helper"

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
  const { apiData }: AccordionContextProps = useAccordion();
  const fileCount = getTotalCount(apiData?.data?.folders);
  const folderCount = getFolderCount(apiData?.data?.folders);
  return (
    <>
      <IndicatorsDiv>
        <SizeIndicator
          icon={StyledFolder}
          name="Folders"
          size={folderCount}
          // size={844}
          // otherStyles="border-right: 1px solid #dddddd;"
        />
        <SizeIndicator icon={StyledFile} name="Documents" size={fileCount} />
      </IndicatorsDiv>
    </>
  );
};

export default Indicators;
