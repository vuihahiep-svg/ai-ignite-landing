import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display text-xl font-bold leading-tight mb-1">
              <span className="block">
                <span className="gradient-neon-text">AI</span>{" "}
                <span className="text-foreground">Cho Em</span>
              </span>
              <span className="block text-base text-muted-foreground font-semibold">Thực Chiến</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Chương Trình Giáo Dục AI Toàn Diện — Tỉnh Đồng Nai
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Soạn thảo: Hoàng Hiệp — Tháng 04/2026
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/baocao"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-[var(--shadow-neon)] transition-shadow"
            >
              <FileText size={16} />
              Xem Báo Cáo Đầy Đủ
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © 2026 AI Cho Em — Thực Chiến. Đề xuất chiến lược gửi Phòng Giáo dục và Đào tạo tỉnh Đồng Nai.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
