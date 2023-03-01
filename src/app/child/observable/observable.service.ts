import { Observable } from "rxjs";

export class ObservableService {
    getObservable(): Observable<Date> {
        return new Observable(observer => {
            setInterval(() => observer.next(new Date()), 1000)
        });
    }
}