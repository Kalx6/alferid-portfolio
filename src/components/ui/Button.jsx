import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] transition-colors duration-200'

const variants = {
  outline:
    'border border-foreground/40 px-5 py-2.5 text-foreground hover:bg-foreground hover:text-background',
  solid: 'bg-highlight px-6 py-3.5 text-background hover:bg-foreground',
  link: 'text-foreground hover:text-highlight',
}

export default function Button({ to, variant = 'outline', className = '', children, ...props }) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}