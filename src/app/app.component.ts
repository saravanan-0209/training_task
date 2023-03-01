import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private router : Router) {}

visible = true;
  current = '';

  title = 'sample_project';

  handleEvent(event: any) {
    this.current=event;
    console.log(event);
  }
  // openTable() {
  //   this.router.navigate(['/pipe']);
  // }
}

