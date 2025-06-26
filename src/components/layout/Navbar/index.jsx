"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./ResTopNavbar";
import CartBtn from "./CartBtn";
import { usePathname } from "next/navigation";
import * as LucideIcons from "lucide-react"; // tüm ikonları tek objede içeri aktar

const menuData = [
  {
    id: 1,
    type: "MenuItem",
    label: "Dashboard",
    url: "/",
    icon: "LayoutDashboard",
  },
  {
    id: 2,
    type: "MenuItem",
    label: "Products",
    url: "/products",
    icon: "Boxes",
  },
  {
    id: 3,
    type: "MenuItem",
    label: "Catalogs",
    url: "/catalogs",
    icon: "Book",
  },
  {
    id: 4,
    type: "MenuItem",
    label: "Orders",
    url: "/orders",
    icon: "Package",
  },
  {
    id: 5,
    label: "Other",
    type: "MenuList",
    icon: "MoreHorizontal",
    children: [
      {
        id: 11,
        label: "Notes & Messages",
        url: "/notes",
        icon: "StickyNote",
      },
      {
        id: 12,
        label: "Bank Accounts",
        url: "/bank-accounts",
        icon: "CreditCard",
      },
      {
        id: 13,
        label: "Contacts",
        url: "/contacts",
        icon: "Contact",
      },
    ],
  },
];

const TopNavbar = () => {
  function getIconComponent(name) {
    const Icon = LucideIcons[name];
    return Icon ? <Icon className="w-4 h-4 mr-2" /> : null;
  }

  const pathname = usePathname();
  if (pathname.includes("login") || pathname.includes("register")) return;
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-30 gap-16 ">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            <ResTopNavbar data={menuData} />
          </div>
          <Link
            href="/"
          >
            <Image
              priority
              src="/images/logo.png"
              height={250}
              width={250}
              alt="logo"
            />
          </Link>
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {menuData.map((item) =>
              item.type === "MenuItem" ? (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink asChild className="flex flex-row ">
                    <Link
                      href={item.url}
                      className="flex items-center gap-2 font-semibold"
                    >
                      {getIconComponent(item.icon)}
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuTrigger className="flex items-center gap-2">
                    {getIconComponent(item.icon)}
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="flex flex-col w-[200px] gap- ">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.url}
                              className="flex flex-row w-full items-center gap-2"
                            >
                              {getIconComponent(child.icon)}
                              {child.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <InputGroup className="hidden md:flex bg-[#F0F0F0]">
          <InputGroup.Text>
            <Image
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search"
              className="min-w-5 min-h-5"
            />
          </InputGroup.Text>
          <InputGroup.Input
            type="search"
            name="search"
            placeholder="Search for products..."
            className="bg-transparent placeholder:text-black/40"
          />
        </InputGroup>
        <div className="flex items-center">
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/#signin" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
