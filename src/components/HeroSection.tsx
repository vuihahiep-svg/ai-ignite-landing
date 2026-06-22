import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-classroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="AI Classroom" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon bg-muted/50 mb-8">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground font-mono">Đề xuất chiến lược — Tháng 04/2026</span>
          </div>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-2 md:mb-3 font-light leading-snug">
            Thực Chiến
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-3 md:mb-4">
            <span className="gradient-neon-text">AI</span>{" "}
            <span className="text-foreground">CHO EM</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light leading-snug">
            Chương Trình Giáo Dục Trí Tuệ Nhân Tạo Toàn Diện
          </p>
          <p className="text-base md:text-lg gradient-purple-text font-semibold mb-10">
            Cho Học Sinh Phổ Thông Tỉnh Đồng Nai
          </p>

          {/* Stats bar */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
            {[
              { value: "85 triệu", label: "Việc làm thay đổi đến 2030" },
              { value: "47+", label: "Quốc gia đã dạy AI" },
              { value: "189K₫", label: "Chi phí / HS / năm" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary text-glow-neon">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#overview"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:shadow-[var(--shadow-neon)] transition-all"
            >
              Khám Phá Chương Trình
            </a>
            <Link
              to="/baocao"
              className="px-8 py-4 rounded-lg border border-neon-strong text-primary font-semibold text-lg hover:bg-primary/10 transition-all"
            >
              Xem Tài Liệu Dự Án
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="text-primary/50" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
