import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  trend: string;
}

export default function StatCard({ icon, label, value, trend }: StatCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-blue-500">{icon}</div>
        <h3 className="text-sm font-medium text-gray-600">{label}</h3>
      </div>
      <div className="flex items-end justify-between">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-500">{trend}</div>
      </div>
    </div>
  );
}