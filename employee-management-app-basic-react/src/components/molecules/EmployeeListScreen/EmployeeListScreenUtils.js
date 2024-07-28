export const fetchEmployeeList = async (setEmpList) => {
    const url = "http://localhost:8080/api/v1/employees"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    setEmpList(await response.json())
  } catch (error) {
    console.error(error.message)
  }
}