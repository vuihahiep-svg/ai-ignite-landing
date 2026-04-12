import { motion } from "framer-motion";
import { User, Youtube, GraduationCap, Users, Award } from "lucide-react";
import authorImg from "@/assets/baocao3.jpeg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const achievements = [
  { icon: Users, value: "3.000+", label: "Sinh viên HCMUS", desc: "Cộng đồng AI & Lập trình Game tại ĐH KHTN TP.HCM" },
  { icon: Youtube, value: "30.000+", label: "Thành viên cộng đồng", desc: "Kênh YouTube & cộng đồng học AI, Lập trình, Game" },
  { icon: GraduationCap, value: "TEKY", label: "Giảng viên", desc: "Học viện hàng đầu VN về giáo dục công nghệ trẻ em" },
  { icon: Award, value: "50+ GV", label: "Đào tạo giáo viên", desc: "Train-the-trainer cho nhiều đơn vị giáo dục" },
];

const commitments = [
  "Cá nhân trực tiếp đào tạo 100% GV Level 1 & Level 2",
  "Xây dựng giáo án chi tiết, video hướng dẫn offline",
  "Nhóm hỗ trợ GV online phản hồi trong 24 giờ",
  "Thăm lớp định kỳ 1 lần/tháng tại trường thí điểm",
  "Kết nối mentor sinh viên ĐH & kỹ sư AI thực tế",
];

const AuthorSection = () => {
  return (
    <section id="author" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="relative container mx-auto px-4 md:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <User className="text-primary" size={24} />
            <span className="text-sm text-primary font-mono uppercase tracking-wider">Phần VII</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Người <span className="gradient-neon-text">Triển Khai</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile */}
          <motion.div {...fadeUp} className="text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
              <img
                src={authorImg}
                alt="Hoàng Hiệp — Chuyên gia Thiết kế Chương trình AI/STEM Thực chiến"
                className="w-28 h-28 rounded-2xl object-cover border-2 border-neon shadow-[var(--shadow-neon)]"
                loading="lazy"
              />
              <div>
                <h3 className="text-2xl font-bold mb-1">Hoàng Hiệp</h3>
                <p className="text-sm text-primary font-mono">Chuyên gia Thiết kế Chương trình AI/STEM Thực chiến</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((a) => (
                <div key={a.label} className="p-4 rounded-xl border border-border bg-card text-center">
                  <a.icon className="text-primary mx-auto mb-2" size={22} />
                  <div className="text-xl font-bold text-primary">{a.value}</div>
                  <div className="text-xs font-semibold">{a.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{a.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Commitments */}
          <motion.div {...fadeUp}>
            <h3 className="text-xl font-bold mb-6">Cam Kết Triển Khai</h3>
            <div className="space-y-3">
              {commitments.map((c, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                  <span className="text-primary font-mono font-bold text-sm mt-0.5">0{i + 1}</span>
                  <p className="text-sm text-muted-foreground">{c}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl border border-neon bg-primary/5">
              <p className="text-sm text-muted-foreground italic">
                "Người ngoài có thể dạy AI nhưng không hiểu học sinh Việt Nam. Người trong hiểu học sinh nhưng chưa từng dạy AI. 
                <strong className="text-foreground"> Hoàng Hiệp là người hiểu cả hai.</strong>"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
