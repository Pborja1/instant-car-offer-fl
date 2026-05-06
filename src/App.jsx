import React, { useMemo, useState } from "react";

const PHONE_DISPLAY = "727-598-0228";
const PHONE_LINK = "tel:+17275980228";
const EMAIL = "offers@instantcarofferfl.com";

function Button({ children, href, type = "button", variant = "primary", size = "md", className = "", onClick }) {
  const base = "inline-flex items-center justify-center rounded-full font-bold transition focus:outline-none focus:ring-4 focus:ring-emerald-300/30";
  const sizes = {
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-8 text-base",
  };
  const variants = {
    primary: "bg-emerald-400 text-slate-950 hover:bg-emerald-300",
    dark: "bg-slate-950 text-white hover:bg-slate-800",
    outline: "border border-white/20 bg-white/10 text-white hover:bg-white/15",
  };

  const classes = `${base} ${sizes[size] || sizes.md} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

function IconBadge({ children }) {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-lg font-black text-slate-950">
      {children}
    </span>
  );
}

export default function InstantCarOfferFL() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/xlgzngqg", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  const navItems = [
    { label: "How It Works", href: "#process" },
    { label: "Why Us", href: "#why" },
    { label: "FAQ", href: "#faq" },
    { label: "Get Offer", href: "#offer" },
  ];

  const processSteps = [
    ["1", "Submit your vehicle", "Tell us the year, make, model, miles, payoff status, and condition."],
    ["2", "Get a real offer", "We review your details and contact you with a fast, straightforward offer."],
    ["3", "Get paid", "Schedule a quick inspection, finish paperwork, and get paid."],
  ];

  const whyItems = [
    ["✓", "No obligation", "Get your offer without pressure or commitment."],
    ["🚚", "Pickup options", "Local pickup coordination may be available."],
    ["📄", "Lien & payoff help", "We can help walk through payoff and title steps."],
    ["★", "Local Florida buyer", "Built for Tampa Bay and Florida vehicle sellers."],
  ];

  const faqs = [
    ["Do you buy vehicles with a loan?", "Yes. Submit your payoff details and we can walk through the payoff process."],
    ["Do I have to buy another car?", "No. You can sell your vehicle without buying anything."],
    ["How fast can I get an offer?", "Most complete submissions can be reviewed quickly during business hours."],
    ["What do I need to sell?", "Usually ID, title or payoff info, vehicle registration, keys, and vehicle condition details."],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400 text-xl font-black text-slate-950">🚗</div>
            <div>
              <p className="text-lg font-black leading-tight tracking-tight">Instant Car Offer FL</p>
              <p className="text-xs font-medium text-slate-400">Fast Florida vehicle offers</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button href={PHONE_LINK} variant="outline">Call</Button>
            <Button href="#offer">Get Offer</Button>
          </div>

          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="font-semibold text-slate-200">
                  {item.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button href={PHONE_LINK} variant="outline">Call</Button>
                
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
                📍 Serving Tampa Bay & Florida
              </div>

              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Get a real offer for your car today.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Sell your vehicle fast with a simple local process. We buy cars, trucks, SUVs, paid-off vehicles, financed vehicles, and lease buyouts.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#offer" size="lg">Get My Offer</Button>
                
              </div>

              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                <TrustPill icon="⏱" text="Same-day offers" />
                <TrustPill icon="📄" text="Payoff help" />
                <TrustPill icon="💵" text="Fast payment" />
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white text-slate-950 shadow-2xl shadow-emerald-950/40">
                <div className="bg-gradient-to-br from-emerald-400 to-teal-300 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-900/75">Free appraisal</p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight">Start your offer</h2>
                  <p className="mt-2 font-semibold text-slate-800">Send your vehicle info and get contacted fast.</p>
                </div>
                <LeadForm compact onSubmit={handleSubmit} submitted={submitted} />
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="border-y border-white/10 bg-slate-900/60 px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Simple process</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Sell your car in 3 easy steps.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map(([number, title, body]) => (
                <div key={number} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-white">
                  <IconBadge>{number}</IconBadge>
                  <h3 className="mt-6 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Why Instant Car Offer FL</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">A faster way to sell without the runaround.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Skip lowball messages, endless meetups, and complicated payoff questions. We make the process direct, professional, and easy.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="#offer">Request Offer</Button>
                <Button href={PHONE_LINK} variant="outline">{PHONE_DISPLAY}</Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyItems.map(([icon, title, body]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <IconBadge>{icon}</IconBadge>
                  <h3 className="mt-5 text-xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-slate-300">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 text-slate-950 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 md:grid-cols-4">
              {[
                ["Cars", "Sedans, coupes, hatchbacks"],
                ["Trucks", "Gas, diesel, work trucks"],
                ["SUVs", "Family, luxury, third-row"],
                ["Financed", "Payoff or lien vehicles"],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <span className="text-2xl text-emerald-500">✓</span>
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offer" className="px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Get started</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Request your vehicle offer.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                The more details you provide, the faster we can review your vehicle and contact you.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white text-slate-950 shadow-2xl">
              <LeadForm onSubmit={handleSubmit} submitted={submitted} />
            </div>
          </div>
        </section>

        <section id="faq" className="border-t border-white/10 bg-slate-900/60 px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">FAQ</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight">Common questions.</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map(([q, a]) => (
                <div key={q} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <h3 className="text-lg font-black">{q}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xl font-black">Instant Car Offer FL</p>
            <p className="mt-1 text-sm text-slate-400">© {currentYear} InstantCarOfferFL.com. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={PHONE_LINK} variant="outline">{PHONE_DISPLAY}</Button>
            
          </div>
        </div>
      </footer>
    </div>
  );
}

function TrustPill({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-bold text-slate-200">{text}</span>
    </div>
  );
}

function LeadForm({ onSubmit, submitted, compact = false }) {
  const inputClass = "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100";
  const labelClass = "mb-2 block text-sm font-black text-slate-800";

  return (
    <form onSubmit={onSubmit} className={compact ? "space-y-4 p-6" : "space-y-5 p-6 sm:p-8"}>
      {submitted && (
        <div className="rounded-3xl border-2 border-emerald-300 bg-emerald-500 p-6 text-center shadow-xl">
          <div className="mb-3 text-5xl">✅</div>
          <h3 className="text-2xl font-black text-white">Thank You!</h3>
          <p className="mt-2 text-base font-bold text-emerald-50">
            Your vehicle information has been submitted successfully.
          </p>
          <p className="mt-1 text-sm font-semibold text-emerald-100">
            One of our acquisition specialists will contact you shortly.
          </p>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Full name</label>
          <input name="name" className={inputClass} placeholder="Your name" required />
        </div>
        <div>
          <label className={labelClass}>Phone number</label>
          <input name="phone" className={inputClass} placeholder="(___) ___-____" required />
        </div>
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input name="email" type="email" className={inputClass} placeholder="you@email.com" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className={labelClass}>Year</label>
          <input name="year" className={inputClass} placeholder="2021" required />
        </div>
        <div>
          <label className={labelClass}>Make</label>
          <input name="make" className={inputClass} placeholder="Toyota" required />
        </div>
        <div>
          <label className={labelClass}>Model</label>
          <input name="model" className={inputClass} placeholder="Camry" required />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Mileage</label>
          <input name="mileage" className={inputClass} placeholder="45,000" required />
        </div>
        <div>
          <label className={labelClass}>VIN</label>
          <input name="vin" className={inputClass} placeholder="Optional but helpful" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Payoff Amount</label>
          <input name="payoff_amount" className={inputClass} placeholder="$18,500" />
        </div>
        <div>
          <label className={labelClass}>Lender / Bank</label>
          <input name="lender" className={inputClass} placeholder="Chase, Capital One, etc." />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Monthly Payment</label>
          <input name="monthly_payment" className={inputClass} placeholder="$450" />
        </div>
        <div>
          <label className={labelClass}>Loan Term</label>
          <input name="term" className={inputClass} placeholder="60 months" />
        </div>
      </div>

      <div>
        <label className={labelClass}>When are you looking to sell it to us?</label>
        <select name="sell_timeline" className={inputClass} defaultValue="">
          <option value="" disabled>Select one</option>
          <option value="Today">Today</option>
          <option value="Within 7 days">Within 7 days</option>
          <option value="Within 30 days">Within 30 days</option>
          <option value="Just checking value for now">Just checking value for now</option>
        </select>
      </div>

      <div>
        <label className={labelClass}>Are you the registered owner of the vehicle?</label>
        <select name="registered_owner" className={inputClass} defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Co-owner">Co-owner</option>
        </select>
      </div>

      {!compact && (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Payoff / lien status</label>
              <select name="payoff" className={inputClass} defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="Paid off / title in hand">Paid off / title in hand</option>
                <option value="Currently financed">Currently financed</option>
                <option value="Lease buyout">Lease buyout</option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Timeline</label>
              <select name="timeline" className={inputClass} defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="Today">Today</option>
                <option value="This week">This week</option>
                <option value="This month">This month</option>
                <option value="Just checking value">Just checking value</option>
              </select>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Condition</label>
              <select name="condition" className={inputClass} defaultValue="">
                <option value="" disabled>Select one</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Needs work">Needs work</option>
                <option value="Accident / damage reported">Accident / damage reported</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Vehicle location</label>
              <input name="location" className={inputClass} placeholder="City, FL" />
            </div>
          </div>

          <div>
            <label className={labelClass}>Notes</label>
            <textarea name="notes" className={`${inputClass} min-h-28 resize-none`} placeholder="Tell us about condition, payoff amount, number of keys, title status, or anything important." />
          </div>
        </>
      )}

      <Button type="submit" variant="dark" className="w-full" size="lg">Get My Offer</Button>

      <p className="text-center text-xs font-semibold leading-5 text-slate-500">
        By submitting, you agree to be contacted about your vehicle offer. No obligation to sell.
      </p>
    </form>
  );
}
