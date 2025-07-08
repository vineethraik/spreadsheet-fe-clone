import { useState } from "react";
import SmallScreenFallback from "../../components/SmallScreenFallback/SmallScreenFallback";
import { minSheetPageWidth } from "../../constants/controls";
import { mockData } from "../../constants/mockData";
import { useWindowSize } from "../../utility/Layout";
import CustomTable from "../CustomTable/CustomTable";
import PageBar from "../PageBar/PageBar";
import ToolBar from "../ToolBar/ToolBar";
import TopBar from "../TopBar/TopBar";
import "./SheetPage.scss";

function SheetPage() {
  const [pageData,setPageData] = useState(mockData.pages[0]);
  const { width } = useWindowSize();
  const isSmallScreen = width < minSheetPageWidth;

const handlePageSelect = (pageId: string) => {

  console.log(`Page ${mockData.pages?.find(page=> page.id === pageId)?.title || "Unknown Page"} selected`);
  
  setPageData(mockData.pages?.find(page=> page.id === pageId) || mockData.pages[0]);
};

  return (
    <div className="sheet_page relative hide-scrollbar flex flex-col">
      {isSmallScreen ? (
        <SmallScreenFallback />
      ) : (
        <>
          <TopBar />
          <ToolBar />
          <div className="sheet_page_table_container flex w-full grow bg-white">
            <CustomTable pageData={pageData} />
          </div>
          <PageBar onPageSelect={handlePageSelect} />
        </>
      )}
    </div>
  );
}

export default SheetPage;
