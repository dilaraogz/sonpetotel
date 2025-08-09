import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Phone, Home, Gamepad2, Utensils, Stethoscope, Check, MapPin, ExternalLink, Menu, X } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import logoUrl from "@assets/otel1_1754752761581.jpg";

export default function PetHotelHomePage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="font-sans bg-pet-soft">
      {/* Header Navigation */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isHeaderScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img 
                src={logoUrl} 
                alt="Balıkesir Pet Oteli Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <h1 className="text-xl font-bold text-pet-brown-dark">Balıkesir Pet Oteli</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('hizmetler')}
                className="text-gray-600 hover:text-pet-primary transition-colors"
              >
                Hizmetlerimiz
              </button>
              <button 
                onClick={() => scrollToSection('veteriner')}
                className="text-gray-600 hover:text-pet-primary transition-colors"
              >
                Veteriner Kontrolü
              </button>
              <button 
                onClick={() => scrollToSection('iletisim')}
                className="text-gray-600 hover:text-pet-primary transition-colors"
              >
                İletişim
              </button>
            </nav>
            
            <button 
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('hizmetler')}
                  className="text-gray-600 hover:text-pet-primary transition-colors text-left px-4"
                >
                  Hizmetlerimiz
                </button>
                <button 
                  onClick={() => scrollToSection('veteriner')}
                  className="text-gray-600 hover:text-pet-primary transition-colors text-left px-4"
                >
                  Veteriner Kontrolü
                </button>
                <button 
                  onClick={() => scrollToSection('iletisim')}
                  className="text-gray-600 hover:text-pet-primary transition-colors text-left px-4"
                >
                  İletişim
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.7), rgba(99, 102, 241, 0.7)), url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-bounce mb-8">
            <Heart className="text-6xl text-pet-secondary mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Evcil Hayvanınız <br />
            <span className="text-pet-secondary">Güvenli Ellerde</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Balıkesir'in en güvenilir pet otelinde, sevimli dostlarınız veteriner eşliğinde profesyonel bakım altında
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl"
            >
              <a 
                href="https://instagram.com/balikesir.petoteli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <FaInstagram className="text-2xl" />
                <span>Instagram'da Takip Edin</span>
              </a>
            </Button>
            <Button 
              asChild
              size="lg"
              className="bg-pet-accent text-white px-8 py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-2xl"
            >
              <a 
                href="tel:+905444415213"
                className="flex items-center space-x-3"
              >
                <Phone className="text-xl" />
                <span>Hemen Arayın</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-pulse">
          <div className="text-2xl">↓</div>
        </div>
      </section>

      {/* Services Section */}
      <section id="hizmetler" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evcil hayvanlarınız için özel olarak tasarlanmış konforlu ve güvenli ortamda profesyonel bakım hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <Card className="bg-pet-warm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pet-primary rounded-full flex items-center justify-center mb-6">
                  <Home className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Konaklama</h3>
                <p className="text-gray-600 leading-relaxed">
                  Evcil hayvanlarınız için uygun konforlu odalar ve oyun alanları ile güvenli konaklama
                </p>
              </CardContent>
            </Card>

            {/* Service Card 2 */}
            <Card className="bg-pet-warm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pet-accent rounded-full flex items-center justify-center mb-6">
                  <Gamepad2 className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Oyun & Aktivite</h3>
                <p className="text-gray-600 leading-relaxed">
                  Günlük oyun saatleri, sosyalizasyon aktiviteleri ve eğlenceli zaman geçirme imkanları
                </p>
              </CardContent>
            </Card>

            {/* Service Card 3 */}
            <Card className="bg-pet-warm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pet-secondary rounded-full flex items-center justify-center mb-6">
                  <Utensils className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Beslenme</h3>
                <p className="text-gray-600 leading-relaxed">
                  Özel beslenme programları ve sağlıklı mama seçenekleri ile dengeli beslenme
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Veterinary Care Section */}
      <section id="veteriner" className="py-20 bg-gradient-to-br from-pet-primary to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-8">
                <Stethoscope className="text-3xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Veteriner Eşliğinde Profesyonel Bakım</h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Evcil hayvanınızın sağlığı bizim önceliğimiz. Deneyimli veteriner hekimlerimiz eşliğinde 7/24 sağlık kontrolü ve profesyonal bakım hizmeti sunuyoruz.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pet-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-white text-sm" />
                  </div>
                  <span className="text-lg">24 Saat Veteriner Kontrolü</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pet-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-white text-sm" />
                  </div>
                  <span className="text-lg">Acil Durum Müdahale Sistemi</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-pet-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-white text-sm" />
                  </div>
                  <span className="text-lg">Sağlık Takip Raporları</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Veteriner muayenesi" 
                className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-300" 
              />
              <div className="absolute -bottom-4 -right-4 bg-pet-secondary text-white p-6 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">7/24</div>
                  <div className="text-sm opacity-90">Veteriner Hizmeti</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Mutlu Anılar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Instagram hesabımızdan sevimli dostlarımızın keyifli anlarına göz atın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Gallery Image 1 */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <img 
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Mutlu köpekler oyun alanında" 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <img 
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Rahat kedi dinlenme alanı" 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400" 
                alt="Modern pet hotel odası" 
                className="w-full h-64 object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-xl"
            >
              <a 
                href="https://instagram.com/balikesir.petoteli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3"
              >
                <FaInstagram className="text-2xl" />
                <span>Daha Fazla Fotoğraf İçin Instagram</span>
                <ExternalLink className="text-lg" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-gradient-to-br from-pet-cream to-pet-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-pet-brown-dark">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">İletişim</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
              Evcil dostunuz için rezervasyon yapmak veya detaylı bilgi almak için bize ulaşın
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pet-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-pet-brown-dark">Telefon</h3>
                <a href="tel:+905444415213" className="text-lg text-pet-brown-dark opacity-90 hover:opacity-100 transition-opacity">
                  0544 441 52 13
                </a>
              </div>
              
              {/* Location */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pet-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-pet-brown-dark">Adres</h3>
                <p className="text-lg text-pet-brown-dark opacity-90">
                  Balıkesir Merkez
                </p>
              </div>
              
              {/* Instagram */}
              <div className="text-center">
                <div className="w-16 h-16 bg-pet-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaInstagram className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-pet-brown-dark">Instagram</h3>
                <a 
                  href="https://instagram.com/balikesir.petoteli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-pet-brown-dark opacity-90 hover:opacity-100 transition-opacity"
                >
                  @balikesir.petoteli
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="bg-pet-primary text-white px-8 py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-xl hover:bg-pet-accent"
              >
                <a 
                  href="tel:+905444415213"
                  className="flex items-center space-x-3"
                >
                  <Phone className="text-xl" />
                  <span>Hemen Arayın</span>
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-xl"
              >
                <a 
                  href="https://instagram.com/balikesir.petoteli" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <FaInstagram className="text-2xl" />
                  <span>Instagram'da Takip Edin</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pet-brown-dark text-pet-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <img 
                src={logoUrl} 
                alt="Balıkesir Pet Oteli Logo" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <h3 className="text-2xl font-bold">Balıkesir Pet Oteli</h3>
            </div>
            <p className="text-pet-cream opacity-80 mb-6 max-w-2xl mx-auto">
              Evcil dostlarınız için güvenli, konforlu ve sevgi dolu bir konaklama deneyimi. 
              Veteriner eşliğinde 7/24 profesyonel bakım hizmeti.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://instagram.com/balikesir.petoteli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pet-cream opacity-70 hover:text-pet-secondary hover:opacity-100 transition-all"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a 
                href="tel:+905444415213"
                className="text-pet-cream opacity-70 hover:text-pet-secondary hover:opacity-100 transition-all"
              >
                <Phone className="text-2xl" />
              </a>
            </div>
            
            <div className="border-t border-pet-primary pt-8">
              <p className="text-pet-cream opacity-60 text-sm">
                © 2024 Balıkesir Pet Oteli. Tüm hakları saklıdır. 
                Veteriner eşliğinde güvenilir pet bakım hizmeti.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
