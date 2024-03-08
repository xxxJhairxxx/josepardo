module.exports = {
  apps: [
    {
      name: '3000-josepardo-strapi',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000 // El puerto donde se ejecute el proyecto
      }
    }
  ]
}
