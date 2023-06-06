import { BrowserModule } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { SocialLinkComponent } from './shared'
import { AboutComponent, ResumePreviewComponent, SelfieComponent } from './pages/about'
import { CarouselComponent, CommunityComponent } from './pages/community'
import { HomeComponent, TypewriterComponent } from './pages/home'

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    CarouselComponent,
    CommunityComponent,
    HomeComponent,
    NavbarComponent,
    ResumePreviewComponent,
    SelfieComponent,
    SocialLinkComponent,
    TypewriterComponent
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
