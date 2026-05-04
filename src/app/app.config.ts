import { routes } from "./app.routes";
import { HttpClient } from "@angular/common/http";
import { provideHttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { provideRouter, withViewTransitions } from "@angular/router";
import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { provideAnimations } from "@angular/platform-browser/animations";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: "en",
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
  ],
};
