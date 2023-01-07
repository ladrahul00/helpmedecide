import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  selectedOption: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  helpNeeded = false;
  title = 'helpmedecide';
  listOfOptions: string[] = [];
  newOption = new FormControl('');

  // constructor(public dialog: MatDialog) { }
  constructor(private _snackBar: MatSnackBar) { }

  needHelp() {
    this.helpNeeded = true;
  }

  addOption() {
    const newOptionValue = this.newOption.value;
    if (!newOptionValue || newOptionValue === "") {
      return;
    }
    this.listOfOptions.push(newOptionValue);
    this.newOption.reset();
  }

  pickAtRandom() {
    const size = this.listOfOptions.length;
    if (size === 0) {
      console.log("empty shit")
      this._snackBar.open("Give me some options bitch", "Ok", {
        duration: 2000
      });
      return;
    }
    const selectedItem = Math.floor(Math.random() * size);

    this._snackBar.open(this.listOfOptions[selectedItem], "Done", {
      duration: 10000
    });
    // this.dialog.open(DialogDataExampleDialog, {
    //   data: {
    //     selectedOption: this.listOfOptions[selectedItem],
    //   },
    // });
  }
}

// @Component({
//   selector: 'show-selected',
//   templateUrl: 'show-selected.html',
// })
// export class DialogDataExampleDialog {
//   constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
// }
