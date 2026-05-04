import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ContactForm } from "../models/contact-form";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class TelegramBotService {
  constructor(private http: HttpClient) {}

  private readonly apiUrl = `https://api.telegram.org/bot${environment.telegramToken}/sendMessage`;

  sendContactMessage(formData: ContactForm): Observable<any> {
    const message = this.formatMessage(formData);

    return this.http.post(this.apiUrl, {
      chat_id: environment.chatId,
      text: message,
      parse_mode: "Markdown",
    });
  }

  formatMessage(data: ContactForm): string {
    return (
      "🚀 *Portfolio Bot - Yeni Mesaj!*\n" +
      "────────────────────\n" +
      "👤 *Gönderen:* " +
      data.name +
      "\n" +
      "📧 *E-posta:* " +
      data.email +
      "\n" +
      "📌 *Konu:* " +
      data.subject +
      "\n\n" +
      "💬 *Mesaj:*\n" +
      data.message +
      "\n" +
      "────────────────────"
    );
  }
}
