import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import networkBg from "@/assets/ai-network-bg.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const points = [
  { num: "①", title: "Pháp lý đầy đủ", desc: "QĐ 3439 + TT 02 + CV 3089 — hành lang pháp lý hoàn chỉnh." },
  { num: "②", title: "Bằng chứng quốc tế", desc: "47+ quốc gia đã chứng minh ROI giáo dục AI vượt trội." },
  { num: "③", title: "Chương trình sẵn sàng", desc: "3 trụ cột, 4 cấp độ, tích hợp 4 miền NLa–NLd." },
  { num: "④", title: "Chi phí tối ưu", desc: "Từ 11,2 triệu để bắt đầu — 189K₫/HS/năm." },
  { num: "⑤", title: "Người triển khai thực chiến", desc: "3.000 SV HCMUS + TEKY + 30.000 YouTube." },
];

const ConclusionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={networkBg} alt="" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-sm text-primary font-mono uppercase tracking-wider">Phần VIII</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            Kết Luận & <span className="gradient-neon-text">Kiến Nghị</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          {points.map((p) => (
            <motion.div key={p.num} {...fadeUp} className="p-5 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
              <div className="text-2xl mb-2">{p.num}</div>
              <h4 className="font-bold text-sm mb-1">{p.title}</h4>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
          <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-8 leading-relaxed">
            "Thời điểm tốt nhất để trồng cây là 20 năm trước. Thời điểm tốt thứ hai là <span className="text-primary font-semibold">ngay bây giờ</span>."
          </blockquote>
          <p className="text-xl md:text-2xl font-bold mb-8">
            Chương trình "AI Thực Chiến" chính là cây đó.<br/>
            <span className="gradient-neon-text">Và hôm nay chính là ngày trồng.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/baocao"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:shadow-[var(--shadow-neon)] transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle size={20} />
              Xem Báo Cáo Đầy Đủ
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSection;
