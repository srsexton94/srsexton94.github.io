import { BrowserModule } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { PageContainerComponent } from './page-container/page-container.component'
import { 
  CarouselComponent, 
  ScrollLinkComponent,
  SocialLinkComponent,
  TypewriterComponent
} from './shared'
import {
  AboutComponent,
  AdditionalIntroComponent,
  CommunitySlidesComponent,
  NanoImageLinkComponent,
  PersonalInterestsComponent,
  ResumePreviewComponent,
  SelfieComponent,
  VideoPlayerComponent
} from './pages/about'
import {
  HomeComponent
} from './pages/home'

@NgModule({
  declarations: [
    AboutComponent,
    AdditionalIntroComponent,
    AppComponent,
    CarouselComponent,
    CommunitySlidesComponent,
    HomeComponent,
    NanoImageLinkComponent,
    NavbarComponent,
    PageContainerComponent,
    PersonalInterestsComponent,
    ResumePreviewComponent,
    ScrollLinkComponent,
    SelfieComponent,
    SocialLinkComponent,
    TypewriterComponent,
    VideoPlayerComponent
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
