/* 
$ JavaScript Encapsulation:
  Encapsulation is a process of binding the data (i.e. variables) with the functions acting on that data. 
  It allows us to control the data and validate it.

The whole idea behind encapsulation is to hide the implementation details from users.
If a data member is private it means it can only be accessed within the same class.
No outside class can access private data member (variable) of other class.

~Ways to achieve Encapsulation
 > Use var keyword to make data members private.
 > Use setter methods to set the data and getter methods to get that data.

 */
class Student {
    constructor() {
            //private members
            var name;
            var marks;
        }
        /*     Using custom getter and setter methods
                                                                                                         getName() {
                                                                                                            return this.name;
                                                                                                         }
                                                                                                         setName(name) {
                                                                                                             this.name = name;
                                                                                                         }
                                                                                                         getMarks() {
                                                                                                             return this.marks;
                                                                                                         }
                                                                                                         setMarks(marks) {
                                                                                                             this.marks = marks;
                                                                                                          } */
        // ?New Way-->
    get Name() {
        return name;
    }

    set Name(value) {
        return (name = value);
    }

    get Marks() {
        return marks;
    }

    set Marks(value) {
        return (marks = value);
    }
}
var stud = new Student();
// Var name and marks are Encapsulated within functions hence we can only access them using getter and setters

// We have ro first set name and marks of student
stud.name = "Cnu";
stud.marks = 90;
console.log("Student  Name: " + stud.name);
console.log("Student  marks: " + stud.marks);

console.log("There is some correction in Student marks-->");
console.log("Updating student marks..");
stud.marks = 99;
console.log("Marks successfully updated: " + stud.marks);

// Prototype Based Approach-->
Function Student1(name, marks) {
    var s_name = name;
    var s_marks = marks;

    Object.defineProperty(this, "name", {
        // Getter and setters
        get: function() {
            return s_name;
        },
        set: function(s_name) {
            this.s_name = s_name;
        }

    });

    Object.defineProperty(this, "marks", {
        // Getter and setters

        get: function() {
            return s_marks;
        },
        set: function(s_marks) {
            this.s_marks = s_marks;
        }

    });

}
var st = new Student1("John", 80);
console.log(st.name + " " + st.marks);

/* 

class EncapsulationDemo{
    private int ssn;
    private String empName;
    private int empAge;

    //Getter and Setter methods
    public int getEmpSSN(){
        return ssn;
    }

    public String getEmpName(){
        return empName;
    }

    public int getEmpAge(){
        return empAge;
    }

    public void setEmpAge(int newValue){
        empAge = newValue;
    }

    public void setEmpName(String newValue){
        empName = newValue;
    }

    public void setEmpSSN(int newValue){
        ssn = newValue;
    }
}
public class EncapsTest{
    public static void main(String args[]){
         EncapsulationDemo obj = new EncapsulationDemo();
         obj.setEmpName("Mario");
         obj.setEmpAge(32);
         obj.setEmpSSN(112233);
         System.out.println("Employee Name: " + obj.getEmpName());
         System.out.println("Employee SSN: " + obj.getEmpSSN());
         System.out.println("Employee Age: " + obj.getEmpAge());
    } 
}
Advantages of encapsulation
> It improves maintainability and flexibility and re-usability:
  for e.g. In the above code the implementation code of void setEmpName(String name) and String getEmpName() can be changed at any point of time. 
  Since the implementation is purely hidden for outside classes they would still be accessing the private field empName,
  using the same methods (setEmpName(String name) and getEmpName()).
  Hence the code can be maintained at any point of time without breaking the classes that uses the code. 
  This improves the re-usability of the underlying class

> The fields can be made read-only (If we don’t define setter methods in the class)
  or write-only (If we don’t define the getter methods in the class).
  For e.g. If we have a field(or variable) that we don’t want to be changed so we simply define the variable as private,
  and instead of set and get both we just need to define the get method for that variable.
  Since the set method is not present there is no way an outside class can modify the value of that field.

> User would not be knowing what is going on behind the scene. They would only be knowing that to update a field call set method and to read a field call get method,
  but what these set and get methods are doing is purely hidden from them.

Encapsulation is also known as “data Hiding“.
 */