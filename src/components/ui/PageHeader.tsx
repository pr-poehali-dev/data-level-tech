import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

const PageHeader = ({
  title,
  description,
  icon,
  className,
}: PageHeaderProps) => {
  return (
    <div className={cn("mb-8", className)}>
      <div className="flex items-center gap-2 mb-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      {description && (
        <p className="text-muted-foreground text-lg">{description}</p>
      )}
    </div>
  );
};

export default PageHeader;