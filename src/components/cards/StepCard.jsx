
export default function stepCard({ step, title, description }) {
  return (
    <div className="relative p-sm overflow-hidden">
      <div className="mx-auto w-full flex-center">
        <div className="size-20 bg-primary/90 text-3xl font-bold text-background flex-center rounded-full">
          {step}
        </div>
      </div>
      <div className="my-base text-center">
        <div className="capitalize font-bold">{title}</div>
        <div className="mt-xs text-muted-foreground text-sm">{description}</div>
      </div>
    </div>
  )
}