function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white mt-16 py-8 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">&copy; {year} OTP. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=100075791903242"
            className="text-gray-600 hover:text-blue-600"
            target="_blank"
          >
            Facebook
          </a>
          <a
            href="https://x.com/tunji_paul_"
            className="text-gray-600 hover:text-blue-600"
            target="_blank"
          >
            Twitter
          </a>
          <a
            href="https://www.instagram.com/_tunji_paul/"
            className="text-gray-600 hover:text-blue-600"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
