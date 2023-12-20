import { GoHomeFill } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { FaClipboardUser } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { IoFastFood } from "react-icons/io5";
import { testContext } from "@/context/Provider";
import { IoCart } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
export const getIcon = (iconName) => {
  const icons = [
    { icon: <GoHomeFill color="white" />, name: "home1" },
    { icon: <FaHome color="white" />, name: "home2" },
    { icon: <FaClipboardUser color="white" />, name: "clipboardUser" },
    { icon: <FaClipboardList color="white" />, name: "clipboardList" },
    { icon: <FaMoneyBillWave color="white" />, name: "money" },
    { icon: <RiNetflixFill color="white" />, name: "netflix" },
    { icon: <IoFastFood color="white" />, name: "fastfood" },
    { icon: <IoCart color="white" />, name: "cart" },
    { icon: <FaCar color="white" />, name: "car" },
    { icon: <FaGift color="white" />, name: "gift" },
  ];
  let selectedIcon = null;
  icons.map((icon) => {
    if (icon.name === iconName) {
      selectedIcon = icon;
    }
  });
  return selectedIcon.icon;
};
