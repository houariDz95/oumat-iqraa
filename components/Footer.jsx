
const Footer = () => {
    return (
    <footer className="bg-gray-900 text-white py-4 w-screen">
      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="text-sm">
        &copy; 2023 oumat-iqraa. All rights reserved
        </div>
        <div className="text-sm">
          <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          <span className="mx-2">|</span>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
    );
  };

export default Footer