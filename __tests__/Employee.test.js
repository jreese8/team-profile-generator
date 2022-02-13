const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Johnathan', 8, 'johnathanreese8@gmail.com');

    expect(employee.name).toBe('Johnathan');
    expect(employee.id).toBe(8);
    expect(employee.email).toBe('johnathanreese8@gmail.com');
});

test('testing to receive employee name', () => {
    const employee = new Employee('Johnathan', 8, 'johnathanreese8@gmail.com');

    expect(employee.getName()).toBe('Johnathan');
});

test('testing to receive employee ID', () => {
    const employee = new Employee('Johnathan', 8, 'johnathanreese8@gmail.com');

    expect(employee.getId()).toBe(8);
});

test('testing to receive employee email', () => {
    const employee = new Employee('Johnathan', 8, 'johnathanreese8@gmail.com');

    expect(employee.getEmail()).toBe('johnathanreese8@gmail.com');
});

test('testing to receive employee', () => {
    const employee = new Employee('Johnathan', 8, 'johnathanreese8@gmail.com');

    expect(employee.getRole()).toBe('Employee');
}); 
