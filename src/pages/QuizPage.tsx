import { ListChecks } from 'lucide-react';
import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Check, X, HelpCircle, Trophy } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const QuizPage = () => {
  const questions: Question[] = [
    {
      id: 1,
      text: "Какой технический параметр физического уровня определяет максимальную скорость передачи данных?",
      options: [
        "Волновое сопротивление",
        "Полоса пропускания",
        "Длина кабеля",
        "Сопротивление проводника"
      ],
      correctAnswer: 1,
      explanation: "Полоса пропускания (измеряемая в Гц) определяет диапазон частот, который может быть передан по каналу связи. Согласно теореме Найквиста-Шеннона, максимальная скорость передачи данных пропорциональна полосе пропускания."
    },
    {
      id: 2,
      text: "Какой тип модуляции используется в технологии Gigabit Ethernet по витой паре (1000BASE-T)?",
      options: [
        "64-QAM",
        "Manchester",
        "PAM-5",
        "NRZ"
      ],
      correctAnswer: 2,
      explanation: "1000BASE-T использует 5-уровневую импульсно-амплитудную модуляцию (PAM-5) по 4 парам проводников, что позволяет достичь скорости 1 Гбит/с."
    },
    {
      id: 3,
      text: "Какое явление лежит в основе передачи данных по оптоволокну?",
      options: [
        "Электромагнитная индукция",
        "Полное внутреннее отражение",
        "Электрическая проводимость",
        "Квантовое туннелирование"
      ],
      correctAnswer: 1,
      explanation: "Передача данных по оптоволокну основана на явлении полного внутреннего отражения света, когда луч распространяется внутри сердцевины волокна, многократно отражаясь от границы с оболочкой."
    },
    {
      id: 4,
      text: "Какой стандарт определяет физический уровень для беспроводных локальных сетей Wi-Fi?",
      options: [
        "IEEE 802.3",
        "IEEE 802.11",
        "IEEE 802.15",
        "IEEE 802.1"
      ],
      correctAnswer: 1,
      explanation: "IEEE 802.11 - это семейство стандартов для беспроводных локальных сетей (WLAN), известных как Wi-Fi. Оно определяет физический уровень и подуровень MAC канального уровня."
    },
    {
      id: 5,
      text: "Что такое MIMO в контексте физического уровня беспроводной связи?",
      options: [
        "Метод мультиплексирования частот",
        "Технология использования множества антенн для передачи и приема",
        "Тип модуляции для высокоскоростной передачи",
        "Протокол синхронизации устройств"
      ],
      correctAnswer: 1,
      explanation: "MIMO (Multiple Input Multiple Output) - это технология, использующая несколько антенн для передачи и приема, что позволяет увеличить пропускную способность и надежность беспроводных систем."
    },
    {
      id: 6,
      text: "Какой метод кодирования используется в технологии 10 Gigabit Ethernet по оптоволокну?",
      options: [
        "8B/10B",
        "Manchester",
        "64B/66B",
        "NRZ"
      ],
      correctAnswer: 2,
      explanation: "10 Gigabit Ethernet по оптоволокну (10GBASE-R) использует кодирование 64B/66B, которое преобразует 64 бита данных в 66-битовые блоки, обеспечивая более высокую эффективность по сравнению с 8B/10B."
    },
    {
      id: 7,
      text: "Какая частота используется в стандарте Wi-Fi 6E?",
      options: [
        "2.4 ГГц",
        "5 ГГц",
        "6 ГГц",
        "60 ГГц"
      ],
      correctAnswer: 2,
      explanation: "Wi-Fi 6E (802.11ax) расширяет возможности Wi-Fi 6, добавляя поддержку диапазона 6 ГГц (5.925-7.125 ГГц) к существующим диапазонам 2.4 ГГц и 5 ГГц."
    },
    {
      id: 8,
      text: "Что такое WDM в оптических системах передачи данных?",
      options: [
        "Метод кодирования данных",
        "Технология мультиплексирования по длине волны",
        "Тип оптического волокна",
        "Протокол управления потоком"
      ],
      correctAnswer: 1,
      explanation: "WDM (Wavelength Division Multiplexing) - технология мультиплексирования, позволяющая передавать несколько оптических сигналов с разными длинами волн по одному оптоволокну."
    },
    {
      id: 9,
      text: "Какой компонент физического уровня отвечает за преобразование цифровых данных в электрические сигналы?",
      options: [
        "Маршрутизатор",
        
        "Трансивер",
        "Коммутатор",
        "Межсетевой экран"
      ],
      correctAnswer: 1,
      explanation: "Трансивер (приемопередатчик) отвечает за преобразование цифровых данных в сигналы, подходящие для передачи по физической среде, и обратное преобразование принятых сигналов в цифровые данные."
    },
    {
      id: 10,
      text: "Какой метод используется для обнаружения и исправления ошибок в высокоскоростных оптических системах?",
      options: [
        "Бит паритета",
        "CRC",
        "Reed-Solomon FEC",
        "XOR"
      ],
      correctAnswer: 2,
      explanation: "Коды Рида-Соломона (Reed-Solomon FEC) широко используются в высокоскоростных оптических системах для эффективного обнаружения и исправления ошибок, особенно пакетных ошибок."
    }
  ];
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  
  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };
  
  const handleCheckAnswer = () => {
    if (selectedOption !== null) {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestion] = selectedOption;
      setUserAnswers(newUserAnswers);
      
      setShowExplanation(true);
      
      if (selectedOption === questions[currentQuestion].correctAnswer) {
        setScore(score + 1);
      }
    }
  };
  
  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers(Array(questions.length).fill(null));
  };
  
  const renderQuizContent = () => {
    if (quizCompleted) {
      return (
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Тест завершен!
            </CardTitle>
            <CardDescription>
              Вы ответили правильно на {score} из {questions.length} вопросов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span>Результат:</span>
                <span>{Math.round((score / questions.length) * 100)}%</span>
              </div>
              <Progress value={(score / questions.length) * 100} className="h-3" />
            </div>
            
            <div className="space-y-4">
              {questions.map((q, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    {userAnswers[index] === q.correctAnswer ? (
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      <p className="font-medium">{q.text}</p>
                      <p className="text-sm mt-1">
                        Ваш ответ: {userAnswers[index] !== null ? q.options[userAnswers[index]] : 'Не выбран'}
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        Правильный ответ: {q.options[q.correctAnswer]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleRestartQuiz} className="w-full">Пройти тест еще раз</Button>
          </CardFooter>
        </Card>
      );
    }
    
    const question = questions[currentQuestion];
    
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center mb-2">
            <CardTitle>Вопрос {currentQuestion + 1} из {questions.length}</CardTitle>
            <span className="text-sm text-muted-foreground">Счет: {score}</span>
          </div>
          <Progress value={(currentQuestion / questions.length) * 100} className="h-2" />
          <CardDescription className="mt-4 text-base">{question.text}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedOption?.toString()} className="space-y-3">
            {question.options.map((option, index) => (
              <div key={index} className={`flex items-start space-x-2 rounded-md border p-3 
                ${showExplanation && index === question.correctAnswer ? 'bg-green-50 border-green-200' : ''}
                ${showExplanation && selectedOption === index && index !== question.correctAnswer ? 'bg-red-50 border-red-200' : ''}
              `}>
                <RadioGroupItem
                  value={index.toString()}
                  id={`option-${index}`}
                  disabled={showExplanation}
                  onClick={() => handleOptionSelect(index)}
                />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
                {showExplanation && index === question.correctAnswer && (
                  <Check className="h-5 w-5 text-green-500" />
                )}
                {showExplanation && selectedOption === index && index !== question.correctAnswer && (
                  <X className="h-5 w-5 text-red-500" />
                )}
              </div>
            ))}
          </RadioGroup>
          
          {showExplanation && (
            <div className="mt-6 p-4 bg-muted rounded-lg flex gap-2">
              <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium mb-1">Объяснение:</p>
                <p>{question.explanation}</p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {!showExplanation ? (
            <Button 
              onClick={handleCheckAnswer} 
              disabled={selectedOption === null}
              className="w-full"
            >
              Проверить ответ
            </Button>
          ) : (
            <Button onClick={handleNextQuestion} className="w-full">
              {currentQuestion < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
            </Button>
          )}
        </CardFooter>
      </Card>
    );
  };
  
  return (
    <div>
      <PageHeader 
        title="Тест по технологиям физического уровня" 
        description="Проверьте свои знания в области физического уровня передачи данных"
        icon={<ListChecks className="h-6 w-6" />}
      />
      
      <div className="mt-6">
        {renderQuizContent()}
      </div>
    </div>
  );
};

export default QuizPage;