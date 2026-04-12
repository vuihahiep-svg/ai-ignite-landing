import { motion } from "framer-motion";
import { Zap, BookOpen, Trophy } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const OverviewSection = () => {
  return (
    <section id="overview" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tại Sao <span className="gradient-neon-text">"Thực Chiến"</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Mô hình giáo dục AI truyền thống mắc kẹt ở lý thuyết. AI Thực Chiến thiết kế theo triết lý ngược lại.
          </p>
        </motion.div>

        {/* Philosophy bar */}
        <motion.div {...fadeUp} className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { label: "Lý Thuyết", percent: "20%", color: "bg-deep-purple" },
              { label: "Thực Hành", percent: "50%", color: "bg-primary" },
              { label: "Sản Phẩm Thực Tế", percent: "30%", color: "bg-accent" },
            ].map((item, i) => (
              <div key={item.label} className="flex items-center gap-3">
                {i > 0 && <span className="hidden md:block text-muted-foreground text-2xl mx-4">→</span>}
                <div className={`px-6 py-4 rounded-lg ${item.color} text-center min-w-[160px]`}>
                  <div className="text-2xl font-bold text-primary-foreground">{item.percent}</div>
                  <div className="text-sm font-medium text-primary-foreground/80">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Zap,
              title: "Mỗi Buổi Học = Sản Phẩm",
              desc: "Mỗi buổi học kết thúc bằng một sản phẩm có thể chạy được. Không bài tập lý thuyết suông.",
            },
            {
              icon: BookOpen,
              title: "Portfolio Kỹ Thuật Số",
              desc: "Mỗi năm học sinh xây dựng portfolio gồm 6-8 sản phẩm số thực tế — sẵn sàng cho đại học & nghề nghiệp.",
            },
            {
              icon: Trophy,
              title: "Demo Day & Startup Mini",
              desc: "Học sinh THPT trình bày trước hội đồng gồm GV, doanh nhân địa phương và đại diện Phòng GD&ĐT.",
            },
          ].map((feat) => (
            <motion.div
              key={feat.title}
              {...fadeUp}
              className="p-8 rounded-xl border border-border bg-card hover:border-neon transition-colors group"
            >
              <feat.icon className="text-primary mb-4 group-hover:text-glow-neon" size={32} />
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-muted-foreground">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Context */}
        <motion.div {...fadeUp} className="mt-16 p-8 rounded-xl border border-neon bg-muted/30">
          <h3 className="text-xl font-bold mb-4 gradient-neon-text">Bối Cảnh Quốc Gia</h3>
          <p className="text-muted-foreground leading-relaxed">
            Ngày 15/12/2025, Bộ GD&ĐT ban hành <strong className="text-foreground">Quyết định 3439/QĐ-BGDĐT</strong>, chính thức thiết lập khung pháp lý cho giáo dục AI toàn quốc. 
            Cùng với <strong className="text-foreground">Thông tư 02/2025/TT-BGDĐT</strong>, AI được xác định là thành phần then chốt của Khung năng lực số quốc gia. 
            Tỉnh nào triển khai sớm — tỉnh đó có lợi thế cạnh tranh về nguồn nhân lực trong 10 năm tới.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
