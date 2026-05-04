import { BehaviorSubject } from "rxjs";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

export type Language = "en" | "tr";

@Injectable({
  providedIn: "root",
})
export class TranslationService {
  private currentLang$ = new BehaviorSubject<Language>("en");
  public language$ = this.currentLang$.asObservable();

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    const browserLang = navigator.language.startsWith("tr") ? "tr" : "en";
    const initialLang = savedLang || browserLang;
    this.setLanguage(initialLang);
  }

  setLanguage(lang: Language): void {
    this.translate.use(lang);
    this.currentLang$.next(lang);
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }

  toggleLanguage(): void {
    const next = this.currentLang$.value === "en" ? "tr" : "en";
    this.setLanguage(next);
  }

  getCurrentLang(): Language {
    return this.currentLang$.value;
  }
}
