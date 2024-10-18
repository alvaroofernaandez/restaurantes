interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export function DeleteConfirmationModal({
  isOpen,
  onClose,
  onDelete,
}: DeleteConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-blue-950 rounded-lg p-6 w-96 text-white">
        <h2 className="text-xl font-bold mb-4">Confirmación</h2>
        <p>¿Estás seguro de que quieres eliminar este restaurante?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-600 hover:bg-red-800 transition-all duration-300 text-white rounded px-4 py-2 mr-2"
            onClick={onDelete}
          >
            Eliminar
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 transition-all duration-300 text-black rounded px-4 py-2"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
