import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [investmentDropdownOpen, setInvestmentDropdownOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-bl from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-slate-900">MelkChain</h1>
              <p className="text-xs text-slate-500">اکوسیستم توکن‌سازی املاک</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#properties" 
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50"
            >
              پروژه‌ها
            </a>
            
            {/* Investment Dropdown */}
            <DropdownMenu open={investmentDropdownOpen} onOpenChange={setInvestmentDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-slate-600 hover:text-emerald-600 font-medium hover:bg-emerald-50 gap-1"
                >
                  سرمایه‌گذاری
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${investmentDropdownOpen ? 'rotate-180' : ''}`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 bg-white/95 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-2">
                <DropdownMenuItem className="rounded-lg p-3 cursor-pointer hover:bg-emerald-50 transition-colors">
                  <div className="flex flex-col items-start w-full">
                    <div className="font-medium text-slate-900">صندوق‌های ملکی</div>
                    <div className="text-sm text-slate-500">سرمایه‌گذاری متنوع و کم ریسک</div>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg p-3 cursor-pointer hover:bg-emerald-50 transition-colors">
                  <div className="flex flex-col items-start w-full">
                    <div className="font-medium text-slate-900">شبیه‌ساز پورتفولیو</div>
                    <div className="text-sm text-slate-500">تست قبل از سرمایه‌گذاری</div>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a 
              href="#owners" 
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50"
            >
              مالکین
            </a>
            
            <a 
              href="#insights" 
              className="text-slate-600 hover:text-emerald-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50"
            >
              بینش‌های بازار
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-200">
              ورود
            </Button>
            <Button className="bg-gradient-to-l from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200">
              شروع کنید
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-emerald-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl mt-2 p-4 border border-white/20 shadow-xl animate-in slide-in-from-top-5">
            <div className="space-y-4">
              <a 
                href="#properties" 
                className="block py-3 px-4 text-slate-600 hover:text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                پروژه‌ها
              </a>
              
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-500 px-4">سرمایه‌گذاری</div>
                <a 
                  href="#trefs" 
                  className="block py-2 px-6 text-slate-600 hover:text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  صندوق‌های ملکی
                </a>
                <a 
                  href="#simulator" 
                  className="block py-2 px-6 text-slate-600 hover:text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  شبیه‌ساز پورتفولیو
                </a>
              </div>
              
              <a 
                href="#owners" 
                className="block py-3 px-4 text-slate-600 hover:text-emerald-600 font-medium rounded-lg hover:bg-emerald-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                پورتال مالکین
              </a>
              
              <div className="pt-4 border-t border-slate-200 space-y-2">
                <Button variant="outline" className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50">ورود</Button>
                <Button className="w-full bg-gradient-to-l from-emerald-600 to-emerald-700">شروع کنید</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
