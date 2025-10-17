export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Loading or status section */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Loading content...</h3>
          <p>River State School of Nursing & Midwifery</p>
          <p className="mt-2 text-green-200 text-sm">
            info@rsn.edu.ng
            <br />
            +2348067153799
            <br />
            1526, PMB, Port Harcourt, Rivers State, Nigeria
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-1 text-green-200 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Staff Email</a></li>
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">CE-sPESS</a></li>
            <li><a href="#">ACEFUELS</a></li>
            <li><a href="#">Technical Team</a></li>
          </ul>
        </div>

        {/* Academic & Info Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Academics & Info</h3>
          <ul className="space-y-1 text-green-200 text-sm">
            <li><a href="#">RSN Anthem</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Research</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Academic Calendar</a></li>
          </ul>
        </div>

        {/* Affiliations & Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Affiliations & Resources</h3>
          <ul className="space-y-1 text-green-200 text-sm">
            <li><a href="#">IEEE</a></li>
            <li><a href="#">NCC</a></li>
            <li><a href="#">NUC</a></li>
            <li><a href="#">TETFUND</a></li>
            <li><a href="#">CISCO LMS</a></li>
            <li><a href="#">RSN Weather Repository</a></li>
            <li><a href="#">Location / Map</a></li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="text-center mt-10 border-t border-green-700 pt-6">
        <p>© {new Date().getFullYear()} River State School of Nursing & Midwifery</p>
        <p className="text-sm text-green-300">All rights reserved.</p>
      </div>
    </footer>
  );
}
