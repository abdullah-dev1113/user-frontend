import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root"); // for accessibility, set your root element

const MyAppointment = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState(null);

  // Form fields
  const [payerName, setPayerName] = useState("");
  const [payerEmail, setPayerEmail] = useState("");
  const [payerPhone, setPayerPhone] = useState("");

  const openModal = (appointmentId) => {
    setSelectedAppointmentId(appointmentId);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPayerName("");
    setPayerEmail("");
    setPayerPhone("");
  };

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!payerName || !payerEmail || !payerPhone) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        backendUrl + "/api/payment/dummy",
        {
          appointmentId: selectedAppointmentId,
          payerName,
          payerEmail,
          payerPhone,
        },
        { headers: { atoken: token } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        closeModal();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return (
      dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    );
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { atoken: token },
      });
      if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { atoken: token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
      getDoctorsData();
    }
  }, [token]);
  return (
    <div>
      <div>
        <p className="pb-3 mt-12 font-medium text-gray-600 border-b">
          My Appoinments
        </p>
        <div>
          {appointments.map((item, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img
                  className="w-32 bg-indigo-50"
                  src={item.docData.image}
                  alt=""
                />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">
                  {item.docData.name}
                </p>
                <p>{item.docData.specaility}</p>
                <p className="font-medium mt-1 text-zinc-600">Address:</p>
                <p className="text-xs">
                  {item.docData?.address?.line1 || "N/A"}
                </p>
                <p className="text-xs">{item.docData?.address?.line2 || ""}</p>
                <p className="text-xs mt-1">
                  <span className="text-sm text-neutral-700 font-medium">
                    Date & time:
                  </span>
                  {slotDateFormat(item.slotDate)} | {item.slotTime}
                </p>
              </div>
              <div></div>
              <div className="flex flex-col gap-2 justify-end">
                {!item.cancelled && !item.paid && !item.isCompleted && (
                  <>
                    <button
                      onClick={() => openModal(item._id)}
                      className="text-sm text-stone-500 text-center min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      Pay Online
                    </button>
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="text-sm text-stone-500 text-center min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300"
                    >
                      Cancel Appointment
                    </button>
                  </>
                )}

                {item.paid && !item.cancelled && !item.isCompleted && (
                  <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500 cursor-default">
                    Paid
                  </button>
                )}

                {item.cancelled && (
                  <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500 cursor-default">
                    Appointment Cancelled
                  </button>
                )}

                {item.isCompleted && (
                  <button className="sm:min-w-48 py-2 border border-green-500 rounded text-green-500 cursor-default">
                    Completed
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Payment Details"
        className="max-w-md mx-auto mt-40 p-6 bg-white rounded shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start"
      >
        <h2 className="text-xl font-semibold mb-4">Enter Payment Details</h2>
        <form onSubmit={handlePaymentSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            value={payerName}
            onChange={(e) => setPayerName(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={payerEmail}
            onChange={(e) => setPayerEmail(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            value={payerPhone}
            onChange={(e) => setPayerPhone(e.target.value)}
            className="border p-2 rounded"
            required
          />
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 border rounded hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark"
            >
              Confirm Payment
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default MyAppointment;
