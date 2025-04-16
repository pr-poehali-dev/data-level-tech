import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

const PageHeader = ({ title, description, icon }: PageHeaderProps) => {
  return (
    <div className="flex flex-col space-y-2 mb-8 border-b pb-4">
      <div className="flex items-center space-x-2">
        {icon && <div className="text-primary">{icon}</div>}
        <h1 className="text-heading font-bold tracking-tight">{title}</h1>
      </div>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
};

export default PageHeader;