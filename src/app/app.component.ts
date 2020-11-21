import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'objectToTable';
  input = '';
  output = ''
  constructor(){

  }
  textInput(){
    try {
      this.output = JSON.stringify(this.input)
  } catch(e) {
      alert(e); // error in the above string (in this case, yes)!
  }
  }
  myFunction(e) {
    var x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.body.appendChild(x);
    Object.keys(e).forEach(x=>{
      var y = document.createElement("TR");
      y.setAttribute("id", "myTr");
      var z = document.createElement("TD");
      var t = document.createTextNode(x);
      z.appendChild(t);
      document.getElementById("myTr").appendChild(z);
    })


  
  }
}
