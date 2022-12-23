import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { RoomRoutingModule } from './room-routing.module';
import { ThemeModule } from 'src/app/theme-modules/theme.module';
import { ListRoomComponent } from './list-room/list-room.component';
// import { authInterceptorProviders } from 'src/app/services/auth.interceptor';
import { RoomService } from './services/room.service';
import { authInterceptorProviders } from 'src/app/services/auth.interceptor';
@NgModule({
  declarations: [
    AddRoomComponent,
    EditRoomComponent,
    ListRoomComponent
  ],
  imports: [
    CommonModule,
    // FormsModule,
    // ReactiveFormsModule,
    RoomRoutingModule,
    ThemeModule.forChild(),
  ],
  providers:[RoomService, authInterceptorProviders],
})
export class RoomModule {}
