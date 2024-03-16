const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {" "}
      <nav>Navegacion de categorias</nav>
      {children}
    </main>
  );
};

export default Layout;
