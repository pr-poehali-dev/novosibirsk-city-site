
import { Card, CardContent } from "./ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          О городе
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Новосибирск — третий по численности населения город России, 
              административный центр Новосибирской области и Сибирского федерального округа.
            </p>
            <p className="text-lg leading-relaxed">
              Расположен на обоих берегах реки Обь, Новосибирск является крупнейшим 
              транспортным, экономическим, культурным и научным центром Сибири.
            </p>
            <ul className="space-y-2 mt-6">
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Население: около 1,6 миллиона человек (2023)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Площадь города: 502,7 км²</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Основан: в 1893 году</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✦</span>
                <span>Статус города: с 1903 года</span>
              </li>
            </ul>
          </div>
          
          <Card className="overflow-hidden shadow-md">
            <CardContent className="p-0">
              <img 
                src="https://images.unsplash.com/photo-1588409626864-2dd67fc974e3?auto=format&fit=crop&q=80&w=2060&ixlib=rb-4.0.3" 
                alt="Панорама Новосибирска" 
                className="w-full h-[350px] object-cover"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
