import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';
import { RoomService } from '../services/room.service';
import { Location } from '@angular/common';
import { Room } from '../models/room.model';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss']
})
export class AddRoomComponent implements OnInit {
  room = new Room();
  addroomForm: FormGroup = new FormGroup({});
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
    this.addroomForm = this.formBuilder.group({
      roomNumber: [undefined, Validators.required],
      roomType: [undefined, Validators.required],
      price: [undefined, Validators.required],
      detail: '',
      image: '',
      status: ['DRAFT']
    });
  }

  get forms(): { [key: string]: AbstractControl } {
    return this.addroomForm.controls;
  }

  goBack() {
    this.location.back();
  }

  onSubmit(roomData: any) {
    this.submitted = true;
    console.log(roomData.roomNumber);
    this.room.roomNumber = roomData.roomNumber;
    this.room.roomType = roomData.roomType;
    this.room.price = roomData.price;
    this.room.detail = roomData.detail.data;
    this.room.status = roomData.status;
    this.room.image = this.imageURL;

    if (this.addroomForm.valid && this.isPresentFile && !this.imageTypeError) {
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
