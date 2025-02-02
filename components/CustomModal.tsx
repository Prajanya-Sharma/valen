// /app/components/CustomModal.tsx

import './CustomModal.css'; // Import the regular CSS file

const CustomModal = ({ message, onClose }: { message: string; onClose: () => void }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomModal;
