/*                                                  
                                                    #V8 Engine--> 
 ____________                   ___________________________________________________________________________
|            |                  |
|            |                  |     _________ 
|   demo.js  |-------------->   |    |  Parser |
|            |                  |    |_________|      
|____________|                  |    
                                |
                                |
                                |   
                                |
                                |
                                |
                                |
                                |
                                |
                                |
                                |
                                |
                                |    

--1> JS file runs in chrome on v8 engine which is by default provided by the chrome:

--2> Inside this Engine:
     
     --> PARSER: IT interprets the js file line by line or we can say parser is responsible for correctness of our code. IT check our code line by line hence at any line if a code seems to be uncorrect or any exceptions it throw error;
     --> A S T: Abstract Syntax Tree, when parser checks the whole js code and if everything is correct it create a DATA Structure known as AST.,
         EX> function foo(x){
             if(x>!0){
                 var a=2;
                 return a*x;
             }
             return x+10;
         }
          $This jS CODE has no error hence now PArser create a AST (It is nothing but a representation of code in data structure format or tree format:)
                                        function literal
                                        { function foo(x) }
                                              |
                             if statement               return statement
                             { if(...) }                 { return x+10; }       
                                 |
            Binary Operation            Block
            { x>10 }                     {...}
                                           |
               variable declaration      Assignment          Return statement
                    var a;                   =                 return a*x;
                                             |
                                           Literal 
                                              2  

     --> Conversion to Machine code: These AST is converted to machine code. 
          and then machine code runs--> and output will show on console or web.
          
              
*/