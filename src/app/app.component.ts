import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [`
    h2{
      color: blue;
    }
  `]
})
export class AppComponent {
  title = 'My First App';
  name = 'Andrew';
}
