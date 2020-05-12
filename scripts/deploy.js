
const exec = require('child-process-promise').exec;
const stage = process.env.stage || 'dev';

runAll().then(() => {
  console.info('Completed all actions');
}).catch(err => {
  console.error(err);
});

async function runAll() {
  await webpack();
  return synchronize();
}

function webpack() {
  console.info('Starting webpack');
  return exec(`npm run build`);
}

function synchronize() {
  console.info('Starting synchronize');
  return exec(`aws s3 sync dist s3://wayne4m.com-go-${stage}-ui`);
}
