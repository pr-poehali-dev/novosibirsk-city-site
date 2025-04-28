
import { Card, CardContent } from "./ui/card";

const HistorySection = () => {
  return (
    <section id="history" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 relative">
          История города
          <span className="block w-20 h-1 bg-primary mx-auto mt-4"></span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-md hover-scale">
            <CardContent className="p-6 space-y-3">
              <div className="text-primary text-2xl font-bold">1893</div>
              <h3 className="text-xl font-semibold">Основание</h3>
              <p>
                Город был основан как поселение строителей железнодорожного моста через реку Обь. 
                Первоначально назывался Новониколаевск в честь императора Николая II.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover-scale">
            <CardContent className="p-6 space-y-3">
              <div className="text-primary text-2xl font-bold">1925</div>
              <h3 className="text-xl font-semibold">Переименование</h3>
              <p>
                Город был переименован в Новосибирск. В годы индустриализации он стремительно
                развивался как промышленный центр, получив статус столицы Сибирского края.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover-scale">
            <CardContent className="p-6 space-y-3">
              <div className="text-primary text-2xl font-bold">1941-1945</div>
              <h3 className="text-xl font-semibold">Военное время</h3>
              <p>
                Во время Великой Отечественной войны в Новосибирск были эвакуированы
                десятки предприятий из западных регионов страны, что дало мощный толчок
                промышленному развитию города.
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover-scale md:col-span-3">
            <CardContent className="p-6 space-y-3">
              <div className="text-primary text-2xl font-bold">1957 - наши дни</div>
              <h3 className="text-xl font-semibold">Научный центр</h3>
              <p>
                В 1957 году началось строительство Академгородка — научного центра с десятками
                исследовательских институтов. Сегодня Новосибирск — важнейший экономический, культурный,
                транспортный, образовательный и научный центр Сибири и всей России.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
