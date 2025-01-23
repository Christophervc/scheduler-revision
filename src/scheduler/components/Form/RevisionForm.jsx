import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";

export const RevisionForm = ({ onSubmit, onClose, initialData = null }) => {
  const [formData, setFormData] = useState({
    status: initialData?.status || "",
    title: initialData?.title || "",
    date: initialData?.date ? dayjs(initialData.date) : null,
    startTime: initialData?.startTime
      ? dayjs(`2024-01-01T${initialData.startTime}`)
      : null,
    endTime: initialData?.endTime
      ? dayjs(`2024-01-01T${initialData.endTime}`)
      : null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      status: formData.status,
      title: formData.title,
      date: formData.date?.format("YYYY-MM-DD"),
      startTime: formData.startTime?.format("HH:mm"),
      endTime: formData.endTime?.format("HH:mm"),
    });

    console.log(formData);
  };

  const statusOptions = ["Bueno", "Regular", "Malo"];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          label="Título"
          size="small"
          fullWidth
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />

        <DatePicker
          label="Fecha"
          value={formData.date}
          className="w-full"
          onChange={(newValue) => setFormData({ ...formData, date: newValue })}
          TextField={(params) => <TextField {...params} />}
          required
          slotProps={{ textField: { size: "small" } }}
        />

        <div className="grid grid-cols-2 gap-4">
          <TimePicker
            label="Hora Inicio"
            value={formData.startTime}
            onChange={(newValue) =>
              setFormData({ ...formData, startTime: newValue })
            }
            TextField={(params) => <TextField {...params} fullWidth />}
            required
            slotProps={{ textField: { size: "small" } }}
          />

          <TimePicker
            label="Hora Final"
            value={formData.endTime}
            onChange={(newValue) =>
              setFormData({ ...formData, endTime: newValue })
            }
            TextField={(params) => <TextField {...params} fullWidth />}
            required
            slotProps={{ textField: { size: "small" } }}
          />

          <FormControl size="small" className="col-span-2">
            <InputLabel id="estado-select-label" size="small">
              Estado
            </InputLabel>
            <Select
              label="Estado"
              size="small"
              name="status"
              labelId="estado-select-small-label"
              id="estado-select-small"
              value={formData.status}
              onChange={(e) => {
                setFormData({ ...formData, status: e.target.value });
              }}
            >
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Guardar
          </button>
        </div>
      </form>
    </LocalizationProvider>
  );
};
