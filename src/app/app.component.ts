import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {

  title="github example"
  @Input() caller: string = "";
  @Input() caller2: string = "";


  ngAfterContentInit() {
    console.log(this.caller);
    console.log(this.caller2);
  }

}
