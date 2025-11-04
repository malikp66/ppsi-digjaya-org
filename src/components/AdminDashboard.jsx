"use client";

import {
  collaborationBoard,
  contentEngagement,
  editorialQueue,
  governanceReminders,
  helpdeskTickets,
  managementCalendar,
  managementHighlights,
  managementNotifications,
  managerProfile,
  membershipStats,
  newsPerformance,
  newsPipeline,
  orderAlerts,
  orderSummary,
  orderTable,
  programReports,
  programSchedules,
  reportShortcuts,
  trackerInfo,
} from "@/data/adminDashboard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { AlertCircle, ArrowUpRight, Bell, CalendarClock, ListChecks, Mail, Pause, Play, Plus, Search, Square, Timer } from "lucide-react";

const highlightStyleMap = {
  up: {
    card: "bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white shadow-soft",
    badge: "success",
    icon: ArrowUpRight,
  },
  alert: {
    card: "bg-gradient-to-br from-amber-300 to-emerald-500 text-emerald-950 shadow-soft",
    badge: "warning",
    icon: AlertCircle,
  },
  warn: {
    card: "bg-gradient-to-br from-emerald-200 to-emerald-400 text-emerald-900 shadow-card",
    badge: "warning",
    icon: AlertCircle,
  },
  default: {
    card: "bg-card text-card-foreground border border-border/70 shadow-card",
    badge: "accent",
    icon: ArrowUpRight,
  },
};

const collaborationBadgeVariant = {
  success: "success",
  accent: "accent",
  warning: "warning",
};

// Dashboard sections will be defined below.

