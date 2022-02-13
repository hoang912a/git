import "./sidebar.css";
import { Link } from "react-router-dom";
import { HomeOutlined, LineChartOutlined, MessageOutlined,UserOutlined , FileProtectOutlined, MoneyCollectOutlined , BarChartOutlined, MailOutlined, CheckSquareOutlined , CreditCardOutlined, FieldTimeOutlined, CheckCircleOutlined } from "@ant-design/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <HomeOutlined  className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <LineChartOutlined  className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              < MessageOutlined className="sidebarIcon" />
              Chat
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <UserOutlined className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <FileProtectOutlined  className="sidebarIcon" />
                Tour
              </li>
            </Link>
            <li className="sidebarListItem">
              <MoneyCollectOutlined className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChartOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlined className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <CheckSquareOutlined className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <CreditCardOutlined className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <FieldTimeOutlined  className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <CheckCircleOutlined className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
