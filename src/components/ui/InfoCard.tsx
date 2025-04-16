import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const InfoCard = ({ title, children, icon, className }: InfoCardProps) => {
  return (
    <div className={cn("rounded-lg border p-4", className)}>
      <div className="flex items-center gap-2 mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default InfoCard;