
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <p className="text-muted-foreground">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
