import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title= "Grocery";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 5
    },
    {
      name: "Sugar",
      quantity: 3
    },
  ];


  constructor(public NavCtrl: NavController, public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index){
    console.log("Removing Item -", item, index);
    const toast =await this.toastController.create({
      message: "Removing Item -" + index + "...",
      duration: 2000
    });
    toast.present();

    this.items.splice(index,1);
  }

  addItem(){
    console.log("Adding Iem");
    this.presentAlertPrompt();
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Add Item',
      message: 'Please enter item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'name2-id',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Save',
          handler: item => {
            console.log('Confirm Save', item);
            this.items.push(item);
          }
        }
      ]
    });

    await alert.present();
  }

}
