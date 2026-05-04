import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Education } from "../../shared/models/education";
import { Experience } from "../../shared/models/experience";

@Component({
  selector: "app-resume",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./resume.component.html",
  styleUrl: "./resume.component.scss",
})
export class ResumeComponent {
  experiences: Experience[] = [
    {
      company: "resume.company_1.name",
      role: "resume.company_1.role",
      period: "09/2024",
      endKey: "resume.present",
      description: "resume.company_1.description",
      tags: ["Angular", "TypeScript", "RxJS", "Unity UI Toolkit", "WebGL"],
    },
    {
      company: "resume.company_2.name",
      role: "resume.company_2.role",
      period: "07/2023",
      endKey: "08/2023",
      description: "resume.company_2.description",
      tags: [".NET Web API", "PostgreSQL", "React", "RESTful API"],
    },
  ];

  education: Education[] = [
    {
      institution: "resume.education_institution",
      degree: "resume.education_degree",
      field: "resume.education_field",
      period: "2020 - 2024",
      description: "resume.education_description",
      tags: [
        "resume.tags.oop",
        "resume.tags.data_structures",
        "resume.tags.design_patterns",
        "resume.tags.sql",
        "resume.tags.relational_modeling",
      ],
    },
  ];

  get cvPath(): string {
    const lang = document.documentElement.getAttribute("lang") || "en";
    return lang === "tr"
      ? "assets/cv/Ali_Ihsan_Ozkaya_CV_TR.pdf"
      : "assets/cv/Ali_Ihsan_Ozkaya_CV_EN.pdf";
  }
}
