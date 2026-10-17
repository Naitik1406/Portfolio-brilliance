import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, MapPin, Send, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "naitik.singhal97171@gmail.com",
    href: "mailto:naitik.singhal97171@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9717089742",
    href: "tel:+919717089742",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Naitik1406",
    href: "https://github.com/Naitik1406",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ghaziabad, UP, India",
    href: "#",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-secondary/20">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm uppercase tracking-widest"
            >
              Get In Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg"
            >
              Feel free to reach out if you'd like to discuss potential collaborations or just want to say hi!
            </motion.p>
          </div>

          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 text-center"
            >
              <a
                href="mailto:naitik.singhal97171@gmail.com"
                className="inline-flex items-center gap-2 btn-glow px-8 py-4 rounded-xl font-semibold text-primary-foreground transition-all"
              >
                <Send className="w-5 h-5" />
                Send Me an Email
              </a>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
