import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomMenuItem } from '../models/menu-item.model';

@Injectable({
    providedIn: 'root',
})
/**
 * menu data service
 */
export class MenuDataService {

    public toggleMenuBar: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    getMenuList(): CustomMenuItem[] {
        return [
            {
                Label: 'Home', Icon: 'fa-home', RouterLink: '/main/dashboard', Childs: undefined, IsChildVisible: false
            },
            {
                Label: 'Employees', Icon: 'fa-users', RouterLink: '/main/employees', Childs: undefined, IsChildVisible: false
            },
            {
                Label: 'Departments', Icon: 'fa-sitemap', RouterLink: '/main/departments', Childs: undefined, IsChildVisible: false
            },
            {
                Label: 'AboutUs', Icon: 'fa-info-circle', RouterLink: '/main/aboutus', Childs: undefined, IsChildVisible: false
            },
            {
                Label: 'ContactUs', Icon: 'fa-envelope', RouterLink: '/main/contactus', Childs: undefined, IsChildVisible: false
            },
            {
                Label: 'Error 404', Icon: 'fa-exclamation-triangle', RouterLink: '/error', Childs: undefined, IsChildVisible: false
            },
            {
                Label: 'Menu Level 1', Icon: 'fa-cart-plus', RouterLink: undefined, Childs: [
                    { Label: 'Menu Level 1.1', RouterLink: undefined, Childs: undefined, IsChildVisible: false },
                    {
                        Label: 'Menu Level 1.2', RouterLink: undefined, IsChildVisible: false, Childs: [
                            { Label: 'Menu Level 1.2.1', RouterLink: undefined, Childs: undefined, IsChildVisible: false },
                            { Label: 'Menu Level 1.2.2', RouterLink: undefined, Childs: undefined, IsChildVisible: false }
                        ]
                    }
                ], IsChildVisible: false
            }
        ];
    }
}
