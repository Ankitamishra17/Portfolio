import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      icon: <FaLinkedin size={25} />,
      href: "https://www.linkedin.com/in/ankita-mishra17/",
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: <FaGithub size={25} />,
      href: "https://github.com/Ankitamishra17",
      label: "GitHub",
    },
    {
      id: 3,
      icon: <HiOutlineMail size={25} />,
      href: "mailto:ankitamishra8763@gmail.com",
      label: "Email",
    },
    {
      id: 4,
      icon: <BsFillPersonLinesFill size={25} />,
      href: "/Resume.pdf",
      label: "Resume",
      download: true,
    },
  ];

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
        <ul>
          {links.map(({ id, icon, href, label, download }) => (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-white"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom bar for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 text-white flex justify-around items-center py-3 z-50 shadow-inner">
        {links.map(({ id, icon, href, download }) => (
          <a
            key={id}
            href={href}
            download={download}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center text-sm hover:text-cyan-400 transition-colors duration-200"
          >
            {icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default SocialLinks;
