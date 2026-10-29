import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

type Certificate = {
  title: string;
  issuer?: string;
  date: string;
  description?: string;
  credentialUrl: string;
};

const certificates: Certificate[] = [
  {
    title: "JavaScript for Beginners",
    date: "June 20, 2026",
    description: "Certificate code: 10371053",
    credentialUrl: "https://drive.google.com/file/d/1wU6bdT0Xh6kQDFKJTHP3iTyiA5IMZKjk/view",
  },
  {
    title: "Grand Hack IPEC",
    issuer: "HackShastra",
    date: "Date not listed",
    description: "Participation certificate for the Grand Hack IPEC.",
    credentialUrl: "https://drive.google.com/file/d/1ZPb0qjVR1g54JXmfHpF7h1gC0nPjAY_Z/view",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "June 29, 2026",
    credentialUrl: "https://drive.google.com/file/d/13iZrKOKhqmOIgLsd1M3oUmXUKHA6ia2J/view",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "September 9, 2026",
    credentialUrl: "https://drive.google.com/file/d/1_dDtUoj8OjmMKQurXPyNmWi6hVEwhV3K/view",
  },
  {
    title: "TechQuezt #35: India's Digital Stack",
    issuer: "Naukri Campus",
    date: "October 3, 2026",
    description: "Participation certificate.",
    credentialUrl: "https://drive.google.com/file/d/130F9LNLj-9KZFE0xRivR-MEC9QHldgfq/view",
  },
  {
    title: "StartupX Hackathon 2026",
    issuer: "Gamnexis",
    date: "September 2026",
    description: "Certificate of participation.",
    credentialUrl: "https://drive.google.com/file/d/12GbQwa3TsPolE6CZP9Os8496iTIexUEA/view",
  },
  {
    title: "Naukri Campus Young Turks 2026",
    issuer: "Naukri Campus",
    date: "October 19, 2026",
    description: "Scored in the 92.83rd percentile in the skill contest.",
    credentialUrl: "https://drive.google.com/file/d/1jxSetKdn903jRU-NXQ2wo54qDSNVM232/view",
  },
];

const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="section-padding relative overflow-hidden bg-secondary/20">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-primary font-mono text-sm uppercase tracking-widest">
              Certificates
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Learning & <span className="text-gradient">Credentials</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Courses, certifications, and milestones from my learning journey
            </p>
          </div>

          {certificates.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <motion.article
                  key={`${certificate.issuer}-${certificate.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card rounded-2xl p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500" />
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{certificate.title}</h3>
                      {certificate.issuer && (
                        <p className="text-primary font-medium mt-1">{certificate.issuer}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-2">{certificate.date}</p>
                      {certificate.description && (
                        <p className="text-sm text-muted-foreground mt-2">{certificate.description}</p>
                      )}
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline"
                      >
                        View certificate
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No certificates added yet
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Certificates will appear here once they have been added.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
