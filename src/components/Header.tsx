import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Новосибирск
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            О городе
          </a>
          <a href="#history" className="text-sm font-medium hover:text-primary transition-colors">
            История
          </a>
          <a href="#sights" className="text-sm font-medium hover:text-primary transition-colors">
            Достопримечательности
          </a>
          <a href="#facts" className="text-sm font-medium hover:text-primary transition-colors">
            Интересные факты
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost">
            🌙 / ☀️
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
