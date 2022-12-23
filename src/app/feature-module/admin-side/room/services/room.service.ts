import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  apiUrlEndPoint: string = '/rooms';
  baseUrl: string = environment.baseUrl;
  constructor(private httpClient: HttpClient) {}

  onAddRoom(room: any): Observable<Room> {
    return this.httpClient.post<Room>(
      this.baseUrl.concat(this.apiUrlEndPoint),
      Room
    );
  }

  listAllRooms(status: any): Observable<Room> {
    let params = new HttpParams();
    if (status) {
      params = params.append('status', status);
    }
    return this.httpClient.get<Room>(
      this.baseUrl.concat(this.apiUrlEndPoint),
      {
        params,
      }
    );
  }
  onSaveFile(file: string | Blob): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.httpClient.post(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/image'),
      formData,
      {
        responseType: 'text',
      }
    );
  }

  deleteRoomById(id: number): Observable<Room> {
    return this.httpClient.delete<Room>(
      this.baseUrl.concat(this.apiUrlEndPoint).concat('/' + id)
    );
  }
  getRoomById(id: number): Observable<Room> {
    return this.httpClient.get<Room>(
      this.baseUrl.concat(this.apiUrlEndPoint + '/' + id)
    );
  }

  onEditRoom(value: any, id: any): Observable<Room> {
    return this.httpClient.put<Room>(
      this.baseUrl.concat(this.apiUrlEndPoint + '/' + id),
      value
    );
  }
 
}
