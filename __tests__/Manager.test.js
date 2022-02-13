const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Johnathan', 8, 'johnathanreese8@gmail.com', 27);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('testing that the office number can be received', () => {
    const manager = new Manager('Johnathan', 8, 'johnathanreese8@gmail.com', 27);
    
    expect(manager.getOfficeNumber()).toBe(27); 
});

test('testing to receive manager', () => {
    const manager = new Manager('Johnathan', 8, 'johnathanreese8@gmail.com', 27);

    expect(manager.getRole()).toBe('Manager');
}); 