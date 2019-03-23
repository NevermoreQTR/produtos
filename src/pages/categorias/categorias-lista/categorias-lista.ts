import { CategoriasProvider } from './../../../providers/categorias/categorias';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Observable } from 'rxjs/observable';

/**
 * Generated class for the CategoriasListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias-lista',
  templateUrl: 'categorias-lista.html',
})
export class CategoriasListaPage {
categorias: Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private categoriasProvider: CategoriasProvider
    ) {
      this.categorias = this.categoriasProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasListaPage');
  }

  newItemCategorias(){
    this.navCtrl.push('CategoriasEditaPage');
  }

  editItemCategorias( categoria:any ){
    this.navCtrl.push('CategoriasEditaPage',{ categoriakey: categoria.key });
  }

  removeItemCategorias( key:string ){
    this.categoriasProvider.remove( key );
    this.toast.create({ message: 'Categoria removida com sucesso', duration:3000, position:'bottom' }).present();
  }

}
