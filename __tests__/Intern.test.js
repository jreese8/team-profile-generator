const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Johnathan', 8, 'johnathanreese8@gmail.com', 'U of R');
    
    expect(intern.school).toBe('U of R');
});

test('testing that school can be received', () => {
    const intern = new Intern('Johnathan', 8, 'johnathanreese8@gmail.com', 'U of R');

    expect(intern.getSchool()).toBe('U of R');
});

test('testing to receive intern', () => {
    const intern = new Intern('Johnathan', 8, 'johnathanreese8@gmail.com', 'U of R');

    expect(intern.getRole()).toBe("Intern");
}); 