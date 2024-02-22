import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final';
  constructor(private authservice: AuthService) {
    var firebaseConfig = {
      apiKey: "AIzaSyDoWRt1dNW5gqsEPn0uJpSr1BdobF79YlE",
      authDomain: "intissar-123.firebaseapp.com",
      projectId: "intissar-123",
      storageBucket: "intissar-123.appspot.com",
      messagingSenderId: "596166527220",
      appId: "1:596166527220:web:187e3c1182b6eacfdb36a1",
      measurementId: "G-2PZHQVSLSL"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
