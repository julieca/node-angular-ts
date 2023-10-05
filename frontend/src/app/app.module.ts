import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HomePage } from './pages/home/home.page'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { NbButtonModule, NbIconModule, NbLayoutModule, NbSelectModule, NbThemeModule } from '@nebular/theme'
import { CardListComponent } from './components/CardList/card-list.component'
import { FilterBarComponent } from './components/FilterBar/filter-bar.component'

@NgModule({
  declarations: [
    AppComponent,

    //pages
    HomePage,

    //components
    FilterBarComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,

    //
    NbSelectModule,
    NbButtonModule,
    NbIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
