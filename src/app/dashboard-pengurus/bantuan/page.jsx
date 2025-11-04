import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CircleHelp, LifeBuoy, MessageSquare, PhoneCall } from "lucide-react";

export const metadata = {
  title: "Pusat Bantuan Dashboard Pengurus PPSI Digjaya",
  description: "Temukan panduan cepat, hubungi tim support, dan akses dokumentasi operasional PPSI Digjaya.",
};

const quickGuides = [
  { id: "guide-1", title: "Mempublikasikan berita baru", estimate: "3 menit", detail: "Langkah mulai dari draft hingga publikasi." },
  { id: "guide-2", title: "Mengaktifkan akun cabang baru", estimate: "5 menit", detail: "Verifikasi dokumen dan kontrol akses." },
  { id: "guide-3", title: "Menangani tiket helpdesk prioritas", estimate: "4 menit", detail: "Checklist eskalasi dan pelaporan." },
];

const supportChannels = [
  { id: "channel-1", label: "Live Chat Slack", availability: "Senin - Sabtu 08.00-20.00 WIB", badge: "Rekomendasi" },
  { id: "channel-2", label: "Hotline DPW", availability: "+62 813-9000-8891", badge: "24 Jam" },
  { id: "channel-3", label: "Email Support", availability: "support@ppsi-digjaya.org", badge: "Respon < 6 jam" },
];

const faqTopics = [
  {
    id: "faq-1",
    question: "Bagaimana cara memperbarui data anggota yang salah?",
    answer: "Gunakan menu Keanggotaan > pilih anggota > klik Koreksi Data > unggah dokumen pendukung.",
  },
  {
    id: "faq-2",
    question: "Mengapa data order belum tersinkron ke marketplace?",
    answer: "Pastikan API key marketplace aktif dan lakukan sinkronisasi ulang via tombol 'Sinkronkan Kalander' di menu Program & Event.",
  },
  {
    id: "faq-3",
    question: "Siapa PIC untuk event tingkat provinsi?",
    answer: "Cek daftar PIC pada Program & Event > Mobilisasi Relawan atau hubungi sekretariat melalui live chat.",
  },
];

export default function SupportCenterPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Pusat Bantuan'
        title='Sumber Daya & Dukungan'
        description='Akses panduan operasional, hubungi support, dan temukan jawaban cepat untuk kendala harian.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              Dokumentasi Lengkap
            </Button>
            <Button className='rounded-full text-sm'>
              <LifeBuoy className='mr-2 h-4 w-4' />
              Hubungi Helpdesk
            </Button>
          </>
        }
      />

      <main className='flex-1 overflow-y-auto px-6 pb-12 pt-6 lg:px-10'>
        <div className='grid gap-6 xl:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)]'>
          <Card className='shadow-soft'>
            <CardHeader className='pb-6'>
              <div className='flex items-start justify-between'>
                <div>
                  <CardTitle>Panduan Cepat</CardTitle>
                  <CardDescription>Pahami alur utama dashboard dalam hitungan menit.</CardDescription>
                </div>
                <CircleHelp className='h-5 w-5 text-primary' />
              </div>
            </CardHeader>
            <CardContent className='space-y-3'>
              {quickGuides.map((guide) => (
                <div key={guide.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                  <div className='flex items-center justify-between text-sm font-semibold text-foreground'>
                    <span>{guide.title}</span>
                    <Badge variant='outline'>{guide.estimate}</Badge>
                  </div>
                  <p className='mt-1 text-xs text-muted-foreground'>{guide.detail}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className='shadow-soft'>
            <CardHeader className='pb-6'>
              <div className='flex items-start justify-between'>
                <div>
                  <CardTitle>Kanal Dukungan</CardTitle>
                  <CardDescription>Pilih jalur komunikasi sesuai urgensi kebutuhan.</CardDescription>
                </div>
                <PhoneCall className='h-5 w-5 text-primary' />
              </div>
            </CardHeader>
            <CardContent className='space-y-3'>
              {supportChannels.map((channel) => (
                <div key={channel.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                  <div className='flex items-center justify-between text-sm font-semibold text-foreground'>
                    <span>{channel.label}</span>
                    <Badge variant='outline'>{channel.badge}</Badge>
                  </div>
                  <p className='mt-1 text-xs text-muted-foreground'>{channel.availability}</p>
                </div>
              ))}
              <Separator />
              <div className='flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary/5 p-4 text-primary'>
                <MessageSquare className='h-5 w-5 text-primary/80' />
                <p className='text-xs'>Ikuti sesi onboarding dashboard setiap Rabu 19.00 WIB melalui Zoom.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className='mt-6 shadow-soft'>
          <CardHeader className='pb-6'>
            <CardTitle>FAQ Operasional</CardTitle>
            <CardDescription>Jawaban cepat untuk pertanyaan populer pengurus cabang.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-3'>
            <ScrollArea className='max-h-72 space-y-3'>
              {faqTopics.map((faq) => (
                <div key={faq.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                  <p className='text-sm font-semibold text-foreground'>{faq.question}</p>
                  <p className='mt-1 text-xs text-muted-foreground'>{faq.answer}</p>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </>
  );
}

