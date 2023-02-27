export interface Room{
    availableRooms:number;
    bookedrooms: number;
    totalRooms:number;
}

export interface RoomList{
    roomNumber: number;
    roomType: string;
    ammenties: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
}