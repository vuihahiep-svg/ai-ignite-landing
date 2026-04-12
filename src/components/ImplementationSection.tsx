import { useState } from "react";
import { motion } from "framer-motion";
import { Settings, DollarSign, Shield, Calendar, ZoomIn } from "lucide-react";
import baocao2 from "@/assets/baocao2.png";
import ImageLightbox from "./ImageLightbox";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const packages = [
  { name: "Gói A — Tinh Gọn", cost: "18,9 triệu", perStudent: "189.000₫", students: "100 HS", desc: "Khởi động nhanh, chi phí thấp nhất. Micro:bit + Scratch." },
  { name: "Gói B — Tiêu Chuẩn", cost: "55,7 triệu", perStudent: "278.500₫", students: "200 HS", desc: "Lab đầy đủ: Micro:bit + Rover + Camera AI + PictoBlox." },
  { name: "Gói C — Di Động", cost: "11,2 triệu", perStudent: "187.000₫", students: "60 HS", desc: "Kit xách tay, luân chuyển giữa các trường." },
];

const risks = [
  { risk: "GV thiếu năng lực", solution: "Hỗ trợ online hàng tuần + video tài liệu" },
  { risk: "Thiết bị hỏng", solution: "Mua 10% dự phòng + bảo hành OhStem" },
  { risk: "HS thiếu thiết bị", solution: "Gói C di động + phòng máy sẵn có" },
  { risk: "Phụ huynh lo ngại", solution: "40% Unplugged/Robotics vật lý" },
];

const ImplementationSection = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="implementation" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Settings className="text-primary" size={24} />
            <span className="text-sm text-primary font-mono uppercase tracking-wider">Phần VI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Phương Án <span className="gradient-purple-text">Triển Khai</span>
          </h2>
        </motion.div>

        <motion.div {...fadeUp} className="mb-16 p-8 rounded-xl border border-border bg-card text-center">
          <h3 className="text-xl font-bold mb-4">Mô Hình Hub-and-Spoke</h3>
          <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
            Hoạt động ngoài giờ chính khóa — buổi chiều thứ 3, 5 hoặc sáng thứ 7. Học sinh đăng ký tự nguyện.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="px-6 py-4 rounded-xl bg-primary/10 border border-neon font-bold text-primary">
              🏫 Trường Hub — Phòng Lab Tiêu chuẩn
            </div>
            <div className="text-2xl text-muted-foreground">↓</div>
            <div className="flex flex-wrap justify-center gap-4">
              {["Trường Vệ Tinh 1", "Trường Vệ Tinh 2", "Trường Vệ Tinh 3"].map((s) => (
                <div key={s} className="px-4 py-3 rounded-lg bg-muted border border-border text-sm">{s}</div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <DollarSign className="text-primary" size={22} />
            Dự Toán Ngân Sách
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p, i) => (
              <div key={p.name} className={`p-6 rounded-xl border bg-card ${i === 0 ? "border-neon animate-pulse-glow" : "border-border"}`}>
                {i === 0 && <div className="text-xs text-primary font-mono mb-2">★ Khuyến nghị</div>}
                <h4 className="font-bold mb-2">{p.name}</h4>
                <div className="text-3xl font-bold text-primary mb-1">{p.perStudent}</div>
                <div className="text-xs text-muted-foreground mb-3">/ học sinh / năm</div>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex justify-between text-xs text-muted-foreground border-t border-border pt-3">
                  <span>Tổng: {p.cost}</span>
                  <span>{p.students}/năm</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            So với TEKY (~5 triệu/khóa): <strong className="text-primary">Rẻ hơn 94-96%</strong> — Phần mềm cốt lõi 100% miễn phí
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Calendar className="text-primary" size={22} />
            Lộ Trình 12 Tháng (2026–2027)
          </h3>
          <div
            className="rounded-xl overflow-hidden border border-border bg-card p-4 flex justify-center relative group cursor-zoom-in"
            onClick={() => setLightboxSrc(baocao2)}
          >
            <img src={baocao2} alt="Sơ đồ Gantt lộ trình triển khai AI Thực Chiến 12 tháng (2026-2027) — 3 giai đoạn: Chuẩn bị, Triển khai, Nhân rộng" className="w-full h-auto object-contain" loading="lazy" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white" size={32} />
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            3 giai đoạn: Chuẩn bị (T5-T8/2026) → Triển khai (T9-T12/2026) → Nhân rộng (T1-T4/2027)
          </p>
        </motion.div>

        <motion.div {...fadeUp}>
          <h3 className="text-xl font-bold mb-6 text-center flex items-center justify-center gap-2">
            <Shield className="text-primary" size={22} />
            Quản Trị Rủi Ro
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {risks.map((r) => (
              <div key={r.risk} className="p-4 rounded-lg bg-card border border-border">
                <div className="text-sm font-semibold text-destructive mb-1">⚠ {r.risk}</div>
                <div className="text-sm text-muted-foreground">→ {r.solution}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />
    </section>
  );
};

export default ImplementationSection;
