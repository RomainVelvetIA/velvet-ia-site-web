import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"
import { FloatingPaths } from "@/components/ui/floating-paths"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
    industry?: string
    icon?: string
  }>
  className?: string
  titleClassName?: string
}

export function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className,
  titleClassName
}: TestimonialsSectionProps) {
  return (
    <section className={cn(
      "bg-background text-foreground relative overflow-hidden",
      "py-12 sm:py-24 md:py-32 px-0",
      className
    )}>
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      
      <div className="absolute inset-0 bg-background/50"></div>
      
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16 relative z-10">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className={cn("max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight", titleClassName)}>
            {title}
          </h2>
          {description && (
            <p className="text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl">
              {description}
            </p>
          )}
        </div>

        <div className="relative w-full overflow-hidden py-10">
          <div className="animate-marquee-container flex w-full overflow-hidden">
            <div 
              className="flex animate-marquee flex-nowrap gap-6 md:gap-8 hover:pause-animation" 
              style={{ 
                animationDuration: "120s", /* encore plus lent */
                willChange: "transform",
                minWidth: "100%"
              }}
            >
              {[...Array(3)].map((_, setIndex) => (
                testimonials.map((testimonial, i) => (
                  <TestimonialCard 
                    key={`${setIndex}-${i}`}
                    {...testimonial}
                  />
                ))
              ))}
            </div>
          </div>
          
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  )
} 