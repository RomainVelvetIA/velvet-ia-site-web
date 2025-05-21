import { cn } from "@/lib/utils"
import Link from "next/link"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  icon?: string
  industry?: string
}

export function TestimonialCard({ author, text, href, icon, industry }: TestimonialCardProps) {
  const CardWrapper = href ? Link : "div"

  return (
    <CardWrapper
      href={href as string}
      className={cn(
        "flex min-w-[280px] max-w-[320px] shrink-0 flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm",
        "transition-all duration-300 hover:shadow-md",
        href && "transition-colors hover:bg-muted/50"
      )}
    >
      {icon && industry && (
        <div className="flex items-center mb-2">
          <span className="text-2xl mr-2" aria-hidden="true">
            {icon}
          </span>
          <span className="text-sm font-medium text-primary">
            {industry}
          </span>
        </div>
      )}
      <p className="flex-1 text-sm text-card-foreground/90 line-clamp-5">"{text}"</p>
      <div className="flex items-center gap-3 mt-2">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-card-foreground">
            {author.name}
          </span>
          <span className="text-xs text-muted-foreground">
            {author.handle}
          </span>
        </div>
      </div>
    </CardWrapper>
  )
} 