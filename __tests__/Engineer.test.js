const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Johnathan', 8, 'johnathanreese8@gmail.com', 'jreese8');
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('testing that github can be received', () => {
    const engineer = new Engineer('Johnathan', 8, 'johnathanreese8@gmail.com', 'jreese8');

    expect(engineer.getGithub()).toBe('jreese8');
});
 
test('testing the the role of engineer can be accomplished', () => {
    const engineer = new Engineer('Johnathan', 8, 'johnathanreese8@gmail.com', 'jreese8');

    expect(engineer.getRole()).toBe('Engineer');
});