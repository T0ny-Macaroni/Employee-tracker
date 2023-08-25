const inquirer = require('inquirer');
const connect = require ('./db/connection');
const { response } = require('express');

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

    if(response.firstPrompt === 'View All Employees') {
        viewAllEmployees(response);
    }else if(response.firstPrompt === 'Add Employee') {
        addEmployee(response);
    }
})

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
