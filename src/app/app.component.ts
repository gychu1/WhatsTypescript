import { Component } from '@angular/core';
import { DictionaryService} from './dictionary.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dictionary';
  // constructor(private dictionary:DictionaryService){
  //   this.dictionary.getData()
  //   })
  // }
}
