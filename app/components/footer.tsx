'use client'

import Link from "next/link";

export const footerData = [
  {
    title: "Création",
    content: "Pierre Abeille",
    link: "www.pierreabeille.fr",
  },
  {
    title: "Mail",
    content: "hello@pierreabeille.dev",
    link: "mailto:hello@pierreabeille.dev",
  },
  {
    title: "Licence",
    content: "CC BY-NC-SA 4.0",
    link: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
  },
];

export const MyFooter = () => {
    return (
      <div className="footer flex flex-col sm:flex-row sm:gap-8 gap-1 justify-center items-center">
        {footerData.map((item, idx) => (
          <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-start sm:items-baseline" key={idx}>
            <span className="font-extralight text-sm">{item.title}</span>
            <Link
              href={item?.link}
              className="relative group  block p-2 h-full w-full"
            >
              <span className="font-semibold text-sm">{item.content}</span>
            </Link>
          </div>
        ))}
      </div>
    );
    };