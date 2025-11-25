'use client';

import React from 'react';
import { ArrowUpRight, ShoppingBag, Zap, Database, Globe, Users, Store, Box } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export const HeroSection = () => {
  return (
    <section className="w-full py-6 bg-background text-foreground">
      <div className="container mx-auto max-w-screen-2xl px-4 flex flex-col gap-4">
        
        {/* Top Section: Hero + Right Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[450px]">
          
          {/* Main Hero Block */}
          <div className="col-span-1 lg:col-span-3 relative overflow-hidden rounded-[2rem] bg-card p-8 flex flex-col justify-between shadow-sm transition-all hover:shadow-md group text-card-foreground border border-border/50">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-foreground mb-6 shadow-sm border border-border">
                <ShoppingBag size={14} className="text-primary" />
                <span>Filipino-Inspired Marketplace</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] mb-4 tracking-tight text-foreground">
                Buyanihan <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">Community Market.</span>
              </h1>
              
              <div className="flex items-start gap-4 mb-6">
                <span className="text-5xl font-outline-2 font-bold text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground" style={{ WebkitTextStroke: '1px currentColor' }}>01</span>
                <div className="pt-2">
                  <h3 className="font-semibold text-lg">Physical & Digital</h3>
                  <p className="text-muted-foreground max-w-xs">A community-driven marketplace where sellers offer both physical and digital products.</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-5 text-base font-semibold shadow-none transition-transform active:scale-95 group-hover:scale-105">
                  Start Selling
                  <div className="ml-2 bg-primary-foreground rounded-full p-1 text-primary">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
              </div>

              <div className="mt-8 flex gap-4">
                {['twitter', 'tiktok', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-3 h-3 bg-current rounded-sm" />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Image Placeholder */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[45%] h-[90%] hidden lg:block pointer-events-none">
               <div className="w-full h-full bg-gradient-to-br from-orange-400/20 to-amber-600/20 dark:from-orange-400/10 dark:to-amber-600/10 rounded-3xl opacity-90 transform rotate-[-12deg] translate-x-12 scale-90 shadow-2xl flex items-center justify-center text-primary/20">
                  <Store size={180} />
               </div>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="col-span-1 flex flex-col gap-4 h-full">
            {/* Powered By */}
            <div className="flex-1 rounded-[2rem] bg-card p-5 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow text-card-foreground border border-border/50">
              <h3 className="text-base font-semibold mb-3">Powered By</h3>
              <div className="flex gap-2">
                {[
                  { color: 'bg-black dark:bg-white dark:text-black', label: 'Next.js' },
                  { color: 'bg-blue-600', label: 'Prisma' },
                  { color: 'bg-cyan-600', label: 'PostgreSQL' },
                  { color: 'bg-red-500', label: 'TanStack' }
                ].map((tech, i) => (
                  <div key={i} title={tech.label} className={cn("w-8 h-8 rounded-full shadow-inner border-2 border-background ring-1 ring-border cursor-pointer hover:scale-110 transition-transform flex items-center justify-center text-white text-[8px] font-bold overflow-hidden", tech.color)}>
                  </div>
                ))}
              </div>
            </div>

            {/* Seamless Experience */}
            <div className="flex-1 rounded-[2rem] bg-secondary p-5 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow text-secondary-foreground border border-border/50">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-1">Seamless</h3>
                <p className="text-lg font-medium text-muted-foreground">Experience</p>
                <Button variant="outline" size="icon" className="mt-2 h-8 w-8 rounded-full bg-background hover:bg-background/90 border-border shadow-sm text-foreground">
                  <ArrowUpRight size={14} />
                </Button>
              </div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-muted rounded-tl-[2rem] group-hover:scale-110 transition-transform flex items-center justify-center">
                 <Zap size={48} className="text-muted-foreground/20" />
              </div>
            </div>

            {/* Diverse Catalog */}
            <div className="flex-1 rounded-[2rem] bg-[#FFF8E1] dark:bg-yellow-900/20 p-5 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow border border-border/50">
               <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-base text-amber-900 dark:text-amber-100">Diverse Catalog</h3>
                   <p className="text-xs text-amber-700/70 dark:text-amber-200/70">Digital & Physical.</p>
                 </div>
                 <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                   <Box size={12} fill="currentColor" />
                 </div>
               </div>
               <div className="flex gap-1 mt-2">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-lg bg-black/5 dark:bg-white/5 flex items-center justify-center">
                      <div className="w-5 h-5 bg-amber-500/20 rounded-sm" />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto lg:h-[200px]">
          {/* Community Growth */}
          <div className="col-span-1 rounded-[2rem] bg-card p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow text-card-foreground border border-border/50">
             <div className="flex -space-x-2 mb-2">
               {[1, 2, 3].map((_, i) => (
                 <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted" />
               ))}
             </div>
             <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex flex-col items-center justify-center mb-1 shadow-lg shadow-blue-500/20">
               <span className="text-lg font-bold">5m+</span>
               <span className="text-[9px] opacity-80">Users</span>
             </div>
             <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full mt-1">
               <Users size={10} className="text-yellow-500" fill="currentColor" />
               <span className="text-[10px] font-bold text-yellow-700 dark:text-yellow-400">Community</span>
             </div>
          </div>

          {/* Scalable Feature */}
          <div className="col-span-1 rounded-[2rem] bg-secondary p-5 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow text-secondary-foreground border border-border/50">
             <div className="relative z-10">
               <div className="inline-flex items-center gap-1 bg-background/60 px-2 py-1 rounded-md text-[10px] font-medium text-orange-700 dark:text-orange-400 mb-1">
                 <Database size={10} />
                 Scalable
               </div>
               <h3 className="font-bold text-lg leading-tight">Built for Speed<br/>& Scalability</h3>
               <div className="flex items-center gap-2 mt-4">
                 <div className="flex -space-x-2">
                   <div className="w-8 h-8 rounded-full border border-background bg-muted" />
                   <div className="w-8 h-8 rounded-full border border-background bg-foreground flex items-center justify-center text-background">
                     <Globe size={12} />
                   </div>
                 </div>
               </div>
             </div>
             <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full bg-background hover:bg-background/90 shadow-sm text-foreground h-8 w-8">
                <ArrowUpRight size={14} />
             </Button>
             <div className="absolute bottom-0 right-0 w-20 h-20 bg-foreground/5 rounded-tl-[2rem]" />
          </div>

          {/* Local Sellers */}
          <div className="col-span-1 rounded-[2rem] bg-gradient-to-b from-muted to-background p-5 relative group shadow-sm hover:shadow-md transition-shadow border border-border/50">
             <Button variant="ghost" size="icon" className="absolute top-4 right-4 rounded-full bg-background hover:bg-background/90 shadow-sm z-10 text-foreground h-8 w-8">
                <ArrowUpRight size={14} />
             </Button>
             <div className="mt-4 relative z-10">
               <div className="w-full aspect-square bg-muted rounded-full mb-2 group-hover:scale-105 transition-transform flex items-center justify-center h-24 w-24 mx-auto">
                  <ShoppingBag size={32} className="text-muted-foreground" />
               </div>
               <h3 className="font-bold text-lg leading-tight mb-1 text-foreground text-center">Support Local Sellers</h3>
               <p className="text-xs text-muted-foreground text-center">Authentic Products</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

