// import { readdirSync } from 'fs';
// import { join } from 'path';
// import { getMetadataArgsStorage } from 'routing-controllers';
// import { Container } from 'typedi';

// export function loadControllers() {
//   const controllersDir = join(__dirname, 'controllers');
//   const files = readdirSync(controllersDir).filter(file => file.endsWith('.controller.ts'));

//   files.forEach(file => {
//     const controllerPath = join(controllersDir, file);
//     import(controllerPath).then(module => {
//       const controllerClasses = Object.values(module).filter(
//         (value: any) => typeof value === 'function' && value.name.endsWith('Controller')
//       );

//       controllerClasses.forEach(Controller => {
//         getMetadataArgsStorage().controllers.push({
//           target: Controller,
//           route: undefined,
//           method: undefined,
//         });
//       });
//     });
//   });
// }
