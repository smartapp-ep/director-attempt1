import React from 'react';
import Node from '../../Node';
import { User } from 'lucide-react';

export default function CharacterNode() {
  return (
    <Node 
      title="Characters" 
      color="bg-indigo-50"
      borderColor="border-indigo-200"
      description="Develop your story's characters"
      icon={<User className="w-4 h-4" />}
    >
      <div className="space-y-2">
        <div className="p-2 bg-white rounded border border-indigo-100 shadow-sm">
          <h3 className="font-medium">Alex Chen</h3>
          <p className="text-sm text-gray-600">Master hacker with a moral compass</p>
        </div>
      </div>
    </Node>
  );
}