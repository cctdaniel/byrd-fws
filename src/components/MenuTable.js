import { Divider } from "@material-ui/core"
import MaterialTable from "material-table"
import React, { useState } from "react"
import Title from "./Title"

const MenuTable = () => {
  const [state, setState] = useState({
    columns: [
      { title: "Serial No.", field: "serialNumber", type: "numeric" },
      { title: "Item", field: "item" },
      { title: "Item Code", field: "itemCode" },
      { title: "Weekly Order", field: "weeklyOrder" },
      { title: "Min. Order", field: "minOrder" },
    ],
    data: [
      {
        serialNumber: 1,
        item: "Apples",
        itemCode: "HA1234",
        weeklyOrder: "10kg",
        minOrder: "NA",
      },
      {
        serialNumber: 2,
        item: "Bananas",
        itemCode: "AJ7128",
        weeklyOrder: "10kg",
        minOrder: "NA",
      },
      {
        serialNumber: 3,
        item: "Chicken",
        itemCode: "KA7272",
        weeklyOrder: "20kg",
        minOrder: "10kg",
      },
      {
        serialNumber: 4,
        item: "Corn",
        itemCode: "AO9019",
        weeklyOrder: "3kg",
        minOrder: "3kg",
      },
      {
        serialNumber: 5,
        item: "Egg",
        itemCode: "AH8771",
        weeklyOrder: "6kg",
        minOrder: "2kg",
      },
      {
        serialNumber: 6,
        item: "Carrots",
        itemCode: "AH8772",
        weeklyOrder: "2kg",
        minOrder: "NA",
      },
      {
        serialNumber: 7,
        item: "Cheese",
        itemCode: "JK8172",
        weeklyOrder: "16kg",
        minOrder: "5kg",
      },
    ],
  })

  return (
    <React.Fragment>
      <Title>Menu Board</Title>
      <Divider />
      <MaterialTable
        title="Menu Board"
        columns={state.columns}
        data={state.data}
        options={{
          pageSize: 10,
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve()
                setState((prevState) => {
                  const data = [...prevState.data]
                  data.push(newData)
                  return { ...prevState, data }
                })
              }, 600)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve()
                if (oldData) {
                  setState((prevState) => {
                    const data = [...prevState.data]
                    data[data.indexOf(oldData)] = newData
                    return { ...prevState, data }
                  })
                }
              }, 600)
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve()
                setState((prevState) => {
                  const data = [...prevState.data]
                  data.splice(data.indexOf(oldData), 1)
                  return { ...prevState, data }
                })
              }, 600)
            }),
        }}
      />
    </React.Fragment>
  )
}

export default MenuTable
