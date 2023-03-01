import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PeriodicElement } from '../pipe/pipe.component';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private ref : MatDialogRef<PromiseComponent>,
  private router : Router) {}
  
  @Input() table : PeriodicElement[] = [];
  ngOnInit () {
    console.log(this.data);
  }

  save() : void {
    this.ref.close();
  }
  close() : void {
    this.ref.close();
  }
}

