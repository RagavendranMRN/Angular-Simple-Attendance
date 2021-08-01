import { Time } from '@angular/common';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Date: Date;
  Time: any;
  //Change to Get Data from Server
  timings = [
    '6 to 7 am',
    '7 to 8 am',
    '8 to 9 am',
    '9 to 10 am',
    '4 to 5 am',
    '5 to 6 am',
    '6 to 7 am',
    '8 to 9 am'
  ];

  //Change to Get Data from Server
  student_data = [
    {
      id: '2',
      name: 'Manoj',
      attendanceStatus: 'false'
    },
    {
      id: '3',
      name: 'David',
      attendanceStatus: 'false'
    },
    {
      id: '4',
      name: 'Janani',
      attendanceStatus: 'false'
    }
  ];

  getAttendanceStatus(status) {
    if (status === 'false') {
      return 'isAbsent';
    } else if (status === 'true') {
      return 'isPresent';
    } else if (status === 'Leave') {
      return 'isLeave';
    }
  }

  submit() {
    console.log(this.Date);
    console.log(this.Time);
    console.log(this.student_data);
  }
}
