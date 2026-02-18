"use client";

import type { LucideIcon } from "lucide-react";
import {
  Stethoscope,
  Activity,
  Syringe,
  Briefcase,
  Truck,
  HardHat,
  FileText,
  CreditCard,
  User,
  MapPin,
  Building,
  ClipboardList,
} from "lucide-react";

export type MegaMenuItem = {
  name: string;
  href: string;
  icon: LucideIcon;
  desc: string;
};

export type MegaMenuFeature = {
  title: string;
  desc: string;
  href: string;
  image: string;
  cta: string;
  color: string;
};

export type MegaMenuConfig = {
  title: string;
  items: MegaMenuItem[];
  feature: MegaMenuFeature;
};

export const megaMenus: {
  urgentCare: MegaMenuConfig;
  occHealth: MegaMenuConfig;
  resources: MegaMenuConfig;
} = {
  urgentCare: {
    title: "Urgent Care",
    items: [
      {
        name: "Illness & Infection",
        href: "/services/urgent-care/illness",
        icon: Stethoscope,
        desc: "Strep, Flu, Sinus & more",
      },
      {
        name: "Injuries & Trauma",
        href: "/services/urgent-care/injury",
        icon: Activity,
        desc: "Stitches, Sprains, Fractures",
      },
      {
        name: "Diagnostics & Lab",
        href: "/services/urgent-care/labs",
        icon: ClipboardList,
        desc: "X-Rays, EKGs, In-house Labs",
      },
      {
        name: "Wellness & Vaccines",
        href: "/services/urgent-care/wellness",
        icon: Syringe,
        desc: "Physicals, Flu Shots, TB Tests",
      },
    ],
    feature: {
      title: "Save Your Spot",
      desc: "Skip the waiting room. Check in online now.",
      href: "https://www.clockwisemd.com/hospitals/2072/visits/new",
      image: "/images/waiting-room-blur.jpg",
      cta: "Check In Now",
      color: "bg-teal-600",
    },
  },
  occHealth: {
    title: "Occupational Health",
    items: [
      {
        name: "Employer Services",
        href: "/employer-services",
        icon: Briefcase,
        desc: "Overview of corporate accounts",
      },
      {
        name: "DOT Physicals",
        href: "/employer-services/dot-physicals",
        icon: Truck,
        desc: "FMCSA Certified Examiners",
      },
      {
        name: "Workers' Comp",
        href: "/employer-services/workers-comp",
        icon: HardHat,
        desc: "Injury care & Return-to-Work",
      },
      {
        name: "Drug Screening",
        href: "/employer-services/drug-screening",
        icon: FileText,
        desc: "5/10 Panel, Rapid & MRO",
      },
    ],
    feature: {
      title: "Corporate Accounts",
      desc: "Streamline your team's health with a business account.",
      href: "/employer-services",
      image: "/images/industrial-worker.jpg",
      cta: "Get a Quote",
      color: "bg-slate-800",
    },
  },
  resources: {
    title: "Resources",
    items: [
      {
        name: "Patient Portal",
        href: "/resources/patient-portal",
        icon: User,
        desc: "View results & medical records",
      },
      {
        name: "Transparent Pricing",
        href: "/patient-resources/pricing",
        icon: CreditCard,
        desc: "Self-pay rates & insurance info",
      },
      {
        name: "Patient Forms",
        href: "/resources/forms",
        icon: FileText,
        desc: "Dot physical, sports physical, intake",
      },
      {
        name: "Contact & Location",
        href: "/contact",
        icon: MapPin,
        desc: "7911 N Michigan Rd",
      },
      {
        name: "About Us",
        href: "/about",
        icon: Building,
        desc: "Our story & team",
      },
      {
        name: "Pay Bill Online",
        href: "https://pay.cardx.com/urgentcareindy",
        icon: CreditCard,
        desc: "Secure online payment",
      },
    ],
    feature: {
      title: "MyMedicalLocker",
      desc: "Access your lab results and records securely online.",
      href: "/resources/patient-portal",
      image: "/images/patient-portal-tablet.jpg",
      cta: "Login to Portal",
      color: "bg-blue-600",
    },
  },
};
