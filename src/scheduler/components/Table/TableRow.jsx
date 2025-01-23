import { SquarePen, Trash2 } from "lucide-react";
import useRevisionsStore from "../../../store/useRevisionStore";

const TableRow = ({
  revision: {id, title, date, startTime, endTime, status },
}) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Bueno":
        return "bg-green-500";
      case "Regular":
        return "bg-yellow-400";
      case "Malo":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  const { deleteRevision } = useRevisionsStore();

  return (
    <tr>
      <td className="px-6 py-4">
        <div className={`w-4 h-4 rounded-full ${getStatusColor(status)}`}></div>
      </td>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{date}</td>
      <td className="px-6 py-4">{startTime}</td>
      <td className="px-6 py-4">{endTime}</td>
      <td className="px-6 py-4">
        <div className="flex gap-3">
          <button
            onClick={() => console.log("editar")}
            className="text-gray-600 hover:text-cyan-600"
          >
            <SquarePen className="w-5 h-5" />
          </button>
          <button
            onClick={() => deleteRevision(id)}
            className="text-gray-600 hover:text-red-600"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
