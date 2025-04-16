import { Cpu } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import ImageCard from '@/components/ui/ImageCard';
import InfoCard from '@/components/ui/InfoCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WaveformSquare, Activity, PieChart } from 'lucide-react';

const ModulationPage = () => {
  return (
    <div>
      <PageHeader 
        title="Методы модуляции" 
        description="Технологии преобразования цифровых данных в аналоговые сигналы и обратно"
        icon={<Cpu className="h-6 w-6" />}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <ImageCard 
          imageSrc="/placeholder.svg" 
          alt="Методы модуляции"
          caption="Основные принципы модуляции сигналов для передачи данных"
        />

        <div className="prose max-w-none">
          <p>
            Модуляция — это процесс изменения параметров несущего сигнала в соответствии с информационным сигналом.
            Этот процесс необходим для эффективной передачи цифровых данных по различным физическим средам:
            по проводам, оптоволокну или воздушной среде.
          </p>
          <p>
            На физическом уровне модуляция позволяет преобразовывать биты (0 и 1) в сигналы, которые 
            могут быть переданы по каналу связи. Выбор метода модуляции зависит от характеристик канала связи,
            требуемой скорости передачи данных, устойчивости к помехам и энергетической эффективности.
          </p>
        </div>
      </div>

      <Tabs defaultValue="digital" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="digital">Цифровая модуляция</TabsTrigger>
          <TabsTrigger value="analog">Аналоговая модуляция</TabsTrigger>
          <TabsTrigger value="advanced">Продвинутые методы</TabsTrigger>
        </TabsList>
        
        <TabsContent value="digital" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Цифровая модуляция</h2>
              <p>
                Цифровая модуляция используется для передачи цифровых данных по физическим средам.
                Существует несколько основных типов цифровой модуляции, каждый со своими преимуществами и ограничениями.
              </p>
              
              <h3>Амплитудная манипуляция (ASK - Amplitude Shift Keying):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Значения битов кодируются различными уровнями амплитуды сигнала</li>
                <li>Простая в реализации, но чувствительна к шумам и помехам</li>
                <li>Примеры: OOK (On-Off Keying) - простейшая форма ASK</li>
                <li>Применение: оптические системы, RFID</li>
              </ul>
              
              <h3>Частотная манипуляция (FSK - Frequency Shift Keying):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Значения битов кодируются различными частотами сигнала</li>
                <li>Более устойчива к помехам по сравнению с ASK</li>
                <li>Разновидности: 2-FSK, 4-FSK, MSK (Minimum Shift Keying)</li>
                <li>Применение: радиомодемы, Bluetooth, беспроводные сенсоры</li>
              </ul>
              
              <h3>Фазовая манипуляция (PSK - Phase Shift Keying):</h3>
              <ul className="list-disc pl-6">
                <li>Значения битов кодируются изменениями фазы сигнала</li>
                <li>Разновидности: BPSK (2 фазы), QPSK (4 фазы), 8-PSK (8 фаз)</li>
                <li>Обеспечивает хорошую помехоустойчивость при эффективном использовании полосы</li>
                <li>Применение: Wi-Fi, спутниковая связь, сотовые сети</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Цифровая модуляция"
                caption="Сравнение форм сигналов при различных видах цифровой модуляции"
              />
              
              <h3 className="mt-6">Квадратурная амплитудная модуляция (QAM):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Комбинация амплитудной и фазовой модуляции</li>
                <li>Позволяет кодировать несколько бит в одном символе</li>
                <li>Варианты: 16-QAM (4 бита на символ), 64-QAM (6 бит), 256-QAM (8 бит), 1024-QAM (10 бит)</li>
                <li>Более эффективное использование полосы пропускания</li>
                <li>Требует более высокого отношения сигнал/шум</li>
                <li>Применение: кабельное телевидение, Wi-Fi, 4G/5G</li>
              </ul>
              
              <InfoCard
                title="Параметры цифровой модуляции"
                icon={<WaveformSquare className="h-5 w-5" />}
              >
                <ul className="list-disc pl-6">
                  <li><strong>Скорость передачи символов (Baud rate)</strong> - количество символов, передаваемых в секунду</li>
                  <li><strong>Скорость передачи данных (Bit rate)</strong> - количество бит, передаваемых в секунду</li>
                  <li><strong>Спектральная эффективность</strong> - отношение скорости передачи данных к занимаемой полосе частот (бит/с/Гц)</li>
                  <li><strong>Отношение сигнал/шум (SNR)</strong> - влияет на вероятность ошибки</li>
                  <li><strong>Коэффициент битовых ошибок (BER)</strong> - отношение числа ошибочно принятых бит к общему числу переданных бит</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="analog" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Аналоговая модуляция</h2>
              <p>
                Аналоговая модуляция используется для передачи аналогового сигнала (например, голоса или музыки)
                с помощью несущей волны. Хотя современные системы связи в основном цифровые, 
                аналоговая модуляция все еще используется в некоторых приложениях.
              </p>
              
              <h3>Амплитудная модуляция (AM):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Амплитуда несущей изменяется в соответствии с модулирующим сигналом</li>
                <li>Простая в реализации, но неэффективна по мощности</li>
                <li>Чувствительна к шумам и помехам</li>
                <li>Разновидности: DSB (Double Sideband), SSB (Single Sideband), VSB (Vestigial Sideband)</li>
                <li>Применение: радиовещание, авиационная связь</li>
              </ul>
              
              <h3>Частотная модуляция (FM):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Частота несущей изменяется в соответствии с модулирующим сигналом</li>
                <li>Более устойчива к шумам по сравнению с AM</li>
                <li>Требует большей полосы пропускания</li>
                <li>Обеспечивает высокое качество звука</li>
                <li>Применение: радиовещание, аналоговое телевидение, связь с подвижными объектами</li>
              </ul>
              
              <h3>Фазовая модуляция (PM):</h3>
              <ul className="list-disc pl-6">
                <li>Фаза несущей изменяется в соответствии с модулирующим сигналом</li>
                <li>Схожа по свойствам с FM</li>
                <li>Более сложная в реализации</li>
                <li>Применение: специализированные системы связи</li>
              </ul>
            </div>
            
            <div>
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Аналоговая модуляция"
                caption="Сравнение амплитудной (AM), частотной (FM) и фазовой (PM) модуляции"
              />
              
              <h3 className="mt-6">Сравнение аналоговой и цифровой модуляции:</h3>
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="p-2 text-left">Параметр</th>
                      <th className="p-2 text-left">Аналоговая</th>
                      <th className="p-2 text-left">Цифровая</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-2">Устойчивость к шумам</td>
                      <td className="p-2">Низкая</td>
                      <td className="p-2">Высокая</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Сложность обработки</td>
                      <td className="p-2">Простая</td>
                      <td className="p-2">Сложная</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Эффективность использования спектра</td>
                      <td className="p-2">Низкая</td>
                      <td className="p-2">Высокая</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Мультиплексирование</td>
                      <td className="p-2">Ограниченное</td>
                      <td className="p-2">Широкие возможности</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-2">Качество при ретрансляции</td>
                      <td className="p-2">Ухудшается</td>
                      <td className="p-2">Сохраняется</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <InfoCard
                title="Аналого-цифровое преобразование"
                icon={<Activity className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Для передачи аналоговых сигналов по цифровым системам используется аналого-цифровое преобразование:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>Дискретизация</strong> - выборка значений аналогового сигнала через равные промежутки времени</li>
                  <li><strong>Квантование</strong> - присвоение каждому отсчету дискретного значения из конечного набора</li>
                  <li><strong>Кодирование</strong> - представление квантованных значений в виде двоичного кода</li>
                  <li><strong>Теорема Котельникова-Найквиста</strong> - для полного восстановления аналогового сигнала частота дискретизации должна быть как минимум в 2 раза больше максимальной частоты в спектре сигнала</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h2>Продвинутые методы модуляции</h2>
              <p>
                Современные системы связи используют сложные методы модуляции и множественного доступа
                для максимизации эффективности использования спектра и повышения скорости передачи данных.
              </p>
              
              <h3>OFDM (Orthogonal Frequency Division Multiplexing):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Разделение канала на множество ортогональных поднесущих</li>
                <li>Каждая поднесущая модулируется низкоскоростным потоком данных</li>
                <li>Высокая спектральная эффективность</li>
                <li>Устойчивость к межсимвольной интерференции</li>
                <li>Применение: Wi-Fi, LTE, DVB, ADSL</li>
              </ul>
              
              <h3>CDMA (Code Division Multiple Access):</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Использование уникальных кодовых последовательностей для разделения пользователей</li>
                <li>Данные расширяются по спектру с помощью псевдослучайной последовательности</li>
                <li>Устойчивость к узкополосным помехам и подслушиванию</li>
                <li>Применение: сотовая связь 2G (IS-95), 3G (UMTS)</li>
              </ul>
              
              <h3>MIMO (Multiple Input Multiple Output):</h3>
              <ul className="list-disc pl-6">
                <li>Использование нескольких антенн для передачи и приема</li>
                <li>Пространственное мультиплексирование для увеличения скорости</li>
                <li>Разнесенная передача для повышения надежности</li>
                <li>Формирование луча для улучшения отношения сигнал/шум</li>
                <li>Применение: Wi-Fi, 4G, 5G</li>
              </ul>
            </div>
            
            <div>
              <h3>Технологии спектрального расширения:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>DSSS (Direct Sequence Spread Spectrum)</strong> - расширение спектра с помощью умножения сигнала на псевдослучайную последовательность</li>
                <li><strong>FHSS (Frequency Hopping Spread Spectrum)</strong> - быстрое переключение между различными несущими частотами</li>
                <li><strong>CSS (Chirp Spread Spectrum)</strong> - использование линейно-частотно-модулированных импульсов (чирпов)</li>
                <li>Повышенная устойчивость к помехам и подавлению</li>
                <li>Применение: военная связь, Bluetooth, Wi-Fi, LoRa</li>
              </ul>
              
              <ImageCard 
                imageSrc="/placeholder.svg" 
                alt="Продвинутые методы модуляции"
                caption="Иллюстрация принципа OFDM с множеством ортогональных поднесущих"
              />
              
              <InfoCard
                title="Техники множественного доступа"
                icon={<PieChart className="h-5 w-5" />}
                className="mt-6"
              >
                <p>
                  Методы множественного доступа позволяют нескольким пользователям совместно использовать один физический канал:
                </p>
                <ul className="list-disc pl-6">
                  <li><strong>FDMA (Frequency Division Multiple Access)</strong> - разделение по частоте</li>
                  <li><strong>TDMA (Time Division Multiple Access)</strong> - разделение по времени</li>
                  <li><strong>CDMA (Code Division Multiple Access)</strong> - разделение по коду</li>
                  <li><strong>SDMA (Space Division Multiple Access)</strong> - разделение по пространству</li>
                  <li><strong>OFDMA (Orthogonal Frequency Division Multiple Access)</strong> - комбинация OFDM и FDMA, используется в 4G/5G</li>
                  <li><strong>NOMA (Non-Orthogonal Multiple Access)</strong> - неортогональный множественный доступ, активно исследуется для 5G</li>
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