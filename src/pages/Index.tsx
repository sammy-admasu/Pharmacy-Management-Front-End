import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";
import { Medicine } from "@/types/medicine";
const Index = () => {
  const [activeView, setActiveView] = useState<"dashboard">("dashboard");

  const [medicines, setMedicines] = useState<Medicine[]>([
    {
      id: "1",
      name: "Paracetamol 500mg",
      category: "Pain Relief",
      quantity: 150,
      price: 5.99,
      expiryDate: "2025-12-31",
      batchNumber: "BTH001",
      manufacturer: "PharmaCorp",
    },
    {
      id: "2",
      name: "Amoxicillin 250mg",
      category: "Antibiotics",
      quantity: 80,
      price: 12.50,
      expiryDate: "2025-06-30",
      batchNumber: "BTH002",
      manufacturer: "MediLife",
    },
    {
      id: "3",
      name: "Ibuprofen 400mg",
      category: "Pain Relief",
      quantity: 25,
      price: 7.99,
      expiryDate: "2024-11-30",
      batchNumber: "BTH003",
      manufacturer: "HealthPlus",
    },
  ]);


  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 p-8 ml-64">
        {activeView === "dashboard" && <Dashboard medicines={medicines} />}


      </main>
    </div>
  );
};

export default Index;
