import {Page, NavController, NavParams} from 'ionic-angular';
import {ProveedoresData} from '../../providers/proveedores';

@Page({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {
  private nav:NavController;
  selectedItem:any;

  constructor(nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    this.nav.push(MenuPage, {
      item: item
    });
  }


  getMenus(local) {
    this.nav.push(MenuPage, local);
  }

}
