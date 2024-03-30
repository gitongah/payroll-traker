// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  //creating an empty array called employees
  const employees=[];

  //creating a while loop that gets the first, last and salaray of the eployee
  //and asks if the user wants to add another employee then returns an array of employees
  addNew=true;
  while(addNew){
    let employee={
    firstName:prompt("Enter first name"),
    lastName:prompt("Enter last name"),
    salary:parseInt(prompt("Employee Salary"))
  }
  employees.push(employee);

  addNew = confirm("Do you wanna add a new employee?");

  }
  return employees;

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // initializing the totalSalary variable to 0
  let totalSalary=0;

//creating a for loop that gets all the salary of the employees and adds them together
  for(index = 0; index < employeesArray.length; index++){
    totalSalary += employeesArray[index].salary;
  }

  //calculating the average salary of the employees.
  const averageSalary= totalSalary / employeesArray.length;

  //displaying the average salary to the console with two decimal places
  console.log(`The average salary is for the employee ${averageSalary.toFixed(2)}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // getting a random employee from the array of employees 
  let randEmployee=Math.floor( Math.random() * employeesArray.length)
  employeesArray[randEmployee]
  console.log(`The winner for the random selection is ${employeesArray[randEmployee].firstName} and the salary is $ ${employeesArray[randEmployee].salary}`)


}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
