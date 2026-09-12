
"use client";

import { useState } from "react";
import { Star, ThumbsUp, X ,Check} from "lucide-react";
const palette = {
  // Backgrounds: Light Honey Tint (Pure White se better warm mix)
  bg: "#FFFDF2",          
  surface: "#FFFFFF",     

 
  turmeric: "#FFC107",    
  turmericHover: "#E0A800", 

  
  text: "#1F1914",        
  muted: "#7A6F64",       
  border: "#FFE8A3",      

  
  chili: "#E53935",       
};
const initialReviews = [
  {
    id: 1,
    name: "Anuj Kumar Singh",
    rating: 5,
    date:"2 hour ago",
    comment:
      "So delicious food of Hello Bites",
    helpful: 12,
  },
]

function Stars({ value, size = 16, onRate }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={size}
          onClick={onRate ? () => onRate(n) : undefined}
          style={{
            cursor: onRate ? "pointer" : "default",
            color: n <= value ? palette.turmeric : palette.border,
          }}
          fill={n <= value ? palette.turmeric : "none"}
        />
      ))}
    </div>
  );
}

export default function ReviewRatingPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
const [showThanks, setShowThanks] = useState(false);
  const total = reviews.length;
  const avg = total
    ? (reviews.reduce((s, r) => s + r.rating, 0) / total).toFixed(1)
    : 0;

  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const count = reviews.filter((r) => r.rating === star).length;
    return { star, count, pct: total ? Math.round((count / total) * 100) : 0 };
  });

  const filtered =
    filter === "all" ? reviews : reviews.filter((r) => r.rating === Number(filter));

  function handleSubmit() {
    if (!name.trim() || !comment.trim() || rating === 0) {
      setError("Please fill the all information including rating.");
      return;
    }
    setReviews([
      {
        id: Date.now(),
        name: name.trim(),
        rating,
        date: "Today",
        comment: comment.trim(),
        helpful: 0,
      },
      ...reviews,
    ]);
    setName("");
    setRating(0);
    setComment("");
    setError("");
    setShowForm(false);
    setShowThanks(true)
  }

