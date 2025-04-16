import { BookText } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';

interface GlossaryItem {
  term: string;
  definition: string;
  category: string;
}

const GlossaryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const glossaryItems: GlossaryItem[] = [
    {
      term: 'Физический уровень',
      definition: 'Первый уровень модели OSI, отвечающий за физическую передачу битов данных по среде передачи. Определяет электрические, механические, процедурные и функциональные характеристики активации, поддержания и деактивации физического канала.',
      category: 'Основные понятия'
    },
    {
      term: 'Битовая скорость',
      definition: 'Количество битов, передаваемых за единицу времени. Измеряется в битах в секунду (бит/с, bps) и кратных единицах (Кбит/с, Мбит/с, Гбит/с).',
      category: 'Основные понятия'
    },
    {
      term: 'Пропускная способность',
      definition: 'Максимальное количество информации, которое может быть передано по каналу связи за единицу времени. Зависит от полосы пропускания и отношения сигнал/шум.',
      category: 'Основные понятия'
    },
    {
      term: 'Полоса пропускания',
      definition: 'Диапазон частот, в котором сигнал передается с минимальным затуханием. Измеряется в герцах (Гц) и кратных единицах (кГц, МГц, ГГц).',
      category: 'Основные понятия'
    },
    {
      term: 'Затухание',
      definition: 'Уменьшение амплитуды сигнала при передаче по среде. Измеряется в децибелах (дБ). Увеличивается с расстоянием и частотой сигнала.',
      category: 'Основные понятия'
    },
    {
      term: 'Модуляция',
      definition: 'Процесс изменения параметров несущего сигнала в соответствии с передаваемой информацией. Основные виды: амплитудная (AM), частотная (FM), фазовая (PM).',
      category: 'Модуляция и кодирование'
    },
    {
      term: 'Демодуляция',
      definition: 'Процесс извлечения исходной информации из модулированного сигнала. Осуществляется приемником на физическом уровне.',
      category: 'Модуляция и кодирование'
    },
    {
      term: 'QAM (Quadrature Amplitude Modulation)',
      definition: 'Квадратурная амплитудная модуляция - метод цифровой модуляции, сочетающий амплитудную и фазовую модуляцию. Позволяет передавать несколько бит на один символ.',
      category: 'Модуляция и кодирование'
    },
    {
      term: 'OFDM (Orthogonal Frequency Division Multiplexing)',
      definition: 'Ортогональное частотное мультиплексирование - метод цифровой модуляции, использующий множество ортогональных поднесущих. Используется в Wi-Fi, LTE, DVB.',
      category: 'Модуляция и кодирование'
    },
    {
      term: 'Линейное кодирование',
      definition: 'Метод представления цифровых данных в виде сигналов для передачи по физическому каналу связи. Примеры: NRZ, Manchester, AMI, MLT-3.',
      category: 'Модуляция и кодирование'
    },
    {
      term: 'Витая пара',
      definition: 'Тип кабеля, состоящий из одной или нескольких пар изолированных проводников, скрученных между собой. Используется для уменьшения перекрестных помех и внешних электромагнитных воздействий.',
      category: 'Проводные среды'
    },
    {
      term: 'Коаксиальный кабель',
      definition: 'Тип электрического кабеля, состоящий из центрального проводника, диэлектрика, окружающего его экрана (оплетки) и внешней изоляции. Обеспечивает хорошую защиту от помех.',
      category: 'Проводные среды'
    },
    {
      term: 'Оптическое волокно',
      definition: 'Тонкая гибкая нить из оптически прозрачного материала (стекла или пластика), используемая для передачи света. Состоит из сердцевины и оболочки с разными показателями преломления.',
      category: 'Проводные среды'
    },
    {
      term: 'Одномодовое волокно',
      definition: 'Тип оптического волокна с малым диаметром сердцевины (8-10 мкм), по которому свет распространяется только по одному пути (моде). Используется для передачи на большие расстояния.',
      category: 'Проводные среды'
    },
    {
      term: 'Многомодовое волокно',
      definition: 'Тип оптического волокна с большим диаметром сердцевины (50-62.5 мкм), по которому свет распространяется по множеству путей (мод). Используется для передачи на короткие расстояния.',
      category: 'Проводные среды'
    },
    {
      term: 'Wi-Fi (IEEE 802.11)',
      definition: 'Семейство стандартов беспроводной передачи данных для локальных сетей. Включает различные версии: 802.11a/b/g/n/ac/ax/be и др. Работает в диапазонах 2.4, 5 и 6 ГГц.',
      category: 'Беспроводные технологии'
    },
    {
      term: 'Bluetooth',
      definition: 'Технология беспроводной передачи данных на малые расстояния между устройствами. Работает в диапазоне 2.4 ГГц, поддерживает различные профили и режимы работы.',
      category: 'Беспроводные технологии'
    },
    {
      term: '5G',
      definition: 'Пятое поколение мобильной связи, обеспечивающее высокую скорость передачи данных, низкую задержку и массовое подключение устройств. Работает в диапазонах sub-6 ГГц и mmWave.',
      category: 'Беспроводные технологии'
    },
    {
      term: 'LoRa',
      definition: 'Технология беспроводной передачи данных на большие расстояния с низким энергопотреблением. Использует линейно-частотную модуляцию (CSS) в нелицензируемых диапазонах.',
      category: 'Беспроводные технологии'
    },
    {
      term: 'MIMO (Multiple Input Multiple Output)',
      definition: 'Технология использования нескольких антенн для передачи и приема, позволяющая увеличить пропускную способность и надежность беспроводных систем связи.',
      category: 'Беспроводные технологии'
    },
    {
      term: 'Ethernet',
      definition: 'Семейство технологий для компьютерных сетей, определяющее проводные соединения и сигналы на физическом уровне, а также формат кадров и протоколы на канальном уровне.',
      category: 'Сетевые технологии'
    },
    {
      term: 'PON (Passive Optical Network)',
      definition: 'Пассивная оптическая сеть, использующая древовидную топологию с пассивными оптическими сплиттерами для распределения сигнала к множеству пользователей.',
      category: 'Сетевые технологии'
    },
    {
      term: 'SONET/SDH',
      definition: 'Synchronous Optical Network / Synchronous Digital Hierarchy - стандарты для высокоскоростной передачи данных по оптоволокну. Используются в магистральных сетях операторов связи.',
      category: 'Сетевые технологии'
    },
    {
      term: 'WDM (Wavelength Division Multiplexing)',
      definition: 'Мультиплексирование с разделением по длине волны - технология, позволяющая передавать несколько оптических сигналов с разными длинами волн по одному волокну.',
      category: 'Сетевые технологии'
    },
    {
      term: 'USB (Universal Serial Bus)',
      definition: 'Последовательный интерфейс для подключения периферийных устройств к компьютеру. Имеет различные версии (1.0, 2.0, 3.0, 3.1, 3.2, 4) с разными скоростями передачи данных.',
      category: 'Сетевые технологии'
    },
    {
      term: 'PCIe (Peripheral Component Interconnect Express)',
      definition: 'Высокоскоростная последовательная шина для подключения компонентов внутри компьютера. Имеет несколько версий (1.0-6.0) и разное количество линий (x1, x4, x8, x16).',
      category: 'Сетевые технологии'
    },
    {
      term: 'FEC (Forward Error Correction)',
      definition: 'Упреждающая коррекция ошибок - метод обнаружения и исправления ошибок при передаче данных без повторной передачи. Основан на добавлении избыточной информации.',
      category: 'Обработка ошибок'
    },
    {
      term: 'CRC (Cyclic Redundancy Check)',
      definition: 'Циклический избыточный код - алгоритм вычисления контрольной суммы для обнаружения ошибок в переданных данных. Основан на полиномиальном делении.',
      category: 'Обработка ошибок'
    },
    {
      term: 'Код Хэмминга',
      definition: 'Линейный блочный код, способный исправлять одиночные ошибки и обнаруживать двойные ошибки. Добавляет проверочные биты к данным.',
      category: 'Обработка ошибок'
    },
    {
      term: 'Рид-Соломон (Reed-Solomon)',
      definition: 'Класс кодов с исправлением ошибок, эффективно обнаруживающих и исправляющих пакетные ошибки. Используются в оптических дисках, цифровом ТВ, хранении данных.',
      category: 'Обработка ошибок'
    }
  ];
  
  const filteredItems = searchQuery
    ? glossaryItems.filter(item => 
        item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.definition.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : glossaryItems;
  
  // Группировка терминов по категориям
  const groupedItems: Record<string, GlossaryItem[]> = {};
  
  filteredItems.forEach(item => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });
  
  return (
    <div>
      <PageHeader 
        title="Справочник терминов" 
        description="Основные термины и определения в области технологий физического уровня передачи данных"
        icon={<BookText className="h-6 w-6" />}
      />
      
      <div className="mb-6">
        <Input
          type="search"
          placeholder="Поиск терминов..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
      </div>
      
      {Object.keys(groupedItems).length === 0 ? (
        <p className="text-muted-foreground">По вашему запросу ничего не найдено</p>
      ) : (
        <ScrollArea className="h-[600px] rounded-md border p-4">
          <Accordion type="multiple" className="w-full">
            {Object.entries(groupedItems).map(([category, items]) => (
              <AccordionItem key={category} value={category}>
                <AccordionTrigger className="text-heading">{category}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-bold mb-2">{item.term}</h3>
                        <p>{item.definition}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      )}
    </div>
  );
};

export default GlossaryPage;