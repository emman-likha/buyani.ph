'use client';

import * as React from 'react';
import { useState, useId } from 'react';
import Link from 'next/link';
import { SearchIcon, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { AuthModal } from '@/components/AuthModal';
import { ModeToggle } from '@/components/ModeToggle';

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn('pointer-events-none', className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

export interface NavItem {
  href?: string;
  label: string;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brandName?: string;
  navigationLinks?: NavItem[];
  signInText?: string;
  signInHref?: string;
  cartText?: string;
  cartHref?: string;
  cartCount?: number;
  searchPlaceholder?: string;
  onSignInClick?: () => void;
  onCartClick?: () => void;
  onSearchSubmit?: (query: string) => void;
}

const defaultNavigationLinks: NavItem[] = [
  { href: '#', label: 'Products' },
  { href: '#', label: 'Categories' },
  { href: '#', label: 'Deals' },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      brandName = 'Buyanihan',
      navigationLinks = defaultNavigationLinks,
      signInText = 'Sign In',
      signInHref = '#signin',
      cartText = 'Cart',
      cartHref = '#cart',
      cartCount = 0,
      searchPlaceholder = 'Search...',
      onSignInClick,
      onCartClick,
      onSearchSubmit,
      ...props
    },
    ref
  ) => {
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState<'signup' | 'signin'>('signup');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const searchId = useId();

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const query = formData.get('search') as string;
      if (onSearchSubmit) {
        onSearchSubmit(query);
      }
    };

    return (
      <>
        <div className="sticky top-4 z-50 w-full px-4 mb-6">
          <header
            ref={ref}
            className={cn(
              'mx-auto max-w-screen-2xl rounded-2xl border border-border/50 bg-card/80 backdrop-blur-md shadow-sm supports-[backdrop-filter]:bg-card/60 transition-all duration-200',
              className
            )}
            {...props}
          >
            <div className="flex h-16 items-center justify-between px-4 md:px-6 gap-4">
              {/* Left side */}
              <div className="flex flex-1 items-center gap-6">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer shrink-0"
                >
                  <span className="font-bold text-xl">{brandName}</span>
                </Link>

                {/* Navigation menu (Desktop) */}
                <NavigationMenu className="hidden md:flex">
                  <NavigationMenuList className="gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href || '#'}
                            className="text-muted-foreground hover:text-foreground hover:bg-accent py-1.5 font-medium transition-colors cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-full bg-transparent px-4 text-sm focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                {/* Search form */}
                <form onSubmit={handleSearchSubmit} className="relative w-full max-w-xs flex-1 md:flex-none hidden lg:block">
                  <Input
                    id={searchId}
                    name="search"
                    className="peer h-9 rounded-full bg-background/50 border-border/50 ps-9 pe-2 w-full focus-visible:ring-1 focus-visible:ring-primary"
                    placeholder={searchPlaceholder}
                    type="search"
                    aria-label="Search"
                  />
                  <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                    <SearchIcon size={16} />
                  </div>
                </form>
              </div>

              {/* Right side */}
              <div className="flex items-center gap-2">
                
                {/* Mobile Search Trigger (Visible only on mobile/tablet) */}
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full" aria-label="Search">
                   <SearchIcon size={20} />
                </Button>

                <ModeToggle />
                
                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm font-medium hover:bg-accent hover:text-accent-foreground cursor-pointer rounded-full px-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setAuthMode('signin');
                      setAuthModalOpen(true);
                      if (onSignInClick) onSignInClick();
                    }}
                  >
                    {signInText}
                  </Button>
                  <Button
                    size="sm"
                    className="text-sm font-medium px-4 h-9 rounded-full shadow-sm cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onCartClick) onCartClick();
                    }}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    <span className="flex items-baseline gap-2">
                      {cartText}
                      {cartCount > 0 && (
                        <span className="text-primary-foreground/60 text-xs">
                          {cartCount}
                        </span>
                      )}
                    </span>
                  </Button>
                </div>

                {/* Mobile menu trigger */}
                <div className="md:hidden">
                  <Popover open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground rounded-full"
                        variant="ghost"
                        size="icon"
                        aria-label="Open menu"
                      >
                        <HamburgerIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-64 p-1 rounded-2xl">
                      <NavigationMenu className="max-w-none w-full justify-start">
                        <NavigationMenuList className="flex-col items-start gap-1 w-full space-x-0">
                          {navigationLinks.map((link, index) => (
                            <NavigationMenuItem key={index} className="w-full">
                              <Link
                                href={link.href || '#'}
                                className="flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {link.label}
                              </Link>
                            </NavigationMenuItem>
                          ))}
                          <NavigationMenuItem
                            className="w-full"
                            role="presentation"
                            aria-hidden={true}
                          >
                            <div
                              role="separator"
                              aria-orientation="horizontal"
                              className="bg-border -mx-1 my-1 h-px"
                            />
                          </NavigationMenuItem>
                          <NavigationMenuItem className="w-full">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setMobileMenuOpen(false);
                                setAuthMode('signin');
                                setAuthModalOpen(true);
                                if (onSignInClick) onSignInClick();
                              }}
                              className="flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline"
                            >
                              {signInText}
                            </button>
                          </NavigationMenuItem>
                          <NavigationMenuItem className="w-full">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="w-full justify-start px-3 font-medium rounded-lg"
                              onClick={(e) => {
                                e.preventDefault();
                                setMobileMenuOpen(false);
                                if (onCartClick) onCartClick();
                              }}
                            >
                              <span className="flex items-baseline gap-2">
                                {cartText}
                                <span className="text-muted-foreground text-xs">
                                  {cartCount}
                                </span>
                              </span>
                            </Button>
                          </NavigationMenuItem>
                        </NavigationMenuList>
                      </NavigationMenu>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </div>
          </header>
        </div>

        <AuthModal
          open={authModalOpen}
          onOpenChange={setAuthModalOpen}
          defaultMode={authMode}
        />
      </>
    );
  }
);

Navbar.displayName = 'Navbar';
