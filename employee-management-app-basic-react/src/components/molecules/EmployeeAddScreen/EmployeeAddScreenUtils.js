export const saveEmployeeData = ( formData ) => {
    const url = "http://localhost:8080/api/v1/addEmployee"
    fetch(url, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}