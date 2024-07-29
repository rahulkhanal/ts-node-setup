#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs-extra');
const path = require('path');

const program = new Command();

program
  .version('1.0.0')
  .description('CLI for generating Node.js resource folders');

program
  .command('generate <name>')
  .alias('g')
  .description('Generate a new resource folder with controller, service, and DTO files')
  .action((name) => {
    generateResource(name);
  });

program.parse(process.argv);

function generateResource(name) {
  const baseDir = path.resolve(__dirname, '../src/modules');
  const resourceDir = `${baseDir}/${name}`;
  const dtoDir = `${resourceDir}/dto`;

  fs.ensureDirSync(resourceDir);
  fs.ensureDirSync(dtoDir);

  const controllerPath = `${resourceDir}/${name}.controller.ts`;
  const servicePath = `${resourceDir}/${name}.service.ts`;
  const createDtoPath = `${dtoDir}/${name}-create.dto.ts`;
  const updateDtoPath = `${dtoDir}/${name}-update.dto.ts`;

  const controllerContent = `import { JsonController, Get } from 'routing-controllers';
import { Inject } from 'typedi';
import { ${capitalize(name)}Service } from './${name}.service';

@JsonController('/${name}')
export class ${capitalize(name)}Controller {
  constructor(
    @Inject()
    private ${name}Service: ${capitalize(name)}Service
  ) {}

  @Get('/')
  getAll() {
    return this.${name}Service.getAll();
  }
}
`;

  const serviceContent = `import { Service } from 'typedi';

@Service()
export class ${capitalize(name)}Service {
  getAll() {
    return '${name} works!';
  }
}
`;

  const createDtoContent = `export class ${capitalize(name)}CreateDto {
  // Add your create DTO properties here
}
`;

  const updateDtoContent = `export class ${capitalize(name)}UpdateDto {
  // Add your update DTO properties here
}
`;

  fs.writeFileSync(controllerPath, controllerContent, 'utf8');
  fs.writeFileSync(servicePath, serviceContent, 'utf8');
  fs.writeFileSync(createDtoPath, createDtoContent, 'utf8');
  fs.writeFileSync(updateDtoPath, updateDtoContent, 'utf8');

  console.log(`Resource ${name} generated successfully!`);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
