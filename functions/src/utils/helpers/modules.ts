require('dotenv').config()
const ModuleAlias = require('module-alias')
const path = require('path')

ModuleAlias.addAliases({
  config: path.join(__dirname, '../../config'),
  controllers: path.join(__dirname, '../../controllers'),
  services: path.join(__dirname, '../../services'),
  utils: path.join(__dirname, '../../utils')
})
