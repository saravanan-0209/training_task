import { Component, OnInit, ViewChild } from "@angular/core";
import { NotificationService } from "../service/notification.service";
import { ViewChildComponent } from "../view-child/view-child.component";
import { ObservableService } from "./observable/observable.service";

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
    currentMessage!: string;
    constructor(private observableService: ObservableService, private service: NotificationService) {
        this.observableService.getObservable().subscribe((data: any) => this.currentTime = data);
    }
    ngOnInit(): void {
        this.service.notificationService.subscribe(d => {
            this.currentMessage =d;
        })
    }
    name = 'Saravanan';
    date = new Date();
    birthday = new Date(1997, 2, 9);
    price = 10000;
    team = 'cbg';
    search = '';
    list = [
        'Pavan',
        'Meena',
        'Mitesh',
        'Vijay'
    ];
    currentTime = Date();
    @ViewChild(ViewChildComponent) child: any;

    toggleChild(): void {
        this.child.visible = !this.child.visible;
    }

    setClasses = new Set();

    showColor() {
        this.setClasses.add('blue');
    }

    removeColor(): void {
        this.setClasses.delete('blue');
    }

    sendMessage(message: any) {
        this.service.sendNotification(message.value);
    }
}