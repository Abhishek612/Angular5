import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Olive Members';

  ngOnInit() {
    
        console.log('call ngInit1');
    /*The ngOnInit is a lifecycle hook Angular calls ngOnInit shortly after creating a component. 
    It's a good place to put initialization logic   */
    
      }
}
