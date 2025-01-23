const TableHeader = () => {
  const theader = [
    "Estado",
    "Titulo",
    "Fecha Programada",
    "Hora inicio",
    "Hora Final",
    "Accion",
  ];

  return (
    <thead className="bg-gray-50">
      <tr>
        {theader.map((header, index) => (
          <th
            key={index}
            className="px-6 py-3 text-left text-sm font-medium text-gray-500"
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
