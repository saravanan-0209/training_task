import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeComponent } from './pipe/pipe.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { PromiseComponent } from './promise/promise.component';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { ChildComponent } from './child/child.component';
import { ListFilter } from './custompipe/listfilters.pipe';
import { ObservableService } from './child/observable/observable.service';
import { ColorDirective } from './directive/color.directive';
import { PromComponent } from './prom/prom.component';
import { NotificationService } from './service/notification.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    PipeComponent,
    ViewChildComponent,
    PromiseComponent,
    ChildComponent,ListFilter,ColorDirective,PromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,MatButtonModule,RouterModule,
    MatDialogModule,  MatInputModule,MatToolbarModule,MatIconModule,MatTabsModule
  ],
  providers: [ObservableService,NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
