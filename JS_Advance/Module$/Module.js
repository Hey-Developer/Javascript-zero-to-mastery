/* 
$ What are module-->
  In JS, a module is a JS file where we write codes,
  The object in the module are not available for use, unless the module file exports them.
  
# Exporting Module-->
  ~ export- The export statement is used when creating a JS modules to the export functions, objects, or primitives values from the module so they can be used by other programs with the import statement.
  ~ There are two different types of export-
    > named and default.
    > You can have multiple named exports per module but only one defaults export.

    -- Default Export:
       You can have only one default export per module. A default export can be imported with any name:
       > Syntax: export default ModuleName|class|function|variables;
       
       > EX-1:
         Mobile.js
         export default class Nokia{
             properties
             Methods
         }
         ?OR-->(Most Common Way)
         class Nokia{
             properties
             Methods
         }
         export default Nokia;

         > EX-2: 
         export default function show(){
             code;
         }
         ?OR
         function show(){
              code-->'
          }
          export default show;
          
          > Ex-3;
          const a=10;
          export default a;

          * From here i am exporting Nokia class but when i will import nokia class in another module i can write any name rather than using NOKIA this rule valid in case of default export.

    -- Named Export:
       You can have multiple named exports in a module-->
       Named Exports are useful to export several values.
       * During import it is mandatory to use the same name of the corresponding object.
       
       > EX-1
         mobile.js
         export class Nokia{
           properties;
           Methods;
         }
         ? OR-->
         class Nokia{
           properties;
           methods;
         }
         export {Nokia};

      > EX-2
         export  function show(){
             code;
         }
         ?OR
         function show(){
              code-->'
          }
          export {show};
          
          > Ex-3;
            export const a=10;


# Importing Module:
  import- The static import statement is used to import binding which are exported by another module.
  Imported modules are in strict mode whether you declare them as such or not;

  -- importing defaults:
     You can have only one default export per module.
     A default exported with any name;
     > EX-1
       module.js --
       class Nokia{
         properties
         methods
       }
       export default Nokia;

       ~ Importing a default module;
         Another file--> app.js
         import Nokia from './mobile.js'

  -- importing Named:
     You can have multiple named exports per modules;
     > EX-1
       mobile.js
       class Nokia{
          properties
          methods
       }       
       function show(){
          code--;
       }
       export {Nokia,show} //? Multiple export


       ~ Importing a named module:
         Another file app.js
         import {Nokia,show} from './mobile.js'

 -- importing ALL:
       mobile.js
       class Nokia{
          properties
          methods
       }       
       function show(){
          code--;
       }
       const price="some"
       export {Nokia,show,price} //? Multiple export

       > Another file app.js
       import * as device from './mobile.js'
       // TO USE:
       device.Nokia;
       device.show();
       device.price;
 
 -- importing default and named;
    class Nokia {
      properties
      methods
    }
    export default Nokia;

    export function show(){
      code;
    }
  
    ~ Importing:
      app.js
      import Nokia {show} from './mobile.js'
*/