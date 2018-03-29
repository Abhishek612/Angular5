import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../mock-employees';

@Component({
  selector: 'app-olivian',
  templateUrl: './olivian.component.html',
  styleUrls: ['./olivian.component.css']
})
/*@Component is a decorator function that specifies the Angular metadata for the component.*/ 

export class OlivianComponent implements OnInit {

  employees = EMPLOYEES;
   
  selectedEmployee: Employee;
  onSelect(employee: Employee): void {
  console.log(employee);
  
    this.selectedEmployee = employee;
  }
  
  /*employee: Employee = {
    id: 1,
    name: 'Abhishek'
  };*/

  constructor() { }

  ngOnInit() {

    console.log('call ngInit2');
/*The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. 
 It's a good place to put initialization logic   */

  }
  
  //employee = 'Abhishek';

}
