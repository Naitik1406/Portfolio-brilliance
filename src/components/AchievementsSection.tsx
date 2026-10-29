import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Code2, Award, ExternalLink } from "lucide-react";

const achievements = [
  {
    icon: Code2,
    title: "285 CodeChef Problems Solved",
    description: "Reached 285 problems solved and earned CodeChef's Problem Solver - Silver badge for passing 250 problems.",
    gradient: "from-cyan-500 to-blue-500",
    source: { label: "CodeChef", href: "https://www.codechef.com/users/troop_club_35" },
  },
  {
    icon: Award,
    title: "1,602 Peak CodeChef Rating",
    description: "Reached a peak rating of 1,602, with a current rating of 1,548 (Division 3).",
    gradient: "from-purple-500 to-pink-500",
    source: { label: "CodeChef", href: "https://www.codechef.com/users/troop_club_35" },
  },
  {
    icon: Trophy,
    title: "25-Day CodeChef Streak",
    description: "Earned CodeChef's Daily Streak - Silver badge for maintaining a 25-day practice streak.",
    gradient: "from-orange-500 to-red-500",
    source: { label: "CodeChef", href: "https://www.codechef.com/users/troop_club_35" },
  },
  {
    icon: Code2,
    title: "16 LeetCode Problems Solved",
    description: "Solved problems across all three difficulty levels: 9 Easy, 6 Medium, and 1 Hard.",
    gradient: "from-yellow-500 to-orange-500",
    source: { label: "LeetCode", href: "https://leetcode.com/u/Naitik1406/" },
  },
  {
    icon: Trophy,
    title: "8 Coding Contests Attended",
    description: "Codolio lists 5 CodeChef contests and 3 CodeChef DSA contests.",
    gradient: "from-blue-500 to-indigo-500",
    source: { label: "Codolio", href: "https://codolio.com/profile/Naitik1406" },
  },
  {
    icon: Award,
    title: "62 GitHub Contributions",
    description: "Recorded 62 contributions on GitHub over the past year.",
    gradient: "from-green-500 to-emerald-500",
    source: { label: "GitHub", href: "https://github.com/Naitik1406" },
  },
];

const AchievementCard = ({ achievement, index, isInView }: { achievement: typeof achievements[0]; index: number; isInView: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 5,
        rotateX: -3,
      }}
      className="glass-card rounded-2xl p-6 group relative overflow-hidden"
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
    >
      {/* Gradient border top */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.gradient}`} />

      {/* Hover glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} p-3 flex items-center justify-center mb-5`}>
          <achievement.icon className="w-7 h-7 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {achievement.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {achievement.description}
        </p>
        <a
          href={achievement.source.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${achievement.title} on ${achievement.source.label}`}
          className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:underline"
        >
          View on {achievement.source.label}
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-primary font-mono text-sm uppercase tracking-widest"
            >
              Achievements
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
            >
              Milestones & <span className="text-gradient">Recognition</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-muted-foreground mt-4 max-w-2xl mx-auto"
            >
              Key accomplishments that reflect my dedication to continuous growth
            </motion.p>
          </div>

          {/* Achievements grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
