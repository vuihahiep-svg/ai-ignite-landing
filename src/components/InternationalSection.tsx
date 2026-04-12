import { motion } from "framer-motion";
import { Globe, AlertTriangle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const countries = [
  { flag: "🇨🇳", name: "Trung Quốc", year: "2019", approach: "Phổ cập nhanh", budget: "$1 tỷ+", highlight: "Bắt buộc toàn quốc từ 2023, 100.000+ GV" },
  { flag: "🇸🇬", name: "Singapore", year: "2020", approach: "Chất lượng cao", budget: "SGD 72M", highlight: "#1 Đông Nam Á về PISA Digital" },
  { flag: "🇲🇾", name: "Malaysia", year: "2023", approach: "Chi phí tối ưu", budget: "RM 200M", highlight: "Cascade training, phù hợp nhất VN" },
  { flag: "🇫🇮", name: "Phần Lan", year: "2018", approach: "Đạo đức AI", budget: "—", highlight: "Elements of AI — 1 triệu+ người hoàn thành" },
  { flag: "🇺🇸", name: "Hoa Kỳ", year: "2020", approach: "AI4K12 — 5 Big Ideas", budget: "Biến thiên", highlight: "Framework toàn diện K-12" },
];

const timeline = [
  { name: "Trung Quốc", start: 2019, width: "90%" },
  { name: "Singapore", start: 2020, width: "80%" },
  { name: "Malaysia", start: 2023, width: "40%" },
  { name: "Việt Nam", start: 2025, width: "10%" },
];

const InternationalSection = () => {
  return (
    <section id="international" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Globe className="text-primary" size={24} />
            <span className="text-sm text-primary font-mono uppercase tracking-wider">Phần III</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            So Sánh <span className="gradient-neon-text">Quốc Tế</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hơn 47 quốc gia đã đưa giáo dục AI vào chương trình phổ thông. Cuộc đua này không chờ ai.
          </p>
        </motion.div>

        {/* Country cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {countries.map((c) => (
            <motion.div
              key={c.name}
              {...fadeUp}
              className="p-6 rounded-xl border border-border bg-card hover:border-neon transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{c.flag}</span>
                <div>
                  <h4 className="font-bold">{c.name}</h4>
                  <span className="text-xs text-muted-foreground font-mono">Từ {c.year}</span>
                </div>
              </div>
              <div className="text-sm text-primary font-semibold mb-2">{c.approach}</div>
              <p className="text-sm text-muted-foreground">{c.highlight}</p>
            </motion.div>
          ))}
        </div>

        {/* Gap visualization */}
        <motion.div {...fadeUp} className="p-8 rounded-xl border border-border bg-card">
          <h3 className="text-xl font-bold mb-6">Khoảng Cách Và Cơ Hội</h3>
          <div className="space-y-4">
            {timeline.map((t) => (
              <div key={t.name} className="flex items-center gap-4">
                <div className="w-24 text-sm font-medium text-right shrink-0">{t.name}</div>
                <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: t.width }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className={`h-full rounded-full ${t.name === "Việt Nam" ? "bg-primary animate-pulse-glow" : "bg-deep-purple"}`}
                  />
                </div>
                <span className="text-xs text-muted-foreground font-mono w-12">{t.start}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg border border-destructive/30 bg-destructive/5 flex items-start gap-3">
            <AlertTriangle className="text-destructive shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Cảnh báo chiến lược:</strong> Khoảng cách 6-7 năm tương đương một thế hệ học sinh không được trang bị năng lực AI.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InternationalSection;
