"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const navigationMenu = [
  {
    href: "#home",
    label: "ホーム",
  },
  {
    href: "#services",
    label: "サービス",
  },
  {
    href: "#solutions",
    label: "ソリューションズ",
  },
  {
    href: "#testimonials",
    label: "カスタマー",
  },
  {
    href: "#blog",
    label: "ブログ・ニュース",
  },
];

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  const [mobile, setMobile] = useState<{ height: number; width: number } | null>(null);

  useEffect(() => {
    function handleResize() {
      const dimensions = {
        height: window.innerHeight,
        width: window.innerWidth,
      };
      setMobile(dimensions);

      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // 初回レンダリング時にも実行
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 依存配列を空にする

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <img src="/assets/logo.png" width={90} height={60} alt="ロゴ" />
              </Link>
            </div>
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, index) => (
                  <li key={index} className="text-body">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link
                href={"#"}
                className="btnBlue inline-flex lg:inline-block max-lg:hidden"
              >
                申し込み
              </Link>
              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <FaBars className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={navOpen ? "py-0 block w-screen z-[999]" : "hidden"}>
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        >
          <div
            className="h-screen bg-white w-[300px] top-0 right-0 z-[999] fixed"
            onClick={(e) => e.stopPropagation()} // 内部クリックの伝播を防ぐ
          >
            <div className="h-14 px-10 border-b flex items-center">
              <button
                className="flex items-center space-x-3"
                onClick={mobileMenuHandler}
              >
                <IoClose />
                <span>閉じる</span>
              </button>
            </div>
            <div className="h-full py-3 px-10 pb-20">
              <ul className="block mb-7">
                {navigationMenu.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group flex items-center py-2 duration-300 transition-all ease-out hover:text-green"
                      onClick={() => setNavOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className="relative left-2 duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                        <FaChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

