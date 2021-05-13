import { BrowserModule } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NavbarComponent } from './navbar/navbar.component'
import { SocialLinkComponent } from './shared/index'
import {
  AboutComponent,
  EngineeringComponent,
  DesignComponent,
  HomeComponent,
  PageContainerComponent
} from './pages/index';
import { UnderConstructionComponent } from './under-construction/under-construction.component'

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    DesignComponent,
    EngineeringComponent,
    HomeComponent,
    NavbarComponent,
    PageContainerComponent,
    SocialLinkComponent,
    UnderConstructionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
