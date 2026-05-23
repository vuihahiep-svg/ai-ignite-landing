import { cn } from "@/lib/utils";
import type { BaocaoDocument } from "@/data/baocao-documents";
import { groupBaocaoDocuments } from "@/data/baocao-documents";

type BaocaoSidebarProps = {
  documents: BaocaoDocument[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
};

const BaocaoSidebar = ({ documents, activeId, onSelect, className }: BaocaoSidebarProps) => {
  const groups = groupBaocaoDocuments(documents);

  return (
    <nav className={cn("flex flex-col gap-6 p-4", className)} aria-label="Chọn tài liệu">
      {groups.map(({ group, items }) => (
        <div key={group}>
          <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{group}</p>
          <ul className="flex flex-col gap-0.5">
            {items.map((doc) => {
              const isActive = doc.id === activeId;
              return (
                <li key={doc.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(doc.id)}
                    className={cn(
                      "w-full rounded-lg px-3 py-2 text-left text-sm leading-snug transition-colors",
                      isActive
                        ? "bg-gray-900 font-medium text-white"
                        : "text-gray-700 hover:bg-gray-100",
                    )}
                  >
                    {doc.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default BaocaoSidebar;
