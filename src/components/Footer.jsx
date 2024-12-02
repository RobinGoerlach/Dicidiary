const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-gray-200 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Personal Digital Diary. All rights
            reserved.
          </p>
          <p className="text-xs font-semibold">
            Built with React, TailwindCSS, and DaisyUI.
          </p>
        </div>

        {/* Center Section (Optional Quote) */}
        <div className="text-center">
          <p className="italic text-sm font-mono">
            “Write what should not be forgotten.”
          </p>
          <p className="text-xs">
            <a href="https://www.isabelallende.com/">– Isabel Allende</a>
          </p>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <h3 className="text-l font-bold mb-2">The Team</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://github.com/MathiasZ91/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Mathias
              </a>
            </li>
            <li>
              <a
                href="https://github.com/MatteusCampanatti/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Matteus
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Robin"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Robin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ShirinHajiesmaeili"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Sharin
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
