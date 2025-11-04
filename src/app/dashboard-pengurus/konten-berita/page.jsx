import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  contentEngagement,
  editorialQueue,
  managementCalendar,
  managementNotifications,
  newsPerformance,
  newsPipeline,
} from "@/data/adminDashboard";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CalendarClock, CalendarDays, PenSquare, Search, Sparkles, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Konten & Berita PPSI Digjaya | Dashboard Pengurus",
  description: "Kelola pipeline redaksi, pantau performa konten, dan optimalkan agenda publikasi pengurus PPSI Digjaya.",
};

const contentInsights = [
  {
    id: "insight-1",
    label: "Sumber trafik terbesar",
    value: "Instagram Stories",
    diff: "+12% vs minggu lalu",
  },
  {
    id: "insight-2",
    label: "Konten dengan retensi terpanjang",
    value: "Highlight Festival Jawa Barat",
    diff: "Waktu baca rata-rata 3m 18s",
  },
  {
    id: "insight-3",
    label: "Format paling efektif",
    value: "Video ringkas 45 detik",
    diff: "CTR 4,8%",
  },
];

const campaignHighlights = [
  {
    id: "campaign-1",
    title: "Festival Seni Bela Diri",
    metric: "Pendaftar 312 orang",
    trend: "Naik 18%",
  },
  {
    id: "campaign-2",
    title: "Program Atlet Muda",
    metric: "Formulir terisi 128",
    trend: "Butuh follow-up",
  },
  {
    id: "campaign-3",
    title: "Lisensi Materi Pelatihan",
    metric: "Order masuk 42 paket",
    trend: "Terkonversi 64%",
  },
];

export default function ContentAndNewsPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Konten & Berita'
        title='Operasional Konten & Redaksi'
        description='Monitor status pipeline redaksi, performa konten unggulan, dan agenda publikasi lintas kanal.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              Ekspor Insight
            </Button>
            <Button className='rounded-full text-sm'>
              <PenSquare className='mr-2 h-4 w-4' />
              Artikel Baru
            </Button>
          </>
        }
      >
        <div className='relative flex-1'>
          <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input className='h-11 rounded-full bg-background/90 pl-12 shadow-inner' placeholder='Cari berita, topik, atau penulis...' />
        </div>
        <div className='flex flex-wrap gap-2'>
          {["Semua", "Draft", "Menunggu Review", "Terbit"].map((label, index) => (
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
            <PipelineStatusCard />
            <TopStoriesCard />
            <EditorialQueueCard />
          </div>
          <div className='space-y-6'>
            <EngagementTrendCard />
            <PublishingCalendarCard />
            <ContentInsightCard />
          </div>
        </div>
      </main>
    </>
  );
}

function PipelineStatusCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Status Pipeline</CardTitle>
            <CardDescription>Monitoring otomatis tahapan publikasi konten.</CardDescription>
          </div>
          <Badge variant='outline'>{newsPipeline.reduce((acc, item) => acc + item.count, 0)} item</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='grid gap-3 md:grid-cols-2 xl:grid-cols-4'>
          {newsPipeline.map((stage, index) => (
            <div
              key={stage.id}
              className={cn(
                "rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm transition hover:border-primary/40 hover:shadow-soft",
                index === 0 ? "ring-1 ring-primary/30" : ""
              )}
            >
              <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>{stage.status}</p>
              <p className='mt-3 text-2xl font-semibold text-foreground'>{stage.count}</p>
              <p className='mt-2 flex items-center gap-2 text-xs text-primary'>
                <ArrowUpRight className='h-3.5 w-3.5' />
                Pembaruan otomatis 5 menit lalu
              </p>
            </div>
          ))}
        </div>
        <Separator />
        <div className='flex flex-wrap gap-3 text-xs text-muted-foreground'>
          <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
            {newsPipeline[2].count} konten aktif
          </Badge>
          <span>10% konten belum memiliki thumbnail</span>
          <span>Reminder otomatis dikirim ke penanggung jawab</span>
        </div>
      </CardContent>
    </Card>
  );
}

function TopStoriesCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <CardTitle>Konten Terpopuler</CardTitle>
        <CardDescription>Performa konten unggulan dan call to action yang tercapai.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        {newsPerformance.map((news) => (
          <div
            key={news.id}
            className='flex flex-col gap-3 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm md:flex-row md:items-center md:justify-between'
          >
            <div>
              <p className='text-sm font-semibold text-foreground'>{news.title}</p>
              <p className='mt-1 text-xs text-muted-foreground'>{news.cta}</p>
            </div>
            <div className='flex flex-wrap items-center gap-3 text-xs text-muted-foreground'>
              <span>{news.views} views</span>
              <Badge variant='outline'>{news.status}</Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function EditorialQueueCard() {
  const contentAlerts = managementNotifications.filter((item) => item.badge === "Konten");

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-center justify-between'>
          <div>
            <CardTitle>Antrian Editorial</CardTitle>
            <CardDescription>Pembagian tugas penulis, editor, dan reviewer.</CardDescription>
          </div>
          <Badge variant='outline'>{editorialQueue.length} tugas aktif</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-5'>
        <div className='space-y-3'>
          {editorialQueue.map((item) => (
            <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
              <p className='text-sm font-semibold text-foreground'>{item.title}</p>
              <p className='mt-1 text-xs text-muted-foreground'>Penanggung jawab: {item.owner}</p>
              <div className='mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground'>
                <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
                  Deadline {item.due}
                </Badge>
                <span>{item.notes}</span>
              </div>
            </div>
          ))}
        </div>
        <Separator />
        <div className='space-y-2 text-xs text-muted-foreground'>
          <p className='font-semibold uppercase tracking-wide'>Reminder sistem</p>
          {contentAlerts.map((alert) => (
            <div key={alert.id} className='rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-primary'>
              <p className='text-sm font-semibold text-primary'>{alert.title}</p>
              <p className='mt-1 text-xs text-primary/80'>{alert.detail}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function EngagementTrendCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Tren Engagement 7 Hari</CardTitle>
            <CardDescription>Heatmap interaksi harian lintas kanal digital.</CardDescription>
          </div>
          <Badge variant='outline'>Realtime</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='flex items-end gap-3'>
          {contentEngagement.map((item) => (
            <div key={item.id} className='flex flex-1 flex-col items-center justify-end gap-2'>
              <div className='w-full rounded-2xl bg-gradient-to-t from-emerald-100 via-emerald-300 to-emerald-500 p-1'>
                <div className='w-full rounded-xl bg-white/80 py-6 text-center text-sm font-semibold text-emerald-900 shadow-inner'>
                  {item.percent}%
                </div>
              </div>
              <span className='text-xs font-medium text-muted-foreground'>{item.day}</span>
            </div>
          ))}
        </div>
        <Separator />
        <div className='flex flex-wrap gap-3 text-xs text-muted-foreground'>
          <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
            Puncak engagement hari Selasa
          </Badge>
          <span>Kampanye video meningkatkan interaksi 22%</span>
          <span>Mayoritas akses dari mobile device (74%)</span>
        </div>
      </CardContent>
    </Card>
  );
}

function PublishingCalendarCard() {
  const [nextRelease, ...upcoming] = managementCalendar;

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Agenda Publikasi</CardTitle>
            <CardDescription>Sinkronisasi dengan kalender event organisasi.</CardDescription>
          </div>
          <Badge variant='outline'>Sinkronkan</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-5'>
        {nextRelease ? (
          <div className='rounded-2xl border border-primary/40 bg-gradient-to-br from-emerald-500 to-emerald-700 p-5 text-white shadow-soft'>
            <div className='flex items-start gap-3'>
              <CalendarClock className='h-5 w-5 text-white/80' />
              <div>
                <p className='text-xs uppercase tracking-wide text-white/70'>Prioritas Utama</p>
                <p className='mt-1 text-lg font-semibold'>{nextRelease.title}</p>
                <p className='mt-1 text-sm text-white/80'>{nextRelease.detail}</p>
                <p className='mt-3 text-xs text-white/70'>{nextRelease.date}</p>
              </div>
            </div>
          </div>
        ) : null}
        <Separator />
        <div className='space-y-3'>
          {upcoming.map((item) => (
            <div key={item.id} className='flex items-start gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
              <CalendarDays className='mt-1 h-5 w-5 text-primary' />
              <div>
                <p className='text-sm font-semibold text-foreground'>{item.title}</p>
                <p className='mt-1 text-xs text-muted-foreground'>{item.detail}</p>
                <p className='mt-2 text-xs text-muted-foreground'>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ContentInsightCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Insight Audiens & Kampanye</CardTitle>
            <CardDescription>Temukan peluang optimasi berdasarkan data interaksi terbaru.</CardDescription>
          </div>
          <Sparkles className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='space-y-3'>
          {contentInsights.map((insight) => (
            <div key={insight.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
              <p className='text-xs uppercase tracking-wide text-muted-foreground'>{insight.label}</p>
              <p className='mt-1 text-sm font-semibold text-foreground'>{insight.value}</p>
              <p className='mt-2 text-xs text-primary'>{insight.diff}</p>
            </div>
          ))}
        </div>
        <Separator />
        <div className='space-y-3'>
          <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>Kampanye Berjalan</p>
          {campaignHighlights.map((campaign) => (
            <div key={campaign.id} className='flex items-start gap-3 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-sm text-primary'>
              <TrendingUp className='mt-0.5 h-4 w-4 text-primary/70' />
              <div>
                <p className='font-semibold text-primary'>{campaign.title}</p>
                <p className='mt-1 text-xs text-primary/90'>{campaign.metric}</p>
                <p className='mt-1 text-xs text-primary/80'>{campaign.trend}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

