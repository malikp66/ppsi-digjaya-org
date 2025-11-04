import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { collaborationBoard, governanceReminders, helpdeskTickets, managementNotifications } from "@/data/adminDashboard";
import { cn } from "@/lib/utils";
import { CheckCircle2, LifeBuoy, NotebookPen, Search, ShieldCheck, TimerReset } from "lucide-react";

export const metadata = {
  title: "Helpdesk & Dukungan PPSI Digjaya | Dashboard Pengurus",
  description: "Tindak lanjuti tiket dukungan, pantau SLA, dan koordinasikan respons lintas tim pengurus PPSI Digjaya.",
};

const slaPerformance = [
  { id: "sla-1", label: "Rata-rata respon pertama", value: "1 jam 42 mnt", status: "Dalam target" },
  { id: "sla-2", label: "Resolusi rata-rata", value: "6 jam 12 mnt", status: "Perlu percepatan" },
  { id: "sla-3", label: "Tiket berescalasi", value: "2 kasus", status: "Monitoring" },
];

const knowledgeBaseUpdates = [
  {
    id: "kb-1",
    title: "Panduan reset akses dashboard cabang",
    summary: "Langkah-langkah verifikasi dua faktor dan pembaruan perangkat.",
    updatedAt: "4 Nov 2025",
  },
  {
    id: "kb-2",
    title: "Checklist tinjauan data anggota",
    summary: "Prosedur koreksi data anggota yang diajukan oleh pengurus cabang.",
    updatedAt: "1 Nov 2025",
  },
  {
    id: "kb-3",
    title: "Form pelaporan inventori perlengkapan",
    summary: "Standar pelaporan kerusakan dan prosedur approval penggantian.",
    updatedAt: "28 Okt 2025",
  },
];

export default function HelpdeskPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Helpdesk'
        title='Operasional Helpdesk & Dukungan'
        description='Kelola tiket dukungan, penuhi service level agreement, dan koordinasikan solusi lintas bidang.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              <NotebookPen className='mr-2 h-4 w-4' />
              SOP Helpdesk
            </Button>
            <Button className='rounded-full text-sm'>
              <LifeBuoy className='mr-2 h-4 w-4' />
              Tiket Baru
            </Button>
          </>
        }
      >
        <div className='relative flex-1'>
          <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input className='h-11 rounded-full bg-background/90 pl-12 shadow-inner' placeholder='Cari tiket, cabang, atau topik dukungan...' />
        </div>
        <div className='flex flex-wrap gap-2'>
          {["Semua", "Baru", "Diproses", "Selesai"].map((label, index) => (
            <Button
              key={label}
              size='sm'
              variant={index === 0 ? "secondary" : "ghost"}
              className={cn(
                "rounded-full border border-transparent text-xs",
                index === 0 ? "" : "border-border/60 text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </Button>
          ))}
        </div>
      </DashboardPageHeader>

      <main className='flex-1 overflow-y-auto px-6 pb-12 pt-6 lg:px-10'>
        <div className='grid gap-6 xl:grid-cols-[minmax(0,2fr),minmax(0,1fr)]'>
          <div className='space-y-6'>
            <TicketOverviewCard />
            <CollaborationStreamCard />
            <SOPQuickLinksCard />
          </div>
          <div className='space-y-6'>
            <SLAStatusCard />
            <AutomationAlertCard />
            <KnowledgeBaseCard />
          </div>
        </div>
      </main>
    </>
  );
}

function TicketOverviewCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Ringkasan Tiket</CardTitle>
            <CardDescription>Status tiket aktif dan prioritas tindak lanjut.</CardDescription>
          </div>
          <Badge variant='outline'>{helpdeskTickets.length} tiket aktif</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {helpdeskTickets.map((ticket) => (
          <div key={ticket.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-foreground'>
              <span>{ticket.id}</span>
              <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
                {ticket.status}
              </Badge>
            </div>
            <p className='mt-2 text-xs text-muted-foreground'>{ticket.topic}</p>
            <div className='mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground'>
              <span>{ticket.requester}</span>
              <span>{ticket.sla}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CollaborationStreamCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Koordinasi Tim</CardTitle>
            <CardDescription>Kolaborasi lintas bidang untuk percepatan penyelesaian.</CardDescription>
          </div>
          <ShieldCheck className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {collaborationBoard.slice(0, 4).map((person) => (
          <div key={person.id} className='flex items-center gap-3 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground'>
              {person.name
                .split(" ")
                .map((seg) => seg[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className='flex-1'>
              <p className='text-sm font-semibold text-foreground'>{person.name}</p>
              <p className='text-xs text-muted-foreground'>{person.focus}</p>
            </div>
            <Badge variant='outline'>{person.status}</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SOPQuickLinksCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <CardTitle>Checklist & SOP</CardTitle>
        <CardDescription>Pastikan prosedur standar dipatuhi oleh tim helpdesk.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        {governanceReminders.map((item) => (
          <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-foreground'>{item.title}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{item.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SLAStatusCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Kinerja SLA</CardTitle>
            <CardDescription>Indikator capaian service level agreement harian.</CardDescription>
          </div>
          <TimerReset className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {slaPerformance.map((metric, index) => (
          <div
            key={metric.id}
            className={cn(
              "rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm",
              index === 1 ? "border-amber-400/70 bg-amber-50/80" : ""
            )}
          >
            <p className='text-sm font-semibold text-foreground'>{metric.label}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{metric.value}</p>
            <p className='mt-2 text-xs text-primary'>{metric.status}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function AutomationAlertCard() {
  const helpdeskAlerts = managementNotifications.filter((item) => item.badge === "Helpdesk");

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Notifikasi Otomatis</CardTitle>
            <CardDescription>Peringatan sistem untuk ticket yang butuh perhatian cepat.</CardDescription>
          </div>
          <Badge variant='outline'>Realtime</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {helpdeskAlerts.map((alert) => (
          <div key={alert.id} className='rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-primary shadow-sm'>
            <p className='text-sm font-semibold text-primary'>{alert.title}</p>
            <p className='mt-1 text-xs text-primary/80'>{alert.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function KnowledgeBaseCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Pembaruan Knowledge Base</CardTitle>
            <CardDescription>Artikel panduan terbaru untuk membantu penyelesaian tiket.</CardDescription>
          </div>
          <CheckCircle2 className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {knowledgeBaseUpdates.map((article) => (
          <div key={article.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-foreground'>{article.title}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{article.summary}</p>
            <p className='mt-2 text-xs text-muted-foreground'>Diperbarui {article.updatedAt}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

