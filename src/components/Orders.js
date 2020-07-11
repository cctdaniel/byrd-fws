import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import React from "react"
import Title from "./Title"

// Generate Order Data
const createData = (id, date, ingredients, supplier, paymentMethod, amount) => {
  return { id, date, ingredients, supplier, paymentMethod, amount }
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Eggs",
    "Guan Sing Eggs",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Roasted BBQ Meat",
    "OJJ-Tierney's Foods Pte Ltd",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Noodles",
    "Bee Huat Food Pte Ltd",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Concentrated Juice",
    "King Juice Pte Ltd",
    "AMEX ⠀•••• 2000",
    654.39
  ),
]

const preventDefault = (event) => {
  event.preventDefault()
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}))

const Orders = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Ingredients</TableCell>
            <TableCell>Supplier</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.ingredients}</TableCell>
              <TableCell>{row.supplier}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  )
}

export default Orders
