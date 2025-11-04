import { cn } from "@/lib/utils";

export default function DashboardPageHeader({ title, description, eyebrow, actions, className, children }) {
  return (
    <header className={cn("flex flex-col gap-5 px-6 pt-6 lg:px-10", className)}>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
        <div className='space-y-2'>
          {eyebrow ? <p className='text-xs font-semibold uppercase tracking-wide text-muted-foreground'>{eyebrow}</p> : null}
          <div>
            <h1 className='text-2xl font-semibold text-foreground md:text-3xl'>{title}</h1>
            {description ? <p className='mt-2 text-sm text-muted-foreground'>{description}</p> : null}
          </div>
        </div>
        {actions ? <div className='flex flex-wrap gap-2'>{actions}</div> : null}
      </div>
      {children ? <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>{children}</div> : null}
    </header>
  );
}

