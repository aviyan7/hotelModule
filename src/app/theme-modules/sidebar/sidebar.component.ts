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
      url: '',
      // url: '/admin/home',
    },
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '',
      // url: '/admin/dashboard',
    },
    {
      name: 'Room',
      icon: 'photo',
      url: '',
      // url: '/admin/room',
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
