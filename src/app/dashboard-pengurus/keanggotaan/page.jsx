import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { managementNotifications, membershipStats } from "@/data/adminDashboard";
import { cn } from "@/lib/utils";
import { Globe2, Target, UploadCloud, UserPlus, Users2 } from "lucide-react";

export const metadata = {
  title: "Keanggotaan PPSI Digjaya | Dashboard Pengurus",
  description: "Kelola data anggota, pantau tingkat partisipasi, dan arahkan program pembinaan PPSI Digjaya.",
};

const membershipGrowth = [
  { id: "growth-1", month: "Jun", total: 1620, diff: "+24" },
  { id: "growth-2", month: "Jul", total: 1684, diff: "+34" },
  { id: "growth-3", month: "Agu", total: 1749, diff: "+29" },
  { id: "growth-4", month: "Sep", total: 1806, diff: "+31" },
  { id: "growth-5", month: "Okt", total: 1874, diff: "+42" },
];

const regionalDistribution = [
  { id: "reg-1", region: "Bandung Raya", percentage: 28 },
  { id: "reg-2", region: "Priangan Timur", percentage: 21 },
  { id: "reg-3", region: "Bodebek", percentage: 19 },
  { id: "reg-4", region: "Ciayumajakuning", percentage: 16 },
  { id: "reg-5", region: "Karawang - Purwakarta", percentage: 11 },
];

const developmentPriorities = [
  {
    id: "priority-1",
    title: "Verifikasi data anggota",
    detail: "126 akun belum unggah dokumen identitas. Dorong pengurus cabang untuk validasi.",
  },
  {
    id: "priority-2",
    title: "Program retensi pelatih",
    detail: "6 pelatih belum memperbarui sertifikasi tahun ini.",
  },
  {
    id: "priority-3",
    title: "Pemetaan calon wasit",
    detail: "12 kandidat siap training intensif Desember.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Keanggotaan'
        title='Manajemen Anggota & Engagement'
        description='Analisa komposisi anggota, tingkat partisipasi, dan prioritas pembinaan lintas cabang.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              <UploadCloud className='mr-2 h-4 w-4' />
              Import Data
            </Button>
            <Button className='rounded-full text-sm'>
              <UserPlus className='mr-2 h-4 w-4' />
              Tambah Anggota
            </Button>
          </>
        }
      >
        <div className='relative flex-1'>
          <Users2 className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input className='h-11 rounded-full bg-background/90 pl-12 shadow-inner' placeholder='Cari anggota, cabang, atau peran...' />
        </div>
        <div className='flex flex-wrap gap-2'>
          {["Semua", "Terverifikasi", "Menunggu", "Tidak Aktif"].map((label, index) => (
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
            <MembershipSummaryCard />
            <SegmentDistributionCard />
            <EngagementInsightCard />
          </div>
          <div className='space-y-6'>
            <GrowthTrendCard />
            <RegionalDistributionCard />
            <DevelopmentPriorityCard />
          </div>
        </div>
      </main>
    </>
  );
}

function MembershipSummaryCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Ringkasan Keanggotaan</CardTitle>
            <CardDescription>Status general anggota dan kebutuhan verifikasi.</CardDescription>
          </div>
          <Badge variant='outline'>{membershipStats.summary[0].value} anggota aktif</Badge>
        </div>
      </CardHeader>
      <CardContent className='grid gap-3 sm:grid-cols-3'>
        {membershipStats.summary.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm transition hover:border-primary/40 hover:shadow-soft",
              index === 0 ? "ring-1 ring-primary/30" : ""
            )}
          >
            <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>{item.label}</p>
            <p className='mt-2 text-2xl font-semibold text-foreground'>{item.value}</p>
            {index !== 0 ? <p className='mt-2 text-xs text-primary'>Perlu tindak lanjut</p> : null}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function SegmentDistributionCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Komposisi Peran</CardTitle>
            <CardDescription>Distribusi anggota berdasarkan peran strategis.</CardDescription>
          </div>
          <Target className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {membershipStats.segments.map((segment) => (
          <div key={segment.id} className='space-y-2 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
            <div className='flex items-center justify-between text-sm font-semibold text-foreground'>
              <span>{segment.label}</span>
              <Badge variant='outline'>{segment.count}</Badge>
            </div>
            <Progress value={Math.min(100, (segment.count / membershipStats.summary[0].value) * 100)} className='h-1.5' />
            <p className='text-xs text-muted-foreground'>Kontribusi {Math.round((segment.count / membershipStats.summary[0].value) * 100)}% dari anggota aktif.</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function EngagementInsightCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <CardTitle>Engagement & Partisipasi</CardTitle>
        <CardDescription>Evaluasi keterlibatan anggota di event, forum, dan pelatihan.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        {membershipStats.engagement.map((item) => (
          <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-foreground'>{item.metric}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{item.value}</p>
          </div>
        ))}
        <Separator />
        <div className='flex flex-wrap gap-3 text-xs text-muted-foreground'>
          <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
            418 kontribusi forum
          </Badge>
          <span>Program mentoring menghasilkan 32 pasangan baru</span>
          <span>Rata-rata kepuasan pelatihan 4.6/5</span>
        </div>
      </CardContent>
    </Card>
  );
}

function GrowthTrendCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Tren Pertumbuhan</CardTitle>
            <CardDescription>Perkembangan jumlah anggota terverifikasi per bulan.</CardDescription>
          </div>
          <Badge variant='outline'>+9,8% 6 bulan terakhir</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='flex items-end gap-3'>
          {membershipGrowth.map((item) => (
            <div key={item.id} className='flex flex-1 flex-col items-center gap-2'>
              <div className='flex h-32 w-full items-end justify-center rounded-2xl bg-gradient-to-t from-emerald-100 via-emerald-300 to-emerald-500 p-2 shadow-inner'>
                <div className='w-full rounded-xl bg-white/80 py-3 text-center text-xs font-semibold text-emerald-900 shadow-inner'>
                  {item.total}
                </div>
              </div>
              <div className='space-y-1 text-center text-xs text-muted-foreground'>
                <p>{item.month}</p>
                <p className='text-primary'>{item.diff}</p>
              </div>
            </div>
          ))}
        </div>
        <Separator />
        <div className='flex flex-wrap gap-3 text-xs text-muted-foreground'>
          <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
            Target 2.000 anggota Q1 2026
          </Badge>
          <span>Program reaktivasi berhasil mengembalikan 18 anggota</span>
        </div>
      </CardContent>
    </Card>
  );
}

function RegionalDistributionCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Sebaran Wilayah</CardTitle>
            <CardDescription>Prioritaskan dukungan untuk cabang dengan potensi tinggi.</CardDescription>
          </div>
          <Globe2 className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {regionalDistribution.map((region) => (
          <div key={region.id} className='flex items-center justify-between rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div>
              <p className='text-sm font-semibold text-foreground'>{region.region}</p>
              <p className='text-xs text-muted-foreground'>Butuh fasilitator lapangan</p>
            </div>
            <Badge variant='outline'>{region.percentage}%</Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function DevelopmentPriorityCard() {
  const membershipAlerts = managementNotifications.filter((item) => item.badge === "Keanggotaan");

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Prioritas Pembinaan</CardTitle>
            <CardDescription>Checklist tindak lanjut pengurus bidang keanggotaan.</CardDescription>
          </div>
          <Badge variant='outline'>3 fokus utama</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-4'>
        {developmentPriorities.map((priority) => (
          <div key={priority.id} className='rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-foreground'>{priority.title}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{priority.detail}</p>
          </div>
        ))}
        {membershipAlerts.length ? (
          <>
            <Separator />
            <div className='space-y-2 text-xs text-muted-foreground'>
              <p className='font-semibold uppercase tracking-wide text-primary'>Alert Otomatis</p>
              {membershipAlerts.map((alert) => (
                <div key={alert.id} className='rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-primary'>
                  <p className='text-sm font-semibold text-primary'>{alert.title}</p>
                  <p className='mt-1 text-xs text-primary/80'>{alert.detail}</p>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}

