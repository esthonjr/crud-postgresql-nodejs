const { exec } = require('child_process');

module.exports = {
    start: () => {
        exec('cd ./postgres && docker-compose up -d', (err, stdout, stderr) => {
            if (err) {
              //some err occurred
              console.error(err)
            } else {
             // the *entire* stdout and stderr (buffered)
             console.log(`stdout: ${stdout}`);
             console.log(`stderr: ${stderr}`);
            }
          });
    },
    stop: () => {
        exec('cd ./postgres && docker-compose stop', (err, stdout, stderr) => {
            if (err) {
              //some err occurred
              console.error(err)
            } else {
             // the *entire* stdout and stderr (buffered)
             console.log(`stdout: ${stdout}`);
             console.log(`stderr: ${stderr}`);
            }
          });
    },
  };
