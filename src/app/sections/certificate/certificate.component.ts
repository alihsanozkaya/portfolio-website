import { Component } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { Certificate } from "../../shared/models/certificate";

@Component({
  selector: "app-certificate",
  standalone: true,
  imports: [TranslateModule],
  templateUrl: "./certificate.component.html",
  styleUrl: "./certificate.component.scss",
})
export class CertificateComponent {
  certificates: Certificate[] = [
    {
      id: 1,
      title: "certificate.certificate_title_1",
      issuer: "Udemy",
      date: "08/2023",
      credentialId: "UC-cfe8bae0-c190-4d14-a4cf-1bea2699cac2",
      verifyUrl:
        "https://udemy-certificate.s3.amazonaws.com/pdf/UC-cfe8bae0-c190-4d14-a4cf-1bea2699cac2.pdf",
      category: "Backend",
    },
    {
      id: 2,
      title: "certificate.certificate_title_2",
      issuer: "Coderspace",
      date: "05/2024",
      credentialId: "6aa22662-7647-469c-8839-b06dfd56c227",
      verifyUrl:
        "https://coderspace.io/sertifikalar/6aa22662-7647-469c-8839-b06dfd56c227",
      category: "Agile",
    },
    {
      id: 3,
      title: "certificate.certificate_title_3",
      issuer: "Patika.dev",
      date: "06/2024",
      credentialId: "77b0e92c",
      verifyUrl: "https://academy.patika.dev/certificates/77b0e92c",
      category: "Frontend",
    },
    {
      id: 4,
      title: "certificate.certificate_title_4",
      issuer: "BTK Akademi",
      date: "07/2025",
      credentialId: "Ko9fELAdK8",
      verifyUrl:
        "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=Ko9fELAdK8",
      category: "Unity",
    },
  ];

  get sortedCertificates(): Certificate[] {
    return [...this.certificates].sort((a, b) => b.id - a.id);
  }
}
