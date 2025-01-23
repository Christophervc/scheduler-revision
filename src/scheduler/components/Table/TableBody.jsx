import useRevisionsStore from "../../../store/useRevisionStore";
import TableRow from "./TableRow";

const TableBody = () => {
  const { revisions, deleteRevision } = useRevisionsStore();
  return (
    <tbody className="divide-y divide-gray-200">
      {revisions.map((revision) => (
        <TableRow
          key={revision.id}
          revision={revision}
          onDelete={deleteRevision}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
