import { useEffect, useState, useCallback, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { ArrowLeft, ArrowUp, X, Download, ZoomIn, ZoomOut, RotateCcw, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

const BaoCao = () => {
  const [content, setContent] = useState("");
  const [showTop, setShowTop] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

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

  const closeLightbox = useCallback(() => {
    setLightboxSrc(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const resetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const fitToScreen = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(z * 1.3, 5)), []);
  const zoomOut = useCallback(() => {
    setZoom((z) => {
      const next = Math.max(z / 1.3, 0.5);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  useEffect(() => {
    if (!lightboxSrc) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetView();
    };
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("wheel", onWheel);
    };
  }, [lightboxSrc, closeLightbox, zoomIn, zoomOut, resetView]);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (zoom <= 1) return;
      e.preventDefault();
      setDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [zoom, pan]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      setPan({ x: dragStart.current.panX + dx, y: dragStart.current.panY + dy });
    },
    [dragging]
  );

  const handlePointerUp = useCallback(() => setDragging(false), []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center gap-4 py-3 px-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft size={16} />
            Quay lại
          </Link>
          <span className="font-bold text-gray-900">Báo Cáo Đầy Đủ</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-20 pb-16">
        <article
          className="baocao-markdown"
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "IMG") {
              setLightboxSrc((target as HTMLImageElement).src);
            }
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
            {content}
          </ReactMarkdown>
        </article>
      </main>

      {lightboxSrc && (
        <div
          className="lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Toolbar */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 bg-black/60 backdrop-blur-sm rounded-full px-3 py-2">
            <button onClick={(e) => { e.stopPropagation(); zoomOut(); }} className="lightbox-btn" title="Thu nhỏ (-)">
              <ZoomOut size={20} />
            </button>
            <span className="text-white/80 text-sm min-w-[3rem] text-center select-none">{Math.round(zoom * 100)}%</span>
            <button onClick={(e) => { e.stopPropagation(); zoomIn(); }} className="lightbox-btn" title="Phóng to (+)">
              <ZoomIn size={20} />
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <button onClick={(e) => { e.stopPropagation(); fitToScreen(); }} className="lightbox-btn" title="Vừa màn hình (0)">
              <Maximize size={18} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); resetView(); }} className="lightbox-btn" title="Đặt lại">
              <RotateCcw size={18} />
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!lightboxSrc) return;
                fetch(lightboxSrc)
                  .then((res) => res.blob())
                  .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = url;
                    a.download = lightboxSrc.split("/").pop() || "image.png";
                    a.click();
                    URL.revokeObjectURL(url);
                  });
              }}
              className="lightbox-btn"
              title="Tải ảnh về"
            >
              <Download size={18} />
            </button>
            <div className="w-px h-5 bg-white/20 mx-1" />
            <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="lightbox-btn" title="Đóng (Esc)">
              <X size={20} />
            </button>
          </div>

          {/* Image */}
          <img
            ref={imgRef}
            src={lightboxSrc}
            alt="Xem ảnh đầy đủ"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default",
              transition: dragging ? "none" : "transform 0.2s ease",
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onClick={(e) => e.stopPropagation()}
            onDoubleClick={(e) => {
              e.stopPropagation();
              if (zoom > 1) resetView();
              else setZoom(2);
            }}
            draggable={false}
          />
        </div>
      )}

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
