import { useState, type JSX } from "react";
import "./PageBar.scss";
import CustomButton from "../../components/CustomButton/CustomButton";
import { mockData } from "../../constants/mockData";
import plus from "../../assets/Plus.svg";

function PageBar({
  pageData = mockData.pages,
  onPageSelect,
}: {
  pageData?: Array<{ id: string; title: string }>;
  onPageSelect?: (pageId: string) => void;
}): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageSelect = (pageId: string) => {
    if (onPageSelect) {
      onPageSelect(pageId);
    }
    console.log(`Page ${pageData?.find(page=> page.id === pageId)?.title || "Unknown Page"} selected`);
    
    setCurrentPage(pageData?.findIndex((page) => page.id === pageId) || 0);
  };

  const onNewPageClick = () => {
    console.log("No Actions available (New Page Click)");
    
  }
  return (
    <div className="page_bar text-black border-t border-[#EEEEEE] flex flex-row">
      {pageData?.map((page) => (
        <CustomButton
          className={`border-t-2   ${
            page.id === pageData[currentPage]?.id
              ? " border-[#4B6A4F] bg-[#4B6A4F25] "
              : "border-transparent"
          } `}
          style={{ padding: "10px 16px", borderRadius: 0 }}
          onClick={() => handlePageSelect(page.id)}
          name={page.title}
          nameStyle={{
            fontWeight: 600,
            color:
              page.id === pageData[currentPage]?.id ? "#3E5741" : "#121212",
          }}
          key={page.id}
        />
      ))}
      <CustomButton style={{ padding: "10px 16px", borderRadius: 0 }} onClick={onNewPageClick} skipName PrefixIcon={() => <img src={plus} alt="Plus" />} />
    </div>
  );
}

export default PageBar;
