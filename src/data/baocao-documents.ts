export type BaocaoDocument = {
  id: string;
  label: string;
  path: string;
  group: string;
};

export const BAOCAO_DOCUMENTS: BaocaoDocument[] = [
  {
    id: "baocao",
    label: "Báo cáo đầy đủ",
    path: "/baocao.md",
    group: "Tài liệu chính",
  },
  {
    id: "tong-quan",
    label: "Tổng quan khóa 8 buổi",
    path: "/buoihoc/tong-quan-khoa-8-buoi.md",
    group: "Khóa học",
  },
  {
    id: "buoi01",
    label: "Buổi 1 — Robot & Web",
    path: "/buoihoc/buoi01.md",
    group: "Giáo án buổi học",
  },
  {
    id: "buoi02",
    label: "Buổi 2 — AI nhìn & nhận diện",
    path: "/buoihoc/buoi02.md",
    group: "Giáo án buổi học",
  },
  {
    id: "buoi03",
    label: "Buổi 3 — Poster AI",
    path: "/buoihoc/buoi03.md",
    group: "Giáo án buổi học",
  },
  {
    id: "buoi04",
    label: "Buổi 4 — Game Scratch",
    path: "/buoihoc/buoi04.md",
    group: "Giáo án buổi học",
  },
  {
    id: "buoi05",
    label: "Buổi 5 — Podcast AI",
    path: "/buoihoc/buoi05.md",
    group: "Giáo án buổi học",
  },
  {
    id: "buoi06",
    label: "Buổi 6 — Web AI CLB",
    path: "/buoihoc/buoi06.md",
    group: "Giáo án buổi học",
  },
  {
    id: "buoi07",
    label: "Buổi 7 — Dự án tự chọn (1/2)",
    path: "/buoihoc/buoi07.md",
    group: "Giáo án buổi học",
  },
  {
    id: "buoi08",
    label: "Buổi 8 — Hội chợ sản phẩm (2/2)",
    path: "/buoihoc/buoi08.md",
    group: "Giáo án buổi học",
  },
];

export const DEFAULT_BAOCAO_DOC_ID = "baocao";

export function getBaocaoDocument(id: string | null): BaocaoDocument {
  return BAOCAO_DOCUMENTS.find((d) => d.id === id) ?? BAOCAO_DOCUMENTS[0];
}

export function groupBaocaoDocuments(docs: BaocaoDocument[]): { group: string; items: BaocaoDocument[] }[] {
  const order: string[] = [];
  const map = new Map<string, BaocaoDocument[]>();

  for (const doc of docs) {
    if (!map.has(doc.group)) {
      map.set(doc.group, []);
      order.push(doc.group);
    }
    map.get(doc.group)!.push(doc);
  }

  return order.map((group) => ({ group, items: map.get(group)! }));
}
