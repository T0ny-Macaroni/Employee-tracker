const inquirer = require('inquirer');
const connect = require ('./db/connection');
const { response } = require('express');
function mainMenu(){
inquirer.prompt ([
    {
    name:'firstPrompt',
    type: 'list',
    message: 'what would you like to do',
    choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View all Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    }
])
.then((response) => {
    console.log(response);
    const choice = response.firstprompt

    if(choice === 'View All Employees') {
        viewAllEmployees();
    }else if(choice === 'Add Employee') {
        addEmployee();
    }else if(choice === 'Update Employee Role') {
        updateEmployeeRole()
    }else if(choice === 'View All Roles'){
        viewRoles()
    }
    })
}
function  viewAllEmployees(data) {
    console.table(data);
};

function addEmployee() {
    inquirer.prompt ([
        {
        name: 'employeeNameFirst',
        type: 'input',
        message: 'What is the employees First Name?'
        },
        {
            name: 'employeeNameLast',
            type: 'input',
            message: 'What is the employees Last Name?'
        },
        {
            name: 'employeeRole',
            type: 'input',
            message: 'What is the employees Role?'
        },
        {
            name: 'employeeManager',
            type: 'list',
            message: 'Who is the employees Manager?',
            choices: ['Pikachu', 'Bulma', 'Gon']
            }
    ])
    .then((response) => {
    connect.query(`INSERT INTO employees (employee_id, first_name, last_name, role_id, manager_id) VALUE(${response.employeeNameFirst}, ${response.employeeNameLast}, ${response.employeeRole}, ${response.employeeManager})`);
    });
}


function updateEmployeeRole() {
    connect.query('Select * from employees', (err, data)=>{
        const empList = data.map((emp) => ({
            name: `${emp.first_name} ${emp.last_name}`,
            value: emp.id
        }))
    })
    inquirer.prompt([
        {
        type: 'list',
        name: 'empName',
        message: 'Please select which employees role you wish to update.',
        choices: empList,
        },
        {
        type: 'input',
        name: 'newRole',
        message: 'Please enter the Employees new role',
        }
    ])
    .then((response) => {
        connect.query(`UPDATE employees (updated_name, updated_role) VALUE(${response.empName}, ${response.newRole})`), function (err, results) {
            if (err) throw err;
            console.log('Employee role Updated Successfully');
            mainMenu()
        }
    })

}
