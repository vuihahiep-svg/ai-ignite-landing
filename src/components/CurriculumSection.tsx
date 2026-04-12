import { motion } from "framer-motion";
import { BookOpen, Blocks, Cpu, Code, Rocket } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const levels = [
  {
    icon: Blocks,
    stage: "Giai Đoạn 0",
    title: "Mầm Non & Tiểu Học Đầu Cấp",
    age: "4–8 tuổi",
    color: "border-l-muted-foreground",
    modules: ["AI thấy gì? — Dán nhãn hình ảnh", "Robot biết nghe — PopBots", "AI trong nhà em — Poster", "Robot dọn dẹp — LEGO"],
    highlight: "100% trò chơi, KHÔNG kiểm tra lý thuyết",
    hours: "36 tiết/năm",
  },
  {
    icon: Cpu,
    stage: "Cấp 1",
    title: "Tiểu Học Giữa & Cuối",
    age: "9–11 tuổi, Lớp 3–5",
    color: "border-l-deep-purple",
    modules: ["Thiết kế ảnh AI — Canva AI", "Podcast bằng AI — Claude + ElevenLabs", "Video AI — CapCut + Suno", "Game Scratch + AI", "Robot Rover điều khiển khuôn mặt"],
    highlight: "\"Em muốn tạo ra gì? Hãy nói cho AI biết.\"",
    hours: "52 tiết/năm",
  },
  {
    icon: Code,
    stage: "Cấp 2",
    title: "THCS",
    age: "12–15 tuổi",
    color: "border-l-primary",
    modules: ["AI Vision — Phân loại hình ảnh", "PictoBlox nâng cao + Game AI", "AIoT — Vườn thông minh, Thùng rác AI", "Vibe Coding — Lovable.dev", "Chatbot trường học"],
    highlight: "Dự án \"AI Vì Cộng Đồng Địa Phương\"",
    hours: "70 tiết/năm",
  },
  {
    icon: Rocket,
    stage: "Cấp 3",
    title: "THPT — Chuyên Sâu & Sáng Tạo",
    age: "16–18 tuổi",
    color: "border-l-accent",
    modules: ["Kênh YouTube AI từ A-Z", "Prompt Engineering Master", "App AI — Lovable/Bolt", "Smart City mini — Raspberry Pi", "Automation Agent AI — n8n"],
    highlight: "Startup AI Mini — Demo Day thực tế",
    hours: "70+ tiết/năm",
  },
];

const methodology = [
  { code: "U", name: "Unplugged", desc: "Thẻ bài / LEGO", pct: "15%" },
  { code: "T", name: "Tangible", desc: "Robot vật lý", pct: "25%" },
  { code: "H", name: "Hybrid", desc: "Kit + Màn hình", pct: "25%" },
  { code: "S", name: "Screen-based", desc: "App / Model / Content", pct: "35%" },
];

const CurriculumSection = () => {
  return (
    <section id="curriculum" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="text-primary" size={24} />
            <span className="text-sm text-primary font-mono uppercase tracking-wider">Phần V</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Khung Chương Trình <span className="gradient-neon-text">Thực Chiến</span>
          </h2>
        </motion.div>

        {/* U-T-H-S Methodology */}
        <motion.div {...fadeUp} className="mb-16">
          <h3 className="text-lg font-bold mb-6 text-center">Tiến Trình U-T-H-S — 4 Bậc Leo Thang Nhận Thức</h3>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {methodology.map((m, i) => (
              <div key={m.code} className="flex items-center gap-2">
                {i > 0 && <span className="hidden sm:block text-muted-foreground">→</span>}
                <div className="px-5 py-3 rounded-lg bg-card border border-border text-center flex-1 sm:flex-initial">
                  <div className="text-lg font-bold text-primary font-mono">[{m.code}]</div>
                  <div className="text-sm font-semibold">{m.name}</div>
                  <div className="text-xs text-muted-foreground">{m.desc}</div>
                  <div className="text-xs text-primary font-mono mt-1">{m.pct}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Levels */}
        <div className="space-y-6">
          {levels.map((level) => (
            <motion.div
              key={level.stage}
              {...fadeUp}
              className={`p-6 md:p-8 rounded-xl border border-border bg-card border-l-4 ${level.color} hover:border-neon transition-colors`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <level.icon className="text-primary" size={32} />
                  <div className="text-xs text-muted-foreground font-mono mt-2">{level.age}</div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-mono font-bold">{level.stage}</span>
                    <h3 className="text-xl font-bold">{level.title}</h3>
                    <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">{level.hours}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                    {level.modules.map((m) => (
                      <div key={m} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span> {m}
                      </div>
                    ))}
                  </div>
                  <div className="inline-block px-3 py-1.5 rounded bg-primary/10 text-primary text-sm font-medium">
                    ✦ {level.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
