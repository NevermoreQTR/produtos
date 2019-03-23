import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { config } from '../../firebase-config';

import { AngularFireModule } from 'angularfire2'; // Puxa a Base para o Banco de Dados
import { AngularFireDatabaseModule } from 'angularfire2/database'; // Puxa o Banco de Dados
import { AngularFireAuthModule } from 'angularfire2/auth'; // Puxa a Autenticação para o Banco de Dados


import { CategoriasProvider } from '../providers/categorias/categorias';
import { ProdutosProvider } from '../providers/produtos/produtos'; 

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CategoriasProvider,
    ProdutosProvider
  ]
})
export class AppModule {}
