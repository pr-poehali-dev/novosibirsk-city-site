
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    document.title = "Новосибирск - столица Сибири";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Новосибирск</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">О городе</h2>
          <p className="mb-3">
            Новосибирск — третий по численности населения город России, административный центр 
            Новосибирской области и Сибирского федерального округа.
          </p>
          <p className="mb-3">
            Основан в 1893 году, статус города получил в 1903 году. Город расположен на обоих 
            берегах реки Обь и является важнейшим транспортным узлом Сибири.
          </p>
          <p>
            Население — около 1,6 миллиона человек (2025), площадь города — 502,7 км².
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">История</h2>
          <p className="mb-3">
            Новосибирск был основан в 1893 году как поселение строителей железнодорожного моста через 
            реку Обь и первоначально назывался Новониколаевск в честь императора Николая II.
          </p>
          <p className="mb-3">
            В советское время город был переименован в Новосибирск. В годы индустриализации 
            он стремительно развивался как промышленный и научный центр.
          </p>
          <p>
            Во время Великой Отечественной войны сюда были эвакуированы десятки предприятий, 
            что способствовало дальнейшему промышленному развитию города.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Достопримечательности</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Новосибирский театр оперы и балета — крупнейшее театральное здание России</li>
            <li>Новосибирский зоопарк — один из крупнейших зоопарков России</li>
            <li>Академгородок — научный центр с множеством институтов</li>
            <li>Бугринский мост — вантовый мост с арочным пролётом</li>
            <li>Центральный парк — любимое место отдыха горожан</li>
          </ul>
        </section>
        
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Интересные факты</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Новосибирск — самый быстрорастущий город в истории человечества: за первые 70 лет население выросло с нуля до одного миллиона</li>
            <li>Здесь находится крупнейшее здание театра в России — Новосибирский театр оперы и балета</li>
            <li>Новосибирский метрополитен — самый восточный метрополитен России</li>
            <li>Площадь Ленина в Новосибирске считается самой большой в России</li>
            <li>В городе расположен Академгородок — всемирно известный научный центр</li>
          </ul>
        </section>
      </main>
      
      <footer className="py-5 text-center text-sm text-gray-600 border-t">
        <p>© 2025 Сайт создан Антоном С.</p>
      </footer>
    </div>
  );
};

export default Index;
