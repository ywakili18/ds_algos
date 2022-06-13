// A class is a blueprint for creating objects with pre-defined properties and methods.
// Implement data structures as classes.

// The syntax
// the name of the class should ideally be Capitalized
// this class below, is sort of a "pattern" for when we create new students
// one thing to keep in mind with this keyword:
// It refers to the object created from that class (also known as an instance)
class Student {
  // The method to create new objects in a class MUST be called constructor.
  // The class keyword creates a constant, so you can not redefine it
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }
  // Instance methods
  // Instance methods, are functions that are called within a class
  // that we can call at time.
  fullName() {
    return `Your name is: ${this.firstName} ${this.lastName}`
  }
  // Class methods
  // static is the keyword
  // usually its a helper method, or a utility method.
  // maybe to send something like emails.
  // You could use it to grab all the data that has been instantiated
  static EnrollStudents(...student) {
    return `${student}, has been enrolled.`
  }
}
// when we create the firstStudent, this is called instatinating
let firstStudent = new Student('Michael', 'Jordan')
let secondStudent = new Student('John', 'Jordan')
// console.log(firstStudent)
// console.log(firstStudent.firstName)

// Inheritance Method
// console.log(firstStudent.fullName())
// Class Method
// console.log(
//   Student.EnrollStudents([firstStudent.firstName, secondStudent.firstName])
// )

// How classes will be used for data structures

// class DataStructure (){
//   constructor (foo, bar) {
//     // what properties should it have?
//     console.log(foo)
//   }
//   someInstanceMethod(){
//      what should each object created from this class be able to do?
//   }
// }
