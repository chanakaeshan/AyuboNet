import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br " >
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-medium italic text-center mb-12" style={{ color: '#255F38' }}>GET IN TOUCH</h1>
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Card */}
            <div className="bg-[#fff] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <div className="space-y-8">
                <ContactItem
                  icon={<Mail className="w-6 h-6 text-blue-600" style={{ color: '#977c44' }} />}
                  title="Email Us" 
                  content={
                    <a
                      href="mailto:medilinkhealthcareservices190@gmail.com"
                      className="text-black hover:text-blue-700 transition-colors break-all hover:underline"
                    >
                      medilinkhealthcareservices190@gmail.com
                    </a>
                  }
                />

                <ContactItem
                  icon={<Phone className="w-6 h-6 text-blue-600"  style={{ color: '#977c44' }}/>}
                  title="Call Us"
                  content={
                    <div className="space-y-1">
                      <p className="text-black font-medium">
                        +94 11 269 1111
                      </p>
                      <p className="text-sm text-black">
                        Available Mon-Fri, 9AM-6PM
                      </p>
                    </div>
                  }
                />

                <ContactItem
                  icon={<MapPin className="w-6 h-6 text-blue-600" style={{ color: '#977c44' }}/>}
                  title="Visit Us"
                  content={
                    <address className="text-black not-italic">
                      Colombo General Hospital
                      <br />
                      Colombo, Sri Lanka
                    </address>
                  }
                />

                <ContactItem
                  icon={<Clock className="w-6 h-6 text-blue-600" style={{ color: '#977c44' }}/>}
                  title="Business Hours"
                  content={
                    <p className="text-black">
                      Mon-Fri: 9AM - 6PM
                      <br />
                      Sat: 10AM - 2PM
                      <br />
                      Sun: Closed
                    </p>
                  }
                />
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-[#fff] from-blue-500 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex gap-4 items-start">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                  <AlertCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    Need Immediate Help?
                  </h3>
                  <p className="text-black">
                    Our support team is available during business hours for
                    urgent assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Job Button */}
            <div className="bg-[#fff] rounded-2xl shadow-xl p-6 text-center text-black">
              <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
              <p className="text-black mb-4">
                We are always looking for talented individuals to join our
                growing team. If you're interested in exploring job
                opportunities, click the button below!
              </p>
              <button
                onClick={() => (window.location.href = "/jobs")}
                className="bg-[#254336] text-[white] py-2 px-4 rounded-lg hover:bg-[#255F38] transition-colors"
              >
                View Job Openings
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#fff] rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-black mb-8 text-lg">
                Fill out the form below and we'll get back to you shortly.
              </p>

              {status.message && (
                <div
                  className={`mb-8 p-4 rounded-xl ${
                    status.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <FormInput
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#254336] text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center gap-2 transition-all text-lg font-medium"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="group flex gap-4 items-start">
    <div className="bg-[#254336] p-3 rounded-xl group-hover:bg-blue-100 transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-900 mb-2 text-lg">{title}</h3>
      {content}
    </div>
  </div>
);

const FormInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
    />
  </div>
);

export default Contact;
