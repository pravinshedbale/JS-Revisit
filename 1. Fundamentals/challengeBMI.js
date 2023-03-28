/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/
class Person {
  constructor(fullName, massInKg, heightInMtr) {
    this.fullName = fullName;
    this.massInKg = massInKg;
    this.heightInMtr = heightInMtr;
    this.calculateBMI();
  }
  calculateBMI() {
    this.bmi =
      (this.massInKg ? this.massInKg : 0) /
      (this.heightInMtr ? this.heightInMtr : 0) ** 2;
  }
  getBMI() {
    return this.bmi;
  }
  setName(fullName) {
    this.fullName = fullName;
  }
  setMass(massInKg) {
    this.massInKg = massInKg;
    this.calculateBMI();
  }
  setHeight(heightInMtr) {
    this.heightInMtr = heightInMtr;
    this.calculateBMI();
  }
}

let mark = new Person("Mark", 78, 1.69);
let john = new Person("John", 92, 1.95);

let markHigherBMI = mark.getBMI() > john.getBMI();

console.log(mark.getBMI(), john.getBMI());
console.log("For dataset 1 : ");

mark.setMass(95);
mark.setHeight(1.88);

john.setMass(85);
john.setHeight(1.76);

markHigherBMI = mark.getBMI() > john.getBMI();
console.log(mark.getBMI(), john.getBMI());

console.log("For dataset 2 : ", markHigherBMI);
