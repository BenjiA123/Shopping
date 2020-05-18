import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCpp_Hc_tUjDxG8ME-QdJSaf7QGTTMnlCg",
      authDomain: "dummy-pro-13445.firebaseapp.com",
      databaseURL: "https://dummy-pro-13445.firebaseio.com",
      projectId: "dummy-pro-13445",
      storageBucket: "dummy-pro-13445.appspot.com",
      messagingSenderId: "66223583071",
      appId: "1:66223583071:web:a9863c0bdba4a00d"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
