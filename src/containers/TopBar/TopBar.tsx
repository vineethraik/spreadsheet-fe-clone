import type { JSX } from 'react';
import './TopBar.scss';
import panel from '../../assets/Panel.svg';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import SearchPill from '../../components/SearchPill/SearchPill';
import Notification from '../../components/Notification/Notification';


function TopBar(): JSX.Element {

    const onPanelClick = () => {
        console.log('No Actions available (Panel Click)');
    }

    const path = 'Workspace/Folder 2/Spreadsheet 3';

    return (
      <div className="top_bar flex flex-row items-center justify-between">
        <div className="top_bar_container_left flex flex-row items-center justify-start ">
          <img
            className="top_bar_container_left_panel hover:brightness-75"
            style={{ cursor: "pointer" }}
            onClick={onPanelClick}
            src={panel}
            alt=""
          />
          <Breadcrumbs path={path} />
        </div>
        <div className="top_bar_container_right flex flex-row items-center justify-end">
          <SearchPill />
          <Notification />
        </div>
      </div>
    );
}

export default TopBar;