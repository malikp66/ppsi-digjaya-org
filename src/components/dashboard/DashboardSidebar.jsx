"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationPrimary, navigationSecondary } from "@/data/adminDashboard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  BadgeCheck,
  CalendarDays,
  Download,
  HelpCircle,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Newspaper,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

const primaryRouteMap = {
  Dashboard: "/dashboard-pengurus",
  "Konten & Berita": "/dashboard-pengurus/konten-berita",
  Marketplace: "/dashboard-pengurus/marketplace",
  Keanggotaan: "/dashboard-pengurus/keanggotaan",
  "Program & Event": "/dashboard-pengurus/program-event",
  "Sertifikat Online": "/dashboard-pengurus/sertifikat",
  Helpdesk: "/dashboard-pengurus/helpdesk",
};

const primaryIconMap = {
  Dashboard: LayoutDashboard,
  "Konten & Berita": Newspaper,
  Marketplace: ShoppingBag,
  Keanggotaan: Users,
  "Program & Event": CalendarDays,
  "Sertifikat Online": BadgeCheck,
  Helpdesk: LifeBuoy,
};

const secondaryIconMap = {
  Pengaturan: Settings,
  Bantuan: HelpCircle,
  Keluar: LogOut,
};

export default function DashboardSidebar() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/dashboard-pengurus") {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  return (
    <aside className='hidden min-h-screen w-72 flex-col justify-between border-r border-border/60 bg-background/80 px-6 py-8 backdrop-blur lg:flex xl:w-80'>
      <div className='space-y-10'>
        <Link href='/' className='flex items-center gap-3'>
          <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-lg font-semibold text-white shadow-soft'>
            P
          </div>
          <div>
            <p className='text-lg font-semibold text-foreground'>PPSI Digjaya</p>
            <p className='text-xs text-muted-foreground'>Dashboard Pengurus</p>
          </div>
        </Link>

        <nav className='space-y-8'>
          <div>
            <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Menu</p>
            <div className='mt-4 space-y-1.5'>
              {navigationPrimary.map((item) => {
                const href = primaryRouteMap[item.label] ?? "/dashboard-pengurus";
                const Icon = primaryIconMap[item.label] ?? LayoutDashboard;
                const active = isActive(href);

                return (
                  <Link
                    key={item.id}
                    href={href}
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-4 py-3 text-sm font-medium transition",
                      active
                        ? "bg-gradient-to-r from-emerald-500/90 to-emerald-600 text-white shadow-soft"
                        : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className='flex items-center gap-3'>
                      <Icon className={cn("h-5 w-5", active ? "text-white" : "text-muted-foreground")} />
                      {item.label}
                    </span>
                    {item.badge ? (
                      <Badge
                        variant={active ? "secondary" : "outline"}
                        className={cn(
                          "rounded-full px-2 py-1 text-xs font-semibold",
                          active ? "bg-white/25 text-white" : "border-transparent bg-secondary text-secondary-foreground"
                        )}
                      >
                        {item.badge}
                      </Badge>
                    ) : null}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>General</p>
            <div className='mt-4 space-y-1.5'>
              {navigationSecondary.map((item) => {
                const Icon = secondaryIconMap[item.label] ?? Settings;
                const isLogout = item.label === "Keluar";
                const href = isLogout ? "#" : `/dashboard-pengurus/${item.label.toLowerCase()}`;

                if (isLogout) {
                  return (
                    <button
                      key={item.id}
                      type='button'
                      className='flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-secondary/80 hover:text-foreground'
                    >
                      <Icon className='h-5 w-5 text-muted-foreground' />
                      {item.label}
                    </button>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={href}
                    className='flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-secondary/80 hover:text-foreground'
                  >
                    <Icon className='h-5 w-5 text-muted-foreground' />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      <Card className='border-none bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-soft'>
        <CardContent className='p-6'>
          <p className='text-sm font-semibold'>Panduan Pengurus</p>
          <p className='mt-2 text-xs text-white/80'>Dapatkan panduan operasional terbaru untuk cabang dan pengurus harian.</p>
          <Button variant='secondary' size='sm' className='mt-5 rounded-full bg-white/15 text-white hover:bg-white/25'>
            <Download className='mr-2 h-4 w-4' />
            Unduh PDF
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}
