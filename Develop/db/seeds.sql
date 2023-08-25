INSERT INTO department (department_name)
VALUES  ('Sales'),
        (`Engineering`),
        ('Finance'),
        ('Legal')

INSERT INTO roles (title, salary, department_id)
VALUES  ('Sales Supervisor', '79k' '1'),
        ('Sales Representative', '50k' '1'),
        ('Senior Engineer', '135k', '2'),
        ('Junior Engineer', '95k', '2'),
        ('Chief Accountant', '130k', '3'),
        ('Administration Manager' '100k' '4'),
        ('Junior Clerk', '60k', '4')


INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES  ('Bulma', ' ', '2', NULL),
        ('Pikachu', ' ', '4', NULL),
        ('Gon', ' ', '3', NULL),
        ('Felipe ', 'Sanchez ', '1', NULL),
        ('Rukia', 'Kuchiki', '4' '2'),
        ('Boa', 'Hancock', '1', '4'),
        ('Riza', 'Hawkeye', '3', '3'),
        ('Franky', 'Super', '2', '1' )