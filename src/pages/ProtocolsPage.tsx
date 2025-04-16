import { Globe } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Router, Laptop, Cpu } from 'lucide-react';

const ProtocolsPage = () => {
  return (
    <div>
      <PageHeader 
        title="Сетевые протоколы" 
        description="Протоколы физического уровня передачи данных"
        icon={<Globe className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Сетевые протоколы"
          caption="Разнообразие протоколов физического уровня в современных сетях"
        />

        <div className="prose max-w-none">
          <p>
            Протоколы физического уровня определяют правила и стандарты для преобразования битов данных
            в физические сигналы, которые могут передаваться по среде связи. Они описывают
            электрические, оптические, электромагнитные и механические характеристики интерфейсов
            и сред передачи.
          </p>
          <p>
            На физическом уровне протоколы определяют такие аспекты, как уровни напряжения или мощности сигналов,
            частоты, типы модуляции, методы кодирования, структуру и назначение контактов разъемов,
            способы синхронизации устройств и другие низкоуровневые параметры.
          </p>
          <p>
            В этом разделе мы рассмотрим различные протоколы, используемые на физическом уровне
            в локальных и глобальных сетях, а также в интерфейсах периферийных устройств.
          </p>
        </div>
      </div>

      <Tabs defaultValue="lan" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="lan">Локальные сети</TabsTrigger>
          <TabsTrigger value="wan">Глобальные сети</TabsTrigger>
          <TabsTrigger value="interface">Интерфейсы устройств</TabsTrigger>
        </TabsList>
        
        <TabsContent value="lan" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Протоколы локальных сетей</h2>
              <p>
                Протоколы физического уровня локальных сетей (LAN) обеспечивают передачу
                данных на короткие расстояния внутри ограниченной территории, например, 
                в пределах офиса, здания или кампуса.
              </p>
              
              <h3>Ethernet (IEEE 802.3):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>10BASE-T (10 Мбит/с)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует витую пару категории 3 или выше</li>
                    <li>Манчестерское кодирование</li>
                    <li>Максимальная длина сегмента 100 метров</li>
                  </ul>
                </li>
                <li><strong>100BASE-TX (Fast Ethernet, 100 Мбит/с)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Витая пара категории 5 или выше</li>
                    <li>Кодирование 4B/5B + MLT-3</li>
                    <li>Максимальная длина сегмента 100 метров</li>
                  </ul>
                </li>
                <li><strong>1000BASE-T (Gigabit Ethernet, 1 Гбит/с)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Витая пара категории 5e или выше</li>
                    <li>Модуляция PAM-5 по 4 парам</li>
                    <li>Максимальная длина сегмента 100 метров</li>
                  </ul>
                </li>
                <li><strong>10GBASE-T (10 Gigabit Ethernet, 10 Гбит/с)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Витая пара категории 6a или 7</li>
                    <li>Модуляция DSQ128</li>
                    <li>Максимальная длина сегмента 100 метров</li>
                  </ul>
                </li>
                <li><strong>Оптические версии Ethernet</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>1000BASE-SX (многомодовое волокно, до 550 м)</li>
                    <li>1000BASE-LX (одномодовое волокно, до 5 км)</li>
                    <li>10GBASE-SR, 10GBASE-LR, 10GBASE-ER</li>
                    <li>40GBASE-SR4, 40GBASE-LR4</li>
                    <li>100GBASE-SR10, 100GBASE-LR4, 100GBASE-ER4</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Другие протоколы LAN:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Token Ring (IEEE 802.5)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использовал дифференциальное манчестерское кодирование</li>
                    <li>Скорости 4 и 16 Мбит/с</li>
                    <li>Гарантированный доступ к среде через передачу маркера</li>
                    <li>В настоящее время вытеснен Ethernet</li>
                  </ul>
                </li>
                <li><strong>FDDI (Fiber Distributed Data Interface)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Двойное кольцо из оптического волокна</li>
                    <li>Скорость 100 Мбит/с</li>
                    <li>Кодирование 4B/5B + NRZI</li>
                    <li>Максимальная длина кольца 100 км</li>
                    <li>Исторически использовался для магистральных сетей</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Беспроводные протоколы LAN:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Wi-Fi (IEEE 802.11)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>802.11a (5 ГГц, до 54 Мбит/с, OFDM)</li>
                    <li>802.11b (2.4 ГГц, до 11 Мбит/с, DSSS)</li>
                    <li>802.11g (2.4 ГГц, до 54 Мбит/с, OFDM)</li>
                    <li>802.11n (2.4/5 ГГц, до 600 Мбит/с, MIMO, OFDM)</li>
                    <li>802.11ac (5 ГГц, до 6.9 Гбит/с, MU-MIMO, 256-QAM)</li>
                    <li>802.11ax (2.4/5/6 ГГц, до 9.6 Гбит/с, OFDMA, 1024-QAM)</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Промышленные протоколы:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>CAN (Controller Area Network)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует дифференциальную передачу по витой паре</li>
                    <li>Скорости от 125 Кбит/с до 1 Мбит/с</li>
                    <li>Применяется в автомобилях, промышленной автоматизации</li>
                    <li>Высокая помехоустойчивость и надежность</li>
                  </ul>
                </li>
                <li><strong>Profibus</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует стандарт RS-485 для физического уровня</li>
                    <li>Скорости до 12 Мбит/с</li>
                    <li>Максимальная длина сегмента зависит от скорости</li>
                    <li>Широко применяется в промышленной автоматизации</li>
                  </ul>
                </li>
                <li><strong>Modbus</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Может использовать RS-232, RS-485 или Ethernet для физического уровня</li>
                    <li>Простой протокол для систем автоматизации</li>
                    <li>Получил широкое распространение благодаря открытости</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Ethernet"
                caption="Эволюция стандартов Ethernet: от 10 Мбит/с до 400 Гбит/с"
              />
              
              <InfoCard
                title="Power over Ethernet (PoE)"
                icon={<Router className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Технология Power over Ethernet (PoE) позволяет передавать электропитание вместе с данными
                  по стандартному кабелю Ethernet:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>IEEE 802.3af (PoE)</strong> - до 15.4 Вт на порт</li>
                  <li><strong>IEEE 802.3at (PoE+)</strong> - до 30 Вт на порт</li>
                  <li><strong>IEEE 802.3bt (PoE++)</strong>:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Type 3 - до 60 Вт на порт</li>
                      <li>Type 4 - до 100 Вт на порт</li>
                    </ul>
                  </li>
                  <li><strong>Применение</strong>: IP-телефоны, камеры наблюдения, точки доступа Wi-Fi, освещение, терминалы доступа</li>
                </ul>
                <p className="mt-2">
                  PoE значительно упрощает развертывание сетевых устройств, сокращая количество кабелей
                  и необходимость в розетках питания.
                </p>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="wan" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Протоколы глобальных сетей</h2>
              <p>
                Протоколы физического уровня глобальных сетей (WAN) обеспечивают передачу
                данных на большие расстояния, часто через инфраструктуру телекоммуникационных операторов.
              </p>
              
              <h3>Оптические транспортные протоколы:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>SONET/SDH</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Synchronous Optical Network / Synchronous Digital Hierarchy</li>
                    <li>Иерархия синхронных цифровых каналов</li>
                    <li>Базовая скорость OC-1/STM-1: 51.84 Мбит/с / 155.52 Мбит/с</li>
                    <li>Дальнейшие уровни: OC-3/STM-1 (155.52 Мбит/с), OC-12/STM-4 (622.08 Мбит/с), 
                      OC-48/STM-16 (2.488 Гбит/с), OC-192/STM-64 (9.953 Гбит/с), OC-768/STM-256 (39.813 Гбит/с)</li>
                    <li>Строгая синхронизация, возможность резервирования (кольцевая топология)</li>
                  </ul>
                </li>
                <li><strong>OTN (Optical Transport Network)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Стандарт ITU-T G.709</li>
                    <li>Обеспечивает транспорт различных клиентских сервисов (Ethernet, SONET/SDH, Fibre Channel)</li>
                    <li>Улучшенные механизмы управления, мониторинга и коррекции ошибок</li>
                    <li>Скорости: OTU1 (2.7 Гбит/с), OTU2 (10.7 Гбит/с), OTU3 (43 Гбит/с), OTU4 (112 Гбит/с)</li>
                  </ul>
                </li>
                <li><strong>DWDM (Dense Wavelength Division Multiplexing)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Мультиплексирование по длине волны с плотным расположением каналов</li>
                    <li>Стандартная сетка частот ITU: 100 ГГц, 50 ГГц, 25 ГГц, 12.5 ГГц</li>
                    <li>Типично 40, 80 или 96 длин волн в С-диапазоне (1530-1565 нм)</li>
                    <li>Позволяет передавать сотни Тбит/с по одному волокну</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Протоколы цифровых выделенных линий:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>T1/E1</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>T1 (США): 1.544 Мбит/с, 24 канала по 64 Кбит/с</li>
                    <li>E1 (Европа): 2.048 Мбит/с, 32 канала по 64 Кбит/с</li>
                    <li>Линейное кодирование: AMI, B8ZS (для T1), HDB3 (для E1)</li>
                    <li>Часто используются для подключения филиалов к корпоративной сети</li>
                  </ul>
                </li>
                <li><strong>T3/E3</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>T3 (США): 44.736 Мбит/с, эквивалент 28 T1</li>
                    <li>E3 (Европа): 34.368 Мбит/с, эквивалент 16 E1</li>
                    <li>Используются для магистральных соединений и крупных предприятий</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Технологии доступа:</h3>
              <ul className="list-disc pl-6">
                <li><strong>xDSL (Digital Subscriber Line)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>ADSL: асимметричная передача, до 24 Мбит/с вниз, до 3.3 Мбит/с вверх</li>
                    <li>VDSL2: до 100 Мбит/с в обоих направлениях на коротких расстояниях</li>
                    <li>G.fast: до 1 Гбит/с на очень коротких расстояниях (до 250 м)</li>
                    <li>Использует модуляцию DMT (Discrete Multitone) по существующим телефонным линиям</li>
                  </ul>
                </li>
                <li><strong>PON (Passive Optical Network)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>GPON: до 2.5 Гбит/с вниз, до 1.25 Гбит/с вверх</li>
                    <li>XG-PON: до 10 Гбит/с вниз, до 2.5 Гбит/с вверх</li>
                    <li>XGS-PON: до 10 Гбит/с в обоих направлениях</li>
                    <li>NG-PON2: до 40 Гбит/с с использованием TWDM</li>
                    <li>Использует пассивные оптические сплиттеры для разделения сигнала</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Протоколы для мобильных сетей:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>5G NR (New Radio)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Диапазоны FR1 (< 6 ГГц) и FR2 (mmWave, 24-52 ГГц)</li>
                    <li>Модуляция CP-OFDM с гибкой нумерологией</li>
                    <li>Интервалы между поднесущими: 15, 30, 60, 120 кГц</li>
                    <li>Модуляция до 256-QAM (FR1) и 64-QAM (FR2)</li>
                    <li>Massive MIMO и формирование луча (beamforming)</li>
                    <li>Пиковые скорости до 20 Гбит/с, задержка до 1 мс</li>
                  </ul>
                </li>
                <li><strong>4G LTE (Long Term Evolution)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Модуляция OFDMA (нисходящий канал) и SC-FDMA (восходящий канал)</li>
                    <li>Интервал между поднесущими 15 кГц</li>
                    <li>Модуляция до 64-QAM (стандартный LTE) или 256-QAM (LTE-Advanced)</li>
                    <li>Технология MIMO (Multiple Input Multiple Output)</li>
                    <li>Пиковые скорости: до 300 Мбит/с (LTE), до 1 Гбит/с (LTE-Advanced)</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Спутниковые технологии:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>DVB-S2X</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Цифровое видеовещание через спутник, расширенный стандарт</li>
                    <li>Модуляция от QPSK до 256APSK</li>
                    <li>Адаптивное кодирование и модуляция (ACM)</li>
                    <li>Пропускная способность до 500 Мбит/с на транспондер</li>
                  </ul>
                </li>
                <li><strong>Низкоорбитальные системы (LEO)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Starlink, OneWeb, Amazon Kuiper</li>
                    <li>Работа в Ku, Ka и других диапазонах</li>
                    <li>Фазированные антенные решетки для отслеживания спутников</li>
                    <li>Скорости до нескольких сотен Мбит/с</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="WAN технологии"
                caption="Сравнение различных технологий WAN по скорости и дальности"
              />
              
              <InfoCard
                title="Наложенные транспортные протоколы"
                icon={<Laptop className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Многие современные сети WAN используют протоколы, которые работают поверх других протоколов:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Carrier Ethernet</strong> - стандарты для передачи Ethernet-трафика через сети операторов связи:
                    <ul className="list-disc pl-6 mt-1">
                      <li>E-Line: услуга point-to-point</li>
                      <li>E-LAN: услуга multipoint-to-multipoint</li>
                      <li>E-Tree: услуга hub-and-spoke</li>
                      <li>Может работать поверх MPLS, SONET/SDH, OTN или напрямую по оптике</li>
                    </ul>
                  </li>
                  <li><strong>MPLS (Multiprotocol Label Switching)</strong>:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Работает между канальным и сетевым уровнями</li>
                      <li>Использует метки для быстрой коммутации пакетов</li>
                      <li>Может работать поверх различных физических протоколов</li>
                      <li>Обеспечивает качество обслуживания (QoS) и виртуальные частные сети (VPN)</li>
                    </ul>
                  </li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="interface" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Интерфейсы устройств</h2>
              <p>
                Протоколы физического уровня для интерфейсов устройств определяют, как компьютеры и
                периферийные устройства обмениваются данными на физическом уровне. Они охватывают
                широкий спектр применений – от высокоскоростной передачи данных до энергоэффективных
                соединений для мобильных устройств.
              </p>
              
              <h3>Последовательные интерфейсы:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>USB (Universal Serial Bus)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>USB 1.1: 12 Мбит/с (Full Speed)</li>
                    <li>USB 2.0: 480 Мбит/с (High Speed)</li>
                    <li>USB 3.0/3.1 Gen 1: 5 Гбит/с (SuperSpeed)</li>
                    <li>USB 3.1 Gen 2: 10 Гбит/с (SuperSpeed+)</li>
                    <li>USB 3.2 Gen 2x2: 20 Гбит/с (две линии по 10 Гбит/с)</li>
                    <li>USB4: 40 Гбит/с, совместимость с Thunderbolt 3</li>
                    <li>Физический уровень: дифференциальные пары, кодирование 8b/10b (USB 3.0) или 128b/132b (USB 3.2)</li>
                  </ul>
                </li>
                <li><strong>Thunderbolt</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Thunderbolt 1/2: 10/20 Гбит/с, комбинация DisplayPort и PCIe</li>
                    <li>Thunderbolt 3: 40 Гбит/с, разъем USB Type-C</li>
                    <li>Thunderbolt 4: 40 Гбит/с, улучшенные требования к производительности</li>
                    <li>Поддержка питания до 100 Вт (USB PD)</li>
                  </ul>
                </li>
                <li><strong>SATA (Serial ATA)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>SATA 1.0: 1.5 Гбит/с (150 МБ/с)</li>
                    <li>SATA 2.0: 3 Гбит/с (300 МБ/с)</li>
                    <li>SATA 3.0: 6 Гбит/с (600 МБ/с)</li>
                    <li>Линейное кодирование 8b/10b</li>
                    <li>Используется для подключения накопителей (HDD, SSD)</li>
                  </ul>
                </li>
                <li><strong>SAS (Serial Attached SCSI)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>SAS-1: 3 Гбит/с</li>
                    <li>SAS-2: 6 Гбит/с</li>
                    <li>SAS-3: 12 Гбит/с</li>
                    <li>SAS-4: 22.5 Гбит/с</li>
                    <li>Используется в серверных и корпоративных системах хранения</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Традиционные последовательные интерфейсы:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>RS-232</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Классический последовательный порт (COM-порт)</li>
                    <li>Скорость до 115.2 Кбит/с (стандартно), до 1 Мбит/с (нестандартно)</li>
                    <li>Несимметричная передача, уровни сигнала ±15В</li>
                    <li>До сих пор используется в промышленном оборудовании, встраиваемых системах</li>
                  </ul>
                </li>
                <li><strong>RS-485</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Дифференциальная передача данных</li>
                    <li>Скорость до 10 Мбит/с</li>
                    <li>Многоточечная шина (до 32 устройств, с повторителями до 256)</li>
                    <li>Дальность до 1200 метров на низких скоростях</li>
                    <li>Широко используется в промышленных системах</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Интерфейсы для встраиваемых систем:</h3>
              <ul className="list-disc pl-6">
                <li><strong>I²C (Inter-Integrated Circuit)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Двухпроводной интерфейс (данные SDA и тактирование SCL)</li>
                    <li>Скорости: стандартный режим (100 Кбит/с), быстрый режим (400 Кбит/с),
                     высокоскоростной режим (3.4 Мбит/с), сверхбыстрый режим (5 Мбит/с)</li>
                    <li>Архитектура ведущий-ведомый, поддержка множества устройств на шине</li>
                    <li>Широко используется для связи с датчиками, EEPROM, АЦП/ЦАП</li>
                  </ul>
                </li>
                <li><strong>SPI (Serial Peripheral Interface)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Четырехпроводной интерфейс (MOSI, MISO, SCK, CS)</li>
                    <li>Полнодуплексная связь</li>
                    <li>Скорость до нескольких десятков МГц</li>
                    <li>Используется для связи с Flash-памятью, дисплеями, датчиками</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Высокоскоростные компьютерные интерфейсы:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>PCI Express (PCIe)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>PCIe 1.0: 2.5 GT/s на линию (250 МБ/с)</li>
                    <li>PCIe 2.0: 5 GT/s на линию (500 МБ/с)</li>
                    <li>PCIe 3.0: 8 GT/s на линию (985 МБ/с)</li>
                    <li>PCIe 4.0: 16 GT/s на линию (1.97 ГБ/с)</li>
                    <li>PCIe 5.0: 32 GT/s на линию (3.94 ГБ/с)</li>
                    <li>PCIe 6.0: 64 GT/s на линию (7.88 ГБ/с)</li>
                    <li>Кодирование: 8b/10b (PCIe 1.0/2.0), 128b/130b (PCIe 3.0/4.0/5.0), PAM4+FEC (PCIe 6.0)</li>
                    <li>Конфигурации: x1, x2, x4, x8, x16, x32 линий</li>
                  </ul>
                </li>
                <li><strong>NVMe (Non-Volatile Memory Express)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Протокол для доступа к SSD через PCIe</li>
                    <li>Высокая производительность, низкая задержка</li>
                    <li>Физически использует интерфейс PCIe или специальные форм-факторы (M.2, U.2)</li>
                  </ul>
                </li>
                <li><strong>CXL (Compute Express Link)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Открытый стандарт для высокопроизводительных соединений процессоров с ускорителями и памятью</li>
                    <li>Основан на физическом уровне PCIe</li>
                    <li>Поддержка когерентности памяти</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Дисплейные интерфейсы:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>HDMI (High-Definition Multimedia Interface)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>HDMI 1.4: до 10.2 Гбит/с, поддержка 4K@30Hz</li>
                    <li>HDMI 2.0: до 18 Гбит/с, поддержка 4K@60Hz</li>
                    <li>HDMI 2.1: до 48 Гбит/с, поддержка 8K@60Hz и 4K@120Hz</li>
                    <li>Использует TMDS (Transition Minimized Differential Signaling)</li>
                    <li>Поддержка аудио, видео и дополнительных данных</li>
                  </ul>
                </li>
                <li><strong>DisplayPort</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>DisplayPort 1.2: 21.6 Гбит/с</li>
                    <li>DisplayPort 1.4: 32.4 Гбит/с, поддержка 8K@60Hz с DSC</li>
                    <li>DisplayPort 2.0: 80 Гбит/с, поддержка 16K с DSC</li>
                    <li>Использует кодирование 8b/10b (DP 1.x) или 128b/132b (DP 2.0)</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Интерфейсы устройств"
                caption="Эволюция скоростей передачи данных в компьютерных интерфейсах"
              />
              
              <InfoCard
                title="Тенденции развития интерфейсов"
                icon={<Cpu className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Современные интерфейсы устройств развиваются в нескольких направлениях:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Универсализация</strong> - один интерфейс для множества функций:
                    <ul className="list-disc pl-6 mt-1">
                      <li>USB Type-C как универсальный разъем для данных, видео, питания</li>
                      <li>Туннелирование различных протоколов (PCIe, DisplayPort, USB) через Thunderbolt</li>
                    </ul>
                  </li>
                  <li><strong>Увеличение скорости</strong> за счет:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Повышения частоты передачи</li>
                      <li>Перехода к многоуровневой сигнализации (PAM4 и выше)</li>
                      <li>Использования нескольких параллельных линий</li>
                      <li>Более эффективного кодирования</li>
                    </ul>
                  </li>
                  <li><strong>Снижение энергопотребления</strong>:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Адаптивное энергопотребление в зависимости от нагрузки</li>
                      <li>Энергоэффективные режимы ожидания</li>
                      <li>Оптимизация сигнальных уровней</li>
                    </ul>
                  </li>
                  <li><strong>Интеграция интерфейсов и оптимизация форм-фактора</strong></li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProtocolsPage;