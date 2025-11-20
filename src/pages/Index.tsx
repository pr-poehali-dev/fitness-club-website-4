import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const workouts = [
  {
    id: 1,
    title: 'Кардио тренировки',
    description: 'Беговые дорожки, велотренажеры, эллипсоиды для жиросжигания',
    icon: 'Heart',
    image: 'https://cdn.poehali.dev/projects/5e3a41f4-9b6b-48ad-b8b3-0ca705f7bc8e/files/9136ba3d-257a-4287-a4a7-b025940fc0f2.jpg'
  },
  {
    id: 2,
    title: 'Силовые тренировки',
    description: 'Работа с весами, тренажеры для набора мышечной массы',
    icon: 'Dumbbell',
    image: 'https://cdn.poehali.dev/projects/5e3a41f4-9b6b-48ad-b8b3-0ca705f7bc8e/files/e7757d85-a4b3-419b-adf5-32e19f5d1ceb.jpg'
  },
  {
    id: 3,
    title: 'Групповые занятия',
    description: 'Йога, пилатес, зумба, функциональный тренинг',
    icon: 'Users',
    image: 'https://cdn.poehali.dev/projects/5e3a41f4-9b6b-48ad-b8b3-0ca705f7bc8e/files/bbae83be-4a6c-4e0e-b35e-804a7787d8eb.jpg'
  }
];

const memberships = [
  {
    id: 1,
    title: 'Базовый',
    price: '2 990',
    period: 'мес',
    features: ['Тренажерный зал', 'Раздевалки и душ', 'Wi-Fi'],
    popular: false
  },
  {
    id: 2,
    title: 'Стандарт',
    price: '4 990',
    period: 'мес',
    features: ['Тренажерный зал', 'Групповые занятия', 'Бассейн', 'Сауна', 'Персональный шкафчик'],
    popular: true
  },
  {
    id: 3,
    title: 'Премиум',
    price: '7 990',
    period: 'мес',
    features: ['Все возможности клуба', '2 персональные тренировки', 'SPA-зона', 'Массаж', 'Питание от шеф-повара'],
    popular: false
  }
];

const trainers = [
  {
    id: 1,
    name: 'Алексей Иванов',
    specialty: 'Силовой тренинг',
    experience: '8 лет опыта',
    image: 'https://cdn.poehali.dev/projects/5e3a41f4-9b6b-48ad-b8b3-0ca705f7bc8e/files/e7757d85-a4b3-419b-adf5-32e19f5d1ceb.jpg'
  },
  {
    id: 2,
    name: 'Мария Соколова',
    specialty: 'Йога и пилатес',
    experience: '6 лет опыта',
    image: 'https://cdn.poehali.dev/projects/5e3a41f4-9b6b-48ad-b8b3-0ca705f7bc8e/files/bbae83be-4a6c-4e0e-b35e-804a7787d8eb.jpg'
  },
  {
    id: 3,
    name: 'Дмитрий Петров',
    specialty: 'Функциональный тренинг',
    experience: '10 лет опыта',
    image: 'https://cdn.poehali.dev/projects/5e3a41f4-9b6b-48ad-b8b3-0ca705f7bc8e/files/9136ba3d-257a-4287-a4a7-b025940fc0f2.jpg'
  }
];

const schedule = [
  { id: 1, time: '07:00', class: 'Утренняя йога', trainer: 'Мария Соколова', spots: 5, total: 15 },
  { id: 2, time: '09:00', class: 'Силовая тренировка', trainer: 'Алексей Иванов', spots: 3, total: 10 },
  { id: 3, time: '11:00', class: 'Функциональный тренинг', trainer: 'Дмитрий Петров', spots: 8, total: 12 },
  { id: 4, time: '14:00', class: 'Пилатес', trainer: 'Мария Соколова', spots: 2, total: 15 },
  { id: 5, time: '17:00', class: 'HIIT тренировка', trainer: 'Алексей Иванов', spots: 6, total: 12 },
  { id: 6, time: '19:00', class: 'Вечерняя йога', trainer: 'Мария Соколова', spots: 10, total: 15 },
  { id: 7, time: '20:00', class: 'Кроссфит', trainer: 'Дмитрий Петров', spots: 4, total: 10 }
];

