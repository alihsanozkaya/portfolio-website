import { CommonModule } from "@angular/common";
import { TranslateModule } from "@ngx-translate/core";
import { Project } from "../../shared/models/project";
import { Component, signal, computed } from "@angular/core";

@Component({
  selector: "app-portfolio",
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.scss",
})
export class PortfolioComponent {
  activeFilter = signal<string>("all");

  filters = ["all", "frontend", "backend", "unity", "automation"];

  projects: Project[] = [
    {
      id: 1,
      title: "portfolio.project_1.title",
      description: "portfolio.project_1.description",
      tags: ["React", "Context API", "Ant Design", "Google Map"],
      category: "frontend",
      year: 2023,
      liveUrl: "https://afet-projesi.onrender.com",
      codeUrl: "https://github.com/alihsanozkaya/Afet-Projesi",
    },
    {
      id: 2,
      title: "portfolio.project_2.title",
      description: "portfolio.project_2.description",
      tags: ["React", "Redux", "Ant Design", "Tailwind CSS", "i18next"],
      category: "frontend",
      year: 2024,
      liveUrl: "https://billingassistantui.onrender.com",
      codeUrl: "https://github.com/alihsanozkaya/BillingAssistantUI",
    },
    {
      id: 3,
      title: "portfolio.project_3.title",
      description: "portfolio.project_3.description",
      tags: [
        ".NET",
        "PostgreSQL",
        "Entity Framework",
        "JWT",
        "AutoMapper",
        "Tesseract OCR",
        "MailKit",
      ],
      category: "backend",
      year: 2024,
      codeUrl: "https://github.com/alihsanozkaya/BillingAssistantAPI",
    },
    {
      id: 4,
      title: "portfolio.project_4.title",
      description: "portfolio.project_4.description",
      tags: ["C#", "Unity", "UI Toolkit"],
      category: "unity",
      year: 2025,
      codeUrl: "https://github.com/alihsanozkaya/FutbolQuiz-Unity",
    },
    {
      id: 5,
      title: "portfolio.project_5.title",
      description: "portfolio.project_5.description",
      tags: ["JavaScript", "Telegram", "Playwright"],
      category: "automation",
      year: 2025,
      codeUrl: "https://github.com/alihsanozkaya/tcdd-bot",
    },
    {
      id: 6,
      title: "portfolio.project_6.title",
      description: "portfolio.project_6.description",
      tags: ["Node.js", "Express", "MongoDB"],
      category: "backend",
      year: 2026,
      codeUrl: "https://github.com/alihsanozkaya/tcdd-bot-api",
    },
  ];

  filteredProjects = computed(() => {
    const f = this.activeFilter();
    return f === "all"
      ? this.projects
      : this.projects.filter((p) => p.category === f);
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }
}
