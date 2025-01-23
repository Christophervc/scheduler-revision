import { create } from "zustand";

const useRevisionsStore = create((set) => ({
  revisions: [
    {
      id: 1,
      title: "Primer mantenimiento programado",
      date: "01-06-2024",
      startTime: "14:00",
      endTime: "16:00",
      status: "Malo",
    },
    {
      id: 2,
      title: "Segundo mantenimiento programado",
      date: "01-12-2024",
      startTime: "14:00",
      endTime: "16:00",
      status: "Regular",
    },
  ],
  addRevision: (revision) => set((state) => ({
      revisions: [...state.revisions, { ...revision, id: Date.now()},],
    })),
  deleteRevision: (id) => set((state) => ({
      revisions: state.revisions.filter((revision) => revision.id !== id),
    })),
  updateRevision: (id, updatedRevision) =>
    set((state) => ({
      revisions: state.revisions.map((revision) =>
        revision.id === id ? { ...revision, ...updatedRevision } : revision
      ),
    })),
}));

export default useRevisionsStore;
