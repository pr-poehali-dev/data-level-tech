import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Home, Zap, Cpu, Radio, Waves, Network, FileCog, GitCompare, BookText, BrainCircuit, ListChecks } from 'lucide-react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', label: 'Главная', icon: <Home className="h-5 w-5" /> },
    { path: '/copper', label: 'Медные кабели', icon: <Zap className="h-5 w-5" /> },
    { path: '/fiber', label: 'Оптоволокно', icon: <Waves className="h-5 w-5" /> },
    { path: '/wireless', label: 'Беспроводные технологии', icon: <Radio className="h-5 w-5" /> },
    { path: '/modulation', label: 'Методы модуляции', icon: <Cpu className="h-5 w-5" /> },
    { path: '/ethernet', label: 'Технологии Ethernet', icon: <Network className="h-5 w-5" /> },
    { path: '/protocols', label: 'Протоколы физического уровня', icon: <FileCog className="h-5 w-5" /> },
    { path: '/encoding', label: 'Кодирование данных', icon: <GitCompare className="h-5 w-5" /> },
    { path: '/technologies', label: 'Современные технологии', icon: <BrainCircuit className="h-5 w-5" /> },
    { path: '/glossary', label: 'Справочник терминов', icon: <BookText className="h-5 w-5" /> },
    { path: '/quiz', label: 'Тест по технологиям', icon: <ListChecks className="h-5 w-5" /> },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden lg:block w-64 border-r">
        <div className="py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-sidebar-foreground">
              Навигация
            </h2>
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                  asChild
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Sidebar>
      <div className="flex-1 overflow-auto">
        <header className="border-b bg-card px-4 py-3 lg:hidden flex items-center justify-between">
          <h1 className="text-lg font-bold">Технологии физического уровня передачи данных</h1>
        </header>
        <main className="container py-6 px-4">
          {children}
        </main>
        <footer className="border-t bg-muted px-4 py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Технологии физического уровня передачи данных</p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;