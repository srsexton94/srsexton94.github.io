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
  AdditionalIntroComponent,
  CommunitySlidesComponent,
  DesignComponent,
  EngineeringComponent,
  HomeComponent,
  MainIntroComponent,
  ResumePreviewComponent,
  ScrollLinkComponent,
  SelfieComponent,
  VideoContainerComponent
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
    AdditionalIntroComponent,
    AppComponent,
    CommunitySlidesComponent,
    DesignComponent,
    EngineeringComponent,
    HomeComponent,
    MainContentComponent,
    MainIntroComponent,
    NavbarComponent,
    PageContainerComponent,
    ProjectLinkComponent,
    ProjectTileComponent,
    ResumePreviewComponent,
    ScrollLinkComponent,
    SelfieComponent,
    SocialLinkComponent,
    TypewriterComponent,
    UnderConstructionComponent,
    VideoContainerComponent
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
