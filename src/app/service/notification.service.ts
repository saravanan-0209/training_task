import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class NotificationService {

    constructor() { }

    public notificationService = new BehaviorSubject<string>('Greeting from Saravanan');

    sendNotification(data: any) {
        this.notificationService.next(data);
    }
}