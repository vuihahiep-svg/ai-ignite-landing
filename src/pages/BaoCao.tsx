import { useCallback, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowLeft, ArrowUp, Menu } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import ImageLightbox from "@/components/ImageLightbox";
import BaocaoSidebar from "@/components/BaocaoSidebar";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  BAOCAO_DOCUMENTS,
  DEFAULT_BAOCAO_DOC_ID,
  getBaocaoDocument,
} from "@/data/baocao-documents";

const BaoCao = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const docId = searchParams.get("doc") ?? DEFAULT_BAOCAO_DOC_ID;
  const activeDoc = getBaocaoDocument(docId);

  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const selectDocument = useCallback(
    (id: string) => {
      setSearchParams(id === DEFAULT_BAOCAO_DOC_ID ? {} : { doc: id }, { replace: true });
      setMobileNavOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    [setSearchParams],
  );

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(activeDoc.path)
      .then((res) => {
        if (!res.ok) throw new Error(`Không tải được tài liệu (${res.status})`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setContent(text);
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setContent("");
          setError(err.message);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [activeDoc.path]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeLightbox = useCallback(() => setLightboxSrc(null), []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="flex items-center gap-3 py-3 px-4 md:px-6">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Quay lại</span>
          </Link>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="lg:hidden flex items-center justify-center rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
                aria-label="Mở danh sách tài liệu"
              >
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[min(100vw-2rem,20rem)] overflow-y-auto p-0">
              <SheetHeader className="border-b border-gray-200 px-4 py-4 text-left">
                <SheetTitle className="text-base">Tài liệu</SheetTitle>
              </SheetHeader>
              <BaocaoSidebar
                documents={BAOCAO_DOCUMENTS}
                activeId={activeDoc.id}
                onSelect={selectDocument}
              />
            </SheetContent>
          </Sheet>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-gray-900">{activeDoc.label}</p>
            <p className="truncate text-xs text-gray-500">{activeDoc.group}</p>
          </div>
        </div>
      </header>

      <div className="flex pt-[4.25rem]">
        <aside className="hidden lg:block fixed left-0 top-[4.25rem] bottom-0 w-72 border-r border-gray-200 bg-gray-50/80 overflow-y-auto">
          <BaocaoSidebar
            documents={BAOCAO_DOCUMENTS}
            activeId={activeDoc.id}
            onSelect={selectDocument}
          />
        </aside>

        <main className="flex-1 lg:ml-72 min-w-0">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 pb-16">
            {loading && (
              <p className="text-sm text-gray-500 py-12 text-center">Đang tải tài liệu…</p>
            )}
            {error && (
              <p className="text-sm text-red-600 py-12 text-center" role="alert">
                {error}
              </p>
            )}
            {!loading && !error && (
              <article
                className="baocao-markdown"
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  if (target.tagName === "IMG") setLightboxSrc((target as HTMLImageElement).src);
                }}
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {content}
                </ReactMarkdown>
              </article>
            )}
          </div>
        </main>
      </div>

      <ImageLightbox src={lightboxSrc} onClose={closeLightbox} />

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-700 transition-colors"
          aria-label="Lên đầu trang"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default BaoCao;
