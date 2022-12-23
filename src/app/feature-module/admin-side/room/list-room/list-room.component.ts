import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import { Room } from '../models/room.model';
import { RoomService } from '../services/room.service';
@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss']
})
export class ListRoomComponent implements OnInit {

  rooms: Room[] = [];
  
  total: number = 0;

  toggleArray: { toggled: boolean }[] = [];

  status: string = 'PUBLISHED';

  constructor(
    private router: Router,
    // private toastrService: ToastrService,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.getAllRoomData();
  }

  getAllRoomData() {
    this.roomService.listAllRooms(this.status).subscribe(
      (response: any) => {
        this.rooms = response.roomdata;
        console.log(this.rooms);
        this.total = response.total;
        this.rooms?.forEach(() => this.toggleArray.push({ toggled: false }));
      },
      (error: any) => {
        // this.toastrService.error(error);
      }
    );
  }

  onEditroom(id: any) {
    this.router.navigate(['/admin/room/edit-details/' + id]);
  }

  onDeleteroom(value: any) {
    if (confirm('Are you sure you want to remove this room')) {
      this.roomService.deleteRoomById(value).subscribe(
        (response: any) => {
          this.ngOnInit();
        },
        (error: any) => {
          // this.toastrService.error('Something went wrong!!!');
        }
      );
    }
  }

  safeDescription(value: any) {
    if (value == null) {
      return '';
    }
    return value.replace(/(<([^>]+)>)/gi, '');
  }

  onAddroom() {
    this.router.navigate(['/admin/room/add-details']);
  }

  onDetailView(id: number | undefined) {
    this.router.navigate(['/admin/room/view-details', id]);
  }

  onFilterStatusData(event: any) {
    this.status = event;
    this.getAllRoomData();
  }

}
