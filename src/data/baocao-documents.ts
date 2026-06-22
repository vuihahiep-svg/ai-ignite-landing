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
  {
    id: "ke-hoach-01",
    label: "1. Tổng quan & Mục tiêu",
    path: "/ke-hoach/01-tong-quan-muc-tieu.md",
    group: "Kế hoạch triển khai",
  },
  {
    id: "ke-hoach-02",
    label: "2. Chương trình đào tạo 3 cấp",
    path: "/ke-hoach/02-chuong-trinh-dao-tao.md",
    group: "Kế hoạch triển khai",
  },
  {
    id: "ke-hoach-03",
    label: "3. Tài liệu, Đánh giá & Chứng nhận",
    path: "/ke-hoach/03-tai-lieu-danh-gia-chung-nhan.md",
    group: "Kế hoạch triển khai",
  },
  {
    id: "ke-hoach-04",
    label: "4. Triển khai, Tổ chức & Giáo viên",
    path: "/ke-hoach/04-trien-khai-to-chuc-giao-vien.md",
    group: "Kế hoạch triển khai",
  },
  {
    id: "ke-hoach-05",
    label: "5. Nguồn lực, Ngân sách & Rủi ro",
    path: "/ke-hoach/05-nguon-luc-ngan-sach-rui-ro.md",
    group: "Kế hoạch triển khai",
  },
  {
    id: "ke-hoach-06",
    label: "6. Pháp lý, KPI, Truyền thông & Bền vững",
    path: "/ke-hoach/06-phap-ly-kpi-truyen-thong-ben-vung.md",
    group: "Kế hoạch triển khai",
  },
  {
    id: "ke-hoach-07",
    label: "7. Kiến nghị, FAQ & Phụ lục",
    path: "/ke-hoach/07-kien-nghi-faq-phu-luc.md",
    group: "Kế hoạch triển khai",
  },
  {
    id: "ke-hoach-hop-kien",
    label: "Nội dung trao đổi với anh Kiên",
    path: "/ke-hoach/hop-anh-kien.md",
    group: "Kế hoạch triển khai",
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
