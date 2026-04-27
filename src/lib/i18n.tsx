import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "id";

export const translations = {
  en: {
    nav: { home: "Home", services: "Services", body: "Body Treatments", packages: "Packages", gallery: "Gallery", about: "About", contact: "Contact" },
    cta: { whatsapp: "Book via WhatsApp", whatsappShort: "WhatsApp", viewServices: "View Services", bookNow: "Book Now via WhatsApp" },
    hero: {
      eyebrow: "Home Service Massage · Seminyak",
      title: "Relax. Recharge. Rebalance.",
      titleAccent: "Massage at Your Home in Bali",
      subtitle: "Professional home service massage in Seminyak and surrounding areas.",
    },
    about: {
      eyebrow: "About",
      title: "Wellness, brought to your door",
      body: "Aria Bali Massage offers professional home service treatments designed to help you relax, recover, and feel your best — all from the comfort of your villa or home.",
      h1: "Professional therapist",
      h1d: "Trained and experienced — meet Komang.",
      h2: "Attentive & reliable",
      h2d: "On time, easy to book, and focused on you.",
      h3: "Comfort & results",
      h3d: "Real relief, real relaxation, every session.",
    },
    services: {
      eyebrow: "Our Services",
      title: "Treatments tailored to you",
      durations: "60 / 90 mins",
      items: [
        { name: "Balinese Massage", desc: "Traditional flowing technique using long strokes, gentle stretching and acupressure to ease tension." },
        { name: "Relaxation Massage", desc: "A soothing full-body massage with light to medium pressure, perfect to unwind." },
        { name: "Reflexology", desc: "Targeted pressure on the feet to relieve fatigue and restore balance throughout the body." },
        { name: "Lymphatic Drainage Massage", desc: "Light, rhythmic strokes to reduce swelling, support recovery and boost circulation." },
        { name: "Back & Shoulder Relief", desc: "Focused work on the upper body to release knots, stiffness and everyday tension." },
      ],
    },
    why: {
      eyebrow: "Why Choose Us",
      title: "Premium care, simply delivered",
      items: [
        { t: "Home service", d: "We come to you — your villa, hotel, or home." },
        { t: "Professional therapist", d: "Skilled, attentive, and discreet." },
        { t: "Trusted by customers", d: "Loved by guests across Seminyak." },
        { t: "Clean & hygienic", d: "Fresh linens and high standards every visit." },
        { t: "Personalized", d: "Pressure and focus tailored to your needs." },
      ],
    },
    reviews: { eyebrow: "Customer Reviews", title: "What guests are saying" },
    location: {
      eyebrow: "Location",
      title: "Based in Seminyak",
      address: "Jl. Dewi Saraswati II, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361",
      serving: "Serving Seminyak and surrounding areas",
    },
    booking: {
      eyebrow: "Booking",
      title: "Ready to relax?",
      sub: "Send us a message on WhatsApp and we'll arrange your session.",
    },
    footer: { tagline: "Home service massage in Seminyak, Bali.", rights: "All rights reserved." },
  },
  id: {
    nav: { home: "Beranda", services: "Layanan Kami", body: "Perawatan Tubuh", packages: "Paket", gallery: "Galeri", about: "Tentang", contact: "Kontak" },
    cta: { whatsapp: "Pesan via WhatsApp", whatsappShort: "WhatsApp", viewServices: "Lihat Layanan", bookNow: "Pesan Sekarang via WhatsApp" },
    hero: {
      eyebrow: "Pijat Home Service · Seminyak",
      title: "Rileks. Pulihkan. Seimbangkan.",
      titleAccent: "Pijat Home Service di Bali",
      subtitle: "Layanan pijat profesional di Seminyak dan sekitarnya, langsung di tempat Anda.",
    },
    about: {
      eyebrow: "Tentang",
      title: "Kebugaran, hadir di rumah Anda",
      body: "Aria Bali Massage menghadirkan perawatan pijat profesional langsung ke villa atau rumah Anda untuk membantu Anda rileks, pulih, dan merasa lebih baik.",
      h1: "Terapis profesional",
      h1d: "Terlatih dan berpengalaman — bersama Komang.",
      h2: "Ramah & tepercaya",
      h2d: "Tepat waktu, mudah dipesan, fokus pada Anda.",
      h3: "Nyaman & efektif",
      h3d: "Rileks dan lega di setiap sesi.",
    },
    services: {
      eyebrow: "Layanan Kami",
      title: "Perawatan yang disesuaikan untuk Anda",
      durations: "60 / 90 menit",
      items: [
        { name: "Pijat Bali", desc: "Teknik tradisional dengan usapan panjang, peregangan lembut, dan akupresur untuk meredakan ketegangan." },
        { name: "Pijat Relaksasi", desc: "Pijat seluruh tubuh dengan tekanan ringan hingga sedang, sempurna untuk bersantai." },
        { name: "Refleksi", desc: "Tekanan pada titik-titik kaki untuk meredakan lelah dan menyeimbangkan tubuh." },
        { name: "Pijat Drainase Limfatik", desc: "Usapan lembut untuk mengurangi pembengkakan, mendukung pemulihan, dan melancarkan sirkulasi." },
        { name: "Pijat Punggung & Bahu", desc: "Fokus pada tubuh bagian atas untuk melepas simpul otot dan ketegangan harian." },
      ],
    },
    why: {
      eyebrow: "Mengapa Memilih Kami",
      title: "Perawatan premium, mudah dinikmati",
      items: [
        { t: "Layanan ke tempat", d: "Kami datang ke villa, hotel, atau rumah Anda." },
        { t: "Terapis profesional", d: "Terampil, perhatian, dan sopan." },
        { t: "Dipercaya pelanggan", d: "Disukai oleh tamu di Seminyak." },
        { t: "Bersih & higienis", d: "Linen segar dan standar tinggi setiap kunjungan." },
        { t: "Personal", d: "Tekanan dan fokus disesuaikan dengan kebutuhan Anda." },
      ],
    },
    reviews: { eyebrow: "Ulasan Pelanggan", title: "Apa kata tamu kami" },
    location: {
      eyebrow: "Lokasi",
      title: "Berbasis di Seminyak",
      address: "Jl. Dewi Saraswati II, Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361",
      serving: "Melayani Seminyak dan sekitarnya",
    },
    booking: {
      eyebrow: "Pemesanan",
      title: "Siap untuk rileks?",
      sub: "Kirim pesan WhatsApp dan kami akan mengatur sesi Anda.",
    },
    footer: { tagline: "Pijat home service di Seminyak, Bali.", rights: "Hak cipta dilindungi." },
  },
} as const;

// Pricing menu (shared across languages — prices are universal IDR ×1,000)
export type MenuItem = { name: string; price: string; duration: string; desc?: string };

export const BODY_TREATMENTS: MenuItem[] = [
  { name: "Balinese Massage", price: "200", duration: "60 min" },
  { name: "Relaxing Massage", price: "225", duration: "60 min" },
  { name: "Foot Reflexology", price: "185", duration: "45 min" },
  { name: "Anti Stress Massage", price: "185", duration: "45 min" },
  { name: "Deep Tissue Massage", price: "250", duration: "60 min" },
  { name: "Four Hand Massage", price: "400", duration: "60 min" },
  { name: "Thai Massage", price: "250", duration: "60 min" },
  { name: "Natural Coconut Relaxing Massage", price: "250", duration: "60 min" },
  { name: "Facial Oriflame", price: "185", duration: "60 min" },
  { name: "Pedicure", price: "185", duration: "60 min" },
  { name: "Manicure", price: "185", duration: "60 min" },
  { name: "Creambath", price: "185", duration: "60 min" },
  { name: "Hot Stone Massage", price: "400", duration: "60 min" },
  { name: "Anti Cellulite Massage", price: "350", duration: "60 min" },
  { name: "Lymphatic Drainage", price: "350", duration: "60 min" },
  { name: "Hair Braid", price: "from 125", duration: "—" },
  { name: "Head + Foot Massage", price: "250", duration: "60 min" },
  { name: "Pregnancy Massage", price: "200", duration: "60 min" },
];

export const PACKAGE_TREATMENTS: MenuItem[] = [
  {
    name: "Honeymoon Package (2 Pax)",
    price: "1,100",
    duration: "180 min",
    desc: "Balinese Massage, Body Scrub, Body Mask, and Facial.",
  },
  {
    name: "Single Package",
    price: "500",
    duration: "150 min",
    desc: "Balinese Massage, Aloe Vera Body Mask, Mini Facial, and Free Ear Candle.",
  },
  {
    name: "90 Minutes Package",
    price: "375",
    duration: "90 min",
    desc: "Head Massage, Foot Massage, and Ear Candle.",
  },
  {
    name: "120 Minutes Package",
    price: "400",
    duration: "120 min",
    desc: "90 Minutes Balinese Massage and 30 Minutes Body Scrub.",
  },
];


type Dict = (typeof translations)["en"];

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("aria-lang") as Lang | null) : null;
    if (saved === "en" || saved === "id") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("aria-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as Dict }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export const WHATSAPP_NUMBER_DISPLAY = "082266296329";
export const WHATSAPP_LINK =
  "https://wa.me/6282266296329?text=" +
  encodeURIComponent("Hi, I'd like to book a massage with Aria Bali Massage.");
export const CONTACT_EMAIL = "komangdarisasih88@gmail.com";
export const EMAIL_LINK =
  "mailto:komangdarisasih88@gmail.com?subject=" +
  encodeURIComponent("Aria Bali Massage — Booking enquiry");