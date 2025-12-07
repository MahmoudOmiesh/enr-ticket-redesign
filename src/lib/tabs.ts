import {
  BusFrontIcon,
  FileTextIcon,
  UsersIcon,
  SettingsIcon,
  MailWarning,
  InfoIcon,
} from "lucide-react";
import { BookTickets } from "@/components/pages/book-tickets";
import { Orders } from "@/components/pages/orders";
import { Passengers } from "@/components/pages/passengers";
import { Settings } from "@/components/pages/settings";
import { Complaints } from "@/components/pages/complaints";
import { Contact } from "@/components/pages/contact";

export const TABS = [
  {
    title: "Book Tickets",
    value: "book-tickets",
    icon: BusFrontIcon,
    component: BookTickets,
  },
  {
    title: "Orders & Tickets",
    value: "orders-tickets",
    icon: FileTextIcon,
    component: Orders,
  },
  {
    title: "Your Passengers",
    value: "your-passengers",
    icon: UsersIcon,
    component: Passengers,
  },
  {
    title: "Profile Settings",
    value: "profile-settings",
    icon: SettingsIcon,
    component: Settings,
  },
  {
    title: "Suggestions & Complaints",
    value: "suggestions-complaints",
    icon: MailWarning,
    component: Complaints,
  },
  {
    title: "Contact Us",
    value: "contact-us",
    icon: InfoIcon,
    component: Contact,
  },
];
