import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { managerProfile } from "@/data/adminDashboard";
import { Shield, Smartphone, Sparkles } from "lucide-react";

export const metadata = {
  title: "Pengaturan Dashboard Pengurus PPSI Digjaya",
  description: "Atur preferensi tampilan, kontrol akses, dan notifikasi untuk dashboard pengurus PPSI Digjaya.",
};

const notificationPreferences = [
  { id: "notif-1", channel: "Email", status: "Aktif", detail: "Ringkasan harian & alert prioritas" },
  { id: "notif-2", channel: "WhatsApp", status: "Terjadwal", detail: "Notifikasi real-time tiket helpdesk" },
  { id: "notif-3", channel: "Mobile App", status: "Aktif", detail: "Push event penting & jadwal rapat" },
];

const accessControl = [
  { id: "access-1", label: "Hak akses marketplace", value: "Editor + Keuangan", badge: "Role-based" },
  { id: "access-2", label: "Hak akses keanggotaan", value: "Admin DPW + Pengurus Cabang", badge: "Terproteksi" },
  { id: "access-3", label: "Integrasi kalender", value: "Google Workspace PPSI", badge: "Sinkron" },
];

export default function SettingsPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Pengaturan'
        title='Pengaturan Dashboard'
        description='Kelola preferensi personal, akses tim, dan kanal notifikasi untuk pengalaman kerja yang terkontrol.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              Simpan Perubahan
            </Button>
            <Button className='rounded-full text-sm'>
              Reset Default
            </Button>
          </>
        }
      />
      <main className='flex-1 overflow-y-auto px-6 pb-12 pt-6 lg:px-10'>
        <div className='grid gap-6 xl:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]'>
          <Card className='shadow-soft'>
            <CardHeader className='pb-6'>
              <div className='flex items-start justify-between'>
                <div>
                  <CardTitle>Profil Pengguna</CardTitle>
                  <CardDescription>Pastikan data akun pengurus terbaru dan terverifikasi.</CardDescription>
                </div>
                <Badge variant='outline'>Pengurus Aktif</Badge>
              </div>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                <p className='text-sm font-semibold text-foreground'>{managerProfile.name}</p>
                <p className='mt-1 text-xs text-muted-foreground'>{managerProfile.email}</p>
                <p className='mt-3 text-xs text-muted-foreground'>Role: {managerProfile.role}</p>
              </div>
              <Separator />
              <div className='space-y-3 text-xs text-muted-foreground'>
                <p className='font-semibold uppercase tracking-wide text-primary'>Perlu Tindakan</p>
                <div className='rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-primary'>
                  Aktifkan autentikasi dua faktor untuk keamanan tambahan.
                </div>
                <div className='rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3 text-primary'>
                  Update foto profil agar mudah dikenali oleh tim cabang.
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='shadow-soft'>
            <CardHeader className='pb-6'>
              <div className='flex items-start justify-between'>
                <div>
                  <CardTitle>Preferensi Notifikasi</CardTitle>
                  <CardDescription>Pilih kanal komunikasi yang sesuai dengan ritme kerja tim.</CardDescription>
                </div>
                <Smartphone className='h-5 w-5 text-primary' />
              </div>
            </CardHeader>
            <CardContent className='space-y-3'>
              {notificationPreferences.map((item) => (
                <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                  <div className='flex items-center justify-between text-sm font-semibold text-foreground'>
                    <span>{item.channel}</span>
                    <Badge variant='outline'>{item.status}</Badge>
                  </div>
                  <p className='mt-1 text-xs text-muted-foreground'>{item.detail}</p>
                </div>
              ))}
              <Separator />
              <div className='flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary/5 p-4 text-primary'>
                <Sparkles className='h-5 w-5 text-primary/80' />
                <p className='text-xs'>Aktifkan ringkasan analitik mingguan langsung ke email pengurus.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className='mt-6 shadow-soft'>
          <CardHeader className='pb-6'>
            <div className='flex items-start justify-between'>
              <div>
                <CardTitle>Kontrol Akses & Integrasi</CardTitle>
                <CardDescription>Sistem mencatat aktivitas perubahan akses secara otomatis.</CardDescription>
              </div>
              <Shield className='h-5 w-5 text-primary' />
            </div>
          </CardHeader>
          <CardContent className='space-y-3'>
            {accessControl.map((row) => (
              <div key={row.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-foreground'>
                  <span>{row.label}</span>
                  <Badge variant='outline'>{row.badge}</Badge>
                </div>
                <p className='mt-1 text-xs text-muted-foreground'>{row.value}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </main>
    </>
  );
}