export default function Index() {
  const [bookedClasses, setBookedClasses] = useState<number[]>([]);

  const handleBookClass = (classId: number) => {
    if (bookedClasses.includes(classId)) {
      setBookedClasses(bookedClasses.filter(id => id !== classId));
    } else {
      setBookedClasses([...bookedClasses, classId]);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://cdn.poehali.dev/projects/5e3a41f4-9b6b-48ad-b8b3-0ca705f7bc8e/files/9136ba3d-257a-4287-a4a7-b025940fc0f2.jpg')` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              ТВОЯ СИЛА
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Современный фитнес-клуб с лучшими тренерами и оборудованием
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Calendar" className="mr-2" size={24} />
              Записаться на тренировку
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
              <Icon name="Play" className="mr-2" size={24} />
              Виртуальный тур
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Виды тренировок</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выбери свой путь к идеальной форме</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {workouts.map((workout) => (
              <Card 
                key={workout.id} 
                className="overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Icon name={workout.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{workout.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{workout.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Абонементы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выгодные предложения для каждого</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {memberships.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'border-primary border-2 shadow-lg shadow-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl">{plan.title}</CardTitle>
                  <div className="pt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Наши тренеры</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Профессионалы своего дела</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="overflow-hidden hover:scale-105 transition-all duration-300">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{trainer.name}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Award" size={18} className="text-primary" />
                      <span>{trainer.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Clock" size={18} className="text-secondary" />
                      <span>{trainer.experience}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Расписание на сегодня</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Записывайся на удобное время</p>
          
          <div className="grid gap-4 max-w-4xl mx-auto">
            {schedule.map((item) => {
              const isBooked = bookedClasses.includes(item.id);
              const spotsLeft = isBooked ? item.spots - 1 : item.spots;
              
              return (
                <Card 
                  key={item.id} 
                  className={`hover:shadow-lg transition-all duration-300 ${
                    isBooked ? 'border-primary border-2' : ''
                  }`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center gap-6 flex-1">
                        <div className="text-center min-w-[80px]">
                          <div className="text-3xl font-bold text-primary">{item.time}</div>
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{item.class}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Icon name="User" size={16} />
                            <span>{item.trainer}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">Осталось мест</div>
                          <div className={`text-2xl font-bold ${spotsLeft <= 3 ? 'text-destructive' : 'text-secondary'}`}>
                            {spotsLeft}/{item.total}
                          </div>
                        </div>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              size="lg"
                              variant={isBooked ? 'secondary' : 'default'}
                              onClick={() => handleBookClass(item.id)}
                            >
                              {isBooked ? (
                                <>
                                  <Icon name="CheckCircle" className="mr-2" size={20} />
                                  Записан
                                </>
                              ) : (
                                <>
                                  <Icon name="Calendar" className="mr-2" size={20} />
                                  Записаться
                                </>
                              )}
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                {isBooked ? 'Вы записаны!' : 'Запись на тренировку'}
                              </DialogTitle>
                              <DialogDescription>
                                {isBooked ? (
                                  <div className="space-y-4 pt-4">
                                    <div className="flex items-center gap-3 text-lg">
                                      <Icon name="CheckCircle" className="text-primary" size={24} />
                                      <span className="text-foreground">Вы успешно записаны на тренировку</span>
                                    </div>
                                    <div className="bg-card p-4 rounded-lg space-y-2">
                                      <p><strong>Тренировка:</strong> {item.class}</p>
                                      <p><strong>Время:</strong> {item.time}</p>
                                      <p><strong>Тренер:</strong> {item.trainer}</p>
                                    </div>
                                    <p className="text-sm">Не забудьте прийти за 10 минут до начала!</p>
                                  </div>
                                ) : (
                                  <div className="space-y-4 pt-4">
                                    <div className="bg-card p-4 rounded-lg space-y-2">
                                      <p><strong>Тренировка:</strong> {item.class}</p>
                                      <p><strong>Время:</strong> {item.time}</p>
                                      <p><strong>Тренер:</strong> {item.trainer}</p>
                                      <p><strong>Свободных мест:</strong> {item.spots}</p>
                                    </div>
                                    <p className="text-sm">Нажмите кнопку "Записаться" чтобы зарезервировать место</p>
                                  </div>
                                )}
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Начни меняться сегодня!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Первая тренировка — бесплатно. Приходи и убедись сам!
          </p>
          <Button size="lg" className="text-lg px-12 py-6 hover:scale-105 transition-transform">
            <Icon name="Sparkles" className="mr-2" size={24} />
            Получить бесплатную тренировку
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-card/50 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center justify-center gap-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                Адрес
              </h3>
              <p className="text-muted-foreground">г. Москва, ул. Спортивная, 15</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center justify-center gap-2">
                <Icon name="Phone" size={20} className="text-primary" />
                Телефон
              </h3>
              <p className="text-muted-foreground">+7 (495) 123-45-67</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center justify-center gap-2">
                <Icon name="Clock" size={20} className="text-primary" />
                Режим работы
              </h3>
              <p className="text-muted-foreground">Ежедневно с 06:00 до 23:00</p>
            </div>
          </div>
          <p className="text-muted-foreground">© 2024 Фитнес-клуб "Твоя Сила". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
