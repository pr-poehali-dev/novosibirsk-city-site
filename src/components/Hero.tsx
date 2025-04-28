import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative h-[85vh] flex items-center">
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589122758779-0df750e72d2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Добро пожаловать в Новосибирск
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Третий по численности населения город России, культурный, научный и промышленный центр Сибири
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90">
              Узнать больше
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Планировать визит
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
