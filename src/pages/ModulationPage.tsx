import { Zap } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Radio, BarChart } from 'lucide-react';

const ModulationPage = () => {
  return (
    <div>
      <PageHeader 
        title="Модуляция сигналов" 
        description="Методы представления цифровой информации в виде аналоговых сигналов"
        icon={<Zap className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Модуляция сигналов"
          caption="Различные виды модуляции для передачи цифровых данных"
        />

        <div className="prose max-w-none">
          <p>
            Модуляция — это процесс изменения характеристик несущего сигнала в соответствии
            с передаваемой информацией. На физическом уровне модуляция является ключевым
            элементом, позволяющим эффективно передавать цифровые данные через различные
            среды передачи.
          </p>
          <p>
            Выбор метода модуляции существенно влияет на характеристики системы связи,
            такие как спектральная эффективность, помехоустойчивость, сложность реализации
            и энергоэффективность. При выборе схемы модуляции необходимо учитывать
            характеристики канала связи и требования к системе.
          </p>
          <p>
            В этом разделе мы рассмотрим различные виды модуляции, используемые в современных 
            системах передачи данных, их характеристики и область применения.
          </p>
        </div>
      </div>

      <Tabs defaultValue="basic" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Базовые виды модуляции</TabsTrigger>
          <TabsTrigger value="advanced">Продвинутые методы</TabsTrigger>
          <TabsTrigger value="multi">Многочастотная модуляция</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Базовые виды модуляции</h2>
              <p>
                Базовые виды модуляции являются фундаментальными методами, на которых
                строятся более сложные схемы модуляции. Они изменяют одну из основных
                характеристик несущего сигнала: амплитуду, частоту или фазу.
              </p>
              
              <h3>Амплитудная модуляция (AM):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Принцип</strong>: изменение амплитуды несущего сигнала в соответствии с передаваемой информацией</li>
                <li><strong>Математическое представление</strong>: s(t) = A(t) × cos(2πft), где A(t) - модулирующий сигнал</li>
                <li><strong>Цифровые варианты</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>ASK (Amplitude Shift Keying) - амплитудная манипуляция</li>
                    <li>OOK (On-Off Keying) - включение/выключение несущей</li>
                  </ul>
                </li>
                <li><strong>Преимущества</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Простая реализация</li>
                    <li>Низкие требования к полосе пропускания</li>
                  </ul>
                </li>
                <li><strong>Недостатки</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Низкая помехоустойчивость</li>
                    <li>Низкая энергетическая эффективность</li>
                    <li>Чувствительность к изменению уровня сигнала</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Радиовещание в диапазонах ДВ, СВ, КВ</li>
                    <li>Простые системы дистанционного управления</li>
                    <li>RFID-системы</li>
                    <li>Оптические системы связи</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Частотная модуляция (FM):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Принцип</strong>: изменение частоты несущего сигнала в соответствии с передаваемой информацией</li>
                <li><strong>Математическое представление</strong>: s(t) = A × cos(2πft + 2πkf∫m(τ)dτ), где m(t) - модулирующий сигнал</li>
                <li><strong>Цифровые варианты</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>FSK (Frequency Shift Keying) - частотная манипуляция</li>
                    <li>MSK (Minimum Shift Keying) - минимальная частотная манипуляция</li>
                    <li>GFSK (Gaussian Frequency Shift Keying) - гауссовская FSK</li>
                  </ul>
                </li>
                <li><strong>Преимущества</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Высокая помехоустойчивость к аддитивным помехам</li>
                    <li>Нечувствительность к изменению амплитуды</li>
                    <li>Лучшее качество воспроизведения по сравнению с AM</li>
                  </ul>
                </li>
                <li><strong>Недостатки</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Требует большей полосы пропускания</li>
                    <li>Более сложная реализация</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>FM-радиовещание</li>
                    <li>Bluetooth (GFSK в базовой скорости)</li>
                    <li>Некоторые системы беспроводной связи ближнего действия</li>
                    <li>Телеметрия</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Фазовая модуляция (PM):</h3>
              <ul className="list-disc pl-6">
                <li><strong>Принцип</strong>: изменение фазы несущего сигнала в соответствии с передаваемой информацией</li>
                <li><strong>Математическое представление</strong>: s(t) = A × cos(2πft + φ(t)), где φ(t) - модулирующий сигнал</li>
                <li><strong>Цифровые варианты</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>PSK (Phase Shift Keying) - фазовая манипуляция</li>
                    <li>BPSK (Binary PSK) - двоичная PSK</li>
                    <li>QPSK (Quadrature PSK) - квадратурная PSK</li>
                    <li>8-PSK, 16-PSK и т.д.</li>
                  </ul>
                </li>
                <li><strong>Преимущества</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Лучшая помехоустойчивость, чем у ASK</li>
                    <li>Постоянная амплитуда (для чистой PSK)</li>
                    <li>Эффективное использование полосы частот</li>
                  </ul>
                </li>
                <li><strong>Недостатки</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Требует когерентного детектирования</li>
                    <li>Чувствительность к фазовым искажениям</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Спутниковая связь</li>
                    <li>Мобильная связь</li>
                    <li>Цифровое телевидение</li>
                    <li>Wi-Fi и другие системы беспроводной связи</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Дифференциальная фазовая модуляция:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Принцип</strong>: информация кодируется в изменении фазы относительно предыдущего символа</li>
                <li><strong>Варианты</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>DPSK (Differential PSK) - дифференциальная фазовая манипуляция</li>
                    <li>DQPSK (Differential QPSK) - дифференциальная квадратурная фазовая манипуляция</li>
                  </ul>
                </li>
                <li><strong>Преимущества</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Не требует когерентного детектирования</li>
                    <li>Устойчивость к фазовому сдвигу канала</li>
                  </ul>
                </li>
                <li><strong>Недостатки</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Ухудшенная помехоустойчивость по сравнению с когерентной PSK</li>
                    <li>Распространение ошибок (ошибка в одном символе влияет на декодирование следующего)</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Некоторые стандарты Wi-Fi</li>
                    <li>Bluetooth</li>
                    <li>Системы с быстро изменяющимися характеристиками канала</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Базовые виды модуляции"
                caption="Амплитудная, частотная и фазовая модуляция для цифрового сигнала"
              />
              
              <h3 className="mt-6">Сравнение базовых видов модуляции:</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="py-2 px-3 border">Вид модуляции</th>
                      <th className="py-2 px-3 border">Спектральная эффективность</th>
                      <th className="py-2 px-3 border">Помехоустойчивость</th>
                      <th className="py-2 px-3 border">Сложность</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-3 border">ASK (OOK)</td>
                      <td className="py-2 px-3 border">Средняя</td>
                      <td className="py-2 px-3 border">Низкая</td>
                      <td className="py-2 px-3 border">Низкая</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">FSK</td>
                      <td className="py-2 px-3 border">Низкая</td>
                      <td className="py-2 px-3 border">Средняя</td>
                      <td className="py-2 px-3 border">Средняя</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">BPSK</td>
                      <td className="py-2 px-3 border">Средняя</td>
                      <td className="py-2 px-3 border">Высокая</td>
                      <td className="py-2 px-3 border">Средняя</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">QPSK</td>
                      <td className="py-2 px-3 border">Высокая</td>
                      <td className="py-2 px-3 border">Средне-высокая</td>
                      <td className="py-2 px-3 border">Средняя</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 border">DPSK</td>
                      <td className="py-2 px-3 border">Средняя</td>
                      <td className="py-2 px-3 border">Средняя</td>
                      <td className="py-2 px-3 border">Средняя</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <InfoCard
                title="Квадратурная модуляция"
                icon={<Activity className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Квадратурная модуляция использует два несущих сигнала одинаковой частоты, смещенных по фазе на 90°:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>I (In-phase)</strong> - синфазная составляющая</li>
                  <li><strong>Q (Quadrature)</strong> - квадратурная составляющая</li>
                </ul>
                <p className="mt-2">
                  Такой подход позволяет передавать два потока данных одновременно на одной частоте,
                  эффективно используя спектр. QPSK является простейшей квадратурной модуляцией,
                  где каждая точка созвездия представляет 2 бита информации.
                </p>
                <p className="mt-2">
                  Квадратурная модуляция лежит в основе большинства современных систем связи,
                  включая сотовую связь, Wi-Fi, спутниковую связь и цифровое телевидение.
                </p>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Продвинутые методы модуляции</h2>
              <p>
                Продвинутые методы модуляции позволяют передавать больше информации
                за один символ, повышая спектральную эффективность системы связи.
                Эти методы часто используют комбинации амплитудной и фазовой модуляции,
                формируя сложные сигнальные созвездия.
              </p>
              
              <h3>Квадратурная амплитудная модуляция (QAM):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Принцип</strong>: одновременное изменение амплитуды и фазы несущего сигнала</li>
                <li><strong>Математическое представление</strong>: s(t) = I(t) × cos(2πft) + Q(t) × sin(2πft)</li>
                <li><strong>Варианты</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>4-QAM (эквивалентно QPSK)</li>
                    <li>16-QAM: 4 бита на символ</li>
                    <li>64-QAM: 6 битов на символ</li>
                    <li>256-QAM: 8 битов на символ</li>
                    <li>1024-QAM: 10 битов на символ</li>
                    <li>4096-QAM: 12 битов на символ</li>
                  </ul>
                </li>
                <li><strong>Преимущества</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Высокая спектральная эффективность</li>
                    <li>Эффективное использование мощности передатчика</li>
                    <li>Масштабируемость (возможность выбора оптимального варианта для конкретных условий)</li>
                  </ul>
                </li>
                <li><strong>Недостатки</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Чувствительность к шуму и искажениям (особенно высокоуровневые QAM)</li>
                    <li>Необходимость высокого отношения сигнал/шум</li>
                    <li>Сложность реализации для высоких порядков</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Цифровое телевидение (DVB-C, DVB-T)</li>
                    <li>Wi-Fi (802.11a/g/n/ac/ax)</li>
                    <li>Кабельные модемы (DOCSIS)</li>
                    <li>ADSL, VDSL</li>
                    <li>Системы мобильной связи 4G и 5G</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Фазово-импульсная модуляция:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>CPM (Continuous Phase Modulation)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Модуляция с непрерывной фазой</li>
                    <li>Постоянная амплитуда, плавные фазовые переходы</li>
                    <li>Хорошая спектральная эффективность</li>
                    <li>Высокая энергетическая эффективность</li>
                    <li>Применение: системы спутниковой и тактической связи</li>
                  </ul>
                </li>
                <li><strong>MSK (Minimum Shift Keying)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Особый случай CPM с индексом модуляции 0.5</li>
                    <li>Эквивалентно OQPSK с синусоидальным импульсным формированием</li>
                    <li>Постоянная амплитуда, непрерывная фаза</li>
                    <li>Применение: спутниковая связь, некоторые мобильные системы</li>
                  </ul>
                </li>
                <li><strong>GMSK (Gaussian Minimum Shift Keying)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>MSK с гауссовской фильтрацией перед модуляцией</li>
                    <li>Улучшенные спектральные характеристики</li>
                    <li>Применение: GSM, некоторые спутниковые системы</li>
                  </ul>
                </li>
              </ul>
              
              <h3>Многопозиционные варианты базовых видов модуляции:</h3>
              <ul className="list-disc pl-6">
                <li><strong>M-FSK</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Многопозиционная частотная манипуляция</li>
                    <li>Использование M различных частот</li>
                    <li>Каждый символ передает log₂(M) битов</li>
                    <li>Применение: системы с высокими требованиями к помехоустойчивости</li>
                  </ul>
                </li>
                <li><strong>M-PSK</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Многопозиционная фазовая манипуляция</li>
                    <li>M различных значений фазы</li>
                    <li>Каждый символ передает log₂(M) битов</li>
                    <li>8-PSK используется в DVB-S2, некоторых системах спутниковой связи</li>
                  </ul>
                </li>
                <li><strong>M-ASK</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Многопозиционная амплитудная манипуляция</li>
                    <li>M различных уровней амплитуды</li>
                    <li>Редко используется в чистом виде из-за низкой помехоустойчивости</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Сигнальные созвездия и их свойства:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Понятие сигнального созвездия</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Графическое представление сигнальных точек в комплексной плоскости</li>
                    <li>Оси I (действительная) и Q (мнимая)</li>
                    <li>Каждая точка представляет один символ модуляции</li>
                  </ul>
                </li>
                <li><strong>Евклидово расстояние</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Мера различия между сигналами</li>
                    <li>Чем больше минимальное расстояние между точками, тем выше помехоустойчивость</li>
                    <li>При увеличении порядка модуляции расстояние уменьшается (при той же средней энергии)</li>
                  </ul>
                </li>
                <li><strong>Оптимизация созвездий</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Круговые созвездия (для каналов с фазовым шумом)</li>
                    <li>Кодирование Грея (соседние точки отличаются только одним битом)</li>
                    <li>Неравномерные созвездия для неравномерных каналов</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Сигнальные созвездия"
                caption="Сигнальные созвездия различных видов модуляции: QPSK, 16-QAM, 64-QAM"
              />
              
              <h3 className="mt-6">Адаптивная модуляция и кодирование (AMC):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Принцип</strong>: динамическое изменение схемы модуляции и кодирования в зависимости от состояния канала</li>
                <li><strong>Параметры адаптации</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Отношение сигнал/шум (SNR)</li>
                    <li>Вероятность ошибки на бит (BER)</li>
                    <li>Скорость изменения канала</li>
                  </ul>
                </li>
                <li><strong>Преимущества</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Максимальное использование возможностей канала</li>
                    <li>Поддержание заданной надежности передачи</li>
                    <li>Эффективное использование энергии</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Wi-Fi (автоматический выбор модуляции)</li>
                    <li>LTE и 5G (выбор схемы модуляции и кодирования - MCS)</li>
                    <li>DVB-S2/DVB-T2 (адаптивное кодирование и модуляция - ACM)</li>
                    <li>ADSL/VDSL (адаптация к характеристикам линии)</li>
                  </ul>
                </li>
              </ul>
              
              <InfoCard
                title="Спектральная и энергетическая эффективность"
                icon={<BarChart className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  При выборе схемы модуляции инженеры сталкиваются с фундаментальным компромиссом:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Спектральная эффективность</strong> - количество бит, передаваемых на единицу полосы частот (бит/с/Гц)
                    <ul className="list-disc pl-6 mt-1">
                      <li>Повышается с увеличением порядка модуляции</li>
                      <li>256-QAM имеет в 2 раза большую спектральную эффективность, чем 16-QAM</li>
                    </ul>
                  </li>
                  <li><strong>Энергетическая эффективность</strong> - отношение энергии, затрачиваемой на передачу бита, к спектральной плотности шума
                    <ul className="list-disc pl-6 mt-1">
                      <li>Снижается с увеличением порядка модуляции</li>
                      <li>256-QAM требует примерно на 8 дБ большее отношение сигнал/шум, чем 16-QAM, для достижения той же вероятности ошибки</li>
                    </ul>
                  </li>
                </ul>
                <p className="mt-2">
                  Предел Шеннона определяет теоретический максимум пропускной способности канала
                  при заданном отношении сигнал/шум. Современные схемы модуляции и кодирования
                  стремятся приблизиться к этому пределу.
                </p>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="multi" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Многочастотная модуляция</h2>
              <p>
                Многочастотная модуляция разделяет доступную полосу частот на множество
                узких поднесущих, что позволяет эффективно бороться с многолучевым
                распространением сигнала и частотно-избирательными замираниями. Эти методы
                стали основой для большинства современных широкополосных систем связи.
              </p>
              
              <h3>OFDM (Orthogonal Frequency Division Multiplexing):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Принцип</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Разделение широкой полосы частот на множество узких ортогональных поднесущих</li>
                    <li>Передача данных параллельно на всех поднесущих</li>
                    <li>Использование циклического префикса для борьбы с межсимвольной интерференцией</li>
                    <li>Эффективная реализация с помощью алгоритмов быстрого преобразования Фурье (FFT/IFFT)</li>
                  </ul>
                </li>
                <li><strong>Математическое представление</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>s(t) = Σ X[k] × e^(j2πkt/T), где X[k] - комплексные модуляционные символы, T - длительность символа</li>
                    <li>Интервал между поднесущими Δf = 1/T обеспечивает их ортогональность</li>
                  </ul>
                </li>
                <li><strong>Преимущества</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Высокая устойчивость к многолучевому распространению</li>
                    <li>Эффективное использование спектра</li>
                    <li>Простота эквализации канала</li>
                    <li>Гибкость в распределении ресурсов</li>
                  </ul>
                </li>
                <li><strong>Недостатки</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Чувствительность к частотному сдвигу и фазовому шуму</li>
                    <li>Высокое отношение пиковой мощности к средней (PAPR)</li>
                    <li>Необходимость точной синхронизации</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Wi-Fi (IEEE 802.11a/g/n/ac/ax)</li>
                    <li>LTE и 5G (нисходящий канал)</li>
                    <li>Цифровое телевидение (DVB-T/T2, ISDB-T)</li>
                    <li>Цифровое радио (DAB)</li>
                    <li>DSL (ADSL, VDSL)</li>
                  </ul>
                </li>
              </ul>
              
              <h3>OFDMA (Orthogonal Frequency Division Multiple Access):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Принцип</strong>: расширение OFDM для многопользовательского доступа</li>
                <li><strong>Особенности</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Разделение поднесущих между разными пользователями</li>
                    <li>Возможность динамического распределения ресурсов</li>
                    <li>Гранулярное управление качеством обслуживания (QoS)</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>LTE и 5G (нисходящий и восходящий каналы)</li>
                    <li>Wi-Fi 6/6E/7 (IEEE 802.11ax/be)</li>
                    <li>WiMAX (IEEE 802.16)</li>
                  </ul>
                </li>
              </ul>
              
              <h3>SC-FDMA (Single Carrier Frequency Division Multiple Access):</h3>
              <ul className="list-disc pl-6">
                <li><strong>Принцип</strong>: модификация OFDMA с предварительным дискретным преобразованием Фурье</li>
                <li><strong>Особенности</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Низкое отношение пиковой мощности к средней (PAPR)</li>
                    <li>Более эффективное использование усилителя мощности</li>
                    <li>Сохранение многих преимуществ OFDMA</li>
                  </ul>
                </li>
                <li><strong>Применение</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>LTE (восходящий канал)</li>
                    <li>Некоторые варианты 5G (DFT-s-OFDM в восходящем канале)</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div>
              <h3>Другие многочастотные технологии:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>DMT (Discrete Multitone)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Вариант OFDM, используемый в DSL-технологиях</li>
                    <li>Адаптивное распределение битов и мощности по поднесущим</li>
                    <li>Учитывает частотную характеристику канала</li>
                    <li>Применение: ADSL, VDSL, G.fast</li>
                  </ul>
                </li>
                <li><strong>FBMC (Filter Bank Multicarrier)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Улучшенная спектральная локализация поднесущих</li>
                    <li>Не требует циклического префикса</li>
                    <li>Меньшие внеполосные излучения</li>
                    <li>Сложная реализация</li>
                    <li>Исследовалась для 5G, но не была принята</li>
                  </ul>
                </li>
                <li><strong>UFMC (Universal Filtered Multicarrier)</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Компромисс между OFDM и FBMC</li>
                    <li>Фильтрация групп поднесущих</li>
                    <li>Лучшие спектральные характеристики, чем у OFDM</li>
                    <li>Меньшая сложность, чем у FBMC</li>
                    <li>Исследовалась для 5G</li>
                  </ul>
                </li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="OFDM"
                caption="Принцип работы OFDM: разделение полосы на ортогональные поднесущие"
              />
              
              <h3 className="mt-6">Методы снижения PAPR:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Проблема PAPR</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Высокое отношение пиковой мощности к средней</li>
                    <li>Требует линейных усилителей с большим запасом по мощности</li>
                    <li>Снижает энергетическую эффективность передатчика</li>
                  </ul>
                </li>
                <li><strong>Методы решения</strong>:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Отсечение сигнала (Clipping and Filtering)</li>
                    <li>Резервирование поднесущих (Tone Reservation)</li>
                    <li>Частичное передаточное отображение (PTS)</li>
                    <li>Отбор последовательностей (SLM)</li>
                    <li>Переход к SC-FDMA или другим форматам с меньшим PAPR</li>
                  </ul>
                </li>
              </ul>
              
              <InfoCard
                title="Многоантенные технологии и OFDM"
                icon={<Radio className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Многочастотная модуляция OFDM отлично сочетается с многоантенными технологиями:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>MIMO-OFDM</strong>:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Комбинация MIMO (Multiple Input Multiple Output) и OFDM</li>
                      <li>Пространственное мультиплексирование для увеличения пропускной способности</li>
                      <li>Пространственное разнесение для повышения надежности</li>
                      <li>Независимая обработка каждой поднесущей упрощает эквализацию канала</li>
                      <li>Применение: Wi-Fi (802.11n/ac/ax), LTE, 5G</li>
                    </ul>
                  </li>
                  <li><strong>MU-MIMO</strong> (Multi-User MIMO):
                    <ul className="list-disc pl-6 mt-1">
                      <li>Одновременная передача разным пользователям, используя пространственное разделение</li>
                      <li>Формирование луча (beamforming) для фокусировки энергии в направлении пользователей</li>
                      <li>Существенное увеличение общей пропускной способности системы</li>
                      <li>Применение: Wi-Fi 5/6/7, LTE-Advanced, 5G</li>
                    </ul>
                  </li>
                  <li><strong>Massive MIMO</strong>:
                    <ul className="list-disc pl-6 mt-1">
                      <li>Использование очень большого числа антенн (десятки или сотни)</li>
                      <li>Высокая спектральная эффективность</li>
                      <li>Высокая энергетическая эффективность</li>
                      <li>Очень точное формирование луча</li>
                      <li>Применение: 5G, будущие системы беспроводной связи</li>
                    </ul>
                  </li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModulationPage;