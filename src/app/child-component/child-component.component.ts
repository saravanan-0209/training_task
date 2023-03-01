import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { PeriodicElement, PipeComponent } from '../pipe/pipe.component';
import { PromiseComponent } from '../promise/promise.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnChanges{
  // val: string='';
  constructor(private formBuilder : FormBuilder, private router : Router,private dialog : MatDialog) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  @Input() result = '';
  @Output() somethingChanged = new EventEmitter<any>();
  @ViewChild(AppComponent) child!: { visible: boolean; } ;

  viewchild(): void {
    this.child.visible = !this.child.visible;
  }

  empForm !: FormGroup;
  ngOnInit(): void {
    // this.val = this.value;
    this.empForm = this.formBuilder.group ({
      name : ['',[Validators.required] ],
      role : ['',[Validators.required]],
      salary : ['',[Validators.required]]
    })
  }
  table : PeriodicElement[] = [];
  submit() : void {
    // if(!this.empForm.valid) {
    //   alert("not valid") 
    // }
    const dialogRef = this.dialog.open(PromiseComponent,{
     enterAnimationDuration : '500ms',exitAnimationDuration : '500ms',
     data : {
        value :this.empForm.value ,disableClose: true
     }
    });
  
    dialogRef.afterClosed().subscribe((res:any)=>{
        // this.table = res.data;
        this.table.push(res);
      }
    );
  }

  buttonClicked(datas:any) {
    this.somethingChanged.emit(datas);
  }
}
