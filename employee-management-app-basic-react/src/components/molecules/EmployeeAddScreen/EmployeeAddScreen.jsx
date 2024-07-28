import React from 'react'
import './EmployeeAddScreen.scss'
import Button from '../../atoms/Button/Button'

const EmployeeAddScreen = () => {

  const saveRecord = () => {}
  const backBtn = () => {
    window.location.assign("/")
  }

  const footerBtnArr = [
    {
      name: "Save",
      action: saveRecord,
      type: "save"
    },
    {
      name: "Cancel",
      action: backBtn,
      type: "cancel"
    }
  ]

  return (
    <div className="employeeAddScreen">
      <h1>Add Employee</h1>
      <div>
        <Button btnProp={footerBtnArr} origin="addDetails" />
      </div>
    </div>
  )
}

export default EmployeeAddScreen