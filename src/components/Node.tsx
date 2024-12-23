import React from 'react';

interface NodeProps {
  title: string;
  color: string;
  borderColor: string;
  description: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function Node({ 
  title, 
  color, 
  borderColor, 
  description, 
  icon,
  children 
}: NodeProps) {
  return (
    <div className={`rounded-lg ${color} border-2 ${borderColor} p-4 shadow-lg`}>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      {children}
    </div>
  );
}