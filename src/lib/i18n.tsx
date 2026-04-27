import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "id";

export const translations = {
  en: {
    nav: { home: "Home", services: "Services", body: "Body Treatments", packages: "Packages", gallery: "Gallery", about: "About", contact: "Contact" },
    cta: { whatsapp: "Book via WhatsApp", whatsappShort: "WhatsApp", viewServices: "View Services", bookNow: "Book Now via WhatsApp", viewFullMenu: "View full menu" },
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
    bodyMenu: {
      title: "Body Treatment Menu",
      priceNote: "All prices in thousands of Indonesian Rupiah (e.g. 200 = 200,000 IDR).",
      signatureTitle: "Signature body treatments",
      signatureSub: "A taste of our most loved treatments. Prices in thousands of IDR (e.g. 200 = 200,000 IDR).",
    },
    packagesPage: {
      title: "Package Treatments",
      priceNote: "All prices in thousands of Indonesian Rupiah (e.g. 500 = 500,000 IDR).",
    },
    gallery: {
      title: "Gallery",
      sub: "A glimpse into our treatments, therapists, and home service moments in Seminyak.",
      photos: "Photos",
      videos: "Videos",
      footer: "Photos & videos · Aria Bali Massage",
    },
    spa: {
      eyebrow: "Our Space",
      title: "A peaceful sanctuary, prepared for you",
      body: "Warm stones, soft candlelight, and a friendly team — every detail curated to help you unwind from the moment you arrive.",
    },
    notFound: {
      title: "Page not found",
      body: "The page you're looking for doesn't exist or has been moved.",
      home: "Go home",
    },
    common: { duration: "Duration", price: "Price" },
    footer: { tagline: "Home service massage in Seminyak, Bali.", rights: "All rights reserved." },
  },
  id: {
    nav: { home: "Beranda", services: "Layanan Kami", body: "Perawatan Tubuh", packages: "Paket", gallery: "Galeri", about: "Tentang", contact: "Kontak" },
    cta: { whatsapp: "Pesan via WhatsApp", whatsappShort: "WhatsApp", viewServices: "Lihat Layanan", bookNow: "Pesan Sekarang via WhatsApp", viewFullMenu: "Lihat menu lengkap" },
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
    bodyMenu: {
      title: "Menu Perawatan Tubuh",
      priceNote: "Semua harga dalam ribuan Rupiah (mis. 200 = Rp 200.000).",
      signatureTitle: "Perawatan tubuh andalan",
      signatureSub: "Pratinjau perawatan terfavorit kami. Harga dalam ribuan Rupiah (mis. 200 = Rp 200.000).",
    },
    packagesPage: {
      title: "Paket Perawatan",
      priceNote: "Semua harga dalam ribuan Rupiah (mis. 500 = Rp 500.000).",
    },
    gallery: {
      title: "Galeri",
      sub: "Sekilas tentang perawatan, terapis, dan momen layanan di tempat kami di Seminyak.",
      photos: "Foto",
      videos: "Video",
      footer: "Foto & video · Aria Bali Massage",
    },
    spa: {
      eyebrow: "Ruang Kami",
      title: "Suasana tenang, disiapkan untuk Anda",
      body: "Batu hangat, cahaya lilin lembut, dan tim yang ramah — setiap detail disiapkan agar Anda rileks sejak tiba.",
    },
    notFound: {
      title: "Halaman tidak ditemukan",
      body: "Halaman yang Anda cari tidak ada atau telah dipindahkan.",
      home: "Kembali ke beranda",
    },
    common: { duration: "Durasi", price: "Harga" },
    footer: { tagline: "Pijat home service di Seminyak, Bali.", rights: "Hak cipta dilindungi." },
  },
} as const;

// Pricing menu (shared across languages — prices are universal IDR ×1,000)
export type MenuItem = { name: string; price: string; duration: string; desc?: string };

