export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white text-center py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Webshop. Minden jog fenntartva.</p>
        <div className="mt-2 flex justify-center gap-4 text-sm">
          <a href="/impresszum" className="hover:underline">Impresszum</a>
          <a href="/aszf" className="hover:underline">ÁSZF</a>
          <a href="/kapcsolat" className="hover:underline">Kapcsolat</a>
        </div>
      </div>
    </footer>
  );
}
