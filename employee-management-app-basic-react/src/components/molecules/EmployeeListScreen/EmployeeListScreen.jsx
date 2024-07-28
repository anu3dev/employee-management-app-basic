import React, { useState, useEffect } from 'react'
import './EmployeeListScreen.scss'
import { fetchEmployeeList } from './EmployeeListScreenUtils'
import Button from '../../atoms/Button/Button'

const EmployeeListScreen = () => {
  const [empList, setEmpList] = useState([])

  useEffect(() => {
    fetchEmployeeList(setEmpList)
  },[]);

  const updateRecord = () => {}
  const deleteRecord = () => {}
  const addRecord = () => {}

  const footerBtnArr = [
    {
      name: "Update",
      action: updateRecord,
      type: "update"
    },
    {
      name: "Delete",
      action: deleteRecord,
      type: "delete"
    }
  ]
  const btnArr = [
    {
      name: "Add employee",
      action: addRecord,
      type: "add"
    }
  ]

  return (
    <div className="employeeListScreen">
      <div className="employeeListScreen__table">
        <h1>Employee List:</h1>
        <p><Button btnProp={btnArr} /></p>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {empList?.length && empList.map((item, index) => 
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.firstName} {item.lastName}</td>
              <td>{item.emailId}</td>
              <td><Button btnProp={footerBtnArr} origin="listFooter" /></td>
            </tr>
          )}
        </table>
      </div>
    </div>
  )
}

export default EmployeeListScreen