import { FaChartPie } from "react-icons/fa";
import { BsFillBoxFill, BsHeadset } from "react-icons/bs";
import { FaStore } from "react-icons/fa6";
import { PiUsers, PiStandardDefinitionFill } from "react-icons/pi";
import { RiFileList2Line } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { MdWorkspacePremium } from "react-icons/md";
import { LuPackageCheck } from "react-icons/lu";
import { TbCreditCardPay } from "react-icons/tb";

const sidebarLinks = [
  {
    name: "Home",
    link: "/dashboard",
    icon: FaChartPie,
  },
  {
    name: "Crates",
    link: "/crates",
    links: [
      {
        name: "Standard",
        link: "/crates/standard",
        icon: PiStandardDefinitionFill,
      },
      {
        name: "Limited",
        link: "/crates/limited",
        icon: IoTimerOutline,
      },
      {
        name: "Premium",
        link: "/crates/premium",
        icon: MdWorkspacePremium,
      },
    ],
    icon: BsFillBoxFill,
  },
  {
    name: "Store",
    link: "/store",
    icon: FaStore,
  },
  {
    name: "Customers",
    link: "/customers",
    links: [
      {
        name: "All Customers",
        link: "/customers/all",
      },
      {
        name: "New Customers",
        link: "/customers/new",
      },
      {
        name: "Top Customers",
        link: "/customers/top",
      },
    ],
    icon: PiUsers,
  },
  {
    name: "Reports",
    link: "/reports",
    links: [
      {
        name: "Orders",
        link: "/reports/orders",
        icon: LuPackageCheck,
      },
      {
        name: "Transactions",
        link: "/reports/transactions",
        icon: TbCreditCardPay,
      },
      {
        name: "Contacts",
        link: "/reports/contacts",
        icon: BsHeadset,
      },
    ],
    icon: RiFileList2Line,
  },
];

export default sidebarLinks;
