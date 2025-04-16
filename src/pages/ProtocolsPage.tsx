import { FileCog } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cast, Cable, Cpu, MoveHorizontal } from 'lucide-react';

const ProtocolsPage = () => {
  return (
    <div>
      <PageHeader 
        title="Протоколы физического уровня" 
        description="Стандарты и протоколы, определяющие физическую передачу данных"
        icon={<FileCog className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Протоколы физического уровня"
          caption="Схема взаимодействия протоколов физического уровня с другими уровнями модели OSI"
        />

        <div className="prose max-w-none">
          <p>
            Протоколы физического уровня определяют правила и стандарты для передачи битов по физическим каналам связи.
            Они устанавливают электрические, механические, функциональные и процедурные характеристики, необходимые для
            активации, поддержания и деактивации физического соединения между сетевыми устройствами.
          </p>
          <p>
            В отличие от протоколов более высоких уровней, протоколы физического уровня имеют дело непосредственно
            с физическими сигналами: электрическими импульсами, световыми волнами или радиоволнами.
            Они определяют такие параметры, как уровни напряжения, скорость передачи, синхронизация, 
            физическая топология и типы соединений.
          </p>
        </div>
      </div>

      <Tabs defaultValue="serial" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="serial">Последовательные протоколы</TabsTrigger>
          <TabsTrigger value="wireless">Беспроводные протоколы</TabsTrigger>
          <TabsTrigger value="optical">Оптические протоколы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="serial" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Последовательные протоколы передачи данных</h2>
              <p>
                Последовательные протоколы передают данные по одной линии, бит за битом.
                Они используются как для внутренней связи между компонентами устройств,
                так и для внешних соединений между различными устройствами.
              </p>
              
              <h3>RS-232 (EIA-232):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Один из старейших стандартов последовательной передачи данных</li>
                <li>Использует несимметричные линии связи</li>
                <li>Уровни сигнала: от -15В до +15В</li>
                <li>Скорость: до 115.2 Кбит/с (практически)</li>
                <li>Максимальная длина: обычно до 15 метров</li>
                <li>Разъемы: DB-9, DB-25</li>
                <li>Применение: модемы, промышленные устройства, терминалы</li>
              </ul>
              
              <h3>RS-422 и RS-485:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Используют симметричные (дифференциальные) линии связи</li>
                <li>Более устойчивы к помехам по сравнению с RS-232</li>
                <li>RS-422: однонаправленная передача, до 10 приемников</li>
                <li>RS-485: многоточечное соединение, до 32 устройств на линии</li>
                <li>Скорость: до 10 Мбит/с на короткие расстояния</li>
                <li>Максимальная длина: до 1200 метров (при низких скоростях)</li>
                <li>Применение: промышленная автоматика, системы управления</li>
              </ul>
              
              <h3>UART (Universal Asynchronous Receiver-Transmitter):</h3>
              <ul className="list-disc pl-6">
                <li>Не является протоколом как таковым, но определяет формат асинхронной последовательной передачи</li>
                <li>Используется в составе различных интерфейсов (RS-232, TTL UART)</li>
                <li>Асинхронная передача с битами старт и стоп</li>
                <li>Скорость: обычно от 1200 до 115200 бод</li>
                <li>Применение: микроконтроллеры, отладочные интерфейсы, Bluetooth</li>
              </ul>
            </div>
            
            <div>
              <h3>SPI (Serial Peripheral Interface):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Синхронный интерфейс с раздельными линиями для приема и передачи</li>
                <li>Использует отдельную тактовую линию (SCLK)</li>
                <li>Режим "ведущий-ведомый" с выбором ведомого (SS/CS)</li>
                <li>Скорость: до нескольких десятков МГц</li>
                <li>Применение: сенсоры, карты памяти, дисплеи, EEPROM</li>
              </ul>
              
              <h3>I²C (Inter-Integrated Circuit):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Двухпроводной интерфейс: линия данных (SDA) и тактовая линия (SCL)</li>
                <li>Поддерживает адресацию устройств (до 127 устройств на шине)</li>
                <li>Скорость: стандартный режим (100 Кбит/с), быстрый режим (400 Кбит/с), высокоскоростной режим (3.4 Мбит/с)</li>
                <li>Применение: микросхемы часов реального времени, сенсоры, EEPROM</li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Последовательные интерфейсы"
                caption="Сравнение различных последовательных интерфейсов"
              />
              
              <InfoCard
                title="USB (Universal Serial Bus)"
                icon={<Cast className="h-5 w-5" />}
                className="mt-6"
              >
                <p>USB - универсальный последовательный интерфейс для подключения периферийных устройств:</p>
                <ul className="list-disc pl-6">
                  <li><strong>USB 1.0/1.1</strong>: Low Speed (1.5 Мбит/с), Full Speed (12 Мбит/с)</li>
                  <li><strong>USB 2.0</strong>: High Speed (480 Мбит/с)</li>
                  <li><strong>USB 3.0/3.1 Gen 1</strong>: SuperSpeed (5 Гбит/с)</li>
                  <li><strong>USB 3.1 Gen 2</strong>: SuperSpeed+ (10 Гбит/с)</li>
                  <li><strong>USB 3.2</strong>: до 20 Гбит/с</li>
                  <li><strong>USB4</strong>: до 40 Гбит/с</li>
                </ul>
                <p className="mt-2">
                  Физический уровень USB использует дифференциальную передачу данных, 
                  кодирование NRZI и битовое стаффирование. Поддерживает горячее подключение
                  и различные режимы питания устройств.
                </p>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="wireless" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Беспроводные протоколы физического уровня</h2>
              <p>
                Беспроводные протоколы определяют методы передачи данных без использования проводных соединений.
                Они определяют параметры радиосигналов, методы модуляции, полосы частот и другие характеристики
                физической беспроводной среды.
              </p>
              
              <h3>IEEE 802.11 (Wi-Fi) PHY:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>802.11a</strong>: OFDM в диапазоне 5 ГГц, до 54 Мбит/с</li>
                <li><strong>802.11b</strong>: DSSS в диапазоне 2.4 ГГц, до 11 Мбит/с</li>
                <li><strong>802.11g</strong>: OFDM и DSSS в диапазоне 2.4 ГГц, до 54 Мбит/с</li>
                <li><strong>802.11n</strong>: MIMO-OFDM в диапазонах 2.4 и 5 ГГц, до 600 Мбит/с</li>
                <li><strong>802.11ac</strong>: MU-MIMO в диапазоне 5 ГГц, ширина канала до 160 МГц, до 6.9 Гбит/с</li>
                <li><strong>802.11ax (Wi-Fi 6)</strong>: OFDMA, 1024-QAM, диапазоны 2.4/5/6 ГГц, до 9.6 Гбит/с</li>
                <li><strong>802.11be (Wi-Fi 7)</strong>: до 46 Гбит/с, 4096-QAM, ширина канала до 320 МГц</li>
              </ul>
              
              <h3>IEEE 802.15 (Bluetooth, ZigBee) PHY:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Bluetooth Classic (802.15.1)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>FHSS в диапазоне 2.4 ГГц</li>
                    <li>79 каналов по 1 МГц</li>
                    <li>GFSK, π/4-DQPSK, 8DPSK модуляция</li>
                    <li>Скорость до 3 Мбит/с (Bluetooth 2.0+EDR)</li>
                  </ul>
                </li>
                <li><strong>Bluetooth Low Energy (BLE)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>40 каналов по 2 МГц в диапазоне 2.4 ГГц</li>
                    <li>GFSK модуляция</li>
                    <li>Скорость: 1 Мбит/с (BLE 4.2), 2 Мбит/с (BLE 5.0)</li>
                  </ul>
                </li>
                <li><strong>ZigBee (802.15.4)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>DSSS в диапазонах 868 МГц, 915 МГц, 2.4 ГГц</li>
                    <li>BPSK, O-QPSK модуляция</li>
                    <li>Скорость 20, 40, 250 Кбит/с в зависимости от полосы</li>
                  </ul>
                </li>
              </ul>
              
              <h3>LPWAN PHY:</h3>
              <ul className="list-disc pl-6">
                <li><strong>LoRa</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>CSS (Chirp Spread Spectrum) модуляция</li>
                    <li>Диапазоны 433, 868, 915 МГц (зависит от региона)</li>
                    <li>Коэффициент расширения (Spreading Factor) от 7 до 12</li>
                    <li>Скорость от 0.3 до 50 Кбит/с</li>
                  </ul>
                </li>
                <li><strong>Sigfox</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>DBPSK модуляция в UNB (Ultra Narrow Band)</li>
                    <li>Диапазон 868 МГц (Европа), 902 МГц (США)</li>
                    <li>Полоса 100 Гц, скорость 100 или 600 бит/с</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Сотовые технологии PHY:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>2G (GSM)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>GMSK модуляция</li>
                    <li>TDMA с 8 временными слотами</li>
                    <li>Диапазоны 850, 900, 1800, 1900 МГц</li>
                    <li>Скорость канала 270.833 Кбит/с, полезная до 9.6 Кбит/с</li>
                  </ul>
                </li>
                <li><strong>3G (UMTS/WCDMA)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>QPSK, 16-QAM модуляция</li>
                    <li>CDMA с полосой 5 МГц</li>
                    <li>Диапазоны 850, 900, 1900, 2100 МГц</li>
                    <li>Скорость до 42 Мбит/с (HSPA+)</li>
                  </ul>
                </li>
                <li><strong>4G (LTE)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>OFDMA в нисходящем канале, SC-FDMA в восходящем</li>
                    <li>QPSK, 16-QAM, 64-QAM, 256-QAM модуляция</li>
                    <li>Гибкая полоса пропускания: 1.4, 3, 5, 10, 15, 20 МГц</li>
                    <li>Множество диапазонов от 600 МГц до 3.8 ГГц</li>
                    <li>Скорость до 1 Гбит/с</li>
                  </ul>
                </li>
                <li><strong>5G NR</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>OFDM с гибким разделением поднесущих</li>
                    <li>До 256-QAM в FR1, до 64-QAM в FR2</li>
                    <li>Диапазоны FR1 (sub-6 ГГц) и FR2 (mmWave, 24-52 ГГц)</li>
                    <li>Massive MIMO, beamforming</li>
                    <li>Полоса до 100 МГц в FR1, до 400 МГц в FR2</li>
                    <li>Скорость до 20 Гбит/с</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Беспроводные технологии"
                caption="Диапазоны частот и характеристики различных беспроводных технологий"
              />
              
              <InfoCard
                title="Технологии радиочастотной идентификации"
                icon={<Cable className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  RFID (Radio Frequency Identification) использует радиоволны для идентификации объектов:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>LF RFID</strong> (125-134 кГц) - малая дальность, низкая скорость</li>
                  <li><strong>HF RFID</strong> (13.56 МГц) - средняя дальность, используется в NFC</li>
                  <li><strong>UHF RFID</strong> (860-960 МГц) - большая дальность, высокая скорость</li>
                  <li><strong>Модуляция</strong>: ASK, FSK, PSK в зависимости от системы</li>
                  <li><strong>Кодирование</strong>: Manchester, Miller, FM0</li>
                  <li><strong>Типы меток</strong>: пассивные (без батареи), активные (с батареей)</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="optical" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Оптические протоколы физического уровня</h2>
              <p>
                Оптические протоколы определяют параметры передачи данных с использованием света
                по оптическому волокну. Они обеспечивают высокую пропускную способность и большие
                расстояния передачи.
              </p>
              
              <h3>SONET/SDH:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>SONET</strong> (Synchronous Optical Network) - американский стандарт</li>
                <li><strong>SDH</strong> (Synchronous Digital Hierarchy) - международный стандарт</li>
                <li>Синхронные технологии для передачи по оптоволокну</li>
                <li>Иерархия скоростей:
                  <ul className="list-disc pl-6 mt-1">
                    <li>STS-1/OC-1 (SONET) / STM-0 (SDH): 51.84 Мбит/с</li>
                    <li>STS-3/OC-3 / STM-1: 155.52 Мбит/с</li>
                    <li>STS-12/OC-12 / STM-4: 622.08 Мбит/с</li>
                    <li>STS-48/OC-48 / STM-16: 2.488 Гбит/с</li>
                    <li>STS-192/OC-192 / STM-64: 9.953 Гбит/с</li>
                    <li>STS-768/OC-768 / STM-256: 39.813 Гбит/с</li>
                  </ul>
                </li>
                <li>Поддержка мультиплексирования, защитного переключения и управления сетью</li>
                <li>Применение: магистральные сети операторов связи</li>
              </ul>
              
              <h3>PON (Passive Optical Network):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Технология для организации пассивных оптических сетей доступа</li>
                <li>Использует пассивные оптические сплиттеры</li>
                <li>Основные стандарты:
                  <ul className="list-disc pl-6 mt-1">
                    <li><strong>APON/BPON</strong> (ITU-T G.983) - до 622 Мбит/с</li>
                    <li><strong>GPON</strong> (ITU-T G.984) - до 2.5 Гбит/с вниз, 1.25 Гбит/с вверх</li>
                    <li><strong>EPON</strong> (IEEE 802.3ah) - 1 Гбит/с в обе стороны</li>
                    <li><strong>10G-PON</strong> (ITU-T G.987) - 10 Гбит/с вниз, 2.5 Гбит/с вверх</li>
                    <li><strong>10G-EPON</strong> (IEEE 802.3av) - 10 Гбит/с в обе стороны</li>
                    <li><strong>XGS-PON</strong> (ITU-T G.9807) - 10 Гбит/с симметрично</li>
                    <li><strong>NG-PON2</strong> (ITU-T G.989) - до 40 Гбит/с через TWDM</li>
                  </ul>
                </li>
                <li>Применение: сети доступа "последней мили", FTTH/FTTB</li>
              </ul>
              
              <h3>Fibre Channel (FC):</h3>
              <ul className="list-disc pl-6">
                <li>Технология для высокоскоростной передачи данных в системах хранения</li>
                <li>Скорости: 1, 2, 4, 8, 16, 32, 64, 128 Гбит/с</li>
                <li>Использует кодирование 8B/10B для скоростей до 8 Гбит/с</li>
                <li>Использует 64B/66B для скоростей 10 Гбит/с и выше</li>
                <li>Поддерживает различные топологии: точка-точка, петля, коммутируемая фабрика</li>
                <li>Работает по многомодовому и одномодовому оптоволокну</li>
                <li>Применение: системы хранения данных, SAN</li>
              </ul>
            </div>
            
            <div>
              <h3>Технологии WDM:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>WDM</strong> (Wavelength Division Multiplexing) - мультиплексирование по длине волны</li>
                <li><strong>CWDM</strong> (Coarse WDM) - грубое спектральное уплотнение
                  <ul className="list-disc pl-6 mt-1">
                    <li>Расстояние между каналами 20 нм</li>
                    <li>До 18 каналов в диапазоне 1270-1610 нм</li>
                    <li>Более дешевое решение, для коротких дистанций</li>
                  </ul>
                </li>
                <li><strong>DWDM</strong> (Dense WDM) - плотное спектральное уплотнение
                  <ul className="list-disc pl-6 mt-1">
                    <li>Расстояние между каналами 0.8 нм (100 ГГц) или 0.4 нм (50 ГГц)</li>
                    <li>До 96 каналов в С-диапазоне (1530-1565 нм)</li>
                    <li>Используется для магистральных линий связи</li>
                  </ul>
                </li>
                <li><strong>UDWDM</strong> (Ultra-Dense WDM) - сверхплотное спектральное уплотнение
                  <ul className="list-disc pl-6 mt-1">
                    <li>Расстояние между каналами 0.2 нм (25 ГГц) или меньше</li>
                    <li>Требует сложного оборудования и высокостабильных лазеров</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Оптические технологии"
                caption="Принципы работы технологий спектрального уплотнения WDM"
              />
              
              <h3 className="mt-6">Оптические трансиверы:</h3>
              <ul className="list-disc pl-6">
                <li><strong>SFP</strong> (Small Form-factor Pluggable) - для 1 Гбит/с</li>
                <li><strong>SFP+</strong> - для 10 Гбит/с</li>
                <li><strong>SFP28</strong> - для 25 Гбит/с</li>
                <li><strong>QSFP+</strong> - для 40 Гбит/с (4×10 Гбит/с)</li>
                <li><strong>QSFP28</strong> - для 100 Гбит/с (4×25 Гбит/с)</li>
                <li><strong>QSFP-DD</strong> - для 400 Гбит/с (8×50 Гбит/с)</li>
                <li><strong>OSFP</strong> - для 400 Гбит/с и выше</li>
              </ul>
              
              <InfoCard
                title="Когерентные оптические системы"
                icon={<Cpu className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Современные оптические системы используют когерентное детектирование для повышения эффективности:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Модуляция</strong>: QPSK, 16-QAM, 64-QAM, 256-QAM</li>
                  <li><strong>Поляризационное мультиплексирование (PM)</strong> - удвоение емкости</li>
                  <li><strong>Цифровая обработка сигналов (DSP)</strong> - компенсация дисперсии и искажений</li>
                  <li><strong>FEC</strong> (Forward Error Correction) - коды коррекции ошибок</li>
                  <li><strong>Скорость передачи</strong>: от 100 Гбит/с до 800 Гбит/с на одну длину волны</li>
                  <li><strong>Применение</strong>: подводные кабели, магистральные линии, дальние соединения в ЦОД</li>
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