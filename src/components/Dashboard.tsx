import { Medicine } from "@/types/medicine";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Package, TrendingUp, DollarSign } from "lucide-react";

interface DashboardProps {
  medicines: Medicine[];
}

export const Dashboard = ({ medicines }: DashboardProps) => {
  const totalMedicines = medicines.length;
  const lowStock = medicines.filter(m => m.quantity < 50).length;
  const totalValue = medicines.reduce((sum, m) => sum + (m.quantity * m.price), 0);
  
  const expiringSoon = medicines.filter(m => {
    const expiryDate = new Date(m.expiryDate);
    const threeMonthsFromNow = new Date();
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3);
    return expiryDate <= threeMonthsFromNow;
  }).length;

  const stats = [
    {
      title: "Total Medicines",
      value: totalMedicines,
      icon: Package,
      color: "text-primary",
    },
    {
      title: "Low Stock Alert",
      value: lowStock,
      icon: AlertTriangle,
      color: "text-accent",
    },
    {
      title: "Expiring Soon",
      value: expiringSoon,
      icon: TrendingUp,
      color: "text-destructive",
    },
    {
      title: "Total Inventory Value",
      value: `$${totalValue.toFixed(2)}`,
      icon: DollarSign,
      color: "text-secondary",
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Dashboard</h2>
        <p className="text-muted-foreground mt-2">Welcome back! Here's your pharmacy overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Low Stock Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {medicines
              .filter(m => m.quantity < 50)
              .slice(0, 5)
              .map(medicine => (
                <div key={medicine.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">{medicine.name}</p>
                    <p className="text-sm text-muted-foreground">{medicine.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-accent">{medicine.quantity} units</p>
                    <p className="text-sm text-muted-foreground">Low Stock</p>
                  </div>
                </div>
              ))}
            {medicines.filter(m => m.quantity < 50).length === 0 && (
              <p className="text-center text-muted-foreground py-8">All medicines are well stocked!</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
