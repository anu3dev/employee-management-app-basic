import React, { useState } from 'react'
import './EmployeeAddScreen.scss'
import Button from '../../atoms/Button/Button'
import { saveEmployeeData } from "./EmployeeAddScreenUtils"

const EmployeeAddScreen = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [emailId, seEmailId] = useState("")

  const saveRecord = () => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId
    }

    saveEmployeeData(formData)
  }
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
      <div className="employeeAddScreen__form">
        <form>
          <label>Enter your first name:
            <input
              type="text" 
              value={firstName}
              placeholder='Enter your first name'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>Enter your last name:
            <input
              type="text" 
              value={lastName}
              placeholder='Enter your last name'
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>Enter your email:
            <input
              type="email" 
              value={emailId}
              placeholder='Enter your email'
              onChange={(e) => seEmailId(e.target.value)}
            />
          </label>
        </form>
      </div>
      <Button btnProp={footerBtnArr} origin="addDetails" />
    </div>
  )
}

export default EmployeeAddScreen