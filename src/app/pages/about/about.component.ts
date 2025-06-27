import { Component } from '@angular/core';

@Component({
  selector: 'about-page',
  styleUrls: ['./about.component.scss'],
  template: `
    <section id="about-me-section" class="page-section">
      <div class="main-intro">
        <selfie class="desktop-only"></selfie>
        <div class="self-description">
          <div class="intro">
            <h2 class="header">Hi there! I'm Sam</h2>
            <selfie class="mobile-only"></selfie>
            <p class="description">
              I'm a professional frontend Software Engineer, UX Designer, and
              experienced Technical Lead who thrives off of architecting
              human-centered digital experiences that are equal parts accessible
              and exceptional.
            </p>
            <resume-preview class="desktop-only"></resume-preview>
            <p class="description">
              Over years of creating highly performant applications, I have
              honed my skills in designing and building well-researched,
              responsive, interactive, and empathetic user interfaces. I have a
              considerable depth of knowledge in crafting scalable, maintainable
              systems and a unique capacity to seamlessly build accessibility
              into the product lifecycle.
            </p>
            <p class="description">
              At the heart of my work is always community &ndash; and I am
              thrilled to play my part in the movements towards Equitable Design
              and radical accesibility in tech.
            </p>
            <p class="description">
              Overall, I know myself to be an analytical, driven, and
              collaborative technologist who is always excited to learn
              something new and unpacks even the most complex problem with
              diligence and a laugh (or two!).
            </p>
            <resume-preview class="mobile-only"></resume-preview>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
