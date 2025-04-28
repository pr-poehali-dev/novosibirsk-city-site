const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-6 border-t">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Все права защищены
          </div>
          <div className="text-sm text-muted-foreground">
            Сайт создан <span className="text-primary font-medium">Антоном Сыряминым</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