export function StatsGrid() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {managementHighlights.map((item, index) => {
        const variant = highlightStyleMap[item.status] ?? highlightStyleMap.default;
        const Icon = variant.icon;
        const isPrimary = index === 0;
        return (
          <Card
            key={item.id}
            className={cn(
              "overflow-hidden border-none",
              isPrimary ? variant.card : "bg-card text-card-foreground shadow-card border border-border/70"
            )}
          >
            <CardContent className='p-6'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className={cn("text-xs font-medium uppercase tracking-wide", isPrimary ? "text-white/80" : "text-muted-foreground")}>
                    {item.label}
                  </p>
                  <div className='mt-3 flex items-baseline gap-3'>
                    <span className={cn("text-4xl font-semibold", isPrimary ? "text-white" : "text-foreground")}>{item.value}</span>
                  </div>
                </div>
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl",
                    isPrimary ? "bg-white/20 text-white" : "bg-secondary text-secondary-foreground"
                  )}
                >
                  <Icon className='h-5 w-5' />
                </div>
              </div>
              <Badge
                variant={variant.badge}
                className={cn("mt-6 inline-flex items-center gap-2 rounded-full", isPrimary && "bg-white/15 text-white")}
              >
                <ArrowUpRight className='h-3.5 w-3.5' />
                {item.change}
              </Badge>
              <p className={cn("mt-3 text-xs", isPrimary ? "text-white/70" : "text-muted-foreground")}>Pembaruan otomatis 5 menit lalu</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function ContentAndNewsCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
          <div>
            <CardTitle>Konten & Berita</CardTitle>
            <CardDescription>Monitor status pipeline redaksi dan performa konten unggulan.</CardDescription>
          </div>
          <Button size='sm' variant='secondary' className='rounded-full'>
            Kelola Konten
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='grid gap-6 lg:grid-cols-[1.4fr,1fr]'>
          <div>
            <h4 className='text-sm font-semibold text-muted-foreground'>Status Pipeline</h4>
            <div className='mt-3 flex flex-wrap gap-3'>
              {newsPipeline.map((item) => (
                <div key={item.id} className='rounded-2xl border border-border/70 bg-secondary px-4 py-3 text-sm shadow-sm'>
                  <p className='font-semibold text-foreground'>{item.status}</p>
                  <p className='mt-1 text-xs text-muted-foreground'>{item.count} item</p>
                </div>
              ))}
            </div>
          </div>
          <div className='rounded-2xl border border-border/70 bg-card/70 p-4 shadow-inner'>
            <h4 className='text-sm font-semibold text-muted-foreground'>Performa Konten</h4>
            <div className='mt-4 space-y-4'>
              {newsPerformance.map((item) => (
                <div key={item.id} className='flex items-start justify-between gap-4'>
                  <div>
                    <p className='text-sm font-semibold text-foreground'>{item.title}</p>
                    <p className='text-xs text-muted-foreground'>{item.cta}</p>
                  </div>
                  <Badge variant='outline'>{item.views} views</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className='grid gap-6 lg:grid-cols-[1.2fr,1fr]'>
          <div>
            <div className='flex items-center justify-between'>
              <h4 className='text-sm font-semibold text-muted-foreground'>Engagement Mingguan</h4>
              <Badge variant='outline'>Target tercapai 74%</Badge>
            </div>
            <div className='mt-6 flex items-end gap-3'>
              {contentEngagement.map((item) => (
                <div key={item.id} className='flex flex-col items-center gap-2 text-xs font-medium text-muted-foreground'>
                  <div className='flex h-32 w-9 items-end overflow-hidden rounded-full bg-secondary/60'>
                    <div
                      className='w-full rounded-full bg-gradient-to-t from-emerald-600 to-emerald-400'
                      style={{ height: `${item.percent}%` }}
                    />
                  </div>
                  <span>{item.day}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-sm font-semibold text-muted-foreground'>Antrian Review</h4>
            <div className='mt-4 space-y-4'>
              {editorialQueue.map((item) => (
                <div key={item.id} className='rounded-xl border border-border/70 bg-background/80 p-4 shadow-sm'>
                  <div className='flex items-start justify-between gap-3'>
                    <div>
                      <p className='text-sm font-semibold text-foreground'>{item.title}</p>
                      <p className='text-xs text-muted-foreground'>PIC {item.owner}</p>
                    </div>
                    <Badge variant='accent'>{item.due}</Badge>
                  </div>
                  <p className='mt-3 text-xs text-muted-foreground'>{item.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function OrdersCard() {
  const totalStatus = orderSummary.statusBreakdown.reduce((acc, item) => acc + item.count, 0);

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
          <div>
            <CardTitle>Marketplace & Transaksi</CardTitle>
            <CardDescription>Ikuti status order, SLA pengiriman, dan ringkasan finansial.</CardDescription>
          </div>
          <Button size='sm' variant='secondary' className='rounded-full'>
            Sinkronkan Data
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {orderSummary.volumes.map((item) => (
            <div key={item.id} className='rounded-2xl border border-border/60 bg-card/80 p-4 shadow-inner'>
              <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>{item.label}</p>
              <p className='mt-2 text-2xl font-semibold text-foreground'>{item.value}</p>
              <p className='mt-1 text-xs text-emerald-600'>{item.diff}</p>
            </div>
          ))}
        </div>
        <div className='grid gap-6 lg:grid-cols-[1.4fr,1fr]'>
          <div>
            <h4 className='text-sm font-semibold text-muted-foreground'>Status Order</h4>
            <div className='mt-4 space-y-4'>
              {orderSummary.statusBreakdown.map((item) => (
                <div key={item.id} className='space-y-2'>
                  <div className='flex items-center justify-between text-sm font-medium text-muted-foreground'>
                    <span>{item.label}</span>
                    <span>{item.count}</span>
                  </div>
                  <Progress value={Math.round((item.count / totalStatus) * 100)} indicatorClassName='bg-gradient-to-r from-emerald-500 to-emerald-700' />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-sm font-semibold text-muted-foreground'>Ringkasan Finansial</h4>
            <div className='mt-4 space-y-3'>
              {orderSummary.finance.map((item) => (
                <div key={item.id} className='rounded-xl border border-border/70 bg-background/90 p-4 shadow-sm'>
                  <p className='text-xs text-muted-foreground'>{item.label}</p>
                  <p className='text-lg font-semibold text-foreground'>{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Separator />
        <div className='grid gap-3 lg:grid-cols-2'>
          {orderAlerts.map((alert) => (
            <div key={alert.id} className='rounded-2xl border border-border/60 bg-secondary/60 p-4 shadow-sm'>
              <p className='text-sm font-semibold text-foreground'>{alert.title}</p>
              <p className='mt-1 text-xs text-muted-foreground'>{alert.detail}</p>
            </div>
          ))}
        </div>
        <div>
          <div className='flex items-center justify-between'>
            <h4 className='text-sm font-semibold text-muted-foreground'>Order Terbaru</h4>
            <Badge variant='outline'>Tampilkan Semua</Badge>
          </div>
          <div className='mt-4 space-y-3'>
            {orderTable.map((order) => (
              <div key={order.id} className='flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/70 bg-card/90 p-4'>
                <div>
                  <p className='text-sm font-semibold text-foreground'>{order.id}</p>
                  <p className='text-xs text-muted-foreground'>{order.buyer}</p>
                </div>
                <div className='max-w-[200px]'>
                  <p className='text-sm font-medium text-foreground'>{order.product}</p>
                  <p className='text-xs text-muted-foreground'>{order.value}</p>
                </div>
                <Badge variant='accent'>{order.status}</Badge>
                <p className='text-xs text-muted-foreground'>{order.eta}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function MembershipCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex flex-col gap-2'>
          <CardTitle>Keanggotaan & Komunitas</CardTitle>
          <CardDescription>Pantau pertumbuhan anggota, segmentasi, dan engagement komunitas.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='grid gap-4 sm:grid-cols-3'>
          {membershipStats.summary.map((item) => (
            <div key={item.id} className='rounded-2xl border border-border/60 bg-card/80 p-4 text-center shadow-inner'>
              <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>{item.label}</p>
              <p className='mt-2 text-2xl font-semibold text-foreground'>{item.value}</p>
            </div>
          ))}
        </div>
        <div className='grid gap-6 lg:grid-cols-2'>
          <div>
            <h4 className='text-sm font-semibold text-muted-foreground'>Segmentasi Anggota</h4>
            <div className='mt-4 space-y-3'>
              {membershipStats.segments.map((segment) => (
                <div key={segment.id} className='space-y-2'>
                  <div className='flex items-center justify-between text-sm font-medium text-muted-foreground'>
                    <span>{segment.label}</span>
                    <span>{segment.count}</span>
                  </div>
                  <Progress value={Math.min(100, (segment.count / 20) * 10)} indicatorClassName='bg-gradient-to-r from-emerald-600 to-emerald-400' />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className='text-sm font-semibold text-muted-foreground'>Keterlibatan</h4>
            <div className='mt-4 space-y-3'>
              {membershipStats.engagement.map((item) => (
                <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                  <p className='text-xs text-muted-foreground'>{item.metric}</p>
                  <p className='text-lg font-semibold text-foreground'>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProgramsCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex flex-col gap-2'>
          <CardTitle>Program & Evaluasi</CardTitle>
          <CardDescription>Progress eksekusi program prioritas dan insight evaluasi.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-4'>
          {programSchedules.map((program) => (
            <div key={program.id} className='rounded-2xl border border-border/70 bg-card/90 p-4 shadow-sm'>
              <div className='flex flex-wrap items-center justify-between gap-3'>
                <div>
                  <p className='text-sm font-semibold text-foreground'>{program.name}</p>
                  <p className='text-xs text-muted-foreground'>{program.status}</p>
                </div>
                <Badge variant='outline'>{program.progress}</Badge>
              </div>
              <Progress
                value={parseInt(program.progress, 10)}
                className='mt-3'
                indicatorClassName='bg-gradient-to-r from-emerald-600 to-emerald-400'
              />
              <ul className='mt-3 space-y-2 text-xs text-muted-foreground'>
                {program.tasks.map((task, index) => (
                  <li key={`${program.id}-task-${index}`} className='flex items-center gap-2'>
                    <span className='inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500' />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator />
        <div>
          <h4 className='text-sm font-semibold text-muted-foreground'>Laporan & Insight</h4>
          <div className='mt-4 space-y-3'>
            {programReports.map((report) => (
              <div key={report.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                <p className='text-sm font-semibold text-foreground'>{report.title}</p>
                <p className='mt-1 text-xs text-muted-foreground'>{report.highlight}</p>
                <p className='mt-3 text-xs text-muted-foreground'>Oleh {report.owner}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ReportsCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex flex-col gap-2'>
          <CardTitle>Laporan & Tata Kelola</CardTitle>
          <CardDescription>Akses cepat laporan rutin dan checklist governance.</CardDescription>
        </div>
      </CardHeader>
      <CardContent className='grid gap-6 lg:grid-cols-2'>
        <div className='space-y-3'>
          {reportShortcuts.map((item) => (
            <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
              <p className='text-sm font-semibold text-foreground'>{item.title}</p>
              <p className='mt-2 text-xs text-muted-foreground'>{item.description}</p>
              <Badge variant='outline' className='mt-3'>
                {item.format}
              </Badge>
            </div>
          ))}
        </div>
        <div className='space-y-3'>
          {governanceReminders.map((item) => (
            <div key={item.id} className='rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
              <div className='flex gap-3'>
                <ListChecks className='h-5 w-5 text-primary' />
                <div>
                  <p className='text-sm font-semibold text-foreground'>{item.title}</p>
                  <p className='mt-1 text-xs text-muted-foreground'>{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function ReminderCard() {
  const todayEvent = managementCalendar[0];
  const nextEvents = managementCalendar.slice(1);

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Pengingat & Notifikasi</CardTitle>
            <CardDescription>Catatan prioritas harian untuk pengurus.</CardDescription>
          </div>
          <Button size='sm' variant='secondary' className='rounded-full'>
            Sinkronkan
          </Button>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        {todayEvent && (
          <div className='rounded-2xl border border-border/60 bg-gradient-to-br from-emerald-500/90 to-emerald-700 text-white p-5 shadow-soft'>
            <div className='flex items-start gap-3'>
              <CalendarClock className='h-6 w-6 text-white/80' />
              <div>
                <p className='text-xs uppercase tracking-wide text-white/70'>Agenda Utama</p>
                <p className='mt-1 text-lg font-semibold text-white'>{todayEvent.title}</p>
                <p className='mt-1 text-sm text-white/80'>{todayEvent.detail}</p>
                <p className='mt-3 text-xs text-white/70'>{todayEvent.date}</p>
              </div>
            </div>
          </div>
        )}
        <div>
          <h4 className='text-sm font-semibold text-muted-foreground'>Notifikasi</h4>
          <div className='mt-3 space-y-3'>
            {managementNotifications.map((notif) => (
              <div key={notif.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                <p className='text-sm font-semibold text-foreground'>{notif.title}</p>
                <p className='mt-1 text-xs text-muted-foreground'>{notif.detail}</p>
                <Badge variant='outline' className='mt-3'>
                  {notif.badge}
                </Badge>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className='text-sm font-semibold text-muted-foreground'>Agenda Mendatang</h4>
          <div className='mt-3 space-y-3'>
            {nextEvents.map((eventItem) => (
              <div key={eventItem.id} className='rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
                <p className='text-sm font-semibold text-foreground'>{eventItem.title}</p>
                <p className='mt-1 text-xs text-muted-foreground'>{eventItem.detail}</p>
                <p className='mt-3 text-xs text-muted-foreground'>{eventItem.date}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CollaborationCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Kolaborasi Pengurus</CardTitle>
            <CardDescription>Status tugas lintas bidang dan tim.</CardDescription>
          </div>
          <Button size='sm' variant='ghost' className='rounded-full text-sm text-primary'>
            Lihat Semua
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          {collaborationBoard.map((item) => (
            <div key={item.id} className='flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm'>
              <div className='flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground'>
                {item.name
                  .split(" ")
                  .map((seg) => seg[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className='flex-1'>
                <p className='text-sm font-semibold text-foreground'>{item.name}</p>
                <p className='text-xs text-muted-foreground'>{item.focus}</p>
              </div>
              <Badge variant={collaborationBadgeVariant[item.statusVariant] ?? "accent"}>{item.status}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function HelpdeskCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Helpdesk & Tiket</CardTitle>
            <CardDescription>Tentukan prioritas dan SLA tindak lanjut.</CardDescription>
          </div>
          <Badge variant='outline'>{helpdeskTickets.length} tiket aktif</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {helpdeskTickets.map((ticket) => (
          <div key={ticket.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div className='flex items-center justify-between'>
              <p className='text-sm font-semibold text-foreground'>{ticket.id}</p>
              <Badge variant='accent'>{ticket.status}</Badge>
            </div>
            <p className='mt-1 text-xs text-muted-foreground'>{ticket.topic}</p>
            <div className='mt-3 flex items-center justify-between text-xs text-muted-foreground'>
              <span>{ticket.requester}</span>
              <span>{ticket.sla}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function TimeTrackerCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle>Time Tracker</CardTitle>
            <CardDescription>Log waktu pendampingan dan tugas lapangan.</CardDescription>
          </div>
          <Timer className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-5'>
        <div className='rounded-2xl border border-primary/40 bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white shadow-soft'>
          <p className='text-xs uppercase tracking-wide text-white/70'>Durasi Aktif</p>
          <p className='mt-3 text-4xl font-semibold'>{trackerInfo.elapsed}</p>
          <p className='mt-2 text-sm text-white/80'>{trackerInfo.label}</p>
        </div>
        <div className='flex items-center gap-3'>
          <Button variant='secondary' className='flex-1 rounded-full' size='lg'>
            <Play className='mr-2 h-4 w-4' />
            Mulai Sesi Baru
          </Button>
        </div>
        <div className='flex items-center gap-3'>
          <Button variant='ghost' className='flex-1 rounded-full border border-border/70' size='lg'>
            <Pause className='mr-2 h-4 w-4' />
            Jeda
          </Button>
          <Button variant='ghost' className='flex-1 rounded-full border border-border/70' size='lg'>
            <Square className='mr-2 h-4 w-4' />
            Selesai
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardHeader() {
  return (
    <header className='flex flex-col gap-6 px-6 pt-6 lg:px-10'>
      <div className='space-y-2'>
        <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Dashboard</p>
        <h1 className='text-3xl font-semibold text-foreground'>Dashboard Pengurus PPSI Digjaya</h1>
        <p className='text-sm text-muted-foreground'>Plan, koordinasikan, dan analisa operasional harian organisasi dalam satu layar.</p>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div className='flex flex-1 flex-col gap-3 md:flex-row md:items-center'>
          <div className='relative flex-1'>
            <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
            <Input className='h-12 rounded-full bg-background/90 pl-12 shadow-inner' placeholder='Cari berita, order, atau anggota…' />
          </div>
          <div className='flex items-center gap-2 md:pl-4'>
            <Button variant='secondary' className='rounded-full' size='sm'>
              <Plus className='mr-2 h-4 w-4' /> Tambah Data
            </Button>
            <Button variant='outline' className='rounded-full' size='sm'>
              Import Data
            </Button>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <Button variant='ghost' size='icon' className='h-11 w-11 rounded-full border border-border/70'>
            <Mail className='h-4 w-4 text-muted-foreground' />
          </Button>
          <Button variant='ghost' size='icon' className='h-11 w-11 rounded-full border border-border/70'>
            <Bell className='h-4 w-4 text-muted-foreground' />
          </Button>
          <div className='flex items-center gap-3 rounded-2xl border border-border/70 bg-background/80 px-3 py-2 shadow-inner'>
            <Avatar className='h-10 w-10'>
              <AvatarImage alt={managerProfile.name} src='/assets/images/avatar-admin.png' />
              <AvatarFallback>{managerProfile.avatarInitials}</AvatarFallback>
            </Avatar>
            <div>
              <p className='text-sm font-semibold text-foreground'>{managerProfile.name}</p>
              <p className='text-xs text-muted-foreground'>{managerProfile.email}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const AdminDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <main className='flex-1 overflow-y-auto px-6 pb-10 pt-6 lg:px-10'>
        <div className='grid gap-6 xl:grid-cols-[minmax(0,2.2fr),minmax(0,1fr)]'>
          <div className='space-y-6'>
            <StatsGrid />
            <ContentAndNewsCard />
            <OrdersCard />
            <MembershipCard />
            <ProgramsCard />
            <ReportsCard />
          </div>
          <div className='space-y-6'>
            <ReminderCard />
            <CollaborationCard />
            <HelpdeskCard />
            <TimeTrackerCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
