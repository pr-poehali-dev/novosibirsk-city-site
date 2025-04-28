
import { Card, CardContent } from "./ui/card";

const SightsSection = () => {
  const attractions = [
    {
      name: "Новосибирский театр оперы и балета",
      description: "Крупнейшее театральное здание России, символ города с уникальной архитектурой",
      image: "https://images.unsplash.com/photo-1563540798716-b4c0bc4beef5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
      name: "Новосибирский зоопарк",
      description: "Один из крупнейших зоопарков России с коллекцией более 11 000 животных",
      image: "https://images.unsplash.com/photo-1568990293083-498dded38cec?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    },
    {
      name: "Академгородок",
      description: "Научный центр с десятками исследовательских институтов и университетом",
      image: "https://images.unsplash.com/photo-1579775153889-22658bee9bde?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="sights" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          Достопримечательности
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{attraction.name}</h3>
                <p className="text-muted-foreground">{attraction.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <Card className="overflow-hidden shadow-lg hover-scale">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1577127296888-e816b3e19bbf?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
                alt="Бугринский мост" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Бугринский мост</h3>
              <p className="text-muted-foreground">Вантовый мост с арочным пролётом, ставший новым символом города</p>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden shadow-lg hover-scale">
            <div className="h-64 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534359265607-b9cdb5e0a81e?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
                alt="Центральный парк" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Центральный парк</h3>
              <p className="text-muted-foreground">Любимое место отдыха горожан с аттракционами и зелёными зонами</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SightsSection;
