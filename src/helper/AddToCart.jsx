"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import OptimizedImage from "@/components/common/OptimizedImage";

const AddToCart = () => {
  const [count, setCount] = useState(1);

  const increaseCount = () => setCount((prev) => prev + 1);
  const decreaseCount = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <article className='group flex items-start gap-4 rounded-2xl border border-border/70 bg-card/80 p-4 shadow-card transition hover:shadow-soft'>
      <Link
        href='/service-details'
        className='relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted'
        aria-label='Lihat detail produk'
      >
        <OptimizedImage
          src='/assets/images/cart.jpg'
          alt='Product thumbnail'
          className='h-full w-full object-cover'
        />
      </Link>
      <div className='flex flex-1 flex-col gap-3'>
        <div className='flex items-start justify-between gap-3'>
          <div>
            <Link
              href='/service-details'
              className='text-base font-semibold text-foreground transition-colors hover:text-primary'
            >
              Product One
            </Link>
            <p className='mt-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground'>
              Reguler
            </p>
          </div>
          <p className='text-base font-semibold text-primary'>
            $<span className='item-price'>34.99</span>
          </p>
        </div>
        <div className='flex items-center justify-between gap-3'>
          <div className='inline-flex items-center rounded-full border border-border/60 bg-secondary/70 px-1 py-1'>
            <button
              type='button'
              aria-label='Kurangi jumlah'
              onClick={decreaseCount}
              className='flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:text-primary disabled:opacity-40'
            >
              <Minus className='h-4 w-4' />
            </button>
            <span className='px-3 text-sm font-semibold text-foreground'>
              {count}
            </span>
            <button
              type='button'
              aria-label='Tambah jumlah'
              onClick={increaseCount}
              className='flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:text-primary'
            >
              <Plus className='h-4 w-4' />
            </button>
          </div>
          <button
            type='button'
            aria-label='Hapus produk'
            className='flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition hover:border-destructive hover:text-destructive'
          >
            <Trash2 className='h-4 w-4' />
          </button>
        </div>
      </div>
    </article>
  );
};

export default AddToCart;
