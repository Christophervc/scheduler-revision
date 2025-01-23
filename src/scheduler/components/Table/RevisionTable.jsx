
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import useRevisionsStore from "../../../store/useRevisionStore";

const RevisionTable = () => {
  const  {revisions, deleteRevision} = useRevisionsStore();
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="w-full">
        <TableHeader />
        <TableBody revisions={revisions} onDelete={deleteRevision} />
      </table>
    </div>
  );
};


export default RevisionTable