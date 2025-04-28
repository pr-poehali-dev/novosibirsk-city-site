import { Card, CardContent } from "./ui/card";

const FactsSection = () => {
  const facts = [
    "Новосибирск — самый быстрорастущий город в истории: за первые 70 лет население увеличилось с нескольких сотен до миллиона жителей.",
    "Метромост через Обь — один из самых длинных метромостов в мире.",
    "В 1962 году в Новосибирске был открыт первый в СССР бизнес-центр."
  ];

  return (
    <section id="facts" className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Интересные факты</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary font-bold text-4xl flex justify-center">
                  {index + 1}
                </div>
                <p className="text-center">{fact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
