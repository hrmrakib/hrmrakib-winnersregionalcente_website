"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className='bg-white border-b border-border sticky top-0 z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 shrink-0'>
            <div className='w-8 h-8 bg-primary rounded flex items-center justify-center'>
              <span className='text-primary-foreground font-bold text-sm'>
                TW
              </span>
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-lg font-bold text-foreground'>The Winners</h1>
              <p className='text-xs text-muted-foreground -mt-1'>
                Regional Center
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            <Link
              href='/'
              className='text-foreground hover:text-primary transition-colors font-medium text-sm'
            >
              Home
            </Link>

            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm'>
                  About Us
                  <ChevronDown className='w-4 h-4' />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-48'>
                <DropdownMenuItem asChild>
                  <Link href='/about' className='cursor-pointer'>
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='/news-insights' className='cursor-pointer'>
                    News & Insights
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* EB-5 Immigration Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className='flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium text-sm'>
                  EB-5 Immigration
                  <ChevronDown className='w-4 h-4' />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start' className='w-48'>
                <DropdownMenuItem asChild>
                  <Link href='/projects' className='cursor-pointer'>
                    Our Project
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href='/wealth-management'
              className='text-foreground hover:text-primary transition-colors font-medium text-sm'
            >
              Wealth Management
            </Link>

            <Link
              href='/faq'
              className='text-foreground hover:text-primary transition-colors font-medium text-sm'
            >
              FAQ
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <Button
            className='hidden md:inline-flex bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 text-sm'
            asChild
          >
            <Link href='/evaluation'>REQUEST EVALUATION</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-lg hover:bg-secondary transition-colors'
            aria-label='Toggle menu'
          >
            {isOpen ? (
              <X className='w-6 h-6 text-foreground' />
            ) : (
              <Menu className='w-6 h-6 text-foreground' />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden pb-4 border-t border-border'>
            <div className='flex flex-col gap-4 pt-4'>
              <Link
                href='/'
                onClick={closeMenu}
                className='text-foreground hover:text-primary transition-colors font-medium text-sm px-2 py-2'
              >
                Home
              </Link>

              {/* Mobile About Us Dropdown */}
              <details className='group'>
                <summary className='flex items-center justify-between cursor-pointer text-foreground hover:text-primary transition-colors font-medium text-sm px-2 py-2'>
                  About Us
                  <ChevronDown className='w-4 h-4 group-open:rotate-180 transition-transform' />
                </summary>
                <div className='flex flex-col gap-2 pl-4 pt-2'>
                  <Link
                    href='/about'
                    onClick={closeMenu}
                    className='text-muted-foreground hover:text-primary transition-colors text-sm py-2'
                  >
                    About
                  </Link>
                  <Link
                    href='/news-insights'
                    onClick={closeMenu}
                    className='text-muted-foreground hover:text-primary transition-colors text-sm py-2'
                  >
                    News & Insights
                  </Link>
                </div>
              </details>

              {/* Mobile EB-5 Immigration Dropdown */}
              <details className='group'>
                <summary className='flex items-center justify-between cursor-pointer text-foreground hover:text-primary transition-colors font-medium text-sm px-2 py-2'>
                  EB-5 Immigration
                  <ChevronDown className='w-4 h-4 group-open:rotate-180 transition-transform' />
                </summary>
                <div className='flex flex-col gap-2 pl-4 pt-2'>
                  <Link
                    href='/projects'
                    onClick={closeMenu}
                    className='text-muted-foreground hover:text-primary transition-colors text-sm py-2'
                  >
                    Our Project
                  </Link>
                </div>
              </details>

              <Link
                href='/wealth-management'
                onClick={closeMenu}
                className='text-foreground hover:text-primary transition-colors font-medium text-sm px-2 py-2'
              >
                Wealth Management
              </Link>

              <Link
                href='/faq'
                onClick={closeMenu}
                className='text-foreground hover:text-primary transition-colors font-medium text-sm px-2 py-2'
              >
                FAQ
              </Link>

              {/* Mobile CTA Button */}
              <Button
                className='bg-red-600 hover:bg-red-700 text-white font-semibold w-full mt-2'
                asChild
                onClick={closeMenu}
              >
                <Link href='/evaluation'>REQUEST EVALUATION</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
