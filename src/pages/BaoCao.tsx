import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BaoCao = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/baocao.md")
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-border">
        <div className="container mx-auto flex items-center gap-4 py-4 px-4 md:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Quay lại
          </Link>
          <span className="font-display font-bold gradient-neon-text">Báo Cáo Đầy Đủ</span>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 pt-24 pb-16 max-w-4xl">
        <article className="prose prose-invert prose-lg max-w-none
          prose-headings:font-display prose-headings:text-foreground
          prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:gradient-neon-text prose-h1:mb-6
          prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:border-b prose-h2:border-border prose-h2:pb-3 prose-h2:mt-12
          prose-h3:text-xl prose-h3:text-primary
          prose-h4:text-lg
          prose-p:text-muted-foreground prose-p:leading-relaxed
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground
          prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
          prose-pre:bg-card prose-pre:border prose-pre:border-border prose-pre:rounded-xl
          prose-blockquote:border-primary prose-blockquote:bg-card prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-4
          prose-table:border-collapse
          prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:text-sm prose-th:font-semibold prose-th:border prose-th:border-border
          prose-td:px-4 prose-td:py-2 prose-td:text-sm prose-td:border prose-td:border-border prose-td:text-muted-foreground
          prose-li:text-muted-foreground
          prose-img:rounded-xl prose-img:border prose-img:border-border
          prose-hr:border-border
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default BaoCao;
