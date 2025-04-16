import { Waves } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, ArrowRightLeft, GanttChart } from 'lucide-react';

const FiberPage = () => {
  return (
    <div>
      <PageHeader 
        title="Оптоволоконные технологии" 
        description="Передача данных с помощью света по оптическому волокну"
        icon={<Waves className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Оптоволоконный кабель"
          caption="Строение оптоволоконного кабеля с множеством оптических волокон"
        />

        <div className="prose max-w-none">
          <p>
            Оптоволоконные технологии используют свет для передачи информации по тонким волокнам, 
            изготовленным из стекла или пластика. Оптическое волокно является средой передачи данных, 
            которая обеспечивает гораздо более высокую пропускную способность, большие расстояния передачи 
            и лучшую помехозащищенность по сравнению с медными кабелями.
          </p>
          <p>
            Принцип работы оптоволокна основан на явлении полного внутреннего отражения света. 
            Луч света, введенный в сердцевину оптического волокна под определенным углом, многократно 
            отражается от границы между сердцевиной и оболочкой, распространяясь на большие расстояния с 
            минимальными потерями.
          </p>
        </div>
      </div>

      <Tabs defaultValue="types" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="types">Типы оптоволокна</TabsTrigger>
          <TabsTrigger value="technology">Технологии передачи</TabsTrigger>
          <TabsTrigger value="advantages">Преимущества и применение</TabsTrigger>
        </TabsList>
        
        <TabsContent value="types" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Типы оптических волокон</h2>
              <p>
                Существует несколько типов оптических волокон, которые различаются по своей структуре,
                характеристикам и области применения.
              </p>
              
              <h3>По режиму распространения света:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Многомодовое оптоволокно (MMF, Multimode Fiber)</strong> - волокно с большим диаметром 
                  сердцевины (50 или 62,5 мкм), по которому свет распространяется по множеству путей (мод).
                </li>
                <li>
                  <strong>Одномодовое оптоволокно (SMF, Single-mode Fiber)</strong> - волокно с малым диаметром 
                  сердцевины (9-10 мкм), по которому свет распространяется только по одному пути.
                </li>
              </ul>
              
              <h3>По профилю показателя преломления:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Ступенчатый профиль</strong> - резкое изменение показателя преломления между сердцевиной и оболочкой</li>
                <li><strong>Градиентный профиль</strong> - плавное изменение показателя преломления от центра к краю сердцевины</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Сравнение типов оптоволокна"
                caption="Сравнение одномодового и многомодового оптического волокна"
              />
              
              <InfoCard
                title="Характеристики оптоволокна"
                icon={<GanttChart className="h-5 w-5" />}
                className="mt-6"
              >
                <ul className="list-disc pl-6">
                  <li><strong>Затухание</strong> - 0,2-0,4 дБ/км для одномодового, 0,8-3 дБ/км для многомодового</li>
                  <li><strong>Ширина полосы пропускания</strong> - до сотен ГГц для одномодового, до нескольких ГГц для многомодового</li>
                  <li><strong>Длина волны</strong> - обычно 850, 1300, 1550 нм в зависимости от применения</li>
                  <li><strong>Максимальное расстояние</strong> - до 100 км для одномодового, до 2 км для многомодового</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="technology" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Технологии передачи данных</h2>
              <p>
                В оптоволоконных системах используются различные технологии передачи данных,
                позволяющие достичь высоких скоростей и эффективно использовать ширину полосы пропускания.
              </p>
              
              <h3>Основные технологии:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Временное мультиплексирование (TDM, Time Division Multiplexing)</strong> - 
                  разделение канала на временные интервалы
                </li>
                <li>
                  <strong>Спектральное мультиплексирование (WDM, Wavelength Division Multiplexing)</strong> - 
                  передача нескольких сигналов с разной длиной волны по одному волокну
                </li>
                <li>
                  <strong>Плотное спектральное мультиплексирование (DWDM, Dense WDM)</strong> - 
                  улучшенная версия WDM с большим количеством каналов
                </li>
                <li>
                  <strong>Когерентная оптическая передача</strong> - 
                  использует фазовую и амплитудную модуляцию для увеличения емкости
                </li>
              </ul>
              
              <h3>Скорости передачи данных:</h3>
              <ul className="list-disc pl-6">
                <li><strong>SONET/SDH</strong> - от 155 Мбит/с до 40 Гбит/с</li>
                <li><strong>Ethernet по оптоволокну</strong> - 1/10/40/100/400 Гбит/с</li>
                <li><strong>Fibre Channel</strong> - 1/2/4/8/16/32/128 Гбит/с</li>
                <li><strong>Современные системы DWDM</strong> - до 100 Тбит/с по одному волокну</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Спектральное мультиплексирование"
                caption="Принцип работы спектрального мультиплексирования (WDM)"
              />
              
              <InfoCard
                title="Активное оборудование"
                icon={<ArrowRightLeft className="h-5 w-5" />}
                className="mt-6"
              >
                <p>Для работы оптоволоконных сетей используются различные типы оборудования:</p>
                <ul className="list-disc pl-6">
                  <li><strong>Передатчики (лазеры, светодиоды)</strong> - преобразуют электрические сигналы в световые</li>
                  <li><strong>Приемники (фотодиоды)</strong> - преобразуют световые сигналы в электрические</li>
                  <li><strong>Оптические усилители</strong> - усиливают оптический сигнал без преобразования в электрический</li>
                  <li><strong>Мультиплексоры/демультиплексоры</strong> - объединяют/разделяют сигналы разных длин волн</li>
                  <li><strong>Оптические коммутаторы</strong> - переключают оптические сигналы между различными путями</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advantages" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Преимущества оптоволокна</h2>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Высокая пропускная способность</strong> - до сотен терабит в секунду</li>
                <li><strong>Низкое затухание сигнала</strong> - возможность передачи на большие расстояния</li>
                <li><strong>Отсутствие электромагнитных помех</strong> - не создает и не подвержено ЭМП</li>
                <li><strong>Высокая безопасность</strong> - практически невозможно незаметно подключиться к линии</li>
                <li><strong>Малый вес и размер</strong> - по сравнению с медными кабелями аналогичной пропускной способности</li>
                <li><strong>Долговечность</strong> - срок службы до 25-30 лет</li>
                <li><strong>Устойчивость к агрессивным средам</strong> - не подвержен коррозии</li>
              </ul>
              
              <h3>Ограничения:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Сложность монтажа</strong> - требует специального оборудования и квалифицированного персонала</li>
                <li><strong>Хрупкость</strong> - волокно может быть повреждено при изгибе с малым радиусом</li>
                <li><strong>Высокая стоимость оборудования</strong> - по сравнению с медными системами</li>
              </ul>
            </div>
            
            <div>
              <h3>Области применения:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Телекоммуникации</strong> - магистральные линии связи, городские сети, последняя миля (FTTH)</li>
                <li><strong>Центры обработки данных</strong> - соединения между серверами и коммутаторами</li>
                <li><strong>Кабельное телевидение</strong> - распределение ТВ-сигнала</li>
                <li><strong>Промышленность</strong> - сети на производствах с высоким уровнем электромагнитных помех</li>
                <li><strong>Медицина</strong> - эндоскопы и другие оптические инструменты</li>
                <li><strong>Системы безопасности</strong> - датчики и системы видеонаблюдения</li>
              </ul>
              
              <InfoCard
                title="Перспективы развития"
                icon={<Lightbulb className="h-5 w-5" />}
              >
                <p>
                  Современные исследования направлены на дальнейшее увеличение пропускной способности и
                  эффективности оптоволоконных систем:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Многосердцевинное оптоволокно</strong> - несколько сердцевин в одном волокне</li>
                  <li><strong>Многомодовое мультиплексирование (MDM)</strong> - использование различных мод для передачи</li>
                  <li><strong>Фотонные интегральные схемы</strong> - интеграция оптических компонентов на чипе</li>
                  <li><strong>Квантовые коммуникации</strong> - передача квантовых состояний для защищенной связи</li>
                </ul>
              </InfoCard>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Применение оптоволокна"
                caption="Схема использования оптоволокна в телекоммуникационных сетях"
                className="mt-6"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FiberPage;