import { Radio } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wifi, Smartphone, Signal } from 'lucide-react';

const WirelessPage = () => {
  return (
    <div>
      <PageHeader 
        title="Беспроводные технологии" 
        description="Технологии передачи данных без использования проводов"
        icon={<Radio className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Беспроводные технологии"
          caption="Различные типы беспроводной передачи данных"
        />

        <div className="prose max-w-none">
          <p>
            Беспроводные технологии передачи данных используют электромагнитные волны различных диапазонов 
            для передачи информации без использования проводных соединений. Они обеспечивают гибкость 
            и мобильность, позволяя устройствам подключаться к сетям и обмениваться данными без физических ограничений.
          </p>
          <p>
            На физическом уровне беспроводные технологии определяют характеристики радиосигналов, 
            методы модуляции, полосы частот, мощность передатчиков и чувствительность приемников. 
            Эти параметры влияют на скорость передачи данных, дальность связи и устойчивость к помехам.
          </p>
        </div>
      </div>

      <Tabs defaultValue="wifi" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="wifi">Wi-Fi</TabsTrigger>
          <TabsTrigger value="mobile">Мобильная связь</TabsTrigger>
          <TabsTrigger value="other">Другие технологии</TabsTrigger>
        </TabsList>
        
        <TabsContent value="wifi" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Wi-Fi (IEEE 802.11)</h2>
              <p>
                Wi-Fi — это технология беспроводной локальной сети, основанная на стандартах IEEE 802.11. 
                Она позволяет устройствам подключаться к сети Интернет или локальной сети без использования 
                кабелей, обеспечивая высокую скорость передачи данных на небольших расстояниях.
              </p>
              
              <h3>Основные стандарты Wi-Fi:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>IEEE 802.11a</strong> - частота 5 ГГц, скорость до 54 Мбит/с</li>
                <li><strong>IEEE 802.11b</strong> - частота 2,4 ГГц, скорость до 11 Мбит/с</li>
                <li><strong>IEEE 802.11g</strong> - частота 2,4 ГГц, скорость до 54 Мбит/с</li>
                <li><strong>IEEE 802.11n (Wi-Fi 4)</strong> - частоты 2,4 и 5 ГГц, скорость до 600 Мбит/с, технология MIMO</li>
                <li><strong>IEEE 802.11ac (Wi-Fi 5)</strong> - частота 5 ГГц, скорость до 6,9 Гбит/с, MU-MIMO</li>
                <li><strong>IEEE 802.11ax (Wi-Fi 6)</strong> - частоты 2,4 и 5 ГГц, скорость до 9,6 Гбит/с, OFDMA, более эффективная работа в плотной среде</li>
                <li><strong>IEEE 802.11be (Wi-Fi 7)</strong> - частоты 2,4, 5 и 6 ГГц, скорость до 46 Гбит/с, многоканальная агрегация</li>
              </ul>
              
              <h3>Физические параметры Wi-Fi:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Частотные диапазоны</strong>: 2,4 ГГц, 5 ГГц, 6 ГГц</li>
                <li><strong>Ширина канала</strong>: 20, 40, 80, 160 МГц</li>
                <li><strong>Типы модуляции</strong>: BPSK, QPSK, QAM (16-QAM, 64-QAM, 256-QAM, 1024-QAM)</li>
                <li><strong>Многоантенные технологии</strong>: MIMO, MU-MIMO</li>
                <li><strong>Метод доступа</strong>: CSMA/CA (множественный доступ с контролем несущей и предотвращением коллизий)</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Стандарты Wi-Fi"
                caption="Сравнение различных стандартов Wi-Fi и их характеристик"
              />
              
              <InfoCard
                title="Особенности Wi-Fi на физическом уровне"
                icon={<Wifi className="h-5 w-5" />}
                className="mt-6"
              >
                <ul className="list-disc pl-6">
                  <li><strong>OFDM (Orthogonal Frequency Division Multiplexing)</strong> - метод модуляции с использованием множества поднесущих частот</li>
                  <li><strong>DSSS (Direct Sequence Spread Spectrum)</strong> - метод расширения спектра с прямой последовательностью</li>
                  <li><strong>MIMO (Multiple Input Multiple Output)</strong> - использование нескольких антенн для увеличения пропускной способности</li>
                  <li><strong>Beamforming</strong> - технология формирования направленного луча для улучшения качества сигнала</li>
                  <li><strong>Channel Bonding</strong> - объединение соседних каналов для увеличения пропускной способности</li>
                </ul>
              </InfoCard>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="mb-2">Факторы, влияющие на качество Wi-Fi:</h3>
                <ul className="list-disc pl-6">
                  <li>Интерференция и помехи от других устройств</li>
                  <li>Препятствия (стены, перекрытия)</li>
                  <li>Расстояние от точки доступа</li>
                  <li>Мощность передатчика и чувствительность приемника</li>
                  <li>Загруженность канала</li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="mobile" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Мобильная связь</h2>
              <p>
                Мобильные сети используют радиочастотный спектр для обеспечения беспроводной передачи 
                голоса и данных на большие расстояния. Эволюция мобильных технологий привела к значительному 
                увеличению скорости передачи данных и улучшению качества связи.
              </p>
              
              <h3>Поколения мобильной связи:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>1G</strong> - аналоговая мобильная связь (AMPS, NMT)</li>
                <li><strong>2G</strong> - цифровая мобильная связь (GSM, CDMA), передача данных до 9,6 Кбит/с</li>
                <li><strong>2.5G</strong> - GPRS, EDGE с улучшенной передачей данных до 384 Кбит/с</li>
                <li><strong>3G</strong> - UMTS, CDMA2000, скорость до 2 Мбит/с, возможность видеозвонков</li>
                <li><strong>4G (LTE)</strong> - скорость до 100 Мбит/с в движении и до 1 Гбит/с в стационарном положении</li>
                <li><strong>5G</strong> - скорость до 20 Гбит/с, сверхнизкая задержка (1 мс), поддержка миллионов устройств на кв. км</li>
              </ul>
              
              <h3>Физические характеристики мобильных сетей:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Частотные диапазоны</strong>: 
                  <ul className="list-disc pl-6 mt-1">
                    <li>2G/3G: 850, 900, 1800, 1900, 2100 МГц</li>
                    <li>4G: 700, 800, 900, 1800, 2100, 2600 МГц</li>
                    <li>5G: суб-6 ГГц (600 МГц - 6 ГГц) и миллиметровый диапазон (24-86 ГГц)</li>
                  </ul>
                </li>
                <li><strong>Методы множественного доступа</strong>: FDMA, TDMA, CDMA, OFDMA</li>
                <li><strong>Модуляция</strong>: QPSK, QAM (16-QAM до 256-QAM в 4G/5G)</li>
                <li><strong>Дуплексное разделение</strong>: FDD (частотное), TDD (временное)</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Эволюция мобильной связи"
                caption="Эволюция технологий мобильной связи от 1G до 5G"
              />
              
              <InfoCard
                title="5G на физическом уровне"
                icon={<Smartphone className="h-5 w-5" />}
                className="mt-6"
              >
                <p>Технология 5G вводит ряд новых физических особенностей:</p>
                <ul className="list-disc pl-6">
                  <li><strong>Massive MIMO</strong> - использование десятков или сотен антенн для более эффективной передачи</li>
                  <li><strong>mmWave</strong> - использование миллиметрового диапазона (24-86 ГГц) для сверхвысоких скоростей</li>
                  <li><strong>Beam Steering</strong> - динамическое направление сигнала на конкретное устройство</li>
                  <li><strong>Network Slicing</strong> - виртуализация сети для разных типов услуг</li>
                  <li><strong>Ultra-Reliable Low Latency Communications (URLLC)</strong> - для критически важных приложений</li>
                </ul>
              </InfoCard>
              
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="mb-2">Ключевые отличия поколений:</h3>
                <p>
                  Каждое новое поколение мобильной связи вносит значительные изменения на физическом уровне, 
                  включая новые методы модуляции, кодирования, многостанционного доступа и использования 
                  радиочастотного спектра. Это позволяет увеличивать эффективность использования спектра, 
                  скорость передачи данных и емкость сети.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="other" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Другие беспроводные технологии</h2>
              
              <h3>Bluetooth:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Частотный диапазон</strong>: 2,4 ГГц ISM</li>
                <li><strong>Версии</strong>: от Bluetooth 1.0 до Bluetooth 5.3</li>
                <li><strong>Скорость</strong>: до 3 Мбит/с (Classic), до 50 Мбит/с (BLE 5.3)</li>
                <li><strong>Радиус действия</strong>: до 100 метров (Class 1)</li>
                <li><strong>Физические особенности</strong>: FHSS (Frequency Hopping), GFSK модуляция</li>
                <li><strong>Применение</strong>: периферийные устройства, аудио, IoT</li>
              </ul>
              
              <h3>ZigBee:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Стандарт</strong>: IEEE 802.15.4</li>
                <li><strong>Частотные диапазоны</strong>: 868 МГц, 915 МГц, 2,4 ГГц</li>
                <li><strong>Скорость</strong>: 20-250 Кбит/с</li>
                <li><strong>Радиус действия</strong>: 10-100 метров</li>
                <li><strong>Топология</strong>: mesh, звезда, дерево</li>
                <li><strong>Применение</strong>: системы автоматизации, умный дом, IoT</li>
              </ul>
              
              <h3>NFC (Near Field Communication):</h3>
              <ul className="list-disc pl-6">
                <li><strong>Частота</strong>: 13,56 МГц</li>
                <li><strong>Радиус действия</strong>: до 10 см</li>
                <li><strong>Скорость</strong>: 106, 212 или 424 Кбит/с</li>
                <li><strong>Режимы работы</strong>: активный и пассивный</li>
                <li><strong>Применение</strong>: бесконтактные платежи, смарт-карты, обмен данными</li>
              </ul>
            </div>
            
            <div>
              <h3>RFID (Radio Frequency Identification):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Частотные диапазоны</strong>: LF (125-134 кГц), HF (13,56 МГц), UHF (860-960 МГц)</li>
                <li><strong>Типы меток</strong>: пассивные, полупассивные, активные</li>
                <li><strong>Радиус действия</strong>: от нескольких см до сотен метров</li>
                <li><strong>Применение</strong>: идентификация объектов, логистика, контроль доступа</li>
              </ul>
              
              <h3>LoRaWAN:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Частотные диапазоны</strong>: 433, 868, 915 МГц (в зависимости от региона)</li>
                <li><strong>Радиус действия</strong>: до 15 км в сельской местности, 2-5 км в городе</li>
                <li><strong>Скорость</strong>: 0,3-50 Кбит/с</li>
                <li><strong>Физические особенности</strong>: CSS (Chirp Spread Spectrum) модуляция</li>
                <li><strong>Применение</strong>: IoT, умные города, сельское хозяйство</li>
              </ul>
              
              <InfoCard
                title="Особенности LPWAN"
                icon={<Signal className="h-5 w-5" />}
              >
                <p>
                  Технологии LPWAN (Low-Power Wide-Area Network) специально разработаны для IoT-устройств:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Сверхнизкое энергопотребление</strong> - работа устройств от батареи до 10 лет</li>
                  <li><strong>Большой радиус действия</strong> - от единиц до десятков километров</li>
                  <li><strong>Низкая скорость передачи</strong> - обычно до нескольких десятков Кбит/с</li>
                  <li><strong>Примеры технологий</strong>: LoRaWAN, Sigfox, NB-IoT, LTE-M</li>
                </ul>
              </InfoCard>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Сравнение беспроводных технологий"
                caption="Сравнение дальности и скорости различных беспроводных технологий"
                className="mt-6"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WirelessPage;