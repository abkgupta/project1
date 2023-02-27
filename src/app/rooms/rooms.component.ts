import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName = 'Taj Hotel';
  numberofrooms = 10;
  hiderooms = false;

  rooms: Room = {
    totalRooms:20,
    availableRooms:10,  
    bookedrooms:5,
  };

 roomList: RoomList[] = [{
    roomNumber: 1,
    roomType : 'Deluxe Room',
    ammenties: 'Air Conditioner, bathroom ,Free Wifi, TV, Kitchen',
    price: 500,
    photos: 'https://unsplash.com/photos/g5ZIXjzRGds',
    checkinTime: new Date('11-Feb-2023'),
    checkoutTime: new Date('12-Feb-2023'),

 },
 {
  roomNumber: 2,
  roomType : 'Delon Room',
  ammenties: 'Air Conditioner, bathroom ,Free Wifi, TV, Kitchen',
  price: 500,
  photos: 'https://unsplash.com/photos/g5ZIXjzRGds',
  checkinTime: new Date('11-Feb-2023'),
  checkoutTime: new Date('12-Feb-2023'),
 },
 {
  roomNumber: 3,
  roomType : 'Private Room',
  ammenties: 'Air Conditioner, bathroom ,Free Wifi, TV, Kitchen',
  price: 500,
  photos: 'https://unsplash.com/photos/g5ZIXjzRGds',
  checkinTime: new Date('11-Feb-2023'),
  checkoutTime: new Date('12-Feb-2023'),
 }

]
  toggle(){
    this.hiderooms = !this.hiderooms;
  }
  
}
