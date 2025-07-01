import type { JSX } from "react";
import "./Notification.scss";
import alert from "../../assets/Alert.svg";

function Notification({
  notifications = [
    "Notification 1",
    "Notification 2",
    "Notification 3",
    
  ],
  onClick = () => {
    console.log("No Actions available (Notification Click)");
  },
}: {
  notifications?: Array<string | object>;
  onClick?: Function;
}): JSX.Element {
  const count = notifications.length > 9 ? "9+" : notifications.length;

  return (
    <div className="notification_container flex flex-row relative">
      <img  onClick={() => onClick()} className="notification_icon" src={alert} alt="Notifications" />
      {notifications.length > 0 && (
        <span
          className={`notification_count ${
            notifications.length > 9 ? "notification_count_small" : ""
          } flex flex-row items-center justify-center absolute`}
        >
          {count}
        </span>
      )}
    </div>
  );
}

export default Notification;
