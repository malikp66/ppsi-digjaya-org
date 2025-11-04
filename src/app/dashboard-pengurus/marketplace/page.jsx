import DashboardPageHeader from "@/components/dashboard/DashboardPageHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { managementNotifications, orderAlerts, orderSummary, orderTable } from "@/data/adminDashboard";
import { cn } from "@/lib/utils";
import { AlertTriangle, BarChart3, FileDown, Package, Plus, Search, Truck } from "lucide-react";

export const metadata = {
  title: "Marketplace PPSI Digjaya | Dashboard Pengurus",
  description: "Pantau kinerja marketplace, pengiriman order, dan kesehatan inventori PPSI Digjaya dalam satu layar.",
};

const campaignPerformance = [
  {
    id: "campaign-1",
    name: "Flash Sale Festival",
    metric: "Tingkat konversi",
    value: "6,4%",
    change: "+1,2% vs minggu lalu",
  },
  {
    id: "campaign-2",
    name: "Bundling Lisensi + Merchandise",
    metric: "Pendapatan",
    value: "Rp18,2 juta",
    change: "+9,5%",
  },
  {
    id: "campaign-3",
    name: "Voucher Donasi Latihan",
    metric: "Redeem",
    value: "74 kupon",
    change: "Target tercapai 92%",
  },
];

