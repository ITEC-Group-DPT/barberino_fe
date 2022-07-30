/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from "react";
import "./confirmModal.scss";

const ConfirmModal = ({ show, onClose, onConfirm, content }) => {
  if (!show) return null;

  const services = content.selected_services
    .map((serv) => serv.name)
    .join(", ");

  const durationList = content.selected_services.map(
    (serv) => serv.duration
  );
  let totalDuration = 0;
  durationList.forEach((duration) => {
    totalDuration += parseInt(duration, 10);
  });

  const data = {
    information: [
      { title: "Name", value: content.name },
      { title: "Email", value: content.email },
      { title: "Phone", value: content.phone },
    ],
    services: [
      { title: "Services", value: services },
      { title: "Total duration", value: `${totalDuration} minutes` },
    ],
    datetime: [
      { title: "Date", value: content.selected_date },
      { title: "Time", value: content.selected_time },
      { title: "Stylist", value: content.selected_employee },
    ],
  };

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__header">
          <p className="modal__title">Booking confirmation</p>
        </div>
        <hr className="lineBreak" />

        <div className="modal__body">
          {Object.keys(data).map((section) => (
            <div key={section}>
              <div className="modal__body__section">
                {data[section].map((field) => (
                  <div className="field" key={field.title}>
                    <p className="field__title">{`${field.title}: `}</p>
                    <p className="field__content">{field.value}</p>
                  </div>
                ))}
              </div>
              <hr className="lineBreak" />
            </div>
          ))}

          <div className="modal__footer">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="button" onClick={onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
