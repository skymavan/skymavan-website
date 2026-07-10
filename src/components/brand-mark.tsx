import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-8 place-items-center rounded-full bg-primary text-primary-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-[6px] rounded-full border border-current/45" />
      <span className="size-1.5 rounded-full bg-current" />
      <span className="absolute right-[3px] size-1 rounded-full bg-sky" />
    </span>
  );
}
