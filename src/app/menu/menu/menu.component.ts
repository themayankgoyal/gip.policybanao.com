import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent {
    items: any = [];

    ngOnInit() {
        debugger
        this.items = [
            { label: 'Dashboard',icon: 'pi pi-fw pi-home', routerLink: '/dashboard' },
            {
                label: 'Manage Policy',
                icon: 'pi pi-fw pi-bars',
                items: [
                    { label: 'Add Policy',icon: 'pi pi-fw pi-pencil', routerLink: '/addPolicy' },
                    { label: 'List Policy',icon: 'pi pi-fw pi-list' },
                    // { label: 'Dashboard', routerLink: '/dashboard' },
                ]
            },
            {
                label: 'Channel Partner',
                icon: 'pi pi-fw pi-bars',
                items: [
                    { label: 'Add CP',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add CP Commission',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add CP Incentive',icon: 'pi pi-fw pi-pencil' },
                    { label: 'List CP',icon: 'pi pi-fw pi-list' },
                    { label: 'List CP Commission',icon: 'pi pi-fw pi-list' },
                    { label: 'List CP Incentive',icon: 'pi pi-fw pi-list' },
                ]
            },
            {
                label: 'Service Provider',
                icon: 'pi pi-fw pi-bars',
                items: [
                    { label: 'Add Parent SP',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add SP',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add SP Commission',icon: 'pi pi-fw pi-pencil' },
                    { label: 'List SP',icon: 'pi pi-fw pi-list' },
                    { label: 'List Parent SP',icon: 'pi pi-fw pi-list' },
                    { label: 'List SP Commission',icon: 'pi pi-fw pi-list' },
                ]
            },
            {
                label: 'Manage Vehicle',
                icon: 'pi pi-fw pi-bars',
                items: [
                    { label: 'Add Vehicle Type',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Vehicle Segment',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Vehicle Make',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Vehicle Model',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Vehicle Fuel',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Vehicle CC',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Vehicle GVW',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Vehicle Seating Capacity',icon: 'pi pi-fw pi-pencil' },
                ]
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-bars',
                items: [
                    { label: 'Add State',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add RTO',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Insurer',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Portal ID',icon: 'pi pi-fw pi-pencil' },
                    { label: 'Add Agency',icon: 'pi pi-fw pi-pencil' },
                    
                ]
            }
        ];
    }
}
