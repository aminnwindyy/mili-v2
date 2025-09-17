import React from "react";
import { Building2, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export default function PublicFooter() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-bl from-emerald-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl">MelkChain</h3>
                <p className="text-xs text-slate-400">اکوسیستم توکن‌سازی املاک</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              پلتفرم پیشرو در توکن‌سازی املاک و سرمایه‌گذاری دیجیتال در ایران با استفاده از فناوری‌های نوین
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-emerald-400">پلتفرم</h4>
            <ul className="space-y-3">
              <li><a href="#dashboard" className="text-slate-300 hover:text-emerald-400 transition-colors">داشبورد</a></li>
              <li><a href="#properties" className="text-slate-300 hover:text-emerald-400 transition-colors">املاک</a></li>
              <li><a href="#portfolio" className="text-slate-300 hover:text-emerald-400 transition-colors">پورتفولیو</a></li>
              <li><a href="#trefs" className="text-slate-300 hover:text-emerald-400 transition-colors">صندوق‌های ملکی</a></li>
              <li><a href="#secondary-market" className="text-slate-300 hover:text-emerald-400 transition-colors">بازار ثانویه</a></li>
              <li><a href="#wallet" className="text-slate-300 hover:text-emerald-400 transition-colors">کیف پول</a></li>
            </ul>
          </div>

          {/* Investment Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-emerald-400">سرمایه‌گذاری</h4>
            <ul className="space-y-3">
              <li><a href="#explore" className="text-slate-300 hover:text-emerald-400 transition-colors">کاوش فرصت‌ها</a></li>
              <li><a href="#simulator" className="text-slate-300 hover:text-emerald-400 transition-colors">شبیه‌ساز پورتفولیو</a></li>
              <li><a href="#loyalty" className="text-slate-300 hover:text-emerald-400 transition-colors">برنامه وفاداری</a></li>
              <li><a href="#referral" className="text-slate-300 hover:text-emerald-400 transition-colors">سیستم ارجاع</a></li>
              <li><a href="#watchlist" className="text-slate-300 hover:text-emerald-400 transition-colors">لیست علاقه‌مندی‌ها</a></li>
              <li><a href="#owner-portal" className="text-slate-300 hover:text-emerald-400 transition-colors">پورتال مالکین</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-emerald-400">تماس با ما</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">info@melkchain.ir</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-1" />
                <span className="text-slate-300">تهران، خیابان ولیعصر، برج میلاد</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © ۱۴۰۳ MelkChain. تمامی حقوق محفوظ است.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-emerald-400 transition-colors">حریم خصوصی</a>
              <a href="#terms" className="text-slate-400 hover:text-emerald-400 transition-colors">شرایط استفاده</a>
              <a href="#support" className="text-slate-400 hover:text-emerald-400 transition-colors">پشتیبانی</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
