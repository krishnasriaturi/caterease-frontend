import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";

const BillPage = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);
    const [numGuests, setNumGuests] = useState(1);
    const [total, setTotal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/items/${id}`;
                const response = await fetch(backendUrl);
                const data = await response.json();
                setService(data);
            } catch (error) {
                console.error("Error fetching service details:", error);
            }
        };

        fetchService();
    }, [id]);

    const calculateBill = () => {
        if (service && service.prices && service.dishes) {
            const totalPrice = service.prices.reduce((sum, price) => sum + price, 0);
            const totalWithGuests = totalPrice * numGuests;
            const gst = totalWithGuests * 0.18; // 18% GST
            setTotal(totalWithGuests);
            setGrandTotal(totalWithGuests + gst);
            setShowModal(true); // Show the modal
        }
    };

    const downloadBill = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text("Bill Summary", 10, 10);
        doc.setFontSize(14);
        doc.text(`Number of Guests: ${numGuests}`, 10, 20);
        doc.text("Items:", 10, 30);

        let yPosition = 40;
        service.dishes.forEach((dish, index) => {
            doc.text(dish, 10, yPosition); // Item name aligned left
            doc.text(`Rs. ${service.prices[index].toFixed(2)}`, 180, yPosition, { align: "right" }); // Price aligned right
            yPosition += 10;
        });

        yPosition += 10; // Add some space before totals
        doc.setFontSize(14);
        doc.text(`Total: Rs. ${total.toFixed(2)}`, 10, yPosition);
        yPosition += 10;
        doc.text(`GST (18%): Rs. ${(total * 0.18).toFixed(2)}`, 10, yPosition);
        yPosition += 10;

        doc.setFontSize(16);
        doc.setFont("bold");
        doc.text(`Grand Total: Rs. ${grandTotal.toFixed(2)}`, 10, yPosition);

        doc.save("bill.pdf");
    };

    if (!service) {
        return <div className="p-8 text-center text-lg font-semibold">Loading...</div>;
    }

    return (
        <div className="p-8 bg-transparent max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Bill Calculation</h1>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Dishes and Prices</h2>
                <ul className="space-y-4">
                    {service.dishes.map((dish, index) => (
                        <li key={index} className="flex justify-between border-b pb-2">
                            <span className="text-lg font-medium text-gray-800">{dish}</span>
                            <span className="text-lg font-medium text-gray-800">₹{service.prices[index].toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <label htmlFor="numGuests" className="block text-lg font-medium text-gray-700 mb-2">
                    Number of Guests
                </label>
                <input
                    type="number"
                    id="numGuests"
                    value={numGuests}
                    onChange={(e) => setNumGuests(Number(e.target.value))}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    min="1"
                />
            </div>

            <button
                onClick={calculateBill}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
                Generate Bill
            </button>

            {/* Modal for Bill Summary */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4 text-center">Bill Summary</h2>
                        <ul className="space-y-2">
                            {service.dishes.map((dish, index) => (
                                <li key={index} className="flex justify-between">
                                    <span className="text-lg font-medium text-gray-800">{dish}</span>
                                    <span className="text-lg font-medium text-gray-800">₹{service.prices[index].toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4">
                            <p className="text-lg font-medium text-gray-800">Total: ₹{total.toFixed(2)}</p>
                            <p className="text-lg font-medium text-gray-800">GST (18%): ₹{(total * 0.18).toFixed(2)}</p>
                            <p className="text-lg font-bold text-gray-900 mt-4">Grand Total: ₹{grandTotal.toFixed(2)}</p>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                            >
                                Close
                            </button>
                            <button
                                onClick={downloadBill}
                                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                            >
                                Download Bill
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BillPage;