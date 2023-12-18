const certificationsData = [
  {
    logo: "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1710979200&amp;v=beta&amp;t=nGcU1X_PeNG4agg8a7z0o-NP-Cw7LrSZBuXwY4Jbx_k",
    title: "AWS Partner: JAM Developer - Code Whisperer",
    issuer: "Amazon Web Services (AWS)",
    date: new Date("dec 2023")
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1710979200&amp;v=beta&amp;t=nGcU1X_PeNG4agg8a7z0o-NP-Cw7LrSZBuXwY4Jbx_k",
    title: "AWS Partner: Machine Learning on AWS (Technical)",
    issuer: "Amazon Web Services (AWS)",
    date: new Date("dec 2023"),
  },
  {
    logo: "./assets/certified logo.png",
    title: "Bootcamp - AWS Certified Solutions Architect – Associate",
    issuer: "Ka Solution",
    date: new Date("dec 2023"),
    code: "20639-65950",
    link: "https://kasolution.com.br/certificado"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Getting Started on Prompt Engineering with Generative AI",
    issuer: "Pluralsight",
    date: new Date("dec 2023"),
    code: "c8f5c861-b7fa-4663-a1ab-1589b65ce002",
    link: "https://app.pluralsight.com/achievements/share/c8f5c861-b7fa-4663-a1ab-1589b65ce002"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Prompt Engineering Best Practices",
    issuer: "Pluralsight",
    date: new Date("dec 2023"),
    code: "2ea8cbeb-1db0-4568-8e1f-6bebf9b6be72",
    link: "https://app.pluralsight.com/achievements/share/2ea8cbeb-1db0-4568-8e1f-6bebf9b6be72"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Curso Java - Rocketseat",
    issuer: "Rocketseat",
    date: new Date("oct 2023"),
    code: "3efb64d0-4615-44af-b837-8a5c6198eebe",
    link: "https://app.rocketseat.com.br/certificates/3efb64d0-4615-44af-b837-8a5c6198eebe"
  },
  {
    logo: "./assets/certified logo.png",
    title: "98010 - Developing on AWS",
    issuer: "Ka Solution",
    date: new Date("sep 2023"),
    code: "48228-99353",
    link: "https://kasolution.com.br/certificado"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Bootcamp AWS Certified Developer – Associate",
    issuer: "Ka Solution",
    date: new Date("sep 2023"),
    code: "13467-74356",
    link: "https://kasolution.com.br/certificado"
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1710979200&amp;v=beta&amp;t=nGcU1X_PeNG4agg8a7z0o-NP-Cw7LrSZBuXwY4Jbx_k",
    title: "AWS Certified Cloud Practitioner (CLF)",
    issuer: "Amazon Web Services (AWS)",
    date: new Date("may 2023"),
    expireDate: new Date("may 2026"),
    code: "6H48L0FKW1BEQJC5",
    link: "https://www.credly.com/badges/2c741271-9c8f-4e63-8d29-9064d43243ce/public_url"
  },
  {
    logo: "./assets/certified logo.png",
    title: "AWS Members Day",
    issuer: "AWS User Group MG",
    date: new Date("may 2023"),
    code: "87643959691782",
    link: "https://verified.sertifier.com/en/verify/87643959691782/"
  },
  {
    logo: "./assets/certified logo.png",
    title: "A Cloud Guru - AWS Certified Cloud Practitioner (CLF-C01)",
    issuer: "A Cloud Guru | A Pluralsight Company",
    date: new Date("dec 2022"),
    code: "DFD18639330E",
    link: "https://verify.acloud.guru/DFD18639330E"
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1710979200&amp;v=beta&amp;t=nGcU1X_PeNG4agg8a7z0o-NP-Cw7LrSZBuXwY4Jbx_k",
    title: "AWS Partner: Well-Architected Best Practices (Technical)",
    issuer: "Amazon Web Services (AWS)",
    date: new Date("dec 2022"),
    link: "https://www.linkedin.com/posts/manoelpradomark22_well-architected-best-practices-activity-7016178192730189824-lJ0X/?utm_source=share&utm_medium=member_desktop"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Architecting on AWS - 98002",
    issuer: "Ka Solution",
    date: new Date("nov 2022"),
    code: "79327-86015",
    link: "https://kasolution.com.br/certificado"
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1710979200&amp;v=beta&amp;t=nGcU1X_PeNG4agg8a7z0o-NP-Cw7LrSZBuXwY4Jbx_k",
    title: "AWS Cloud Quest: Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: new Date("aug 2022"),
    code: "5f2a7ffc-8b4b-47a2-94b0-1e174fc08227",
    link: "https://www.credly.com/badges/5f2a7ffc-8b4b-47a2-94b0-1e174fc08227/linked_in_profile"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Academia Accenture: JAVA e Spring Boot (80 horas)",
    issuer: "Accenture",
    date: new Date("aug 2022"),
    link: "https://www.linkedin.com/feed/update/urn:li:share:6967201233732317184/?utm_source=linkedin_share&utm_medium=member_desktop_share&utm_content=post"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Discover - Fundamentar: HTML, CSS, JavaScript, NodeJS, SQL e +Discover - Fundamentar: HTML, CSS",
    issuer: "Rocketseat",
    date: new Date("aug 2022"),
    code: "3256bf55-2551-4647-b78e-8cf738004ef1",
    link: "https://app.rocketseat.com.br/discover/certificates/3256bf55-2551-4647-b78e-8cf738004ef1"
  },
  {
    logo: "https://media.licdn.com/dms/image/C560BAQER_QnUTXrPJw/company-logo_100_100/0/1670264051233/amazon_web_services_logo?e=1710979200&amp;v=beta&amp;t=nGcU1X_PeNG4agg8a7z0o-NP-Cw7LrSZBuXwY4Jbx_k",
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: new Date("jul 2022"),
    code: "dfd55046-cd54-4329-9426-e82fc83fafae",
    link: "https://www.credly.com/badges/dfd55046-cd54-4329-9426-e82fc83fafae"
  },
  {
    logo: "./assets/certified logo.png",
    title: "Programação Back-end (440 horas)",
    issuer: "Descomplica",
    date: new Date("jul 2022"),
    link: "https://www.linkedin.com/posts/manoelpradomark22_3-meses-de-muito-estudo-pr%C3%A1tica-e-dedica%C3%A7%C3%A3o-activity-6953352398014705664-7AIB?utm_source=share&utm_medium=member_desktop"
  },
  {
    logo: "./assets/certified logo.png",
    title: "JavaScript - Desenvolvimento Web Completo 2022 - 20 cursos + 20 projetos",
    issuer: "Udemy",
    date: new Date("apr 2022"),
    code: "UC-9c801cd0-a2fb-4304-8676-b294e30c171d",
    link: "https://www.udemy.com/certificate/UC-9c801cd0-a2fb-4304-8676-b294e30c171d/"
  },
  {
    logo: "./assets/certified logo.png",
    title: "HACKATHON: Ambev Innovation Game II - Canais Venda (40 hrs)",
    issuer: "Ambev",
    date: new Date("sep 2020"),
    link: "https://github.com/ManoelPradoMark22/ambevinovationgamewebclientpage"
  },
  {
    logo: "./assets/certified logo.png",
    title: "JAVA - Desenvolvimento Android Completo - Crie 18 Apps",
    issuer: "Udemy",
    date: new Date("jul 2019"),
    code: "UC-6FJVZZM8",
    link: "https://www.udemy.com/certificate/UC-6FJVZZM8/"
  }
];

export { certificationsData };