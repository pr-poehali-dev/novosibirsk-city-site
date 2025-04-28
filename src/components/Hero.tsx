
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586272515894-e7e75135b1fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-40"></div>
      <div className="container relative h-full flex flex-col justify-center items-center text-center gap-6 px-4 mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter animate-fade-in">
          Новосибирск
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl animate-fade-in opacity-90">
          Сердце Сибири — третий по численности город России и крупнейший
          научный, культурный и промышленный центр за Уралом
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4 animate-fade-in">
          <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
            <a href="#about">Узнать больше</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
