import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";

function Accordions() {
  const data = [
    {
      header: "Nasıl randevu alabilirim?",
      message:
        "Merhabalar sevgili danışan adayımız, randevu almak için *İletişim sayfamız üzerinde yer alan ''Size Nasıl Yardımcı Olabiliriz?'' kısmını doldurarak*0212 651 43 44 ü arayarak veya whatsapp üzerinden yazarak *elsdietcom kullanıcı adlı instagram hesabımız üzerinden mesaj yoluyla randevu alabilirsiniz",
    },
    {
      header: "Diyet hizmetiniz ile ilgili genel bilgi alabilir miyim?",
      message:
        "Merhabalar sevgili danışan adayımız. Diyet hizmetimiz 1 aylık paketlendirme sistemiyle yapılmakta olup görüşmeleriniz her hafta düzenli olarak toplam 4 görüşme şeklinde gerçekleştirilmektedir. Her hafta vücut ölçüm analiziniz yapılarak analiz sonucunuza göre yeni 1 haftalık diyet listeniz hazırlanmaktadır. İdeal kilonuza geldiğiniz zaman kilo koruma eğitimi verilerek web sitemiz üzerinden giriş yapabileceğiniz diyet profiliniz hazırlanmaktadır. Diyet profiliniz sayesinde de hayat boyu diyetisyen ekibimiz kilonuzu takip ederek ideal kilonuzda kalmanızı sağlamaktadır.",
    },
    {
      header: "Diyet profil sistemiyle ilgili kısaca bilgi verebilir misiniz?",
      message:
        "Merhabalar sevgili danışan adayımız; Kurum olarak hayatımızın tam merkezinde bulunan beslenme alışkanlıklarını hem iyileştirmek hem de sürdürülebilirlik kazandırmak amacıyla insanların tek tık uzağında bir profillerinin olmaları gerektiğini düşünerek Diyet Profil Sistemini oluşturduk. Danışanlarımız profillerinde; her ay yenilenen kendilerine özel hazırlanmış diyet listeleri, her hafta düzenli olarak yapılan güncel kilo girişleri ve bunların takiplerinin yapılacağı vücut analiz sayfaları, günlük fiziksel aktivite önerileri ve canlı destek hizmeti gibi daha birçok özelliği içinde bulunduran bir sistem bulacaktır. Kullanıcı profilleri sayesinde online hizmet alan danışanlarımız ideal kilolarına ulaşacak koruma sistemine geçen danışanlarımız ise hayat boyu ideal kilolarının takibini kolaylıkla yapabilecektir.",
    },
  ];

  const [veri, setVeri] = useState();

  return (
    <section className="acordions">
      <div className="container">
        <h2>Questions.. ?</h2>
        <div className="ac-boxs">
          {data.map((item, idx) => (
            <div className="acordion">
              <div
                className={veri === idx ? "ac-title active" : "ac-title"}
                onClick={() => {
                  if (veri === idx) {
                    setVeri(null);
                  } else {
                    setVeri(idx);
                  }
                }}
              >
                <h3>
                  {item.header}
                  {veri === idx ? (
                    <HiOutlineMinus style={{ float: "right" }} />
                  ) : (
                    <BsPlusLg style={{ float: "right" }} />
                  )}
                </h3>
              </div>
              <div
                className={veri === idx ? "ac-message active" : "ac-message"}
              >
                <p>{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Accordions;
