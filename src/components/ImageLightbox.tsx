import { useEffect, useState, useCallback, useRef } from "react";
import { X, Download, ZoomIn, ZoomOut, RotateCcw, Maximize } from "lucide-react";

interface ImageLightboxProps {
  src: string | null;
  onClose: () => void;
}

const ImageLightbox = ({ src, onClose }: ImageLightboxProps) => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });

  const resetView = useCallback(() => { setZoom(1); setPan({ x: 0, y: 0 }); }, []);
  const zoomIn = useCallback(() => setZoom(z => Math.min(z * 1.3, 5)), []);
  const zoomOut = useCallback(() => {
    setZoom(z => { const next = Math.max(z / 1.3, 0.5); if (next <= 1) setPan({ x: 0, y: 0 }); return next; });
  }, []);

  useEffect(() => {
    if (!src) { setZoom(1); setPan({ x: 0, y: 0 }); return; }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key === "0") resetView();
    };
    const onWheel = (e: WheelEvent) => { e.preventDefault(); e.deltaY < 0 ? zoomIn() : zoomOut(); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => { window.removeEventListener("keydown", onKey); window.removeEventListener("wheel", onWheel); };
  }, [src, onClose, zoomIn, zoomOut, resetView]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (zoom <= 1) return;
    e.preventDefault(); setDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [zoom, pan]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    setPan({ x: dragStart.current.panX + e.clientX - dragStart.current.x, y: dragStart.current.panY + e.clientY - dragStart.current.y });
  }, [dragging]);

  const handlePointerUp = useCallback(() => setDragging(false), []);

  if (!src) return null;

  return (
    <div className="lightbox-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10 bg-black/60 backdrop-blur-sm rounded-full px-3 py-2">
        <button onClick={(e) => { e.stopPropagation(); zoomOut(); }} className="lightbox-btn" title="Thu nhỏ (-)"><ZoomOut size={20} /></button>
        <span className="text-white/80 text-sm min-w-[3rem] text-center select-none">{Math.round(zoom * 100)}%</span>
        <button onClick={(e) => { e.stopPropagation(); zoomIn(); }} className="lightbox-btn" title="Phóng to (+)"><ZoomIn size={20} /></button>
        <div className="w-px h-5 bg-white/20 mx-1" />
        <button onClick={(e) => { e.stopPropagation(); resetView(); }} className="lightbox-btn" title="Vừa màn hình (0)"><Maximize size={18} /></button>
        <button onClick={(e) => { e.stopPropagation(); resetView(); }} className="lightbox-btn" title="Đặt lại"><RotateCcw size={18} /></button>
        <div className="w-px h-5 bg-white/20 mx-1" />
        <button onClick={(e) => {
          e.stopPropagation();
          fetch(src).then(r => r.blob()).then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a"); a.href = url; a.download = src.split("/").pop() || "image.png"; a.click();
            URL.revokeObjectURL(url);
          });
        }} className="lightbox-btn" title="Tải ảnh về"><Download size={18} /></button>
        <div className="w-px h-5 bg-white/20 mx-1" />
        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="lightbox-btn" title="Đóng (Esc)"><X size={20} /></button>
      </div>
      <img
        src={src} alt="Xem ảnh đầy đủ" draggable={false}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          cursor: zoom > 1 ? (dragging ? "grabbing" : "grab") : "default",
          transition: dragging ? "none" : "transform 0.2s ease",
        }}
        onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={handlePointerUp}
        onClick={e => e.stopPropagation()}
        onDoubleClick={e => { e.stopPropagation(); zoom > 1 ? resetView() : setZoom(2); }}
      />
    </div>
  );
};

export default ImageLightbox;
