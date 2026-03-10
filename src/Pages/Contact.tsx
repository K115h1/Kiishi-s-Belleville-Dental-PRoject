import React, { useState } from "react";
import {
  MessageSquare,
  ClipboardList,
  CalendarDays,
  MapPin,
  Phone,
  Mail,
  Clock,
  Siren,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { useScrollReveal } from "@/lib/useScrollReveal";

type Mode = "enquiry" | "complaint" | "appointment";

interface ModeConfig {
  id: Mode;
  label: string;
  icon: React.ReactNode;
  tagline: string;
  badge: string;
  color: string;
  activeColor: string;
  activeBg: string;
  activeBorder: string;
}

const modes: ModeConfig[] = [
  {
    id: "enquiry",
    label: "Make an Enquiry",
    icon: <MessageSquare size={24} strokeWidth={1.5} />,
    tagline: "Ask us anything — from pricing to procedures.",
    badge: "General",
    color: "text-sky-600",
    activeColor: "text-sky-700",
    activeBg: "bg-sky-50",
    activeBorder: "border-sky-400",
  },
  {
    id: "complaint",
    label: "Submit a Complaint",
    icon: <ClipboardList size={24} strokeWidth={1.5} />,
    tagline: "We take every concern seriously and respond within 24 hours.",
    badge: "Confidential",
    color: "text-rose-600",
    activeColor: "text-rose-700",
    activeBg: "bg-rose-50",
    activeBorder: "border-rose-400",
  },
  {
    id: "appointment",
    label: "Book an Appointment",
    icon: <CalendarDays size={24} strokeWidth={1.5} />,
    tagline: "Choose a service and preferred time — we'll confirm shortly.",
    badge: "Fast Response",
    color: "text-emerald-600",
    activeColor: "text-emerald-700",
    activeBg: "bg-emerald-50",
    activeBorder: "border-emerald-400",
  },
];

const services = [
  "General Check-up & Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Invisalign / Braces",
  "Cosmetic Consultation",
  "Emergency Dental Care",
  "Radiograph / X-Ray",
  "Other",
];

const inputClass =
  "w-full px-5 py-3.5 border border-gray-200 rounded-2xl focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100 text-sm transition-all bg-white placeholder:text-gray-400";
const labelClass = "block text-sm font-semibold text-sky-950 mb-1.5";

const Contact = () => {
  const [mode, setMode] = useState<Mode>("enquiry");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
    date: "",
    time: "",
    urgency: "low",
  });

  const current = modes.find((m) => m.id === mode)!;
  const containerRef = useScrollReveal<HTMLElement>({
    childSelector: ".reveal-item",
    stagger: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "",
        date: "",
        time: "",
        urgency: "low",
      });
    }, 3500);
  };

  const successMessages: Record<Mode, string> = {
    enquiry: "Your enquiry has been received! We'll reply within 24 hours.",
    complaint:
      "Your complaint has been logged and will be handled confidentially within 24 hours.",
    appointment:
      "Appointment request sent! We'll confirm your slot via email shortly.",
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-28 lg:py-36 bg-slate-50 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse hidden md:block" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse hidden md:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="reveal-item flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-sky-600 font-bold tracking-[0.2em] text-xs mb-6">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
              CONTACT US
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-950 via-sky-800 to-emerald-700 leading-[1.1] tracking-tight">
              We're here <br className="hidden md:block" />
              for you.
            </h2>
          </div>
          <p className="hidden lg:block text-lg text-slate-500 font-medium border-l-2 border-sky-300 pl-6 max-w-sm">
            Whether you have a question, a concern, or you're ready to book — we
            make it simple and stress-free.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* LEFT — Mode Selector + Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Mode cards */}
            {modes.map((m) => {
              const isActive = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`reveal-item group w-full text-left rounded-2xl border-2 p-6 transition-all duration-300 ${
                    isActive
                      ? `${m.activeBg} ${m.activeBorder} shadow-md`
                      : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-white shadow-sm text-sky-600"
                          : "bg-slate-50 text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      {m.icon}
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className={`font-bold text-base ${
                            isActive ? m.activeColor : "text-sky-950"
                          }`}
                        >
                          {m.label}
                        </span>
                        {isActive && (
                          <span
                            className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase ${m.activeBg} ${m.activeColor} border ${m.activeBorder}`}
                          >
                            {m.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500 leading-snug">
                        {m.tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Info block */}
            <div className="reveal-item mt-2 bg-sky-950 rounded-2xl p-7 text-white">
              <div className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-4">
                Quick Info
              </div>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-sky-100 flex items-center">
                    <MapPin size={14} className="mr-2 text-sky-400" /> Address
                  </div>
                  <div className="text-sky-300 mt-0.5 ml-6">
                    456 Belleville Avenue, Belleville, NJ 07109
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sky-100 flex items-center">
                    <Phone size={14} className="mr-2 text-sky-400" /> Phone
                  </div>
                  <div className="text-sky-300 mt-0.5 ml-6">(973) 555-0123</div>
                </div>
                <div>
                  <div className="font-semibold text-sky-100 flex items-center">
                    <Mail size={14} className="mr-2 text-sky-400" /> Email
                  </div>
                  <div className="text-sky-300 mt-0.5 ml-6">
                    info@bellevilledental.com
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-sky-100 flex items-center">
                    <Clock size={14} className="mr-2 text-sky-400" /> Hours
                  </div>
                  <div className="text-sky-300 mt-0.5 ml-6">
                    Mon–Fri: 8AM–7PM · Sat: 9AM–3PM
                  </div>
                </div>
                <div className="text-emerald-400 font-semibold flex items-center mt-6 pt-4 border-t border-sky-800">
                  <Siren size={14} className="mr-2" /> Emergency care available
                  24/7
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="reveal-item lg:col-span-3">
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 p-8 md:p-10">
              {/* Form header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="text-sky-600">{current.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-sky-950">
                    {current.label}
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">
                    {current.tagline}
                  </p>
                </div>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                  <CheckCircle2
                    size={64}
                    className="text-emerald-500 mb-2"
                    strokeWidth={1.5}
                  />
                  <h4 className="text-xl font-bold text-sky-950">
                    Message Sent!
                  </h4>
                  <p className="text-slate-500 text-sm max-w-sm">
                    {successMessages[mode]}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Common fields */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Phone Number{" "}
                      <span className="text-slate-400 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(973) 000-0000"
                      className={inputClass}
                    />
                  </div>

                  {/* ── Enquiry-specific ── */}
                  {mode === "enquiry" && (
                    <>
                      <div>
                        <label className={labelClass}>Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Pricing for teeth whitening"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Your Enquiry</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us what you'd like to know..."
                          className={inputClass + " resize-none"}
                        />
                      </div>
                    </>
                  )}

                  {/* ── Complaint-specific ── */}
                  {mode === "complaint" && (
                    <>
                      <div>
                        <label className={labelClass}>Complaint Subject</label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          placeholder="e.g. Waiting time / Treatment concern"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Urgency Level</label>
                        <select
                          name="urgency"
                          value={form.urgency}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="low">Low — General feedback</option>
                          <option value="medium">
                            Medium — Requires follow-up
                          </option>
                          <option value="high">High — Urgent concern</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>
                          Details of Your Complaint
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Please describe what happened, including date and time if relevant..."
                          className={inputClass + " resize-none"}
                        />
                      </div>
                      <p className="text-xs text-slate-400 flex items-start gap-2">
                        <Lock
                          size={14}
                          className="shrink-0 mt-0.5 text-slate-400"
                        />
                        Your complaint is handled in strict confidence. We will
                        not share your details with third parties.
                      </p>
                    </>
                  )}

                  {/* ── Appointment-specific ── */}
                  {mode === "appointment" && (
                    <>
                      <div>
                        <label className={labelClass}>Service Requested</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select a service...
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className={labelClass}>Preferred Date</label>
                          <input
                            type="date"
                            name="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            min={new Date().toISOString().split("T")[0]}
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Preferred Time</label>
                          <select
                            name="time"
                            value={form.time}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="" disabled>
                              Select a time...
                            </option>
                            {[
                              "8:00 AM",
                              "9:00 AM",
                              "10:00 AM",
                              "11:00 AM",
                              "12:00 PM",
                              "1:00 PM",
                              "2:00 PM",
                              "3:00 PM",
                              "4:00 PM",
                              "5:00 PM",
                              "6:00 PM",
                            ].map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className={labelClass}>
                          Additional Notes{" "}
                          <span className="text-slate-400 font-normal">
                            (optional)
                          </span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Any allergies, medical history, or special requirements..."
                          className={inputClass + " resize-none"}
                        />
                      </div>
                    </>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    className={`w-full py-4 rounded-2xl font-bold text-base text-white transition-all duration-200 active:scale-[0.98] shadow-lg mt-2 ${
                      mode === "enquiry"
                        ? "bg-sky-600 hover:bg-sky-700 shadow-sky-200"
                        : mode === "complaint"
                          ? "bg-rose-600 hover:bg-rose-700 shadow-rose-200"
                          : "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200"
                    }`}
                  >
                    {mode === "enquiry" && "Send Enquiry →"}
                    {mode === "complaint" && "Submit Complaint →"}
                    {mode === "appointment" && "Request Appointment →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
