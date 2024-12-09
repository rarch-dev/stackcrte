#!/usr/bin/env node

const inquirer = require('inquirer');
const { exec } = require('child_process');

// Frameworks disponibles
const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Astro'];

inquirer.prompt([
  {
    type: 'list',
    name: 'framework',
    message: 'Selecciona un framework para iniciar:',
    choices: frameworks,
  },
])
.then(answers => {
  const { framework } = answers;
  let command;

  switch (framework) {
    case 'React':
      command = 'npx create-react-app my-app';
      break;
    case 'Vue':
      command = 'npm create vue@latest';
      break;
    case 'Angular':
      command = 'npx @angular/cli new my-app';
      break;
    case 'Svelte':
      command = 'npx degit sveltejs/template my-app';
      break;
    case 'Astro':
      command = 'npm create astro@latest';
      break;
  }

  // Ejecutar el comando
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
});
