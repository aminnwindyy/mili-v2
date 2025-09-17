"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Coins, 
  TrendingUp, 
  DollarSign, 
  Plus,
  ArrowUpRight,
  Activity,
  RefreshCw,
  Settings
} from "lucide-react";

import StatsCard from "../../components/dashboard/StatsCard";
import RecentProperties from "../../components/dashboard/RecentProperties";
import InvestmentOverview from "../../components/dashboard/InvestmentOverview";
import InvestmentJourneyWidget from "../../components/dashboard/InvestmentJourneyWidget";
import InteractiveChart from "../../components/dashboard/InteractiveChart";
import WeeklySummary from "../../components/dashboard/WeeklySummary";
import SimpleAdvancedToggle from "../../components/ui/SimpleAdvancedToggle";

// Mock data for demo
const mockProperties = [
  {
    id: 1,
    title: "برج لوکس سعادت‌آباد",
    location: "تهران، سعادت‌آباد",
    total_value: 15000000000,
    status: "در_حال_فروش",
    created_date: new Date().toISOString(),
    image: "/api/placeholder/300/200",
    progress: 75,
    investors_count: 142,
    expected_return: 18.5
  },
  {
    id: 2,
    title: "مجتمع تجاری پاسداران",
    location: "تهران، پاسداران",
    total_value: 25000000000,
    status: "در_حال_فروش",
    created_date: new Date().toISOString(),
    image: "/api/placeholder/300/200",
    progress: 60,
    investors_count: 89,
    expected_return: 22.3
  }
];

const mockInvestments = [
  {
    id: 1,
    property_title: "برج لوکس سعادت‌آباد",
    total_amount: 500000000,
    created_date: new Date().toISOString(),
    status: "فعال",
    return_rate: 18.5
  },
  {
    id: 2,
    property_title: "مجتمع تجاری پاسداران",
    total_amount: 300000000,
    created_date: new Date().toISOString(),
    status: "فعال",
    return_rate: 22.3
  }
];

const mockUser = {
  id: 1,
  name: "کاربر نمونه",
  email: "user@example.com",
  demo_mode: true
};

const formatCurrency = (amount: number) => {
  if (amount >= 1000000000) {
    return `${(amount / 1000000000).toFixed(1)} میلیارد ریال`;
  } else if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)} میلیون ریال`;
  }
  return `${amount.toLocaleString('fa-IR')} ریال`;
};

export default function Dashboard() {
  const [properties, setProperties] = useState(mockProperties);
  const [investments, setInvestments] = useState(mockInvestments);
  const [user, setUser] = useState(mockUser);
  const [isLoading, setIsLoading] = useState(false);
  const [isSimpleMode, setIsSimpleMode] = useState(true);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    loadUserSettings();
    generateChartData();
  }, []);

  const loadUserSettings = () => {
    const simpleMode = localStorage.getItem('simple_mode') !== 'false';
    setIsSimpleMode(simpleMode);
  };

  const generateChartData = () => {
    const data = [];
    const baseValue = 50000000; 
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const variation = (Math.random() - 0.5) * 0.1;
      const value = baseValue * (1 + variation * i * 0.1);
      data.push({
        name: date.toLocaleDateString('fa-IR', { month: 'short', day: 'numeric' }),
        value: Math.round(value)
      });
    }
    setChartData(data);
  };

  const handleModeToggle = (newSimpleMode: boolean) => {
    setIsSimpleMode(newSimpleMode);
    localStorage.setItem('simple_mode', newSimpleMode.toString());
  };

  const handleRefresh = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      generateChartData();
    }, 1000);
  };
  
  const demoMode = user?.demo_mode;
  const totalValue = demoMode ? 10000000000 : properties.reduce((sum, prop) => sum + (prop.total_value || 0), 0);
  const totalInvestment = demoMode ? 1000000000 : investments.reduce((sum, inv) => sum + (inv.total_amount || 0), 0);
  const activeProperties = demoMode ? 5 : properties.filter(p => p.status === "در_حال_فروش").length;
  
  const journeySteps = [];
  if (user) journeySteps.push('signup');
  if (investments.length > 0 || demoMode) {
    journeySteps.push('explore');
    journeySteps.push('invest');
    if (investments.length > 1 || demoMode) {
      journeySteps.push('portfolio');
    }
  }

  return (
    <div className="p-4 md:p-8 bg-gradient-to-bl from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">داشبورد</h1>
            <p className="text-slate-600">مدیریت سرمایه‌گذاری‌های املاک شما</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Button onClick={handleRefresh} variant="outline" size="icon" className="h-10 w-10">
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
            <SimpleAdvancedToggle isSimpleMode={isSimpleMode} onToggle={handleModeToggle} />
            <Button variant="ghost" size="icon" className="h-10 w-10">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard 
              title="کل ارزش املاک" 
              value={formatCurrency(totalValue)} 
              icon={DollarSign} 
              gradient="from-emerald-500 to-teal-600" 
              trend={demoMode ? "حساب دمو" : "+۱۲% این ماه"} 
            />
            <StatsCard 
              title="املاک فعال" 
              value={activeProperties.toString()} 
              icon={Building2} 
              gradient="from-blue-500 to-indigo-600" 
              trend={demoMode ? "حساب دمو" : `از ${properties.length} ملک`} 
            />
            <StatsCard 
              title="کل سرمایه‌گذاری" 
              value={formatCurrency(totalInvestment)} 
              icon={Coins} 
              gradient="from-amber-500 to-orange-600" 
              trend={demoMode ? "حساب دمو" : "+۸% این هفته"} 
            />
            <StatsCard 
              title="بازدهی میانگین" 
              value={demoMode ? "۱۸.۵%" : "۱۵.۲%"} 
              icon={TrendingUp} 
              gradient="from-purple-500 to-pink-600" 
              trend="سالانه" 
            />
          </div>

          {/* Interactive Chart - Advanced Mode Only */}
          {!isSimpleMode && (
            <InteractiveChart data={chartData} title="روند ارزش پورتفو (7 روز گذشته)" />
          )}

          {/* Investment Journey */}
          <InvestmentJourneyWidget completedSteps={journeySteps} />

          {/* Recent Properties */}
          <RecentProperties properties={properties} isLoading={isLoading} isSimpleMode={isSimpleMode} />

          {/* Investment Overview */}
          <InvestmentOverview investments={investments} isLoading={isLoading} isSimpleMode={isSimpleMode} />

          {/* Weekly Summary - Advanced Mode Only */}
          {!isSimpleMode && (
            <WeeklySummary investments={investments} properties={properties} userEmail={user?.email} />
          )}

          {/* Market Activity - Advanced Mode Only */}
          {!isSimpleMode && (
            <Card className="shadow-xl border-0 bg-gradient-to-bl from-white to-slate-50">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Activity className="w-5 h-5 text-blue-600" />
                  فعالیت بازار
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">فروش توکن آپارتمان میرداماد</span>
                    </div>
                    <span className="text-xs text-green-600">۵ دقیقه پیش</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">ثبت ملک تجاری جدید</span>
                    </div>
                    <span className="text-xs text-blue-600">۱۵ دقیقه پیش</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">تایید مستندات ملک</span>
                    </div>
                    <span className="text-xs text-amber-600">۳۰ دقیقه پیش</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
