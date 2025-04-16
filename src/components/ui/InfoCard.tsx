import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface InfoCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

const InfoCard = ({ title, description, children, icon, className }: InfoCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className={cn("flex flex-row items-center gap-2", 
        icon ? "bg-primary/5" : "")}>
        {icon && <div className="text-primary">{icon}</div>}
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;