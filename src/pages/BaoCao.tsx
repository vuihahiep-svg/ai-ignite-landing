import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const BaoCao = () => {
  const [content, setContent] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    fetch("/baocao.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center gap-4 py-3 px-4 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            Quay lại
          </Link>
          <span className="font-bold text-gray-900">Báo Cáo Đầy Đủ</span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-20 pb-16">
        <article className="baocao-markdown">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </article>
      </main>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-700 transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BaoCao;
