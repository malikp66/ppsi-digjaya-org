import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { collaborationBoard, managementCalendar, programReports, programSchedules, trackerInfo } from "@/data/adminDashboard";
import { cn } from "@/lib/utils";
import { CalendarCheck, CalendarPlus, Clock4, MapPin, RefreshCw, Users } from "lucide-react";

export const metadata = {
  title: "Program & Event PPSI Digjaya | Dashboard Pengurus",
  description: "Rencanakan program kerja, koordinasikan event, dan pantau progres eksekusi pengurus PPSI Digjaya.",
};

const resourceAllocation = [
  {
    id: "res-1",
    name: "Festival Seni Bela Diri 2025",
    budget: "Rp145.000.000",
    utilization: 62,
    notes: "Perlu konfirmasi vendor multimedia",
  },
  {
    id: "res-2",
    name: "Program Pembinaan Atlet Junior",
    budget: "Rp98.000.000",
    utilization: 74,
    notes: "Pengajuan alat latihan tahap 2",
  },
  {
    id: "res-3",
    name: "Digitalisasi Arsip Jurus",
    budget: "Rp56.000.000",
    utilization: 81,
    notes: "Menunggu validasi dewan ahli",
  },
];

const volunteerMobilization = [
  {
    id: "vol-1",
    role: "Fasilitator Event",
    need: 18,
    assigned: 14,
    location: "Festival Seni Bela Diri",
  },
  {
    id: "vol-2",
    role: "Mentor Program Atlet",
    need: 12,
    assigned: 9,
    location: "Pembinaan Atlet Junior",
  },
  {
    id: "vol-3",
    role: "Tim Dokumentasi",
    need: 6,
    assigned: 6,
    location: "Digitalisasi Arsip",
  },
];

export default function ProgramEventPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Program & Event'
        title='Koordinasi Program dan Agenda'
        description='Lacak progres program prioritas, sinkronkan kalender event, dan pastikan sumber daya tersedia.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              <RefreshCw className='mr-2 h-4 w-4' />
              Sinkronkan Kalender
            </Button>
            <Button className='rounded-full text-sm'>
              <CalendarPlus className='mr-2 h-4 w-4' />
              Buat Agenda
            </Button>
          </>
        }
      >
        <div className='relative flex-1'>
          <CalendarCheck className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input className='h-11 rounded-full bg-background/90 pl-12 shadow-inner' placeholder='Cari program, event, atau PIC...' />
        </div>
      </DashboardPageHeader>

      <main className='flex-1 overflow-y-auto px-6 pb-12 pt-6 lg:px-10'>
        <div className='grid gap-6 xl:grid-cols-[minmax(0,2fr),minmax(0,1fr)]'>
          <div className='space-y-6'>
            <ProgramTimelineCard />
            <EventCalendarCard />
            <ReportSummaryCard />
          </div>
          <div className='space-y-6'>
            <ResourceAllocationCard />
            <VolunteerMobilizationCard />
            <FieldSupportTrackerCard />
          </div>
        </div>
      </main>
    </>
  );
}

function ProgramTimelineCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Progres Program Prioritas</CardTitle>
            <CardDescription>Monitor status eksekusi dan kebutuhan tindak lanjut.</CardDescription>
          </div>
          <Badge variant='outline'>{programSchedules.length} program aktif</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {programSchedules.map((program) => (
          <div key={program.id} className='rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
            <div className='flex flex-wrap items-center justify-between gap-2'>
              <p className='text-sm font-semibold text-foreground'>{program.name}</p>
              <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
                {program.status}
              </Badge>
            </div>
            <div className='mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground'>
              {program.tasks.map((task) => (
                <Badge key={task} variant='outline' className='rounded-full text-xs'>
                  {task}
                </Badge>
              ))}
            </div>
            <div className='mt-3 space-y-2 text-xs text-muted-foreground'>
              <p>Progress keseluruhan</p>
              <Progress value={parseInt(program.progress, 10)} className='h-1.5' />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function EventCalendarCard() {
  const [primaryAgenda, ...otherAgendas] = managementCalendar;

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Agenda Mingguan</CardTitle>
            <CardDescription>Rangkuman event dan deadline penting untuk pengurus.</CardDescription>
          </div>
          <Badge variant='outline'>Sinkron otomatis</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-5'>
        {primaryAgenda ? (
          <div className='rounded-2xl border border-primary/40 bg-gradient-to-br from-emerald-500 to-emerald-700 p-5 text-white shadow-soft'>
            <div className='flex items-start gap-3'>
              <MapPin className='h-5 w-5 text-white/80' />
              <div>
                <p className='text-xs uppercase tracking-wide text-white/70'>Fokus Utama</p>
                <p className='mt-1 text-lg font-semibold'>{primaryAgenda.title}</p>
                <p className='mt-1 text-sm text-white/80'>{primaryAgenda.detail}</p>
                <p className='mt-3 text-xs text-white/70'>{primaryAgenda.date}</p>
              </div>
            </div>
          </div>
        ) : null}
        <Separator />
        <div className='space-y-3'>
          {otherAgendas.map((agenda) => (
            <div key={agenda.id} className='flex items-start gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
              <CalendarCheck className='mt-0.5 h-5 w-5 text-primary' />
              <div>
                <p className='text-sm font-semibold text-foreground'>{agenda.title}</p>
                <p className='mt-1 text-xs text-muted-foreground'>{agenda.detail}</p>
                <p className='mt-2 text-xs text-muted-foreground'>{agenda.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function ReportSummaryCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <CardTitle>Laporan & Insight</CardTitle>
        <CardDescription>Cek hasil evaluasi pelaksanaan event dan program unggulan.</CardDescription>
      </CardHeader>
      <CardContent className='space-y-3'>
        {programReports.map((report) => (
          <div key={report.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-foreground'>{report.title}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{report.highlight}</p>
            <p className='mt-2 text-xs text-muted-foreground'>Oleh {report.owner}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function ResourceAllocationCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Alokasi Anggaran</CardTitle>
            <CardDescription>Pastikan penggunaan anggaran sesuai rencana.</CardDescription>
          </div>
          <Badge variant='outline'>Update mingguan</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {resourceAllocation.map((item) => (
          <div key={item.id} className='space-y-3 rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
            <div className='flex items-center justify-between text-sm font-semibold text-foreground'>
              <span>{item.name}</span>
              <span>{item.budget}</span>
            </div>
            <Progress value={item.utilization} className='h-1.5' />
            <p className='text-xs text-muted-foreground'>Pemakaian {item.utilization}% • {item.notes}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function VolunteerMobilizationCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Mobilisasi Relawan</CardTitle>
            <CardDescription>Kebutuhan sumber daya manusia untuk event dan program.</CardDescription>
          </div>
          <Users className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {volunteerMobilization.map((item) => (
          <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-foreground'>
              <span>{item.role}</span>
              <Badge variant='outline'>
                {item.assigned}/{item.need} terpenuhi
              </Badge>
            </div>
            <p className='mt-1 text-xs text-muted-foreground'>{item.location}</p>
            <Progress value={Math.min(100, (item.assigned / item.need) * 100)} className='mt-3 h-1.5' />
          </div>
        ))}
        <Separator />
        <div className='space-y-2 text-xs text-muted-foreground'>
          <p className='font-semibold uppercase tracking-wide text-primary'>Kolaborasi Aktif</p>
          {collaborationBoard.slice(0, 3).map((person) => (
            <div key={person.id} className='rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-primary'>
              <p className='text-sm font-semibold text-primary'>{person.name}</p>
              <p className='mt-1 text-xs text-primary/80'>{person.focus}</p>
              <p className='mt-1 text-xs text-primary/70'>Status: {person.status}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function FieldSupportTrackerCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Dukungan Lapangan</CardTitle>
            <CardDescription>Log waktu pendampingan cabang dan tindak lanjut lapangan.</CardDescription>
          </div>
          <Clock4 className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-5'>
        <div className='rounded-2xl border border-primary/40 bg-gradient-to-br from-emerald-600 to-emerald-800 p-6 text-white shadow-soft'>
          <p className='text-xs uppercase tracking-wide text-white/70'>Sesi Berjalan</p>
          <p className='mt-2 text-3xl font-semibold'>{trackerInfo.elapsed}</p>
          <p className='mt-2 text-sm text-white/80'>{trackerInfo.label}</p>
        </div>
        <div className='flex items-center gap-3'>
          <Button className='flex-1 rounded-full'>Mulai Pendampingan</Button>
          <Button variant='ghost' className='flex-1 rounded-full border border-border/70'>
            Tandai Selesai
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

