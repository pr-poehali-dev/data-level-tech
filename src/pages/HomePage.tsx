import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ImageCard from '@/components/ui/ImageCard';
import { 
  Cable, 
  Waves, 
  Rss, 
  Zap,
  BookOpen, 
  GitCompare, 
  BrainCircuit, 
  ListChecks, 
  BookText, 
  Globe 
} from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      <PageHeader 
        title="Технологии физического уровня передачи данных" 
        description="Изучение фундаментальных принципов и современных технологий передачи информации"
        icon={<Home className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Физический уровень передачи данных"
          caption="Многообразие технологий физического уровня передачи данных"
        />

        <div className="prose max-w-none">
          <p>
            Физический уровень является первым и самым нижним уровнем модели OSI, представляя собой фундамент
            для всех сетевых коммуникаций. Именно на этом уровне происходит преобразование цифровых данных
            в сигналы, которые могут быть переданы по физическим средам связи.
          </p>
          <p>
            Наш сайт посвящен всестороннему изучению технологий, используемых на физическом уровне, 
            от классических проводных сред до современных беспроводных технологий и перспективных 
            квантовых коммуникаций. Здесь вы найдете информацию о принципах передачи данных, методах 
            кодирования и модуляции, современных стандартах и будущих направлениях развития.
          </p>
          <p>
            Независимо от того, являетесь ли вы студентом, инженером или просто интересуетесь 
            технологиями связи, этот ресурс поможет вам углубить понимание того, как работает 
            передача данных на самом базовом уровне.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold tracking-tight mb-6">Разделы сайта</h2>
      
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Cable className="h-5 w-5 text-primary" />
              Медные технологии
            </CardTitle>
            <CardDescription>Передача данных по медным кабелям</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Технологии передачи данных по медным проводникам: витая пара, коаксиальный кабель, DSL и другие.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/copper">Подробнее</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              Оптоволоконные технологии
            </CardTitle>
            <CardDescription>Передача данных по оптическим волокнам</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Принципы и технологии передачи данных по оптическим волокнам, типы волокон, WDM и другие методы.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/fiber">Подробнее</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Rss className="h-5 w-5 text-primary" />
              Беспроводные технологии
            </CardTitle>
            <CardDescription>Передача данных в беспроводных сетях</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Wi-Fi, сотовая связь, спутниковая связь и другие беспроводные технологии передачи данных.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/wireless">Подробнее</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Модуляция
            </CardTitle>
            <CardDescription>Методы модуляции сигналов</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Амплитудная, частотная и фазовая модуляция, OFDM, QAM и другие методы модуляции сигналов.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/modulation">Подробнее</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <GitCompare className="h-5 w-5 text-primary" />
              Кодирование данных
            </CardTitle>
            <CardDescription>Методы кодирования на физическом уровне</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Линейное кодирование, блочное кодирование, обнаружение и исправление ошибок при передаче.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/encoding">Подробнее</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Сетевые протоколы
            </CardTitle>
            <CardDescription>Протоколы физического уровня</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Ethernet, SONET/SDH, USB, PCIe и другие протоколы, действующие на физическом уровне.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/protocols">Подробнее</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BrainCircuit className="h-5 w-5 text-primary" />
              Современные технологии
            </CardTitle>
            <CardDescription>Новейшие разработки</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Последние достижения и перспективные направления развития технологий физического уровня.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/technologies">Подробнее</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-primary" />
              Тестирование знаний
            </CardTitle>
            <CardDescription>Проверьте свои знания</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Тесты для проверки знаний о технологиях физического уровня передачи данных.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/quiz">Пройти тест</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <BookText className="h-5 w-5 text-primary" />
              Справочник терминов
            </CardTitle>
            <CardDescription>Глоссарий специальных терминов</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Справочник терминов и понятий, используемых в технологиях физического уровня.</p>
            <Button asChild variant="outline" size="sm">
              <Link to="/glossary">Открыть справочник</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;