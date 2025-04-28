
import { Card, CardContent } from "./ui/card";

const FactsSection = () => {
  const facts = [
    {
      icon: "🏙️",
      title: "Быстрорастущий город",
      description: "Новосибирск — самый быстрорастущий город в истории человечества: за первые 70 лет население выросло с нуля до одного миллиона"
    },
    {
      icon: "🎭",
      title: "Крупнейший театр",
      description: "Здесь находится крупнейшее здание театра в России — Новосибирский театр оперы и балета"
    },
    {
      icon: "🚇",
      title: "Восточное метро",
      description: "Новосибирский метрополитен — самый восточный метрополитен России"
    },
    {
      icon: "🏛️",
      title: "Огромная площадь",
      description: "Площадь Ленина в Новосибирске считается одной из самых больших площадей в России"
    },
    {
      icon: "🔬",
      title: "Академгородок",
      description: "В городе расположен Академгородок — всемирно известный научный центр с десятками исследовательских институтов"
    },
    {
      icon: "🌉",
      title: "Уникальный мост",
      description: "Бугринский мост — один из самых больших арочных мостов в мире, его арка имеет красный цвет и является визитной карточкой города"
    }
  ];

  return (
    <section id="facts" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Интересные факты
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <Card key={index} className="shadow-md hover-scale">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{fact.title}</h3>
                <p className="text-muted-foreground">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
