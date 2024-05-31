import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class NotificationService {

   constructor(private http: HttpClient) {
    }

    public getNotifications(): Observable<any> {
        return this.http.get('../../../content/notifications.json');
    }
}

