// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class CategoriasProvider {
  private PATH = 'categorias/';

  constructor(private db:AngularFireDatabase) {

  }

  public getAll(){
    return this.db.list(this.PATH)
      .snapshotChanges()
      .map( changes => {
        return changes.map( m => ({key: m.key, ...m.payload.val()}))
      })
  }
  get(){

  }
  save(categoriaForm: any){
    const categoria = {
      name: categoriaForm.name,
      description: categoriaForm.description,
    }

    if(categoriaForm.key){
      //editar existente
    } else {
      //salvar um novo
      this.db.list(this.PATH).push(categoria);
    }
  }

  // Remove a Caregory com a Key selecionada;

  remove(categoriaKey:string){
    this.db.list(this.PATH).remove(categoriaKey);
  }

}
