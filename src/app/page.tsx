import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigace */}
      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Logo</Link>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="hover:text-gray-600">O mně</Link></li>
            <li><Link href="#portfolio" className="hover:text-gray-600">Portfolio</Link></li>
            <li><Link href="#contact" className="hover:text-gray-600">Kontakt</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero sekce */}
      <section className="pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* Zde přidejte video showreel nebo obrázek */}
            <div className="flex items-center justify-center text-4xl">Video Showreel</div>
          </div>
        </div>
      </section>

      {/* O mně sekce */}
      <section id="about" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">O mně</h2>
          <p className="max-w-2xl">
            Zde napište krátký popis o sobě a svých zkušenostech jako video producent a fotograf.
          </p>
        </div>
      </section>

      {/* Portfolio sekce */}
      <section id="portfolio" className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Zde přidejte náhledy portfolia */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-w-16 aspect-h-9 bg-gray-200">
                <div className="flex items-center justify-center">Projekt {item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt sekce */}
      <section id="contact" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Kontakt</h2>
          <form className="max-w-lg mx-auto">
            <input type="text" placeholder="Jméno" className="w-full mb-4 p-2 border rounded" />
            <input type="email" placeholder="E-mail" className="w-full mb-4 p-2 border rounded" />
            <textarea placeholder="Zpráva" className="w-full mb-4 p-2 border rounded h-32"></textarea>
            <button type="submit" className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700">Odeslat</button>
          </form>
        </div>
      </section>

      {/* Patička */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2024 Vaše Jméno. Všechna práva vyhrazena.</p>
          <div className="flex space-x-4">
            {/* Zde přidejte ikony sociálních médií */}
            <a href="#" className="hover:text-gray-400">FB</a>
            <a href="#" className="hover:text-gray-400">IG</a>
            <a href="#" className="hover:text-gray-400">TW</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
