import { withTooltip, WithTooltipProps } from "../hoc/withTooltip";

interface ChipProps extends WithTooltipProps {
  children: ReactNode;
  variant?: 'default' | 'purple';
  style?: CSSProperties;
  className?: string;
}

function ChipBase({ 
  children, 
  variant = 'default',
  style = {},
  className = ''
}: ChipProps) {
  const variantClasses = {
    default: 'bg-[var(--chip-bg)] text-[var(--accent-primary)]',
    purple: 'bg-[var(--accent-primary)] text-white',
  };

  return (
    <span
      className={`inline-block px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-xs rounded font-semibold ${variantClasses[variant]} ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}

export const Chip = withTooltip(ChipBase);
