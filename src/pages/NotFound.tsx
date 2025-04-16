import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold tracking-tight">404</h1>
      <h2 className="text-2xl font-semibold mt-2 mb-4">Страница не найдена</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </p>
      <Button asChild>
        <Link to="/">Вернуться на главную</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;