import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core"
import AssignmentIcon from "@material-ui/icons/Assignment"
import BarChartIcon from "@material-ui/icons/BarChart"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import DashboardIcon from "@material-ui/icons/Dashboard"
import MenuBookIcon from "@material-ui/icons/MenuBook"
import React from "react"
import { Link as RouterLink } from "react-router-dom"

const ListItemLink = (props) => {
  const { icon, primary, to } = props

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  )

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  )
}

export const mainListItems = (
  <div>
    <ListItemLink
      to="/dashboard"
      primary="Dashboard"
      icon={<DashboardIcon />}
    />
    <ListItemLink to="/weekly" primary="Weekly" icon={<CalendarTodayIcon />} />
    <ListItemLink to="/reports" primary="Reports" icon={<BarChartIcon />} />
    <ListItemLink
      to="/menu-board"
      primary="Menu Board"
      icon={<MenuBookIcon />}
    />
  </div>
)

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="June 2020" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="May 2020" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="April 2020" />
    </ListItem>
  </div>
)
