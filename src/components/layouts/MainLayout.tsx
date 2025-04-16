import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Cable, 
  Waves, 
  Rss, 
  Zap,
  GitCompare, 
  BrainCircuit, 
  ListChecks, 
  BookText, 
  Globe,
  Menu,
  X,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useMobile } from '@/hooks/use-mobile';

interface SidebarLink {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isMobile = useMobile();
  const [open, setOpen] = useState(false);
  
  const sidebarLinks: SidebarLink[] = [
    { title: 'Главная', href: '/', icon: <Home className="h-5 w-5" /> },
    { title: 'Медные технологии', href: '/copper', icon: <Cable className="h-5 w-5" /> },
    { title: 'Оптоволоконные технологии', href: '/fiber', icon: <Waves className="h-5 w-5" /> },
    { title: 'Беспроводные технологии', href: '/wireless', icon: <Rss className="h-5 w-5" /> },
    { title: 'Модуляция', href: '/modulation', icon: <Zap className="h-5 w-5" /> },
    { title: 'Кодирование данных', href: '/encoding', icon: <GitCompare className="h-5 w-5" /> },
    { title: 'Сетевые протоколы', href: '/protocols', icon: <Globe className="h-5 w-5" /> },
    { title: 'Современные технологии', href: '/technologies', icon: <BrainCircuit className="h-5 w-5" /> },
    { title: 'Проверка знаний', href: '/quiz', icon: <ListChecks className="h-5 w-5" /> },
    { title: 'Справочник терминов', href: '/glossary', icon: <BookText className="h-5 w-5" /> },
  ];
  
  const renderLinks = () => (
    <nav className="space-y-1">
      {sidebarLinks.map((link, index) => (
        <Link
          key={index}
          to={link.href}
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-base transition-colors",
            link.href === location.pathname
              ? "bg-primary text-primary-foreground"
              : "hover:bg-muted"
          )}
          onClick={() => setOpen(false)}
        >
          {link.icon}
          {link.title}
        </Link>
      ))}
    </nav>
  );
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-bold text-lg">
              Технологии физического уровня
            </Link>
          </div>
          
          {isMobile ? (
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[80%] max-w-sm">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-bold text-lg">Навигация</div>
                    <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                      <X className="h-5 w-5" />
                      <span className="sr-only">Закрыть</span>
                    </Button>
                  </div>
                  <Separator className="mb-4" />
                  {renderLinks()}
                </div>
              </SheetContent>
            </Sheet>
          ) : null}
        </div>
      </header>
      
      <div className="flex-1 flex">
        {!isMobile && (
          <aside className="hidden md:flex w-64 flex-col border-r bg-muted/40 pt-6">
            <div className="px-3">{renderLinks()}</div>
          </aside>
        )}
        
        <main className="flex-1 py-6 px-4 md:px-6 overflow-y-auto">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      <footer className="border-t py-4 bg-muted/40">
        <div className="container">
          <div className="text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Технологии физического уровня передачи данных
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;