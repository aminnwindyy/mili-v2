import React from 'react';
import { Button } from '@/components/ui/button';
import { Zap, Settings } from 'lucide-react';

export default function SimpleAdvancedToggle({ isSimpleMode, onToggle }) {
  return (
    <div className="flex items-center bg-white rounded-lg border border-slate-200 p-1">
      <Button
        variant={isSimpleMode ? "default" : "ghost"}
        size="sm"
        onClick={() => onToggle(true)}
        className={`h-8 px-3 text-xs transition-all ${
          isSimpleMode 
            ? "bg-emerald-600 text-white shadow-sm" 
            : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
        }`}
      >
        <Zap className="w-3 h-3 mr-1" />
        ساده
      </Button>
      <Button
        variant={!isSimpleMode ? "default" : "ghost"}
        size="sm"
        onClick={() => onToggle(false)}
        className={`h-8 px-3 text-xs transition-all ${
          !isSimpleMode 
            ? "bg-emerald-600 text-white shadow-sm" 
            : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
        }`}
      >
        <Settings className="w-3 h-3 mr-1" />
        پیشرفته
      </Button>
    </div>
  );
}
