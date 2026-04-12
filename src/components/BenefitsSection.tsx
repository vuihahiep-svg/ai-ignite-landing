import { motion } from "framer-motion";
import { Brain, TrendingUp, Users, GraduationCap, Building, MapPin } from "lucide-react";
import baocao1 from "@/assets/baocao1.png";
import studentsImg from "@/assets/students-robotics.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { label: "Tư duy thuật toán", value: "+34%", source: "Touretzky et al., 2023" },
  { label: "Tư duy sáng tạo", value: "+28%", source: "MIT Media Lab" },
  { label: "Kỹ năng cộng tác", value: "+41%", source: "ScienceDirect 2024" },
  { label: "Động lực học tập", value: "78%", source: "UNESCO 2025" },
  { label: "Giải quyết vấn đề", value: "+52%", source: "J. of AI in Education" },
  { label: "Nhận thức đạo đức", value: "+67%", source: "Ethics & IT, 2024" },
];

const stakeholders = [
  { icon: GraduationCap, title: "Học Sinh", items: ["Năng lực AI thực tiễn", "Portfolio dự án cho ĐH", "Tư duy phản biện vượt trội"] },
  { icon: Users, title: "Giáo Viên", items: ["Kỹ năng AI hiện đại", "Nâng cao vị thế nghề", "Công cụ AI hỗ trợ giảng dạy"] },
  { icon: Building, title: "Nhà Trường", items: ["Nâng cao thương hiệu", "Tiên phong chuyển đổi số", "Cơ sở đăng ký STEM quốc gia"] },
  { icon: MapPin, title: "Địa Phương", items: ["Nhân lực AI cho doanh nghiệp", "Thu hút đầu tư công nghệ", "Hình ảnh tỉnh đổi mới"] },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Brain className="text-primary" size={24} />
            <span className="text-sm text-primary font-mono uppercase tracking-wider">Phần IV</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Lợi Ích & <span className="gradient-neon-text">Giá Trị Khoa Học</span>
          </h2>
        </motion.div>

        {/* Scientific stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              {...fadeUp}
              className="p-6 rounded-xl border border-border bg-card text-center hover:border-neon transition-colors"
            >
              <div className="text-3xl font-bold text-primary text-glow-neon mb-2">{s.value}</div>
              <div className="font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-xs text-muted-foreground">{s.source}</div>
            </motion.div>
          ))}
        </div>

        {/* Flow chart image */}
        <motion.div {...fadeUp} className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">Sơ Đồ Phát Triển Năng Lực</h3>
          <div className="rounded-xl overflow-hidden border border-border bg-card p-6 flex justify-center">
            <img src={baocao1} alt="Sơ đồ luồng phát triển năng lực học sinh qua 4 cấp của chương trình AI Thực Chiến" className="w-full max-w-3xl h-auto object-contain" loading="lazy" />
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Hình 1: Lộ trình phát triển năng lực từ Giai đoạn 0 đến Cấp 3, tương ứng 4 miền NLa–NLd theo QĐ 3439/2025.
          </p>
        </motion.div>

        {/* Stakeholders + image */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="rounded-xl overflow-hidden">
            <img src={studentsImg} alt="Học sinh thực hành robotics" className="w-full h-full object-cover rounded-xl" loading="lazy" width={1280} height={720} />
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4">
            {stakeholders.map((s) => (
              <motion.div key={s.title} {...fadeUp} className="p-5 rounded-xl border border-border bg-card">
                <s.icon className="text-primary mb-3" size={24} />
                <h4 className="font-bold mb-2 text-sm">{s.title}</h4>
                <ul className="space-y-1">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <TrendingUp size={12} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
