import { Zap } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, Cable, Shield } from 'lucide-react';

const CopperPage = () => {
  return (
    <div>
      <PageHeader 
        title="Медные кабели" 
        description="Технологии передачи данных по медным проводникам"
        icon={<Zap className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Медные кабели"
          caption="Различные типы медных кабелей для передачи данных"
        />

        <div className="prose max-w-none">
          <p>
            Медные кабели являются одним из основных типов сред передачи данных на физическом уровне.
            Они используют медные проводники для передачи электрических сигналов между устройствами.
            Несмотря на развитие беспроводных и оптических технологий, медные кабели остаются
            востребованными благодаря их относительно низкой стоимости и простоте использования.
          </p>
          <p>
            Существует несколько основных типов медных кабелей, каждый из которых имеет свои
            особенности, преимущества и ограничения. Рассмотрим основные из них подробнее.
          </p>
        </div>
      </div>

      <Tabs defaultValue="twisted-pair" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="twisted-pair">Витая пара</TabsTrigger>
          <TabsTrigger value="coaxial">Коаксиальный кабель</TabsTrigger>
          <TabsTrigger value="standards">Стандарты</TabsTrigger>
        </TabsList>
        
        <TabsContent value="twisted-pair" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Витая пара (Twisted Pair)</h2>
              <p>
                Витая пара состоит из двух изолированных медных проводников, которые скручены между собой.
                Скручивание проводников помогает уменьшить электромагнитные помехи от внешних источников
                и перекрестные помехи между соседними парами проводов.
              </p>
              
              <h3>Типы витой пары:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>UTP (Unshielded Twisted Pair)</strong> - неэкранированная витая пара</li>
                <li><strong>STP (Shielded Twisted Pair)</strong> - экранированная витая пара</li>
                <li><strong>FTP (Foiled Twisted Pair)</strong> - фольгированная витая пара</li>
              </ul>
              
              <h3>Категории витой пары:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Cat 5</strong> - до 100 Мбит/с, до 100 МГц</li>
                <li><strong>Cat 5e</strong> - до 1 Гбит/с, до 100 МГц</li>
                <li><strong>Cat 6</strong> - до 10 Гбит/с на коротких расстояниях, до 250 МГц</li>
                <li><strong>Cat 6a</strong> - до 10 Гбит/с, до 500 МГц</li>
                <li><strong>Cat 7</strong> - до 10 Гбит/с, до 600 МГц</li>
                <li><strong>Cat 8</strong> - до 40 Гбит/с, до 2000 МГц</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Структура витой пары"
                caption="Структура кабеля витой пары с разными типами экранирования"
              />
              
              <InfoCard
                title="Преимущества витой пары"
                icon={<Lightbulb className="h-5 w-5" />}
                className="mt-6"
              >
                <ul className="list-disc pl-6">
                  <li>Низкая стоимость</li>
                  <li>Простота монтажа и обслуживания</li>
                  <li>Широкое распространение</li>
                  <li>Различные категории для разных требований</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="coaxial" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Коаксиальный кабель (Coaxial Cable)</h2>
              <p>
                Коаксиальный кабель состоит из центрального медного проводника, окруженного
                диэлектриком, который, в свою очередь, покрыт металлической оплеткой (экраном)
                и внешней защитной оболочкой. Такая конструкция обеспечивает хорошую защиту от
                электромагнитных помех.
              </p>
              
              <h3>Типы коаксиальных кабелей:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Тонкий коаксиал (Thin Ethernet, 10Base2)</strong> - используется для сетей Ethernet</li>
                <li><strong>Толстый коаксиал (Thick Ethernet, 10Base5)</strong> - использовался в ранних сетях Ethernet</li>
                <li><strong>RG-6</strong> - используется для кабельного телевидения и спутникового ТВ</li>
                <li><strong>RG-59</strong> - применяется для аналогового видео и CATV</li>
              </ul>
              
              <h3>Характеристики:</h3>
              <ul className="list-disc pl-6">
                <li>Волновое сопротивление: обычно 50 или 75 Ом</li>
                <li>Максимальная длина сегмента: до 500 метров (для 10Base5)</li>
                <li>Скорость передачи: до 10 Мбит/с (в сетях Ethernet)</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Структура коаксиального кабеля"
                caption="Структура коаксиального кабеля с центральным проводником и экраном"
              />
              
              <InfoCard
                title="Особенности коаксиального кабеля"
                icon={<Cable className="h-5 w-5" />}
                className="mt-6"
              >
                <ul className="list-disc pl-6">
                  <li>Хорошая защита от электромагнитных помех</li>
                  <li>Высокая пропускная способность</li>
                  <li>Большая максимальная длина сегмента</li>
                  <li>Сложнее в монтаже по сравнению с витой парой</li>
                  <li>Использование BNC-коннекторов</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="standards" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Стандарты и спецификации</h2>
              <p>
                Для обеспечения совместимости оборудования и кабельных систем существуют
                различные стандарты, определяющие характеристики медных кабелей и правила их использования.
              </p>
              
              <h3>Основные стандарты:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>TIA/EIA-568</strong> - стандарт телекоммуникационной кабельной инфраструктуры</li>
                <li><strong>ISO/IEC 11801</strong> - международный стандарт для структурированных кабельных систем</li>
                <li><strong>IEEE 802.3</strong> - стандарты Ethernet, определяющие требования к кабелям</li>
              </ul>
              
              <h3>Основные параметры медных кабелей:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Затухание (Attenuation)</strong> - снижение уровня сигнала при передаче</li>
                <li><strong>Перекрестные помехи (Crosstalk)</strong> - взаимное влияние сигналов в соседних проводниках</li>
                <li><strong>Задержка распространения (Propagation Delay)</strong> - время распространения сигнала</li>
                <li><strong>Импеданс (Impedance)</strong> - полное сопротивление кабеля</li>
                <li><strong>Возвратные потери (Return Loss)</strong> - отражение сигнала из-за несогласованности импеданса</li>
              </ul>
            </div>
            
            <div>
              <InfoCard
                title="Современные тенденции"
                icon={<Shield className="h-5 w-5" />}
              >
                <p>
                  Современные разработки в области медных кабелей направлены на увеличение
                  пропускной способности и улучшение защиты от помех:
                </p>
                <ul className="list-disc pl-6">
                  <li>Увеличение частоты передачи сигналов</li>
                  <li>Улучшение экранирования</li>
                  <li>Повышение качества материалов</li>
                  <li>Развитие технологий компенсации помех</li>
                </ul>
              </InfoCard>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Сравнение кабелей"
                caption="Сравнение характеристик различных типов медных кабелей"
                className="mt-6"
              />
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="mb-2">Важно знать:</h3>
                <p>
                  При выборе медного кабеля необходимо учитывать не только требуемую скорость
                  передачи данных, но и условия эксплуатации, длину трассы, уровень внешних
                  электромагнитных помех и совместимость с сетевым оборудованием.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CopperPage;