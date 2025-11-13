"use client";

import { useState } from "react";
import { Code2, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession()
  console.log(session)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 transition-smooth hover:opacity-80"
        >
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">CodeArena</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-smooth hover:text-primary">
            Problems
          </Link>
          <Link href="/contests" className="text-sm font-medium transition-smooth hover:text-primary">
            Contests
          </Link>
          <Link href="/discuss" className="text-sm font-medium transition-smooth hover:text-primary">
            Discuss
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          { session?.user.id ? (<Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
          </Button>) :
          (<Button className="hidden md:flex">Sign In</Button>)}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col items-start gap-2 p-4">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-sm font-medium transition-smooth hover:text-primary"
            >
              Problems
            </Link>
            <Link
              href="/contests"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-sm font-medium transition-smooth hover:text-primary"
            >
              Contests
            </Link>
            <Link
              href="/discuss"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-sm font-medium transition-smooth hover:text-primary"
            >
              Discuss
            </Link>
            <div className="flex w-full items-center justify-between mt-2">
              {session?.user.id ? (<Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>):(
              <Button>Sign In</Button>)}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
