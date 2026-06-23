import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact — Shoply";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with the Shoply team.");
    }
  }, []);

  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold sm:text-5xl">Get in touch</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Questions, feedback, or just want to say hi? We'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {[
            { Icon: Mail, t: "Email", d: "support@shoply.demo", s: "Replies within 24 hours" },
            { Icon: Phone, t: "Phone", d: "+1 (555) 010-2024", s: "Mon–Fri, 9am–6pm" },
            { Icon: MapPin, t: "Address", d: "123 Market Street", s: "San Francisco, CA 94105" },
          ].map(({ Icon, t, d, s }) => (
            <div key={t} className="card-soft p-5 flex gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{t}</div>
                <div className="mt-0.5 font-semibold truncate">{d}</div>
                <div className="text-sm text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="card-soft p-6 sm:p-8">
          <h2 className="text-2xl font-bold">Send us a message</h2>
          <p className="text-sm text-muted-foreground mt-1">Fill the form and we'll be right with you.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm font-medium" htmlFor="name">Name</label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Jane Doe"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="jane@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="How can we help?"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90 hover:shadow-hover transition-all"
          >
            Send message <Send className="h-4 w-4" />
          </button>

          {sent && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-success/15 px-3 py-2 text-sm font-medium text-success">
              <CheckCircle2 className="h-4 w-4" /> Thanks! We'll be in touch shortly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
