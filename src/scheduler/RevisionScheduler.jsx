import { Plus } from "lucide-react";
import { useState } from "react";
import { Modal } from "./components/Modal/Modal";
import { RevisionForm } from "./components/Form/RevisionForm";
import RevisionTable from "./components/Table/RevisionTable";
import useRevisionsStore from "../store/useRevisionStore";

const RevisionScheduler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addRevision = useRevisionsStore((state) => state.addRevision);
  const handleAdd = (formData) => {
    addRevision(formData);
    setIsModalOpen(false);
  };

 
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Programación de mantenimientos
        </h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 flex items-center gap-2"
        >
          <Plus size={20} />
          Agregar Programación
        </button>
      </div>

      <RevisionTable />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <RevisionForm
          onSubmit={handleAdd}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default RevisionScheduler;
