import SmallScreenFallback from "../../components/SmallScreenFallback/SmallScreenFallback";
import { minSheetPageWidth } from "../../constants/controls";
import { useWindowSize } from "../../utility/Layout";
import ToolBar from "../ToolBar/ToolBar";
import TopBar from "../TopBar/TopBar";
import "./SheetPage.scss";

function SheetPage() {
  const { width } = useWindowSize();
  const isSmallScreen = width < minSheetPageWidth;

  return (
    <div className="sheet_page flex flex-col">
      {isSmallScreen ? (
        <SmallScreenFallback />
      ) : (
        <>
          <TopBar/>
          <ToolBar/>
        </>
      )}
    </div>
  );
}

export default SheetPage;
