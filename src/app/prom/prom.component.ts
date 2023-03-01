import { Component, OnInit } from "@angular/core";
import { NotificationService } from "../service/notification.service";

@Component({
    selector: 'app-prom',
    templateUrl: './prom.component.html',
    styleUrls: ['./prom.component.css']
})

export class PromComponent implements OnInit {
    notificationMessage!: string;
    constructor(private service : NotificationService) {}


    ngOnInit(): void {
        this.usingPromise(5,10).then((result: any) => {
            console.log(result/3);
        });

        this.service.notificationService.subscribe((d: any) => {
            this.notificationMessage = d;
        })
    }

    usingPromise(a: number, b: number): Promise<number> | any {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(a + b);
            }, 1000);
        });
    }
}

