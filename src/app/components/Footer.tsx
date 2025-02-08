"use client"
import Image from "next/image";
import emailjs from 'emailjs-com';

export default function Footer() {
  
  // Handle email submission
  const sendEmail = (e:any) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        alert('Email sent successfully!');
      }, (error) => {
        alert('There was an error sending the email.');
      });
  };

  return (
    <footer className="bg-white relative flex flex-col py-10">
      {/* Top Section */}
      <section className="bg-[#ffffff] py-10">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
          </div>
          <div className="flex gap-6 mt-6 lg:mt-0">
            <Image src="/facebook.png" width={16} height={16} alt="fb" />
            <Image src="/twitter (1).png" width={16} height={16} alt="insta" />
            <Image src="/instagram.png" width={16} height={16} alt="twitter" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#e6e6e6]" />

      {/* Main Footer Content */}
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Company Info */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
              <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
            </nav>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Features</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
              <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
            <nav className="flex flex-col gap-2.5 mt-3">
              <a href="#" className="text-[#727272] text-sm font-bold">iOS & Android</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
              <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
              <a href="#" className="text-[#727272] text-sm font-bold">API</a>
            </nav>
          </div>

          {/* Get in Touch */}
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <form onSubmit={sendEmail} className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    name="user_email" // This name must match the template parameter in EmailJS
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#FAFAFA] py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <p className="text-[#727272] text-sm font-bold">Made with love by Aumbreen Zahara. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social icons or other content */}
          </div>
        </div>
      </section>
    </footer>
  );
}
