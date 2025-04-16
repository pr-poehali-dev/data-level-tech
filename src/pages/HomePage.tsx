import { Link } from 'react-router-dom';
import { Home, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import { Button } from '@/components/ui/button';
import InfoCard from '@/components/ui/InfoCard';
import { Zap, Waves, Radio, Network } from 'lucide-react';
import ImageCard from '@/components/ui/ImageCard';

const HomePage = () => {
  return (
    <div>
      <PageHeader 
        title="Технологии физического уровня передачи данных" 
        description="Добро пожаловать на образовательный портал, посвященный технологиям физического уровня передачи данных"
        icon={<Home className="h-6 w-6" />}
      />
      
      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Технологии передачи данных"
          caption="Физический уровень является первым уровнем модели OSI"
          className="md:col-span-2"
        />
        
        <div className="prose max-w-none">
          <p>
            Физический уровень (Physical Layer) — первый уровень сетевой модели OSI, отвечающий за физическую передачу битов 
            по каналу связи. На этом уровне определяются электрические, механические, процедурные и функциональные 
            спецификации для активации, поддержания и деактивации физического соединения между системами.
          </p>
          <p>
            На нашем портале вы найдете подробную информацию о различных технологиях физического уровня, включая:
          </p>
          <ul>
            <li>Проводные технологии передачи данных</li>
            <li>Оптоволоконные технологии</li>
            <li>Беспроводные технологии передачи данных</li>
            <li>Методы модуляции и кодирования сигналов</li>
            <li>Протоколы физического уровня</li>
          </ul>
        </div>
        
        <div className="grid gap-4 content-start">
          <InfoCard
            title="Изучайте физический уровень"
            description="Базовые концепции и технологии"
            icon={<Zap className="h-5 w-5" />}
          >
            <p>На нашем портале вы найдете подробные материалы по всем аспектам физического уровня сетевой модели OSI.</p>
            <Button asChild className="mt-2">
              <Link to="/glossary">Открыть справочник <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </InfoCard>
          
          <div className="grid grid-cols-2 gap-4">
            <InfoCard
              title="Проверьте знания"
              icon={<Network className="h-5 w-5" />}
            >
              <Button asChild variant="outline" className="w-full">
                <Link to="/quiz">Пройти тест</Link>
              </Button>
            </InfoCard>
            
            <InfoCard
              title="Технологии"
              icon={<Waves className="h-5 w-5" />}
            >
              <Button asChild variant="outline" className="w-full">
                <Link to="/technologies">Изучить</Link>
              </Button>
            </InfoCard>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <InfoCard
          title="Медные кабели"
          icon={<Zap className="h-5 w-5" />}
        >
          <p>Изучите технологии передачи данных по медным проводникам, включая витую пару и коаксиальный кабель.</p>
          <Button asChild variant="outline" className="mt-2 w-full">
            <Link to="/copper">Подробнее</Link>
          </Button>
        </InfoCard>
        
        <InfoCard
          title="Оптоволокно"
          icon={<Waves className="h-5 w-5" />}
        >
          <p>Познакомьтесь с принципами передачи данных по оптическому волокну и современными оптическими технологиями.</p>
          <Button asChild variant="outline" className="mt-2 w-full">
            <Link to="/fiber">Подробнее</Link>
          </Button>
        </InfoCard>
        
        <InfoCard
          title="Беспроводные технологии"
          icon={<Radio className="h-5 w-5" />}
        >
          <p>Изучите принципы беспроводной передачи данных, технологии Wi-Fi, Bluetooth, 5G и другие.</p>
          <Button asChild variant="outline" className="mt-2 w-full">
            <Link to="/wireless">Подробнее</Link>
          </Button>
        </InfoCard>
      </div>
    </div>
  );
};

export default HomePage;