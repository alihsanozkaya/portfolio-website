import { FormsModule } from "@angular/forms";
import { Component, signal } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { ContactForm } from "../../shared/models/contact-form";
import { TelegramBotService } from "../../shared/services/telegram-bot.service";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: "./contact.component.html",
  styleUrl: "./contact.component.scss",
})
export class ContactComponent {
  isSending = signal(false);
  sendSuccess = signal(false);
  sendError = signal(false);

  form: ContactForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  constructor(private telegramService: TelegramBotService) {}

  async onSubmit(): Promise<void> {
    if (this.isSending()) return;

    this.isSending.set(true);
    this.sendSuccess.set(false);
    this.sendError.set(false);

    this.telegramService.sendContactMessage(this.form).subscribe({
      next: () => {
        this.sendSuccess.set(true);
        this.form = { name: "", email: "", subject: "", message: "" };
        this.isSending.set(false);
      },
      error: (err) => {
        console.error('Telegram Error:', err);
        this.sendError.set(true);
        this.isSending.set(false);
      }
    });
  }
}
