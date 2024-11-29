// Task1
console.log('-------------------Task1-------------------------');
console.log();
var book = {
    "Title": "Harry potter",
    "Author": "Jk Rowling",
    "Year Published": 2005
}

console.log(book);
console.log(book.Author);
book['Year Published'] = 2010;
console.log(book);
book['Genre'] = "fiction";
console.log(book);
delete book.Title;
console.log(book);
console.log();

console.log('-------------------Task2-------------------------');
console.log();
//Task2

var Employee = {
    Name: "Krishna",
    Age: 22,
    Position: "Software developer",
    Salary: 20000
}
console.log(Employee);
console.log(Employee.Position);
Employee['Salary'] = 50000;
console.log(Employee);
Employee['Department'] = 'HR';
console.log(Employee);
delete Employee.Age;
console.log(Employee);
console.log();

console.log('-------------------Task3--------------------------');
console.log();

// Task3
var Product = {
    Id : 1,
    Name : "Smart_Phone",
    Price: 15000,
    Category: "Smart Devices"
}
console.log(Product);
console.log(Product.Price);
Product['Category'] = 'Electronics';
console.log(Product);
Product['inStock'] = true;
console.log(Product);
delete Product.Id;
console.log(Product);
console.log();


console.log('-------------------Task4--------------------------');
console.log();

// Task4
var Car = {
    make : "Steel",
    model : 'Benz',
    year : 2010,
    color: 'Red'
}

console.log(Car.make);
console.log(Car)
Car['color'] = 'Black';
console.log(Car);
Car['Engine type'] = 'V6';
console.log(Car);
delete Car.year;
console.log(Car);
console.log();



console.log('-------------------Task5--------------------------');
console.log();

// Task 5
var Student = {
    Name: 'Krishna',
    Age: 22,
    Grade: 'A',
    School: 'NNRG'
}

console.log(Student);
console.log(Student.School);
Student['Grade'] = 95;
console.log(Student);
Student['Hobbies'] = ["Reading", "Singing"];
console.log(Student);
delete Student.Age;
console.log(Student);
console.log();



console.log('-------------------Task6--------------------------');
console.log();

// Task 6
const user = {
    username: "john_doe",
    profile: {
      firstName: "John",
      lastName: "Doe",
      age: 28,
      address: {
        street: "456 Elm St",
        city: "Gotham",
        zip: "54321"
      }
    },
    preferences: {
      theme: "dark",
      notifications: true
    }
  };


console.log("Accessed the city property from the object: ",user.profile.address['city'])
user.preferences['theme'] = 'light';
console.log(user);
user.profile['Phone'] = '555-9876';
console.log(user);
delete user.profile.address['zip'];
console.log(user);
console.log();


// Task 7
console.log('-------------------Task7--------------------------');
console.log();
const company = {
    name: "Tech Solutions",
    employees: [
      {
        name: "Alice",
        position: "Developer",
        contact: {
          email: "alice@tech.com",
          phone: "555-2345"
        }
      },
      {
        name: "Bob",
        position: "Manager",
        contact: {
          email: "bob@tech.com",
          phone: "555-6789"
        }
      }
    ],
    location: "New York"
  };

console.log("Accessed the Name property from the object: ",company.employees[1].name);
company.employees[0].contact['phone'] = '555-1111'
console.log(company);
company.employees[0]['Department'] = 'Engineering';
console.log(company);
delete company.location;
console.log(company);







