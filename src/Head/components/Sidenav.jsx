/* eslint-disable react/prop-types */
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidenav = ({ toggleNav }) => {
  const theme = useTheme();
  return (
    <Sidebar
      style={{
        height: '100vh',
        top: 'auto',
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.main}
      collapsed={toggleNav}
    >
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
        style={{ marginTop: '24px' }}
      >
        <MenuItem
          icon={<DashboardOutlinedIcon />}
          component={<Link to="/head-officer/" />}
        >
          {' '}
          Dashboard{' '}
        </MenuItem>

        <MenuItem
          icon={<PeopleAltOutlinedIcon />}
          component={<Link to="/head-officer/users/" />}
        >
          {' '}
          Users{' '}
        </MenuItem>
        <SubMenu icon={<TableViewOutlinedIcon />} label="Application">
          <MenuItem component={<Link to="/head-officer/applicant-table/" />}>
            {' '}
            Applicant Table{' '}
          </MenuItem>
          <MenuItem component={<Link to="/head-officer/audit-table/" />}>
            {' '}
            Audit Table{' '}
          </MenuItem>
        </SubMenu>
        <MenuItem
          icon={<SettingsOutlinedIcon />}
          component={<Link to="/head-officer/config/" />}
        >
          Config Scholar
        </MenuItem>
        <SubMenu icon={<InsertChartOutlinedIcon />} label="Charts">
          <MenuItem component={<Link to="/head-officer/line-chart/" />}>
            {' '}
            Line Chart{' '}
          </MenuItem>
          <MenuItem component={<Link to="/head-officer/area-bump/" />}>
            {' '}
            Area Bump{' '}
          </MenuItem>
          <MenuItem component={<Link to="/head-officer/doughnut-chart/" />}>
            {' '}
            Doughnut Chart{' '}
          </MenuItem>
          <MenuItem component={<Link to="/head-officer/pie-chart/" />}>
            {' '}
            Pie Chart{' '}
          </MenuItem>
          <MenuItem component={<Link to="/head-officer/heatmap/" />}>
            {' '}
            Heatmap{' '}
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
