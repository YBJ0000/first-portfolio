import { clsxm } from '@zolplay/utils'
import Link, { type LinkProps } from 'next/link'

import { type IconProps } from '~/assets'

function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card({
  as: Component = 'div',
  className,
  children,
  ...props
}: {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
  onMouseMove?: React.MouseEventHandler
  onMouseEnter?: React.MouseEventHandler
  onMouseLeave?: React.MouseEventHandler
}) {
  return (
    <Component
      className={clsxm(className, 'group relative flex flex-col items-start')}
      {...props}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'a'> &
  LinkProps & { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-200/30 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-700/20 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({
  as: Component = 'h2',
  href,
  children,
}: {
  as?: keyof JSX.IntrinsicElements
  href?: string
  children: React.ReactNode
}) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={clsxm(
        'relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400',
        className
      )}
    >
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

type EyebrowTags = 'p' | 'div' | 'span' | 'h1' | 'h2' | 'h3';
type CardEyebrowProps<T extends EyebrowTags = 'p'> = {
  as?: T
  decorate?: boolean
  className?: string
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<T>

Card.Eyebrow = function CardEyebrow<T extends EyebrowTags = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: CardEyebrowProps<T>) {
  const Component = as || 'p'
  return (
    <Component
      className={clsxm(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
