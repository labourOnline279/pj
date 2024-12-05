import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@/public/assets/images/logo.png";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="font-futuraLight hover:scale-110 hover:text-black hover:shadow-2xl tracking-widest uppercase font-thin text-gray-900 text-[14px] transition-all duration-300"
  >
    {label}
  </Link>
);

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);
  return (
    <nav className="absolute z-50 flex justify-between items-center w-full md:py-7 md:px-[35px] pr-3">
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="Logo" width={100} priority />
      </Link>
      <div>
        <div className="md:flex flex-row gap-5 hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </div>
        <button className="md:hidden block" aria-label="Toggle menu">
          <RxHamburgerMenu
            className="w-[50px] h-[35px]"
            onClick={handleClick}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col items-center space-y-6"
              >
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="font-futuraLight text-2xl font-normal text-white hover:text-yellow-400 transition-colors duration-300 uppercase"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-white text-3xl"
              >
                &times;
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
