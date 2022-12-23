import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { Room } from '../models/room.model';
import { Location } from '@angular/common';
import { RoomService} from '../services/room.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss']
})
export class EditRoomComponent implements OnInit {
  room = new Room();
  editroomForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  isPresentFile = false;
  imageURL: string = '';
  imageType: string[] = ['image/jpg', 'image/jpeg', 'image/png'];
  imageTypeError: boolean = false;
  
  fileName: any;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private roomService: RoomService,
    // private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.editroomForm = this.formBuilder.group({
      rno: [undefined, Validators.required],
      rtype: [undefined, Validators.required],
      price: [undefined, Validators.required],
      details: '',
      image: '',
      status: ['DRAFT'],
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.editroomForm.controls;
  }

  goBack() {
    this.location.back();
  }

  onSubmit(roomData: any) {
    this.submitted = true;
    this.room.roomNumber = roomData.rNo;
    this.room.roomType = roomData.rtype;
    this.room.price = roomData.price;
    this.room.detail = roomData.detail.data;
    this.room.status = roomData.status;
    this.room.image = this.imageURL;

    if (this.editroomForm.valid && this.isPresentFile && !this.imageTypeError) {
      this.addroom(this.room);
    }
  }

  onFileSelected(event: any) {
    this.imageTypeError = false;
    this.isPresentFile = true;
    if (
      !this.imageType.includes(event.target.files[0].type) ||
      event.target.files[0].size > 5242880
    ) {
      this.imageTypeError = true;
    }

    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.fileName = reader.result as string;
      this.imageURL = (reader.result as string).split(',')[1];
    };
    reader.readAsDataURL(file);
  }

  addroom(room: any) {
    this.roomService.onAddRoom(room).subscribe(
      (response: any) => {
        // this.toastrService.success('Room Data Added Sucessfully');
        this.location.back();
      },
      (error: any) => {
        // this.toastrService.error('Error data: ', error);
      }
    );
  }

  onCancel() {
    this.location.back();
  }

}
