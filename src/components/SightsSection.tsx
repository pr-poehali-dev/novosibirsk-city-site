import { Card, CardContent } from "./ui/card";

const SightsSection = () => {
  const sights = [
    {
      name: "Новосибирский театр оперы и балета",
      description: "Крупнейший театр в России, уникальное архитектурное сооружение с самым большим в стране театральным куполом.",
      image: "https://images.unsplash.com/photo-1598871458289-992d4e2da756?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Новосибирский зоопарк",
      description: "Один из крупнейших зоопарков России, где обитает более 11 000 животных более 770 видов.",
      image: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Академгородок",
      description: "Научный центр Сибири, уникальное место, где научные институты расположены в живописном лесу.",
      image: "https://images.unsplash.com/photo-1505764761634-1d77b57e1966?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <section id="sights" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Достопримечательности</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {sights.map((sight, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={sight.image} 
                  alt={sight.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{sight.name}</h3>
                <p className="text-muted-foreground">{sight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SightsSection;
