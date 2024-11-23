"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";



export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl md:mx-auto mx-0 z-50 ", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        
          <MenuItem
          active={active} setActive={setActive} item="Our Courses"
          >
            <div className="flex flex-col gap-4">
              <HoveredLink href="/allcourses">All Courses</HoveredLink>
              <HoveredLink href="/guitar">Guitar Fundamentals</HoveredLink>
              <HoveredLink href="/piano">Piano for Beginners</HoveredLink>
              <HoveredLink href="/drumming">Drumming Mastery</HoveredLink>
            </div>
          </MenuItem>
       
       <Link href={"contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact"/>
       </Link>

      </Menu>
    </div>
  );
}
