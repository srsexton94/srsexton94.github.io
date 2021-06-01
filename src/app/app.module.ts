import { BrowserModule } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component'
import { MainContentComponent } from './main-content/main-content.component'
import { NavbarComponent } from './navbar/navbar.component'
import { PageContainerComponent } from './page-container/page-container.component'
import {
  AboutComponent,
  DesignComponent,
  EngineeringComponent,
  HomeComponent,
  MainIntroComponent
} from './pages/index'
import { 
  ProjectLinkComponent,
  ProjectTileComponent,
  SocialLinkComponent, 
  TypewriterComponent 
} from './shared/index'
import { UnderConstructionComponent } from './under-construction/under-construction.component'

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    DesignComponent,
    EngineeringComponent,
    HomeComponent,
    MainContentComponent,
    MainIntroComponent,
    NavbarComponent,
    PageContainerComponent,
    ProjectLinkComponent,
    ProjectTileComponent,
    SocialLinkComponent,
    TypewriterComponent,
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
