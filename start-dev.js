const concurrently = require('concurrently');

const commands = [
  { command: 'yarn dev', name: 'Client', prefixColor: 'green' },
  {
    command: 'npm run start',
    name: 'Server',
    prefixColor: 'blue',
    cwd: 'server',
  },
];

const { result } = concurrently(commands, {
  prefix: 'name',
  killOthers: ['failure', 'success'], // Kill other processes if one exits or succeeds
});

result.then((success, failure) => {
  if (success) {
    console.log('All processes exited successfully');
  }
  if (failure) {
    console.error('One or more processes failed to start');
  }
});
