import { useForm } from "../hooks/useForm";


export const TodoAdd = ({ handleAddSubmit }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: '',
  });

  return (
    <form onSubmit={handleAddSubmit}>
      <input
        type="text"
        name="description"
        placeholder="Agregar una tarea"
        value={description}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}