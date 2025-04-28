const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">О городе</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-lg mb-4">
              Новосибирск — крупнейший город Сибири, расположенный на берегах реки Обь. Основанный в 1893 году как поселение строителей железнодорожного моста, сегодня он превратился в современный мегаполис с населением более 1,6 миллиона человек.
            </p>
            <p className="text-lg mb-4">
              Город является административным центром Новосибирской области и Сибирского федерального округа, а также важным транспортным узлом, соединяющим Европу и Азию.
            </p>
            <p className="text-lg">
              Новосибирск славится своими научными достижениями, культурной жизнью и архитектурой, сочетающей исторические здания с современными сооружениями.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Панорама Новосибирска" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