function markHelpful(id) {
  setReviews((rs) =>
    rs.map((r) => {
      if (r.id !== id || r.helped) {
        return r;
      }

      return {
        ...r,
        helpful: r.helpful + 1,
        helped: true,
      };
    })
  );
}

  return (
    <div
      className="relative min-h-screen w-full"
      style={{ backgroundColor: palette.bg, fontFamily: "Georgia, serif" }}
    >
      {/* decorative food background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-5 text-6xl">🍔</div>
        <div className="absolute top-60 right-5 text-5xl">🍕</div>
        <div className="absolute bottom-60 left-10 text-5xl">🍟</div>
        <div className="absolute bottom-80 right-10 text-5xl">🌮</div>
        <div className="absolute top-96 left-1/2 text-5xl">🥗</div>
        <div className="absolute bottom-20 right-1/3 text-6xl">🍩</div>
      </div>

   {/* thank you overlay page */}
      {showThanks && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(43, 24, 16, 0.75)" }}
        >
          <div
            className="flex flex-col items-center text-center p-8 max-w-sm w-full"
            style={{ backgroundColor: palette.surface, borderRadius: 20 }}
          >
            <div
              className="flex items-center justify-center rounded-full mb-4"
              style={{ width: 64, height: 64, backgroundColor: "#2E7D46" }}
            >
              <Check size={32} color="#fff" />
            </div>
            <h2 className="text-2xl mb-2" style={{ color: palette.text, fontWeight: 700 }}>
              Thank You!
            </h2>
            <p style={{ color: palette.muted, fontFamily: "sans-serif", fontSize: 14, marginBottom: 24, lineHeight: 1.5 }}>
              Thank you for submitting the review successfully!
            </p>
            <button
              onClick={() => setShowThanks(false)}
              className="px-6 py-2 text-sm rounded-full"
              style={{ backgroundColor: palette.chili, color: "#fff", fontFamily: "sans-serif", fontWeight: 600 }}
            >
              Back to Reviews
            </button>
          </div>
        </div>
      )}
      <div className="relative max-w-3xl mx-auto px-4 py-10">
        {/* header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-1" style={{ color: palette.text, fontWeight: 700 }}>
            Hello Bites
          </h1>
          <p style={{ color: palette.muted, fontFamily: "sans-serif", fontSize: 14 }}>
            Customer Reviews aur Ratings
          </p>
        </div>

        {/* hero summary */}
        <div
          className="flex flex-col md:flex-row gap-6 p-6 mb-8"
          style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}`, borderRadius: 16 }}
        >
          <div className="flex flex-col items-center justify-center md:w-1/3 md:border-r" style={{ borderColor: palette.border }}>
            <span className="text-5xl" style={{ color: palette.text, fontWeight: 700 }}>
              {avg}
            </span>
            <Stars value={Math.round(avg)} size={20} />
            <span style={{ color: palette.muted, fontFamily: "sans-serif", fontSize: 13, marginTop: 4 }}>
              {total} reviews
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2 justify-center">
            {distribution.map((d) => (
              <div key={d.star} className="flex items-center gap-2">
                <span style={{ width: 40, fontFamily: "sans-serif", fontSize: 13, color: palette.muted }}>
                  {d.star} star
                </span>
                <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ backgroundColor: palette.bg }}>
                  <div className="h-full rounded-full" style={{ width: `${d.pct}%`, backgroundColor: palette.chili }} />
                </div>
                <span style={{ width: 30, fontFamily: "sans-serif", fontSize: 12, color: palette.muted, textAlign: "right" }}>
                  {d.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* filter row */}
        <div className="flex flex-wrap items-center gap-2 mb-6" style={{ fontFamily: "sans-serif" }}>
          {["all", 5, 4, 3, 2, 1].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-3 py-1 text-sm rounded-full"
              style={{
                border: `1px solid ${filter === f ? palette.chili : palette.border}`,
                backgroundColor: filter === f ? palette.chili : "transparent",
                color: filter === f ? "#fff" : palette.text,
              }}
            >
              {f === "all" ? "Sabhi" : `${f} ★`}
            </button>
          ))}
          <button
            onClick={() => setShowForm((s) => !s)}
            className="ml-auto px-4 py-1.5 text-sm rounded-full"
            style={{ backgroundColor: palette.chili, color: "#fff" }}
          >
            Write down the review
          </button>
        </div>

        {/* review form */}
        {showForm && (
          <div
            className="p-5 mb-6"
            style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}`, borderRadius: 16, fontFamily: "sans-serif" }}
          >
            <div className="flex justify-between items-center mb-3">
              <span style={{ fontWeight: 600, color: palette.text }}>Write down your name </span>
              <X size={18} style={{ cursor: "pointer", color: palette.muted }} onClick={() => setShowForm(false)} />
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your's name"
              className="w-full mb-3 px-3 py-2 text-sm rounded-lg outline-none"
              style={{ border: `1px solid ${palette.border}` }}
            />
            <div className="mb-3">
              <Stars value={rating} size={24} onRate={setRating} />
            </div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Taste about food..."
              rows={3}
              className="w-full mb-2 px-3 py-2 text-sm rounded-lg outline-none resize-none"
              style={{ border: `1px solid ${palette.border}` }}
            />
            {error && <p style={{ color: palette.chili, fontSize: 13, marginBottom: 8 }}>{error}</p>}
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-sm rounded-lg"
              style={{ backgroundColor: palette.chili, color: "#fff" }}
            >
              Submit
            </button>
          </div>
        )}

        {/* review list */}
        <div className="flex flex-col gap-4">
          {filtered.length === 0 && (
            <p style={{ color: palette.muted, fontFamily: "sans-serif", textAlign: "center" }}>
Not Found this rating
            </p>
          )}
          {filtered.map((r) => (
            <div
              key={r.id}
              className="p-4"
              style={{ backgroundColor: palette.surface, border: `1px solid ${palette.border}`, borderRadius: 14 }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 40, height: 40, backgroundColor: palette.turmeric, color: "#fff", fontFamily: "sans-serif", fontWeight: 600 }}
                >
                  {r.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center flex-wrap gap-1">
                    <span style={{ fontFamily: "sans-serif", fontWeight: 600, color: palette.text }}>{r.name}</span>
                    <span style={{ fontFamily: "sans-serif", fontSize: 12, color: palette.muted }}>{r.date}</span>
                  </div>
                  <Stars value={r.rating} size={14} />
                  <p style={{ fontFamily: "sans-serif", fontSize: 14, color: palette.text, marginTop: 6, lineHeight: 1.5 }}>
                    {r.comment}
                  </p>
                  <button
  onClick={() => markHelpful(r.id)}
  disabled={r.helped}
  className="flex items-center gap-1 mt-2"
  style={{
    fontFamily: "sans-serif",
    fontSize: 12,
    color: r.helped ? palette.chili : palette.muted,
    cursor: r.helped ? "not-allowed" : "pointer",
  }}
>
  <ThumbsUp size={13} />
  {r.helped ? "Helpful ✓" : "Helpful"} ({r.helpful})
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}