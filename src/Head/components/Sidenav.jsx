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
          component={<Link to="#dash" />}
        >
          {' '}
          Dashboard{' '}
        </MenuItem>

        <MenuItem
          icon={<PeopleAltOutlinedIcon />}
          component={<Link to="#user" />}
        >
          {' '}
          Users{' '}
        </MenuItem>
        <SubMenu icon={<TableViewOutlinedIcon />} label="Application">
          <MenuItem> Applicant Table </MenuItem>
          <MenuItem> Audit Table </MenuItem>
        </SubMenu>
        <MenuItem icon={<SettingsOutlinedIcon />}>Config Scholar</MenuItem>
        <SubMenu icon={<InsertChartOutlinedIcon />} label="Charts">
          <MenuItem> Line Chart </MenuItem>
          <MenuItem> Area Bump </MenuItem>
          <MenuItem> Doughnut Chart </MenuItem>
          <MenuItem> Pie Chart </MenuItem>
          <MenuItem> Heatmap </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
