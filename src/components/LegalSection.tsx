import { motion } from "framer-motion";
import { Scale, FileText, CheckCircle } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const competencies = [
  { code: "NLa", name: "Tư duy lấy con người làm trung tâm", desc: "Nhận biết vai trò AI, tương tác người-máy nhân văn", level: "Tất cả cấp học" },
  { code: "NLb", name: "Đạo đức, Dữ liệu và Pháp luật", desc: "Sử dụng AI có trách nhiệm, bảo mật thông tin", level: "Tất cả cấp học" },
  { code: "NLc", name: "Kỹ thuật và Ứng dụng AI", desc: "Dữ liệu, thuật toán, mô hình ML, ứng dụng thực tiễn", level: "Từ lớp 3" },
  { code: "NLd", name: "Thiết kế Hệ thống AI", desc: "Kiến tạo, điều chỉnh, tối ưu hóa hệ thống AI", level: "Từ lớp 6" },
];

const legalDocs = [
  { name: "QĐ 3439/QĐ-BGDĐT (2025)", desc: "Khung nội dung thí điểm giáo dục AI phổ thông" },
  { name: "TT 02/2025/TT-BGDĐT", desc: "Khung năng lực số người học — AI là thành phần xuyên suốt" },
  { name: "CV 3089/BGDĐT-GDTrH (2020)", desc: "Hướng dẫn triển khai giáo dục STEM trong phổ thông" },
  { name: "NQ 52-NQ/TW (2019)", desc: "Chính sách về Cách mạng Công nghiệp 4.0" },
  { name: "QĐ 131/QĐ-TTg (2022)", desc: "Đề án chuyển đổi số trong GD&ĐT" },
];

const LegalSection = () => {
  return (
    <section id="legal" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Scale className="text-primary" size={24} />
            <span className="text-sm text-primary font-mono uppercase tracking-wider">Phần II</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Cơ Sở <span className="gradient-purple-text">Pháp Lý</span> Toàn Diện
          </h2>
        </motion.div>

        {/* 4 Competency domains */}
        <motion.div {...fadeUp} className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">4 Miền Năng Lực Bắt Buộc (QĐ 3439)</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {competencies.map((c) => (
              <div
                key={c.code}
                className="p-6 rounded-xl border border-border bg-card hover:border-neon transition-colors"
              >
                <div className="text-2xl font-bold text-primary mb-2 font-mono">{c.code}</div>
                <h4 className="font-semibold mb-2 text-sm">{c.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{c.desc}</p>
                <span className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">{c.level}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Legal documents */}
        <motion.div {...fadeUp}>
          <h3 className="text-xl font-bold mb-6 text-center">Hệ Thống Văn Bản Pháp Quy</h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {legalDocs.map((doc) => (
              <div key={doc.name} className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border">
                <FileText className="text-primary mt-0.5 shrink-0" size={18} />
                <div>
                  <div className="font-semibold text-sm">{doc.name}</div>
                  <div className="text-sm text-muted-foreground">{doc.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center p-6 rounded-xl border border-neon bg-primary/5">
            <CheckCircle className="text-primary mx-auto mb-2" size={28} />
            <p className="text-sm font-semibold text-primary">
              Hành lang pháp lý ĐẦY ĐỦ — Không cần xin phép bổ sung — CHỈ CẦN QUYẾT TÂM HÀNH ĐỘNG
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalSection;
