import { useEffect, useState } from "react";
import ReactDOM from "react-dom";


export default function Modal({onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => setIsBrowser(true));

  const modalContent = (
    <div
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-70"
      onClick={onClose}
    >
      <div className="animate-slideLeft fixed top-0 right-0 w-full sm:w-1/2 h-screen bg-white p-4 border-l-md shadow-md z-30 transition duration-500 ease-in-out">
        {children}
      </div>
    </div>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("overlays")
    );
  } else {
    return null;
  }
}
