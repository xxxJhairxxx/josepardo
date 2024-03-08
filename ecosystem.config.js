
module.exports = {
  apps: [
    {
      name: '3000-josepardo-next',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000', //running on port 3052
      cwd: './app',
      exec_mode: 'fork',
      watch: false
    }
  ]
}
