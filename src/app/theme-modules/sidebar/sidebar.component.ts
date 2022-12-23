import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidebarMenus: Array<any> = new Array<any>(
    {
      name: 'Home',
      icon: 'home',
      url: '/admin/home',
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
       url: '/admin/dashboard',
    },
    {
      name: 'Room',
      icon: 'photo',
       url: '/admin/room',
    },
    {
      name: 'Password',
      icon: 'password',
      url: '/admin/password'
    },
    {
      name:'ContactUs',
      icon:'contacts',
      url: '',
      // url:'/admin/contact-us'
    },
    
  );
  constructor() { }

  ngOnInit(): void {
  }

}
