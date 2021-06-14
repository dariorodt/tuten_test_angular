import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {
  public email = this.dataService.session.SessionData.email;
  public token = this.dataService.session.SessionData.token;
  public firstName = this.dataService.session.SessionData.firstName;
  public lastName = this.dataService.session.SessionData.lastName;
  public bookingsToShow!: any[]
  public bookings$!: Observable<any>

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log("OnInit started");
    this.dataService.getBookings("contacto@tuten.cl", true)
      .subscribe((data: any) => { console.log(data[0]); this.bookingsToShow = data })
  }

}
