import Link from 'next/link';

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  return <div id="copyright">© {currentYear}</div>;
};

export default function Myfooter() {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand and Copyright */}
          <div className="col-span-1">
            <h3 className="text-3xl font-bold pb-5">Furniro.</h3>
            <p className="text-gray-400">
              300 University Drive, Suite 500, <br />
              Carol Gabels, FL 33134, USA
            </p>
            <Copyright />
          </div>

          {/* Column 2: Links */}
          <div className="col-span-1">
            <h6 className="text-gray-400 text-lg p-3">Links</h6>
            <ul className="space-y-3">
              <li><Link className="text-white hover:text-gray-300" href="/">Home</Link></li>
              <li><Link className="text-white hover:text-gray-300" href="/shop">Shop</Link></li>
              <li><Link className="text-white hover:text-gray-300" href="/about">About</Link></li>
              <li><Link className="text-white hover:text-gray-300" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Help */}
          <div className="col-span-1">
            <h6 className="text-gray-400 text-lg p-3">Help</h6>
            <ul className="space-y-3">
              <li><Link className="text-white hover:text-gray-300" href="/payment-options">Payment Options</Link></li>
              <li><Link className="text-white hover:text-gray-300" href="/returns">Returns</Link></li>
              <li><Link className="text-white hover:text-gray-300" href="/privacy-policies">Privacy Policies</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-span-1">
            <h6 className="text-gray-400 text-lg p-3">Newsletter</h6>
            <form id="sub" className="flex flex-col space-y-3">
              <input 
                type="email" 
                className="form-input px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email" 
              />
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
