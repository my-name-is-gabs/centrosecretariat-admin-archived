/* eslint-disable react/prop-types */
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TableViewIcon from '@mui/icons-material/TableView';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Sidenav = ({ toggleNav }) => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Sidebar
      style={{
        minHeight: '100vh',
        top: 'auto',
        zIndex: 1,
      }}
      breakPoint="md"
      backgroundColor={theme.palette.neutral.dark}
      collapsed={toggleNav}
    >
      <Menu
        menuItemStyles={{
          button: ({ active }) => {
            return {
              backgroundColor: active
                ? theme.palette.secondary.dark
                : undefined,
              color: active && '#f8f8f8',
              '&:hover': {
                background: theme.palette.secondary.main,
              },
            };
          },
        }}
        style={{ marginTop: '24px' }}
      >
        <MenuItem
          active={location.pathname === '/head-officer/'}
          icon={<DashboardOutlinedIcon />}
          component={<Link to="/head-officer/" />}
          style={{ color: 'whitesmoke' }}
        >
          {' '}
          Dashboard{' '}
        </MenuItem>

        <SubMenu
          icon={<PeopleAltOutlinedIcon />}
          label="Accounts"
          style={{ color: 'whitesmoke' }}
        >
          <MenuItem
            active={
              location.pathname === '/head-officer/scholar-officer-accounts/'
            }
            component={<Link to="/head-officer/scholar-officer-accounts/" />}
          >
            Manage Scholar Officer
          </MenuItem>
          <MenuItem
            active={location.pathname === '/head-officer/scholar-account-list/'}
            component={<Link to="/head-officer/scholar-account-list/" />}
          >
            Scholar Account List
          </MenuItem>
        </SubMenu>

        <MenuItem
          icon={<TableViewIcon />}
          active={location.pathname === '/head-officer/applicant-table/'}
          component={<Link to="/head-officer/applicant-table/" />}
          style={{ color: 'whitesmoke' }}
        >
          {' '}
          Application List{' '}
        </MenuItem>
        <MenuItem
          icon={<ChecklistIcon />}
          active={location.pathname === '/head-officer/audit-table/'}
          component={<Link to="/head-officer/audit-table/" />}
          style={{ color: 'whitesmoke' }}
        >
          {' '}
          Audit Trail{' '}
        </MenuItem>

        <MenuItem
          active={location.pathname === '/head-officer/config/'}
          icon={<SettingsOutlinedIcon />}
          component={<Link to="/head-officer/config/" />}
          style={{ color: 'whitesmoke' }}
        >
          Config Scholar
        </MenuItem>

        <SubMenu
          icon={<InsertChartOutlinedIcon />}
          label="Charts"
          style={{ color: 'whitesmoke' }}
        >
          <MenuItem
            active={location.pathname === '/head-officer/forecast-result/'}
            component={<Link to="/head-officer/forecast-result/" />}
          >
            {' '}
            Forecast Trend
          </MenuItem>
          <MenuItem
            active={location.pathname === '/head-officer/area-bump/'}
            component={<Link to="/head-officer/line-chart/" />}
          >
            Line Chart
          </MenuItem>
          <MenuItem
            active={location.pathname === '/head-officer/doughnut-chart/'}
            component={<Link to="/head-officer/doughnut-chart/" />}
          >
            {' '}
            Doughnut Chart{' '}
          </MenuItem>
          <MenuItem
            active={location.pathname === '/head-officer/pie-chart/'}
            component={<Link to="/head-officer/pie-chart/" />}
          >
            {' '}
            Pie Chart{' '}
          </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
