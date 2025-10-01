import { APP_CONFIG, BRAND_COLORS } from '@/config/app.config';
import { cn } from '@/lib/utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: {
    icon: 'w-5 h-5',
    dot: 'w-2.5 h-2.5',
    text: 'text-lg',
  },
  md: {
    icon: 'w-6 h-6',
    dot: 'w-3 h-3',
    text: 'text-2xl',
  },
  lg: {
    icon: 'w-8 h-8',
    dot: 'w-4 h-4',
    text: 'text-3xl',
  },
} as const;

export function Logo({ size = 'md', showText = true, className }: LogoProps) {
  const config = sizeConfig[size];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <div
        className={cn(
          'rounded-full flex items-center justify-center',
          config.icon
        )}
        style={{ backgroundColor: BRAND_COLORS.primaryLight }}
        aria-hidden="true"
      >
        <div
          className={cn('rounded-full', config.dot)}
          style={{ backgroundColor: BRAND_COLORS.primary }}
        />
      </div>
      {showText && (
        <span className={cn('font-bold text-gray-900', config.text)}>
          {APP_CONFIG.name}
        </span>
      )}
    </div>
  );
}