const inventoryHealth = [
  {
    id: "inv-1",
    item: "Seragam Resmi PPSI",
    stock: "48 unit",
    status: "Aman",
    threshold: "Minimum 25",
  },
  {
    id: "inv-2",
    item: "Paket Merchandise Festival",
    stock: "12 unit",
    status: "Perlu Restock",
    threshold: "Minimum 20",
  },
  {
    id: "inv-3",
    item: "Lisensi Materi Digital",
    stock: "Unlimited",
    status: "Digital",
    threshold: "-",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <DashboardPageHeader
        eyebrow='Marketplace'
        title='Kinerja Penjualan & Operasional'
        description='Analisa order masuk, status fulfillment, dan insight penjualan lintas produk.'
        actions={
          <>
            <Button variant='outline' className='rounded-full border-border/70 text-sm'>
              <FileDown className='mr-2 h-4 w-4' />
              Export Laporan
            </Button>
            <Button className='rounded-full text-sm'>
              <Plus className='mr-2 h-4 w-4' />
              Tambah Produk
            </Button>
          </>
        }
      >
        <div className='relative flex-1'>
          <Search className='pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input className='h-11 rounded-full bg-background/90 pl-12 shadow-inner' placeholder='Cari order, produk, atau pelanggan...' />
        </div>
        <div className='flex flex-wrap gap-2'>
          {["Semua", "Baru", "Diproses", "Dikirim", "Selesai"].map((label, index) => (
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
            <OrderSummaryCard />
            <RecentOrderTable />
            <RevenueSnapshotCard />
          </div>
          <div className='space-y-6'>
            <OperationalAlertCard />
            <CampaignPerformanceCard />
            <InventoryHealthCard />
          </div>
        </div>
      </main>
    </>
  );
}

function OrderSummaryCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Ringkasan Order</CardTitle>
            <CardDescription>Volume order, status fulfillment, dan indikator SLA.</CardDescription>
          </div>
          <Badge variant='outline'>{orderSummary.volumes[1].value} order / minggu</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-6'>
        <div className='grid gap-3 md:grid-cols-3'>
          {orderSummary.volumes.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "rounded-2xl border border-border/60 bg-background/80 p-4 shadow-sm transition hover:border-primary/40 hover:shadow-soft",
                index === 0 ? "ring-1 ring-primary/30" : ""
              )}
            >
              <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>{item.label}</p>
              <p className='mt-2 text-2xl font-semibold text-foreground'>{item.value}</p>
              <p className='mt-2 text-xs text-primary'>{item.diff}</p>
            </div>
          ))}
        </div>
        <Separator />
        <div className='grid gap-3 sm:grid-cols-2'>
          {orderSummary.statusBreakdown.map((status) => (
            <div key={status.id} className='flex items-center justify-between rounded-2xl border border-border/60 bg-card/80 p-4 shadow-sm'>
              <span className='text-sm font-semibold text-foreground'>{status.label}</span>
              <Badge variant='outline'>{status.count}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function RecentOrderTable() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Order Terbaru</CardTitle>
            <CardDescription>Prioritaskan follow-up dan koordinasi logistik.</CardDescription>
          </div>
          <Badge variant='outline'>{orderTable.length} order</Badge>
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {orderTable.map((order) => (
          <div key={order.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div className='flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-foreground'>
              <span>{order.id}</span>
              <Badge variant='secondary' className='rounded-full bg-emerald-100 text-emerald-900'>
                {order.status}
              </Badge>
            </div>
            <div className='mt-1 text-xs text-muted-foreground'>
              <p>{order.buyer}</p>
              <p className='mt-1 text-xs text-muted-foreground'>{order.product}</p>
            </div>
            <div className='mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground'>
              <span>{order.value}</span>
              <span>Estimasi {order.eta}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function RevenueSnapshotCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <CardTitle>Snapshot Keuangan</CardTitle>
        <CardDescription>Ringkasan pendapatan, piutang, dan biaya operasional.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-3 md:grid-cols-3'>
        {orderSummary.finance.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl border border-border/60 bg-gradient-to-br from-emerald-50 via-white to-white p-4 shadow-sm transition hover:border-primary/40",
              index === 0 ? "ring-1 ring-primary/30" : ""
            )}
          >
            <p className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>{item.label}</p>
            <p className='mt-2 text-lg font-semibold text-foreground'>{item.amount}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function OperationalAlertCard() {
  const marketplaceAlerts = [
    ...orderAlerts,
    ...managementNotifications.filter((item) => item.badge === "Marketplace"),
  ];

  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Alert Operasional</CardTitle>
            <CardDescription>Tindak lanjuti isu penting sebelum berdampak ke pelanggan.</CardDescription>
          </div>
          <AlertTriangle className='h-5 w-5 text-amber-500' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {marketplaceAlerts.map((alert) => (
          <div key={alert.id} className='rounded-2xl border border-dashed border-amber-400/70 bg-amber-50/60 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-amber-900'>{alert.title}</p>
            <p className='mt-1 text-xs text-amber-800'>{alert.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function CampaignPerformanceCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Performa Kampanye</CardTitle>
            <CardDescription>Evaluasi kontribusi promosi terhadap penjualan marketplace.</CardDescription>
          </div>
          <BarChart3 className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-3'>
        {campaignPerformance.map((campaign) => (
          <div key={campaign.id} className='rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <p className='text-sm font-semibold text-foreground'>{campaign.name}</p>
            <p className='mt-1 text-xs text-muted-foreground'>{campaign.metric}</p>
            <p className='mt-2 text-xs text-primary'>{campaign.value}</p>
            <p className='mt-1 text-xs text-primary/80'>{campaign.change}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function InventoryHealthCard() {
  return (
    <Card className='shadow-soft'>
      <CardHeader className='pb-6'>
        <div className='flex items-start justify-between'>
          <div>
            <CardTitle>Kesehatan Inventori</CardTitle>
            <CardDescription>Pastikan stok aman untuk mendukung permintaan pelanggan.</CardDescription>
          </div>
          <Package className='h-5 w-5 text-primary' />
        </div>
      </CardHeader>
      <CardContent className='space-y-4'>
        {inventoryHealth.map((item) => (
          <div key={item.id} className='space-y-3 rounded-2xl border border-border/60 bg-background/90 p-4 shadow-sm'>
            <div className='flex items-center justify-between text-sm font-semibold text-foreground'>
              <span>{item.item}</span>
              <Badge variant='outline'>{item.status}</Badge>
            </div>
            <div className='flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground'>
              <span>Stok: {item.stock}</span>
              <span>Ambang: {item.threshold}</span>
            </div>
            <Progress value={item.status === "Perlu Restock" ? 35 : item.status === "Aman" ? 80 : 60} className='h-1.5' />
            <div className='flex items-center justify-between text-xs text-muted-foreground'>
              <span>Lead time pengadaan 4 hari</span>
              <span className='flex items-center gap-1 text-primary'>
                <Truck className='h-3.5 w-3.5' />
                Integrasi ke logistik
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

