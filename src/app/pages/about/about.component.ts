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
              I'm a Frontend Software Engineer passionate about building digital
              experiences that are equal parts performant, scalable, and
              accessible. With 5+ years of experience, I specialize in bridging
              design intent with technical execution to deliver enterprise-grade
              products that reach millions of users.
            </p>
            <resume-preview class="desktop-only"></resume-preview>
            <p class="description">
              I've led frontend development on platforms like PriceEye,
              empowering airlines to make confident, data-informed pricing
              decisions for 300M+ end users. I've engineered a sustainability
              dashboard that reduced global data center energy consumption by
              20%+. I also directed a 12-person engineering team to ship
              Retirement Income Calculator software, while championing
              accessibility practices that boosted adoption by up to 50%. I've
              also designed AI-driven prototypes, a lifelike avatar sales agent,
              and a national-scale data platform with modern component-based
              systems and WCAG compliance baked in.
            </p>
            <p class="description">
              What drives me is engineering frontend solutions that are both
              technically robust and human-centered, and I thrive when
              collaborating with mission-driven teams committed to shipping
              products that matter.
            </p>
            <resume-preview class="mobile-only"></resume-preview>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