export const BODY_TREATMENTS: MenuItem[] = [
  {
    name: "Balinese Massage",
    price: "200",
    duration: "60 min",
    desc: "Traditional full-body technique combining gentle stretches, long strokes, and acupressure with medium pressure to release tension and restore balance.",
  },
  {
    name: "Relaxing Massage",
    price: "225",
    duration: "60 min",
    desc: "Slow, flowing strokes with soft, gentle pressure designed to calm the nervous system, ease stress, and leave you in a deeply restful state.",
  },
  {
    name: "Foot Reflexology",
    price: "185",
    duration: "45 min",
    desc: "Targeted pressure on reflex points of the feet to stimulate circulation, relieve tired legs, and support overall wellbeing throughout the body.",
  },
  {
    name: "Anti Stress Massage",
    price: "185",
    duration: "45 min",
    desc: "Focused work on the head, neck, shoulders, and back to melt away tension built up from screens, travel, and daily stress.",
  },
  {
    name: "Deep Tissue Massage",
    price: "250",
    duration: "60 min",
    desc: "Firm, slow pressure reaching the deeper layers of muscle and connective tissue — ideal for chronic tightness, knots, and sports recovery.",
  },
  {
    name: "Four Hand Massage",
    price: "400",
    duration: "60 min",
    desc: "Two therapists working in perfect synchrony with mirrored strokes for a deeply immersive, almost meditative full-body experience.",
  },
  {
    name: "Thai Massage",
    price: "250",
    duration: "60 min",
    desc: "Performed on a mat in loose clothing, combining assisted yoga stretches and rhythmic compressions to improve flexibility and energy flow.",
  },
  {
    name: "Natural Coconut Relaxing Massage",
    price: "250",
    duration: "60 min",
    desc: "A nourishing relaxation massage using pure Balinese virgin coconut oil to deeply hydrate the skin while easing muscle tension.",
  },
  {
    name: "Facial Oriflame",
    price: "185",
    duration: "60 min",
    desc: "Cleansing, exfoliation, gentle massage, and mask using Oriflame skincare to refresh, brighten, and revitalise your complexion.",
  },
  {
    name: "Pedicure",
    price: "185",
    duration: "60 min",
    desc: "Complete foot and nail care including soak, exfoliation, cuticle work, shaping, and polish for soft, beautifully groomed feet.",
  },
  {
    name: "Manicure",
    price: "185",
    duration: "60 min",
    desc: "Hand and nail treatment with soak, exfoliation, cuticle care, shaping, and polish to leave your hands smooth and well-finished.",
  },
  {
    name: "Creambath",
    price: "185",
    duration: "60 min",
    desc: "Indonesian hair and scalp ritual featuring nourishing cream, relaxing scalp massage, and warm steam for healthier, shinier hair.",
  },
  {
    name: "Hot Stone Massage",
    price: "400",
    duration: "60 min",
    desc: "Smooth heated volcanic stones glide along the body to deeply warm muscles, improve circulation, and dissolve stubborn tension.",
  },
  {
    name: "Anti Cellulite Massage",
    price: "350",
    duration: "60 min",
    desc: "Vigorous kneading and pinching techniques on hips, thighs, and abdomen to boost circulation, smooth the skin, and reduce the appearance of cellulite.",
  },
  {
    name: "Lymphatic Drainage",
    price: "350",
    duration: "60 min",
    desc: "Light, rhythmic strokes that stimulate the lymphatic system to reduce fluid retention, ease puffiness, and support natural detoxification.",
  },
  {
    name: "Hair Braid",
    price: "from 125",
    duration: "—",
    desc: "Beach-ready braiding styled to your taste — from a few accent braids to a full head. Price varies with style and length.",
  },
  {
    name: "Head + Foot Massage",
    price: "250",
    duration: "60 min",
    desc: "A soothing combination of scalp, neck, and foot massage — perfect for relieving headaches and tired feet without a full-body session.",
  },
  {
    name: "Pregnancy Massage",
    price: "200",
    duration: "60 min",
    desc: "Gentle, side-lying massage tailored for expecting mothers (after the first trimester) to ease back, hip, and leg discomfort safely.",
  },
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

// Indonesian translations for treatment & package names + descriptions.
// Keyed by the canonical English name above.
const MENU_ID: Record<string, { name: string; desc?: string }> = {
  "Balinese Massage": {
    name: "Pijat Bali",
    desc: "Teknik tradisional seluruh tubuh dengan peregangan lembut, usapan panjang, dan akupresur menggunakan minyak aromaterapi hangat untuk melepas ketegangan dan mengembalikan keseimbangan.",
  },
  "Relaxing Massage": {
    name: "Pijat Relaksasi",
    desc: "Usapan lambat dan mengalir dengan tekanan ringan hingga sedang untuk menenangkan sistem saraf, meredakan stres, dan membuat Anda benar-benar rileks.",
  },
  "Foot Reflexology": {
    name: "Refleksi Kaki",
    desc: "Tekanan terarah pada titik refleks kaki untuk melancarkan sirkulasi, meredakan kaki lelah, dan mendukung kesehatan tubuh secara menyeluruh.",
  },
  "Anti Stress Massage": {
    name: "Pijat Anti Stres",
    desc: "Fokus pada kepala, leher, bahu, dan punggung untuk meluruhkan ketegangan akibat layar, perjalanan, dan stres harian.",
  },
  "Deep Tissue Massage": {
    name: "Pijat Jaringan Dalam",
    desc: "Tekanan kuat dan perlahan menjangkau lapisan otot dan jaringan ikat yang lebih dalam — cocok untuk ketegangan kronis, simpul otot, dan pemulihan olahraga.",
  },
  "Four Hand Massage": {
    name: "Pijat Empat Tangan",
    desc: "Dua terapis bekerja serempak dengan gerakan cermin untuk pengalaman pijat seluruh tubuh yang mendalam dan hampir meditatif.",
  },
  "Thai Massage": {
    name: "Pijat Thai",
    desc: "Dilakukan di atas matras dengan pakaian longgar, memadukan peregangan ala yoga dan tekanan ritmis untuk meningkatkan kelenturan dan aliran energi.",
  },
  "Natural Coconut Relaxing Massage": {
    name: "Pijat Relaksasi Minyak Kelapa Alami",
    desc: "Pijat relaksasi yang menutrisi menggunakan minyak kelapa murni khas Bali untuk melembapkan kulit sekaligus meredakan ketegangan otot.",
  },
  "Facial Oriflame": {
    name: "Facial Oriflame",
    desc: "Pembersihan, eksfoliasi, pijat lembut, dan masker dengan produk Oriflame untuk menyegarkan, mencerahkan, dan merevitalisasi kulit wajah.",
  },
  "Pedicure": {
    name: "Pedikur",
    desc: "Perawatan kaki dan kuku lengkap meliputi rendaman, eksfoliasi, perawatan kutikula, pembentukan, dan pewarnaan untuk kaki yang halus dan rapi.",
  },
  "Manicure": {
    name: "Manikur",
    desc: "Perawatan tangan dan kuku dengan rendaman, eksfoliasi, perawatan kutikula, pembentukan, dan pewarnaan agar tangan halus dan tampil rapi.",
  },
  "Creambath": {
    name: "Creambath",
    desc: "Ritual rambut dan kulit kepala khas Indonesia dengan krim bernutrisi, pijat kulit kepala, dan uap hangat untuk rambut lebih sehat dan berkilau.",
  },
  "Hot Stone Massage": {
    name: "Pijat Batu Panas",
    desc: "Batu vulkanik halus yang dihangatkan meluncur di sepanjang tubuh untuk menghangatkan otot, melancarkan sirkulasi, dan melepas ketegangan membandel.",
  },
  "Anti Cellulite Massage": {
    name: "Pijat Anti Selulit",
    desc: "Teknik remasan dan cubitan kuat pada pinggul, paha, dan perut untuk melancarkan sirkulasi, menghaluskan kulit, dan mengurangi tampilan selulit.",
  },
  "Lymphatic Drainage": {
    name: "Drainase Limfatik",
    desc: "Usapan ringan dan ritmis yang merangsang sistem limfatik untuk mengurangi retensi cairan, meredakan bengkak, dan mendukung detoksifikasi alami.",
  },
  "Hair Braid": {
    name: "Kepang Rambut",
    desc: "Kepangan ala pantai sesuai selera Anda — dari beberapa kepang aksen hingga seluruh kepala. Harga bervariasi tergantung gaya dan panjang rambut.",
  },
  "Head + Foot Massage": {
    name: "Pijat Kepala + Kaki",
    desc: "Kombinasi menenangkan antara pijat kulit kepala, leher, dan kaki — pas untuk meredakan sakit kepala dan kaki lelah tanpa sesi pijat seluruh tubuh.",
  },
  "Pregnancy Massage": {
    name: "Pijat Ibu Hamil",
    desc: "Pijat lembut dengan posisi miring khusus ibu hamil (setelah trimester pertama) untuk meredakan keluhan punggung, pinggul, dan kaki dengan aman.",
  },
  "Honeymoon Package (2 Pax)": {
    name: "Paket Bulan Madu (2 Orang)",
    desc: "Pijat Bali, Lulur, Masker Tubuh, dan Facial.",
  },
  "Single Package": {
    name: "Paket Single",
    desc: "Pijat Bali, Masker Tubuh Lidah Buaya, Mini Facial, dan Ear Candle gratis.",
  },
  "90 Minutes Package": {
    name: "Paket 90 Menit",
    desc: "Pijat Kepala, Pijat Kaki, dan Ear Candle.",
  },
  "120 Minutes Package": {
    name: "Paket 120 Menit",
    desc: "Pijat Bali 90 Menit dan Lulur 30 Menit.",
  },
};

export function translateDuration(d: string, lang: Lang): string {
  if (lang !== "id") return d;
  return d.replace(/\bmin\b/g, "menit");
}

export function translateMenuItem(item: MenuItem, lang: Lang): MenuItem {
  if (lang !== "id") return item;
  const tr = MENU_ID[item.name];
  return {
    ...item,
    name: tr?.name ?? item.name,
    desc: tr?.desc ?? item.desc,
    duration: translateDuration(item.duration, lang),
  };
}


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