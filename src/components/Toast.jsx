import { useEffect } from "react";
import WarningSvg from "../assets/warning.svg";
import CloseSvg from "../assets/close.svg";

const Toast = ({ message, type, onClose }) => {
  const isSuccess = type === "success";
  const accent = isSuccess ? "border-l-green-500" : "border-l-red-500";
  const colorClass = isSuccess ? "text-green-600" : "text-red-600";

  // Dismiss on Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed top-24 right-4 z-[9999] max-w-sm bg-white rounded-lg border border-gray-300
                  border-l-4 ${accent} p-4 shadow-2xl`}
    >
      <div className="flex items-center">
        <div className="px-1 shrink-0">
          {isSuccess ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 1792 1792"
              fill="#44C997"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
            </svg>
          ) : (
            <img src={WarningSvg} alt="" width="24" height="24" />
          )}
        </div>
        <div className="ml-3 mr-4">
          <span className={`font-semibold ${colorClass}`}>
            {isSuccess ? "Success!" : "Error!"}
          </span>
          <span className="block text-gray-600 text-sm">{message}</span>
        </div>
        <button
          className="ml-auto shrink-0 p-1 rounded hover:bg-gray-100 transition-colors"
          onClick={onClose}
          aria-label="Close notification"
        >
          <img src={CloseSvg} alt="" width="16" height="16" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
