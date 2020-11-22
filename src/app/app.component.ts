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
      this.myFunction(JSON.parse(this.input))
  } catch(e) {
      alert(e); // error in the above string (in this case, yes)!
  }
  }
  myFunction(e) {
    var x = document.createElement("TABLE");
        x.setAttribute("id", "myTable");
        document.body.appendChild(x);
        let keys = [];
        let values = [];
    Object.keys(e).forEach(x=>{
      console.log(e[x], x)
      keys.push(x);
      values.push(e[x])
      
    

    //   var z = document.createElement("TD");
    //   var t = document.createTextNode(x);
    //   z.appendChild(t);
    //   document.getElementById("myTr").appendChild(z);
    })

console.log(keys, values)
    var y = document.createElement("TR");
          y.setAttribute("id", "myTr");
  }
}
