import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { Component, HostListener, signal } from "@angular/core";
import { TranslationService } from "../../services/translation.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileOpen = signal(false);
  activeSection = signal("home");
  currentLang = signal(this.translationService.getCurrentLang());

  navItems = [
    { id: "home", key: "nav.home" },
    { id: "about", key: "nav.about" },
    { id: "portfolio", key: "nav.portfolio" },
    { id: "resume", key: "nav.resume" },
    { id: "certificate", key: "nav.certificate" },
    { id: "contact", key: "nav.contact" },
  ];

  constructor(private translationService: TranslationService) {}

  @HostListener("window:scroll")
  onScroll(): void {
    const scrollPos = window.scrollY;
    this.isScrolled.set(scrollPos > 20);

    for (const item of this.navItems) {
      const element = document.getElementById(item.id);
      if (element) {
        const offset = element.offsetTop - 100;
        if (scrollPos >= offset && scrollPos < offset + element.offsetHeight) {
          this.activeSection.set(item.id);
        }
      }
    }
  }

  scrollTo(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    this.closeMobile();
  }

  toggleLanguage(): void {
    this.translationService.toggleLanguage();
    this.currentLang.set(this.translationService.getCurrentLang());
  }

  toggleMobile(): void {
    this.isMobileOpen.update((v) => {
      const newState = !v;
      document.body.style.overflow = newState ? "hidden" : "";
      return newState;
    });
  }

  closeMobile(): void {
    this.isMobileOpen.set(false);
    document.body.style.overflow = "";
  }
}
