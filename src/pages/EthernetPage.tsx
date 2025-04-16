import { Network } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Share2, Timer, Layers } from 'lucide-react';

const EthernetPage = () => {
  return (
    <div>
      <PageHeader 
        title="Технологии Ethernet" 
        description="Физический уровень локальных сетей Ethernet"
        icon={<Network className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Ethernet кабели и разъемы"
          caption="Различные типы кабелей и разъемов Ethernet"
        />

        <div className="prose max-w-none">
          <p>
            Ethernet — это семейство технологий компьютерных сетей, широко используемых в локальных сетях (LAN).
            Стандарты Ethernet определяют проводные соединения и электрические сигналы на физическом уровне,
            формат кадров и протоколы управления доступом к среде на канальном уровне модели OSI.
          </p>
          <p>
            Разработанный изначально в 1970-х годах, Ethernet эволюционировал от скорости 10 Мбит/с
            до современных реализаций, обеспечивающих скорость передачи данных до 400 Гбит/с и выше.
            На физическом уровне Ethernet определяет характеристики кабелей, разъемов, методов модуляции и кодирования,
            а также параметры передачи сигналов.
          </p>
        </div>
      </div>

      <Tabs defaultValue="standards" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="standards">Стандарты Ethernet</TabsTrigger>
          <TabsTrigger value="physical">Физический уровень</TabsTrigger>
          <TabsTrigger value="advanced">Современные технологии</TabsTrigger>
        </TabsList>
        
        <TabsContent value="standards" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Эволюция стандартов Ethernet</h2>
              <p>
                С момента своего появления технология Ethernet прошла значительный путь развития.
                Скорость передачи данных увеличилась с 10 Мбит/с до сотен гигабит в секунду,
                а среда передачи эволюционировала от коаксиального кабеля до оптоволокна.
              </p>
              
              <h3>Основные стандарты Ethernet:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>10BASE-T (IEEE 802.3i)</strong> - 10 Мбит/с по витой паре категории 3 или выше</li>
                <li><strong>100BASE-TX (IEEE 802.3u)</strong> - 100 Мбит/с по витой паре категории 5 или выше</li>
                <li><strong>1000BASE-T (IEEE 802.3ab)</strong> - 1 Гбит/с по витой паре категории 5e или выше</li>
                <li><strong>10GBASE-T (IEEE 802.3an)</strong> - 10 Гбит/с по витой паре категории 6a или выше</li>
                <li><strong>40GBASE-T (IEEE 802.3bq)</strong> - 40 Гбит/с по витой паре категории 8</li>
                <li><strong>100GBASE-SR4 (IEEE 802.3bm)</strong> - 100 Гбит/с по многомодовому оптоволокну</li>
                <li><strong>400GBASE-SR16 (IEEE 802.3bs)</strong> - 400 Гбит/с по многомодовому оптоволокну</li>
              </ul>
              
              <h3>Расшифровка обозначений:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Число в начале</strong> - скорость в Мбит/с или Гбит/с</li>
                <li><strong>BASE</strong> - передача в основной полосе частот (без модуляции несущей)</li>
                <li><strong>T</strong> - витая пара (Twisted pair)</li>
                <li><strong>F</strong> - оптоволокно (Fiber)</li>
                <li><strong>S/L/E</strong> - короткие/длинные/расширенные расстояния для оптических соединений</li>
                <li><strong>X</strong> - кодирование 8B/10B</li>
                <li><strong>R</strong> - кодирование 64B/66B</li>
              </ul>
            </div>
            
            <div>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-2 text-left">Стандарт</th>
                      <th className="p-2 text-left">Скорость</th>
                      <th className="p-2 text-left">Среда передачи</th>
                      <th className="p-2 text-left">Макс. длина</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2">10BASE-T</td>
                      <td className="p-2">10 Мбит/с</td>
                      <td className="p-2">Витая пара Cat 3+</td>
                      <td className="p-2">100 м</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">100BASE-TX</td>
                      <td className="p-2">100 Мбит/с</td>
                      <td className="p-2">Витая пара Cat 5+</td>
                      <td className="p-2">100 м</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">1000BASE-T</td>
                      <td className="p-2">1 Гбит/с</td>
                      <td className="p-2">Витая пара Cat 5e+</td>
                      <td className="p-2">100 м</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">1000BASE-SX</td>
                      <td className="p-2">1 Гбит/с</td>
                      <td className="p-2">ММ оптоволокно</td>
                      <td className="p-2">550 м</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">1000BASE-LX</td>
                      <td className="p-2">1 Гбит/с</td>
                      <td className="p-2">ОМ оптоволокно</td>
                      <td className="p-2">5 км</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">10GBASE-T</td>
                      <td className="p-2">10 Гбит/с</td>
                      <td className="p-2">Витая пара Cat 6a+</td>
                      <td className="p-2">100 м</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">10GBASE-SR</td>
                      <td className="p-2">10 Гбит/с</td>
                      <td className="p-2">ММ оптоволокно</td>
                      <td className="p-2">400 м</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">10GBASE-LR</td>
                      <td className="p-2">10 Гбит/с</td>
                      <td className="p-2">ОМ оптоволокно</td>
                      <td className="p-2">10 км</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <InfoCard
                title="Автосогласование (Auto-negotiation)"
                icon={<Share2 className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Автосогласование — это механизм, позволяющий устройствам Ethernet автоматически выбирать
                  оптимальные параметры соединения:
                </p>
                <ul className="list-disc pl-6">
                  <li>Скорость соединения (10/100/1000 Мбит/с)</li>
                  <li>Режим дуплекса (полудуплекс/полный дуплекс)</li>
                  <li>Поддержка управления потоком (flow control)</li>
                  <li>Другие специфические параметры</li>
                </ul>
                <p className="mt-2">
                  Этот процесс происходит на физическом уровне во время установления соединения
                  и обеспечивает совместимость устройств разных производителей и поколений.
                </p>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="physical" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Физический уровень Ethernet</h2>
              <p>
                Физический уровень Ethernet определяет электрические, оптические и механические характеристики
                соединения между устройствами. Он отвечает за передачу битового потока по физической среде.
              </p>
              
              <h3>Компоненты физического уровня:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>PHY (Physical Layer Transceiver)</strong> - приемопередатчик физического уровня, преобразующий цифровые данные в аналоговые сигналы и обратно</li>
                <li><strong>MDI (Medium Dependent Interface)</strong> - интерфейс, зависящий от среды (например, разъем RJ-45)</li>
                <li><strong>PCS (Physical Coding Sublayer)</strong> - подуровень кодирования, отвечающий за преобразование данных в формат, подходящий для передачи</li>
                <li><strong>PMA (Physical Medium Attachment)</strong> - подуровень подключения к физической среде</li>
                <li><strong>PMD (Physical Medium Dependent)</strong> - подуровень, зависящий от физической среды</li>
              </ul>
              
              <h3>Кодирование данных:</h3>
              <ul className="list-disc pl-6">
                <li><strong>Manchester</strong> - используется в оригинальном 10 Мбит/с Ethernet</li>
                <li><strong>MLT-3 (Multi-Level Transmit)</strong> - используется в 100BASE-TX</li>
                <li><strong>PAM-5 (Pulse Amplitude Modulation)</strong> - используется в 1000BASE-T</li>
                <li><strong>8B/10B</strong> - используется в 1000BASE-X, преобразует 8 бит данных в 10-битовый код</li>
                <li><strong>64B/66B</strong> - используется в 10GBASE-R, преобразует 64 бита данных в 66-битовый код</li>
                <li><strong>PAM-16</strong> - используется в 25GBASE-T и 40GBASE-T</li>
                <li><strong>RS-FEC (Reed-Solomon Forward Error Correction)</strong> - коды коррекции ошибок, используемые в высокоскоростном Ethernet</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Структура физического уровня Ethernet"
                caption="Схема подуровней физического уровня Ethernet"
              />
              
              <h3 className="mt-6">Типы физических соединений:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Витая пара</strong> - наиболее распространенная среда для Ethernet до 10 Гбит/с
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует разъемы RJ-45</li>
                    <li>Требует 4 пары проводников для Gigabit Ethernet и выше</li>
                    <li>Максимальное расстояние обычно ограничено 100 метрами</li>
                  </ul>
                </li>
                <li><strong>Оптоволокно</strong> - используется для высокоскоростных и дальних соединений
                  <ul className="list-disc pl-6 mt-1">
                    <li>Многомодовое (MM) - для коротких расстояний (до 500 м)</li>
                    <li>Одномодовое (SM) - для дальних расстояний (до 10-40 км)</li>
                    <li>Использует разъемы LC, SC или MPO/MTP</li>
                  </ul>
                </li>
                <li><strong>Оптические трансиверы</strong> - модули для подключения к оптическим линиям
                  <ul className="list-disc pl-6 mt-1">
                    <li>SFP (Small Form-factor Pluggable) - для 1 Гбит/с</li>
                    <li>SFP+ - для 10 Гбит/с</li>
                    <li>QSFP+ - для 40 Гбит/с</li>
                    <li>QSFP28 - для 100 Гбит/с</li>
                    <li>QSFP-DD - для 400 Гбит/с</li>
                  </ul>
                </li>
              </ul>
              
              <InfoCard
                title="Дуплексные режимы и CSMA/CD"
                icon={<Timer className="h-5 w-5" />}
              >
                <p>
                  В ранних реализациях Ethernet использовался метод CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
                  для разрешения конфликтов при одновременной передаче:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Полудуплекс (Half-duplex)</strong> - устройства могут либо передавать, либо принимать данные в один момент времени</li>
                  <li><strong>Полный дуплекс (Full-duplex)</strong> - устройства могут одновременно передавать и принимать данные</li>
                </ul>
                <p className="mt-2">
                  Современные сети Ethernet работают в полнодуплексном режиме с коммутаторами, 
                  что исключает необходимость в CSMA/CD.
                </p>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Современные технологии Ethernet</h2>
              <p>
                Современный Ethernet продолжает развиваться, предлагая все более высокие скорости
                и новые возможности для удовлетворения растущих потребностей в пропускной способности.
              </p>
              
              <h3>Высокоскоростной Ethernet:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>25G Ethernet (IEEE 802.3by)</strong> - для серверных подключений
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует одну полосу 25 Гбит/с</li>
                    <li>Экономичная альтернатива 40G Ethernet</li>
                  </ul>
                </li>
                <li><strong>40G Ethernet (IEEE 802.3ba)</strong> - для агрегации трафика и магистральных линий
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует 4 полосы по 10 Гбит/с или 8 полос по 5 Гбит/с</li>
                  </ul>
                </li>
                <li><strong>100G Ethernet (IEEE 802.3ba, 802.3bm)</strong> - для центров обработки данных и операторов связи
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует 4 полосы по 25 Гбит/с или 10 полос по 10 Гбит/с</li>
                  </ul>
                </li>
                <li><strong>200G Ethernet (IEEE 802.3cd)</strong> - для высокопроизводительных приложений
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует 4 полосы по 50 Гбит/с или 8 полос по 25 Гбит/с</li>
                  </ul>
                </li>
                <li><strong>400G Ethernet (IEEE 802.3bs, 802.3ck)</strong> - для магистральных сетей и крупных ЦОД
                  <ul className="list-disc pl-6 mt-1">
                    <li>Использует 8 полос по 50 Гбит/с или 4 полосы по 100 Гбит/с</li>
                  </ul>
                </li>
                <li><strong>800G Ethernet и 1.6T Ethernet</strong> - в процессе разработки</li>
              </ul>
              
              <h3>Энергоэффективный Ethernet (IEEE 802.3az):</h3>
              <ul className="list-disc pl-6">
                <li>Снижает энергопотребление при отсутствии трафика</li>
                <li>Перевод интерфейса в режим пониженного энергопотребления (Low Power Idle)</li>
                <li>Поддерживается большинством современных сетевых устройств</li>
              </ul>
            </div>
            
            <div>
              <h3>Power over Ethernet (PoE):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>IEEE 802.3af (PoE)</strong> - до 15,4 Вт на порт</li>
                <li><strong>IEEE 802.3at (PoE+)</strong> - до 30 Вт на порт</li>
                <li><strong>IEEE 802.3bt (PoE++)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Type 3 - до 60 Вт на порт</li>
                    <li>Type 4 - до 100 Вт на порт</li>
                  </ul>
                </li>
                <li>Позволяет передавать питание и данные по одному кабелю</li>
                <li>Применяется для IP-телефонов, Wi-Fi точек доступа, камер видеонаблюдения и т.д.</li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Высокоскоростной Ethernet"
                caption="Архитектура современной высокоскоростной сети Ethernet"
              />
              
              <InfoCard
                title="Технологии для центров обработки данных"
                icon={<Layers className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Современные ЦОД используют специализированные технологии Ethernet:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Ethernet Backplane</strong> - для соединений внутри шасси и стоек</li>
                  <li><strong>QSFP-DD и OSFP</strong> - новые форм-факторы трансиверов для 400G и выше</li>
                  <li><strong>Direct Attach Copper (DAC)</strong> - медные кабели с интегрированными трансиверами для коротких соединений</li>
                  <li><strong>Active Optical Cables (AOC)</strong> - оптические кабели с интегрированными трансиверами</li>
                  <li><strong>PAM4</strong> - 4-уровневая импульсно-амплитудная модуляция для высокоскоростной передачи</li>
                  <li><strong>IEEE 802.1CM (Time-Sensitive Networking)</strong> - для приложений, чувствительных к задержкам</li>
                  <li><strong>IEEE 802.1Qbu/802.3br (Frame Preemption)</strong> - прерывание кадров для критичного трафика</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EthernetPage;