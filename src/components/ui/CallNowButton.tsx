import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface CallNowButtonProps {
  phoneTel: string
  phoneDisplay: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'header'
}

export function CallNowButton({
  phoneTel,
  phoneDisplay,
  size = 'md',
  variant = 'primary',
}: CallNowButtonProps) {
  return (
    <a href={`tel:${phoneTel}`} aria-label={`Call ${phoneDisplay}`}>
      <Button
        variant={variant === 'header' ? 'secondary' : 'primary'}
        size={variant === 'header' ? 'sm' : size}
      >
        <Phone size={16} />
        {phoneDisplay}
      </Button>
    </a>
  )
}
