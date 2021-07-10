module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'kind',
        message: "What's the kind of your component?",
        choices: [
          {
            name: 'Atoms',
            value: 'atoms',
          },
          {
            name: 'Molecules',
            value: 'molecules',
          },
          {
            name: 'Organisms',
            value: 'organisms',
          },
        ],
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../../src/components/{{lowerCase kind}}/{{pascalCase name}}/index.tsx',
        templateFile: './templates/Component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: '../../../src/components/{{lowerCase kind}}/{{pascalCase name}}/styles.ts',
        templateFile: './templates/Component/styles.ts.hbs',
      },
    ],
  });
};
