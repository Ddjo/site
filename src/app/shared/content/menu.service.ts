import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class MenuService {

   constructor(private http: HttpClient) {
    }

    public getMenuItems(): Observable<any> {
        return this.http.get('../../../content/menus.json');
    }
}

