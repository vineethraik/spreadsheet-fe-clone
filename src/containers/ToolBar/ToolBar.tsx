import CustomButton from "../../components/CustomButton/CustomButton";
import "./ToolBar.scss";
import double_arrow from "../../assets/Chevron Double.svg";
import separator from "../../assets/Separator1px.svg";
import hide from "../../assets/Hide.svg";
import sort from "../../assets/Arrow Sort.svg";
import filter from "../../assets/Filter.svg";
import cell_view from "../../assets/Arrow Autofit.svg";

import download from "../../assets/Arrow Download.svg";
import upload from "../../assets/Arrow Upload.svg";
import share from "../../assets/Share.svg";
import action from "../../assets/Split.svg";

function ToolBar() {
  const onToolExpandClick = (): void => {
    console.log("No Actions available (Tool Expand Click)");
  };

  const onHideFieldsClick = (): void => {
    console.log("No Actions available (Hide Fields Click)");
  };

  const onSortClick = (): void => {
    console.log("No Actions available (Sort Click)");
  };

  const onFilterClick = (): void => {
    console.log("No Actions available (Filter Click)");
  };

  const onCellViewClick = (): void => {
    console.log("No Actions available (Cell View Click)");
  };

  const onImportClick = (): void => {
    console.log("No Actions available (Import Click)");
  };

  const onExportClick = (): void => {
    console.log("No Actions available (Export Click)");
  };   

  const onShareClick = (): void => {
    console.log("No Actions available (Share Click)");
  };

  const onActionClick = (): void => {
    console.log("No Actions available (Action Click)");
  };

  return (
    <div className="tool_bar flex flex-row items-center justify-between">
      <div className="tool_bar_left_container flex flex-row items-center gap-2 justify-start">
        <CustomButton
          name="Tool bar"
          className="border-1 border-transparent hover:border-[#EEEEEE]"
          style={{ padding: "8px" }}
          onClick={() => {
            onToolExpandClick();
          }}
          SuffixIcon={({ style, className }) => (
            <img
              className={className}
              style={{ width: "16px", height: "16px", ...style }}
              src={double_arrow}
              alt="Tool Bar Expand Icon"
            />
          )}
        />
        <img src={separator} alt="separator" />
        <div className="tool_bar_left_table_action_container flex flex-row items-center">
          <CustomButton
            name="Hide Fields"
            className="border-1 border-transparent hover:border-[#EEEEEE]"
            onClick={() => {
              onHideFieldsClick();
            }}
            PrefixIcon={({ style, className }) => (
              <img
                className={className}
                style={style}
                src={hide}
                alt="Hide Fields Icon"
              />
            )}
          />
          <CustomButton
            name="Sort"
            className="border-1 border-transparent hover:border-[#EEEEEE]"
            onClick={() => {
              onSortClick();
            }}
            PrefixIcon={({ style, className }) => (
              <img
                className={className}
                style={style}
                src={sort}
                alt="Sort Icon"
              />
            )}
          />
          <CustomButton
            name="Filter"
            className="border-1 border-transparent hover:border-[#EEEEEE]"
            onClick={() => {
              onFilterClick();
            }}
            PrefixIcon={({ style, className }) => (
              <img
                className={className}
                style={style}
                src={filter}
                alt="Filter Icon"
              />
            )}
          />
          <CustomButton
            name="Cell view"
            className="border-1 border-transparent hover:border-[#EEEEEE]"
            onClick={() => {
              onCellViewClick();
            }}
            PrefixIcon={({ style, className }) => (
              <img
                className={className}
                style={style}
                src={cell_view}
                alt="Cell view Icon"
              />
            )}
          />
        </div>
      </div>
      <div className="tool_bar_right_container flex flex-row items-center gap-2 justify-end">
        <CustomButton
          name="Import"
          className="border-1 border-[#EEEEEE] hover:border-[#CCCCCC]"
          onClick={() => {
            onImportClick();
          }}
          PrefixIcon={({ style, className }) => (
            <img
              className={className}
              style={style}
              src={download}
              alt="Import Icon"
            />
          )}
        />
        <CustomButton
          name="Export"
          className="border-1 border-[#EEEEEE] hover:border-[#CCCCCC]"
          onClick={() => {
            onExportClick();
          }}
          PrefixIcon={({ style, className }) => (
            <img
              className={className}
              style={style}
              src={upload}
              alt="Export Icon"
            />
          )}
        />
        <CustomButton
          name="Share"
          className="border-1 border-[#EEEEEE] hover:border-[#CCCCCC]"
          onClick={() => {
            onShareClick();
          }}
          PrefixIcon={({ style, className }) => (
            <img
              className={className}
              style={style}
              src={share}
              alt="Share Icon"
            />
          )}
        />
        <CustomButton
          name="New Action"
          className="bg-[#4B6A4F] border-1 border-[#EEEEEE] hover:border-[#CCCCCC]"
          onClick={() => {
            onActionClick();
          }}
          nameStyle={{ color: "#FFFFFF" }}
          PrefixIcon={({ style, className }) => (
            <img
              className={className}
              style={style}
              src={action}
              alt="Export Icon"
            />
          )}
        />
      </div>
    </div>
  );
}

export default ToolBar;
