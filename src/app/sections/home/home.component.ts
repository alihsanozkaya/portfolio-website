import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild("typingEl") typingEl!: ElementRef<HTMLSpanElement>;

  private roles = [
    "Software Development Specialist",
    "Frontend Architect",
    "Angular & Unity Developer",
    "Hybrid UI Engineer",
    "Full-Stack Developer",
  ];

  private rolesTr = [
    "Yazılım Geliştirme Uzmanı",
    "Frontend Mimarı",
    "Angular & Unity Geliştirici",
    "Hibrit Arayüz Mühendisi",
    "Full-Stack Geliştirici",
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  ngOnInit(): void {
    setTimeout(() => this.typeEffect(), 1000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private typeEffect(): void {
    const lang = document.documentElement.getAttribute("lang") || "en";
    const roles = lang === "tr" ? this.rolesTr : this.roles;
    const current = roles[this.roleIndex];
    const cursorEl = document.querySelector(".hero__cursor") as HTMLElement;

    if (cursorEl) cursorEl.style.animation = "none";

    if (this.typingEl?.nativeElement) {
      this.typingEl.nativeElement.textContent = this.isDeleting
        ? current.substring(0, this.charIndex - 1)
        : current.substring(0, this.charIndex + 1);
    }

    this.charIndex = this.isDeleting ? this.charIndex - 1 : this.charIndex + 1;

    let speed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === current.length) {
      speed = 2000;
      this.isDeleting = true;
      if (cursorEl) cursorEl.style.animation = "blink 1s step-end infinite";
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % roles.length;
      speed = 400;
      if (cursorEl) cursorEl.style.animation = "blink 1s step-end infinite";
    }

    this.timer = setTimeout(() => this.typeEffect(), speed);
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  downloadCV(): void {
    const lang = document.documentElement.getAttribute("lang") || "en";

    const cvPath =
      lang === "tr"
        ? "assets/cv/Ali_Ihsan_Ozkaya_CV_TR.pdf"
        : "assets/cv/Ali_Ihsan_Ozkaya_CV_EN.pdf";

    window.open(cvPath, "_blank");
  }
}
