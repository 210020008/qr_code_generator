import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

function promptUser() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your URL?'
    }
  ];

  inquirer.prompt(questions)
    .then(answers => {
      console.log('URL:', answers.name);

      const qrCode = qr.image(answers.name, { type: 'png' });
      qrCode.pipe(fs.createWriteStream('message.png'));
      console.log('The file has been saved');
    })
    
}

promptUser();
