import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';

const routes: Routes = [
  {
    path: '',
    component: ListRoomComponent,
  },
  {
    path: 'add-details',
    component: AddRoomComponent,
  },
  {
    path: 'edit-details/:id',
    component: EditRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule { }
