import { useState } from "react";

const PRODUCT_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?w=720&h=560&fit=crop&auto=format",
    alt: "Lumière Sérum Fondant on white marble tray with candle",
  },
  {
    url: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=720&h=560&fit=crop&auto=format",
    alt: "White dropper bottle on clean surface — product detail",
  },
  {
    url: "https://images.unsplash.com/photo-1679394270597-e90694d70350?w=720&h=560&fit=crop&auto=format",
    alt: "Glass serum bottle with golden liquid — close-up",
  },
  {
    url: "https://images.unsplash.com/photo-1650529192647-ce4eb5fb3314?w=720&h=560&fit=crop&auto=format",
    alt: "Full skincare product line on shelf display",
  },
  {
    url: "https://images.unsplash.com/photo-1531646317777-0619c7c5d1d3?w=720&h=560&fit=crop&auto=format",
    alt: "Texture swatch of pressed powder — shade range detail",
  },
];

const SHADES = [
  { name: "Ivory Veil", hex: "#f2e8df" },
  { name: "Rose Petal", hex: "#d4a59a" },
  { name: "Warm Sand", hex: "#c49a7a" },
  { name: "Deep Nude", hex: "#9e6d56" },
  { name: "Umber Glow", hex: "#6b3f2a" },
];

const KEY_ACTIVES = [
  { name: "Bio-fermented Pearl Extract", benefit: "Luminosity & radiance boost", pct: "3%" },
  { name: "Hyaluronic Acid Spheres", benefit: "Multi-depth hydration", pct: "2%" },
  { name: "Niacinamide (Vitamin B3)", benefit: "Pore refinement & even tone", pct: "5%" },
  { name: "Squalane", benefit: "Lipid barrier support", pct: "1.5%" },
  { name: "Bakuchiol", benefit: "Plant-based retinol alternative", pct: "0.5%" },
  { name: "Ceramide Complex NP/AP/EOP", benefit: "Moisture lock & repair", pct: "1%" },
];

const FULL_INCI = [
  "Aqua (Water)",
  "Cyclopentasiloxane",
  "Niacinamide",
  "Glycerin",
  "Hydrogenated Polyisobutene",
  "Dimethicone",
  "Squalane",
  "Butylene Glycol",
  "Sodium Hyaluronate",
  "Hydrolysed Pearl (Concha Margaritacea Extract)",
  "Bakuchiol",
  "Ceramide NP",
  "Ceramide AP",
  "Ceramide EOP",
  "Phytosphingosine",
  "Cholesterol",
  "Sodium Lauroyl Lactylate",
  "Carbomer",
  "Xanthan Gum",
  "Tocopherol (Vitamin E)",
  "Panthenol (Pro-Vitamin B5)",
  "Allantoin",
  "Bisabolol",
  "Citric Acid",
  "Sodium Hydroxide",
  "Disodium EDTA",
  "Phenoxyethanol",
  "Ethylhexylglycerin",
];

const REVIEWS = [
  {
    name: "Sargam R.",
    rating: 5,
    text: "The texture is unlike anything I've used. Melts into skin without any heaviness.",
    date: "Sep 3, 2026",
  },
  {
    name: "Priya N.",
    rating: 5,
    text: "Finally a foundation that doesn't oxidize by noon. Rose Petal shade is perfect.",
    date: "Aug 28, 2026",
  },
  {
    name: "Ritika S.",
    rating: 5,
    text: "The niacinamide really shows — my skin looks so much more even after 3 weeks.",
    date: "Aug 14, 2026",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill={filled ? "#b8897a" : "none"} stroke="#b8897a" strokeWidth="1.2">
      <polygon points="6,1 7.5,4.5 11,5 8.5,7.5 9,11 6,9 3,11 3.5,7.5 1,5 4.5,4.5" />
    </svg>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <span style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= count} />)}
    </span>
  );
}

export default function App() {
  const [activeImg, setActiveImg] = useState(0);
  const [selectedShade, setSelectedShade] = useState(1);
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToBag, setAddedToBag] = useState(false);
  const [activeTab, setActiveTab] = useState<"details" | "ingredients" | "reviews">("details");
  const [showFullInci, setShowFullInci] = useState(false);

  function handleAddToBag() {
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  }

  function prevImg() { setActiveImg((p) => (p === 0 ? PRODUCT_IMAGES.length - 1 : p - 1)); }
  function nextImg() { setActiveImg((p) => (p + 1) % PRODUCT_IMAGES.length); }

  return (
    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center", minHeight: "100vh", background: "#f5f0eb", padding: "24px 16px" }}>
      <div style={{ width: 393, minHeight: 852, background: "#faf7f4", fontFamily: "'Inter', sans-serif", position: "relative", overflow: "hidden", boxShadow: "0 24px 80px rgba(28,26,24,0.18)", borderRadius: 24 }}>

        {/* Status bar */}
        <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1c1a18" }}>9:41</span>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {[3, 4, 5].map((h) => <div key={h} style={{ width: 3, height: h, background: "#1c1a18", borderRadius: 1 }} />)}
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <rect x="0.5" y="0.5" width="14" height="10" rx="2" stroke="#1c1a18" strokeWidth="1" />
              <rect x="2" y="2" width="9" height="7" rx="1" fill="#1c1a18" />
              <rect x="15" y="3.5" width="1" height="4" rx="0.5" fill="#1c1a18" />
            </svg>
          </div>
        </div>

        {/* Nav */}
        <div style={{ height: 48, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
          <button style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #e2dcd6", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11 4L6 9L11 14" stroke="#1c1a18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span style={{ fontFamily: "'Lora', serif", fontSize: 15, fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1c1a18" }}>
            BARE CANVAS
          </span>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setWishlisted(!wishlisted)} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #e2dcd6", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill={wishlisted ? "#b8897a" : "none"}>
                <path d="M9 15s-7-4.5-7-8.5C2 4 3.5 2 5.5 2c1.5 0 2.8 1 3.5 2.5C9.7 3 11 2 12.5 2 14.5 2 16 4 16 6.5 16 10.5 9 15 9 15z" stroke="#b8897a" strokeWidth="1.4" strokeLinejoin="round" />
              </svg>
            </button>
            <button style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid #e2dcd6", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", position: "relative" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 2h1.5l2.5 9h7l1.5-6H6" stroke="#1c1a18" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="8" cy="14.5" r="1" fill="#1c1a18" />
                <circle cx="13" cy="14.5" r="1" fill="#1c1a18" />
              </svg>
              <span style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: "50%", background: "#b8897a", border: "1.5px solid #faf7f4" }} />
            </button>
          </div>
        </div>

        {/* ── Image gallery ── */}
        <div style={{ margin: "0 16px" }}>
          {/* Main image */}
          <div style={{ borderRadius: 16, overflow: "hidden", position: "relative", background: "#e8e0d8", height: 280 }}>
            <img
              src={PRODUCT_IMAGES[activeImg].url}
              alt={PRODUCT_IMAGES[activeImg].alt}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "opacity 0.25s" }}
            />
            {/* Image counter */}
            <div style={{ position: "absolute", top: 12, right: 12, background: "rgba(28,26,24,0.55)", backdropFilter: "blur(6px)", borderRadius: 20, padding: "4px 10px" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, color: "#faf7f4" }}>
                {activeImg + 1} / {PRODUCT_IMAGES.length}
              </span>
            </div>
            {/* Prev / Next */}
            <button onClick={prevImg} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(250,247,244,0.85)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 3L5 7L9 11" stroke="#1c1a18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button onClick={nextImg} style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", width: 32, height: 32, borderRadius: "50%", background: "rgba(250,247,244,0.85)", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", backdropFilter: "blur(4px)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3L9 7L5 11" stroke="#1c1a18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div style={{ display: "flex", gap: 8, marginTop: 10, overflowX: "auto", paddingBottom: 2 }}>
            {PRODUCT_IMAGES.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  flexShrink: 0,
                  width: 60,
                  height: 60,
                  borderRadius: 10,
                  overflow: "hidden",
                  border: activeImg === i ? "2px solid #b8897a" : "2px solid transparent",
                  padding: 0,
                  cursor: "pointer",
                  transition: "border-color 0.15s",
                  background: "#e8e0d8",
                }}
              >
                <img
                  src={img.url.replace("w=720&h=560", "w=120&h=120")}
                  alt={img.alt}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: activeImg === i ? 1 : 0.55, transition: "opacity 0.15s" }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <div style={{ overflowY: "auto", maxHeight: 852 - 44 - 48 - 280 - 10 - 60 - 10, padding: "0 16px" }}>

          {/* Product header */}
          <div style={{ paddingTop: 16, paddingBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b8897a", marginBottom: 4 }}>
                  BARE CANVAS · Sérum Collection
                </p>
                <h1 style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 600, lineHeight: 1.25, color: "#1c1a18", margin: 0 }}>
                  Lumière Sérum <em style={{ fontStyle: "italic", fontWeight: 400 }}>Foundation</em>
                </h1>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#7a7067", marginTop: 4 }}>
                  30 ml · Radiance-activating foundation
                </p>
              </div>
              <div style={{ textAlign: "right", paddingTop: 4 }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: 22, fontWeight: 600, color: "#1c1a18", margin: 0 }}>₹780</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#7a7067", textDecoration: "line-through" }}>₹1196</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
              <Stars count={5} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#b8897a", fontWeight: 500 }}>4.9</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#7a7067" }}>(214 reviews)</span>
            </div>
          </div>

          <div style={{ height: 1, background: "#e2dcd6", margin: "8px 0" }} />

          {/* Shade selector */}
          <div style={{ paddingTop: 8, paddingBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1c1a18" }}>Shade</span>
              <span style={{ fontFamily: "'Lora', serif", fontSize: 13, fontStyle: "italic", color: "#b8897a" }}>{SHADES[selectedShade].name}</span>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              {SHADES.map((shade, i) => (
                <button key={shade.name} onClick={() => setSelectedShade(i)} title={shade.name} style={{ width: 40, height: 40, borderRadius: "50%", background: shade.hex, border: selectedShade === i ? "2px solid #b8897a" : "2px solid transparent", outline: selectedShade === i ? "2px solid #faf7f4" : "none", outlineOffset: selectedShade === i ? "-4px" : "0", cursor: "pointer", boxShadow: "0 1px 4px rgba(28,26,24,0.12)", transition: "transform 0.15s", transform: selectedShade === i ? "scale(1.1)" : "scale(1)" }} />
              ))}
            </div>
          </div>

          <div style={{ height: 1, background: "#e2dcd6", margin: "8px 0" }} />

          {/* Qty + Add to bag */}
          <div style={{ paddingTop: 8, paddingBottom: 8, display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", border: "1px solid #e2dcd6", borderRadius: 100, overflow: "hidden", height: 48 }}>
              <button onClick={() => setQty(Math.max(1, qty - 1))} style={{ width: 40, height: 48, background: "transparent", border: "none", fontSize: 18, color: "#1c1a18", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#1c1a18", minWidth: 28, textAlign: "center" }}>{qty}</span>
              <button onClick={() => setQty(qty + 1)} style={{ width: 40, height: 48, background: "transparent", border: "none", fontSize: 18, color: "#1c1a18", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
            </div>
            <button onClick={handleAddToBag} style={{ flex: 1, height: 48, borderRadius: 100, background: addedToBag ? "#1c1a18" : "#b8897a", color: "#faf7f4", border: "none", fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", transition: "background 0.25s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              {addedToBag ? (
                <><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8.5L6.5 12L13 5" stroke="#faf7f4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>Added</>
              ) : "Add to Bag"}
            </button>
          </div>

          <div style={{ height: 1, background: "#e2dcd6", margin: "8px 0" }} />

          {/* Tabs */}
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid #e2dcd6", marginBottom: 16 }}>
              {(["details", "ingredients", "reviews"] as const).map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} style={{ background: "transparent", border: "none", borderBottom: activeTab === tab ? "2px solid #b8897a" : "2px solid transparent", paddingBottom: 10, fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: activeTab === tab ? "#b8897a" : "#7a7067", cursor: "pointer", transition: "color 0.15s", marginBottom: -1 }}>
                  {tab === "ingredients" ? "Ingredients" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Details tab */}
            {activeTab === "details" && (
              <div style={{ paddingBottom: 32 }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.7, color: "#4a4440" }}>
                  A weightless, radiance-activating serum foundation that melds seamlessly into skin, delivering 24-hour hydration and a luminous, second-skin finish. Enriched with bio-fermented pearl extract and hyaluronic spheres.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                  {["Vegan", "Cruelty-Free", "Fragrance-Free", "Dermatologist Tested"].map((f) => (
                    <span key={f} style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.06em", color: "#7a7067", border: "1px solid #c8bfb5", borderRadius: 100, padding: "4px 12px" }}>{f}</span>
                  ))}
                </div>
                <div style={{ marginTop: 16, background: "#ede7de", borderRadius: 12, padding: 16 }}>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: 13, fontWeight: 600, color: "#1c1a18", marginBottom: 8 }}>How to use</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: 1.65, color: "#4a4440", margin: 0 }}>
                    Apply 2–3 drops onto a clean, moisturised face. Blend with fingertips or a damp beauty sponge, building coverage as desired. Set with translucent powder for extended wear.
                  </p>
                </div>
              </div>
            )}

            {/* Ingredients tab */}
            {activeTab === "ingredients" && (
              <div style={{ paddingBottom: 32 }}>

                {/* Key actives */}
                <p style={{ fontFamily: "'Lora', serif", fontSize: 15, fontWeight: 600, color: "#1c1a18", marginBottom: 12 }}>
                  Key Actives
                </p>
                {KEY_ACTIVES.map((ing, i) => (
                  <div key={ing.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "12px 0", borderBottom: i < KEY_ACTIVES.length - 1 ? "1px solid #e2dcd6" : "none" }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontFamily: "'Lora', serif", fontSize: 13, fontWeight: 600, color: "#1c1a18", margin: 0, marginBottom: 2 }}>{ing.name}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#7a7067", margin: 0 }}>{ing.benefit}</p>
                    </div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#b8897a", marginLeft: 16, flexShrink: 0 }}>{ing.pct}</span>
                  </div>
                ))}

                {/* Full INCI */}
                <div style={{ marginTop: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <p style={{ fontFamily: "'Lora', serif", fontSize: 15, fontWeight: 600, color: "#1c1a18", margin: 0 }}>
                      Full Ingredient List
                    </p>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.06em", color: "#7a7067", textTransform: "uppercase" }}>
                      INCI
                    </span>
                  </div>
                  <div style={{ background: "#ede7de", borderRadius: 12, padding: 16 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {(showFullInci ? FULL_INCI : FULL_INCI.slice(0, 10)).map((ing, i) => (
                        <span
                          key={ing}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 11,
                            color: i < 6 ? "#1c1a18" : "#7a7067",
                            fontWeight: i < 6 ? 500 : 400,
                            background: i < 6 ? "rgba(184,137,122,0.15)" : "transparent",
                            borderRadius: 4,
                            padding: i < 6 ? "2px 6px" : "0",
                          }}
                        >
                          {ing}{i < (showFullInci ? FULL_INCI.length : 10) - 1 ? "," : ""}
                        </span>
                      ))}
                      {!showFullInci && (
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#7a7067" }}>
                          +{FULL_INCI.length - 10} more...
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setShowFullInci(!showFullInci)}
                      style={{ marginTop: 12, background: "transparent", border: "none", fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#b8897a", cursor: "pointer", padding: 0, textDecoration: "underline", textUnderlineOffset: 3 }}
                    >
                      {showFullInci ? "Show less" : "Show all ingredients"}
                    </button>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#9a9088", marginTop: 10, lineHeight: 1.5 }}>
                    Highlighted ingredients appear at key active concentrations. Bold = higher concentration. Listed in descending order of concentration.
                  </p>
                </div>

                {/* Safety + allergy */}
                <div style={{ marginTop: 16, border: "1px solid #e2dcd6", borderRadius: 12, padding: 14 }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
                      <circle cx="9" cy="9" r="7.5" stroke="#b8897a" strokeWidth="1.2" />
                      <path d="M9 6v4M9 12v.5" stroke="#b8897a" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, lineHeight: 1.6, color: "#7a7067", margin: 0 }}>
                      Always patch-test before first use. Consult a dermatologist if you have sensitive or reactive skin. Keep out of reach of children.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews tab */}
            {activeTab === "reviews" && (
              <div style={{ paddingBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, background: "#ede7de", borderRadius: 12, padding: 16, marginBottom: 16 }}>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: "'Lora', serif", fontSize: 36, fontWeight: 600, color: "#1c1a18", margin: 0, lineHeight: 1 }}>4.9</p>
                    <Stars count={5} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#7a7067", marginTop: 4 }}>214 reviews</p>
                  </div>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
                    {[5, 4, 3, 2, 1].map((star) => {
                      const pcts: Record<number, number> = { 5: 91, 4: 7, 3: 1, 2: 1, 1: 0 };
                      return (
                        <div key={star} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#7a7067", width: 8 }}>{star}</span>
                          <div style={{ flex: 1, height: 4, background: "#d6cdc4", borderRadius: 2, overflow: "hidden" }}>
                            <div style={{ width: `${pcts[star]}%`, height: "100%", background: "#b8897a", borderRadius: 2 }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {REVIEWS.map((r, i) => (
                  <div key={r.name} style={{ padding: "16px 0", borderBottom: i < REVIEWS.length - 1 ? "1px solid #e2dcd6" : "none" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "50%", background: `hsl(${20 + i * 40}, 30%, 75%)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600, color: "#1c1a18" }}>{r.name[0]}</div>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: "#1c1a18" }}>{r.name}</span>
                      </div>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#7a7067" }}>{r.date}</span>
                    </div>
                    <Stars count={r.rating} />
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.65, color: "#4a4440", margin: "8px 0 0" }}>{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom home indicator */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 34, background: "linear-gradient(to bottom, transparent, #faf7f4)", display: "flex", justifyContent: "center", alignItems: "flex-end", paddingBottom: 8, pointerEvents: "none" }}>
          <div style={{ width: 120, height: 5, borderRadius: 3, background: "#1c1a18", opacity: 0.2 }} />
        </div>
      </div>
    </div>
  );
}
