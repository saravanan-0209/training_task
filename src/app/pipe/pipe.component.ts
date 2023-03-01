import { Component, ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  displayedColumns: string[] = ['position', 'name', 'role', 'salary'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: any;
  position: any;
  role: any;
  salary: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'PREM', role: 'MANAGER', salary: 100000 },
  { position: 2, name: 'VALLARASU', role: 'TEAMLEADER', salary: 50000 },
  { position: 4, name: 'PERIYASAMI', role: 'ASST TEAMLEADER', salary: 25000 },
  { position: 3, name: 'SARAVANAN', role: 'FULL STACK DEVELOPER', salary: 15000 },];
  
