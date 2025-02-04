import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center">
      {/* Header */}
      <header className="p-4 flex justify-center"> {/* Removed fixed, top-0, left-0, right-0, z-10, and shadow-md */}
        <img
          src="https://cdn.worldvectorlogo.com/logos/shopee-logo.svg"
          alt="Shopee Logo"
          className="h-8"
        />
      </header>

      {/* Main Content */}
      <main className="max-w-md px-4 py-8 flex-1 w-full"> {/* Removed mt-16 */}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-xs p-4 mt-8 w-full">
        <div className="max-w-md mx-auto text-center">
          <p className="mb-2">© 2025 Shopee. Todos os direitos reservados.</p>
          <p>
            <a href="#" className="underline">Política de Privacidade</a> | <a href="#" className="underline">Termos de Uso Vendas e Reembolsos</a> | <a href="#" className="underline">Legal</a>
          </p>
          <p><a href="#" className="underline">Mapa do Site</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
