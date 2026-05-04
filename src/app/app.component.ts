import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { HomeComponent } from "./sections/home/home.component";
import { AboutComponent } from "./sections/about/about.component";
import { ResumeComponent } from "./sections/resume/resume.component";
import { ContactComponent } from "./sections/contact/contact.component";
import { PortfolioComponent } from "./sections/portfolio/portfolio.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { CertificateComponent } from "./sections/certificate/certificate.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ResumeComponent,
    CertificateComponent,
    ContactComponent,
  ],
  template: `
    <app-navbar />
    <main>
      <section id="home"><app-home /></section>
      <section id="about"><app-about /></section>
      <section id="portfolio"><app-portfolio /></section>
      <section id="resume"><app-resume /></section>
      <section id="certificate"><app-certificate /></section>
      <section id="contact"><app-contact /></section>
    </main>
    <app-footer />
  `,
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.addLangs(["en", "tr"]);
    this.translate.setDefaultLang("en");
  }
}
