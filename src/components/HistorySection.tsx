import { Card, CardContent } from "./ui/card";

const HistorySection = () => {
  const historyMilestones = [
    {
      year: "1893",
      title: "Основание города",
      description: "Основан как поселение строителей железнодорожного моста через реку Обь. Первоначально назывался Новониколаевск.",
    },
    {
      year: "1925",
      title: "Переименование",
      description: "Город переименован в Новосибирск. Стал административным центром Сибирского края.",
    },
    {
      year: "1930-е",
      title: "Индустриализация",
      description: "Период быстрого роста и индустриализации. Новосибирск становится важным промышленным центром Сибири.",
    },
  ];

  return (
    <section id="history" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">История города</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {historyMilestones.map((milestone, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary font-bold text-xl">{milestone.year}</div>
                <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                <p className="text-muted-foreground">{milestone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-lg">
            За свою более чем 125-летнюю историю Новосибирск превратился из небольшого поселения в один из крупнейших городов России, став настоящей столицей Сибири.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
