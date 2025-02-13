"use client";

import { HoverEffect } from "./ui/card-hover-effect";
export const linkedWebsites = [
  {
    title: "LinkedIn",
    description: "Consultez mon LinkedIn",
    link: "https://www.linkedin.com/in/pierre-abeille/",
    image: {
      src: "/LogosLinkedinIcon.svg",
      alt: "LinkedIn",
    },
  },
  {
    title: "GitHub",
    description: "Consultez mon GitHub",
    link: "https://github.com/PierreAbeille",
    image: {
      src: "/LogosGithubIcon.svg",
      alt: "GitHub",
    },
  },
  {
    title: "CV",
    description: "Téléchargez mon CV",
    link: "/PierreAbeille_CV2025.pdf",
    download: true,
    image: {
      src: "/CiFileDownload.svg",
      alt: "CV",
    },
  },
];
export const CallToActions = () => {
    return (
        <div className="call-to-actions">
            <HoverEffect items={linkedWebsites}
            ></HoverEffect>
        </div>
    );
    };