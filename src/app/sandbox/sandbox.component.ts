import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  currentDish = null;

  favDishes = [
    {
      title: "Pizza", price: 9
    }, {
      title: "Falafel", price: 3
    }, {
      title: "PadThai", price: 7
    }, {
      title: "Döner", price: 4
    }, {
      title: "Pasta", price: 8
    },
    
  ]

  themeColor = "red"
  constructor(public dialog: MatDialog) { }
 
  ngOnInit(): void {
  }

  updateColor() {
    console.log("Whoop")
    this.themeColor ="salmon";
  }

  updateColor2() {
    this.themeColor = "blue"
  }

  selectDish(dish: string) {

    //Only set currendDish Variable
    console.log("Select dish Fired", dish)
    this.currentDish = dish;

    //Opens dialogExampleComponent-html and stores Obversable in dialogRef
    //The Second Parameter is for passing in Data into the Dialog Component (through dialog-example.components.ts -- Dependency Injection 
    // constructor(@Inject(MAT_DIALOG_DATA) public data:any) { })
    // In the Template you can call {{data.name}}
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: this.currentDish.title}});

    //calls afterClosed Method of Dialog and subscribe ob that and shows the result 
    //afterClosed() checks the mat-dialog-close value in the .html File of the Dialog Component
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`)
    });

  }
}



