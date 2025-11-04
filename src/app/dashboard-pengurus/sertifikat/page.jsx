import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  certificateAdminMetrics,
  certificateMetadataChecklist,
  certificatePricing,
  certificateRecentRequests,
  certificateWorkflow,
} from "@/data/certificates";
import { Download, FileText, QrCode, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Sertifikat Online | Dashboard Pengurus PPSI Digjaya",
  description:
    "Kelola penerbitan sertifikat digital PPSI Digjaya, pantau biaya Rp8.000 – Rp12.000 per sertifikat, dan awasi verifikasi QR serta unduhan PDF.",
};

const metricVariantStyles = {
  success: {
    card: "border-none bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 text-white",
    helper: "text-white/80",
  },
  accent: {
    card: "border border-primary/40 bg-primary/10 text-primary",
    helper: "text-primary/80",
  },
  warning: {
    card: "border border-amber-300 bg-amber-50 text-amber-900",
    helper: "text-amber-700",
  },
  neutral: {
    card: "border border-border/70 bg-card text-foreground",
    helper: "text-muted-foreground",
  },
  default: {
    card: "border border-border/70 bg-card text-foreground",
    helper: "text-muted-foreground",
  },
};

const featureIconMap = {
  "pricing-qr": QrCode,
  "pricing-metadata": FileText,
  "pricing-pdf": Download,
};

const statusVariantMap = {
  Verifikasi: "warning",
  "Siap Terbit": "success",
  "Pengumpulan Metadata": "accent",
};

export default function CertificateDashboardPage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Sertifikat Online'
        title='Monitoring Sertifikat Digital'
        description='Tarif Rp8.000 – Rp12.000 per sertifikat sudah termasuk verifikasi URL/QR, metadata lengkap, dan unduhan PDF resmi.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              <Download className='mr-2 h-4 w-4' />
              Export Data
            </Button>
            <Button className='rounded-full text-sm'>
              <Sparkles className='mr-2 h-4 w-4' />
              Buat Batch Baru
            </Button>
          </>
        }
      />

      <main className='flex-1 overflow-y-auto px-6 pb-12 pt-6 lg:px-10'>
        <div className='grid gap-6 xl:grid-cols-[minmax(0,2fr),minmax(0,1fr)]'>
          <div className='space-y-6'>
            <MetricsGrid />
            <PricingOverviewCard />
            <WorkflowCard />
          </div>
          <div className='space-y-6'>
            <RecentRequestsCard />
            <MetadataChecklistCard />
          </div>
        </div>
      </main>
    </>
  );
}

function MetricsGrid() {
  return (
    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
      {certificateAdminMetrics.map((metric) => {
        const variant = metricVariantStyles[metric.variant] ?? metricVariantStyles.default;
        const isBright = variant.card.includes("text-white");

        return (
          <Card key={metric.id} className={cn("shadow-soft overflow-hidden", variant.card)}>
            <CardContent className='p-6'>
              <p className={cn("text-xs font-semibold uppercase tracking-wide", isBright ? "text-white/80" : "text-muted-foreground")}>
                {metric.label}
              </p>
              <p className={cn("mt-3 text-3xl font-semibold", isBright ? "text-white" : "text-foreground")}>{metric.value}</p>
              <p className={cn("mt-2 text-xs", variant.helper)}>{metric.helper}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function PricingOverviewCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <CardTitle>Biaya & Manfaat Sertifikat</CardTitle>
            <CardDescription>
              Tarif Rp8.000 – Rp12.000 mencakup verifikasi URL/QR, metadata lengkap, dan akses unduh PDF seumur hidup.
            </CardDescription>
          </div>
          <Badge variant='success' className='rounded-full bg-emerald-100 text-emerald-900'>
            {certificatePricing.range} / sertifikat
          </Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-5'>
        <p className='text-sm text-muted-foreground'>{certificatePricing.description}</p>
        <div className='space-y-3'>
          {certificatePricing.features.map((feature) => {
            const Icon = featureIconMap[feature.id] ?? ShieldCheck;
            return (
              <div key={feature.id} className='flex items-start gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
                <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary'>
                  <Icon className='h-5 w-5' />
                </div>
                <div>
                  <p className='text-sm font-semibold text-foreground'>{feature.title}</p>
                  <p className='mt-1 text-xs text-muted-foreground'>{feature.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className='rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-xs text-primary'>
          {certificatePricing.notes.map((note, index) => (
            <p key={index} className='mt-1 first:mt-0'>
              {note}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function WorkflowCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Alur Verifikasi Sertifikat</CardTitle>
            <CardDescription>Pastikan setiap langkah terpenuhi agar URL dan QR aktif secara real-time.</CardDescription>
          </div>
          <ShieldCheck className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {certificateWorkflow.map((step, index) => (
          <div key={step.id} className='flex items-start gap-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary'>
              {index + 1}
            </div>
            <div className='flex-1'>
              <p className='text-sm font-semibold text-foreground'>{step.title}</p>
              <p className='mt-1 text-xs text-muted-foreground'>{step.detail}</p>
              <Badge variant='outline' className='mt-2 text-xs'>
                {step.owner}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function RecentRequestsCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Permintaan Batch Terbaru</CardTitle>
            <CardDescription>Pantau biaya unit, status verifikasi, dan jumlah sertifikat per batch.</CardDescription>
          </div>
          <Badge variant='outline'>{certificateRecentRequests.length} batch</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {certificateRecentRequests.map((request) => (
          <div key={request.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-foreground'>
              <span>{request.name}</span>
              <Badge variant={statusVariantMap[request.status] ?? "outline"}>{request.status}</Badge>
            </div>
            <div className='mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground'>
              <span>ID: {request.id}</span>
              <span>{request.count} sertifikat</span>
              <span>Tarif rata-rata {request.fee}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function MetadataChecklistCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <CardTitle>Checklist Metadata</CardTitle>
            <CardDescription>Data wajib agar QR mendeteksi sertifikat secara tepat di dashboard publik.</CardDescription>
          </div>
          <FileText className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {certificateMetadataChecklist.map((item) => (
          <div key={item.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-foreground'>{item.label}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{item.detail}</p>
          </div>
        ))}
        <div className='rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4 text-xs text-primary'>
          Simpan semua metadata di template resmi agar proses aktivasi QR dan PDF dapat selesai dalam 1x24 jam.
        </div>
      </CardContent>
    </Card>
  );
}
