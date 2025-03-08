import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  FileText, 
  Settings,
  LogOut,
  BarChart,
  FileSpreadsheet,
  UserCog
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <div className="p-5 border-b border-slate-700">
        <h1 className="text-xl font-bold text-center">نظام الاختبارات النفسية</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 space-y-1">
        <div className="px-3">
          <div className="sidebar-section">الرئيسية</div>
          <Link 
            to="/" 
            className={`sidebar-link ${isActive('/') ? 'active' : ''}`}
          >
            <LayoutDashboard size={20} />
            <span>لوحة التحكم</span>
          </Link>
        </div>

        <div className="mt-4 px-3">
          <div className="sidebar-section">إدارة الطلاب</div>
          <Link 
            to="/students" 
            className={`sidebar-link ${isActive('/students') ? 'active' : ''}`}
          >
            <Users size={20} />
            <span>قائمة التلاميذ</span>
          </Link>
        </div>

        <div className="mt-4 px-3">
          <div className="sidebar-section">الاختبارات</div>
          <Link 
            to="/tests" 
            className={`sidebar-link ${isActive('/tests') ? 'active' : ''}`}
          >
            <ClipboardList size={20} />
            <span>الاختبارات</span>
          </Link>
        </div>

        <div className="mt-4 px-3">
          <div className="sidebar-section">التقارير والتحليل</div>
          <Link 
            to="/reports" 
            className={`sidebar-link ${isActive('/reports') ? 'active' : ''}`}
          >
            <FileText size={20} />
            <span>التقارير</span>
          </Link>
          <Link 
            to="/reports/guidance" 
            className={`sidebar-link ${isActive('/reports/guidance') ? 'active' : ''}`}
          >
            <FileSpreadsheet size={20} />
            <span>تقارير الإعلام والإرشاد</span>
          </Link>
          <Link 
            to="/analytics" 
            className={`sidebar-link ${isActive('/analytics') ? 'active' : ''}`}
          >
            <BarChart size={20} />
            <span>التحليل الإحصائي</span>
          </Link>
        </div>

        <div className="mt-4 px-3">
          <div className="sidebar-section">الإعدادات</div>
          <Link 
            to="/settings" 
            className={`sidebar-link ${isActive('/settings') ? 'active' : ''}`}
          >
            <Settings size={20} />
            <span>الإعدادات العامة</span>
          </Link>
          <Link 
            to="/settings/users" 
            className={`sidebar-link ${isActive('/settings/users') ? 'active' : ''}`}
          >
            <UserCog size={20} />
            <span>إدارة المستخدمين</span>
          </Link>
        </div>
      </div>
      
      <div className="p-4 border-t border-slate-700">
        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
        >
          <LogOut size={20} />
          <span>تسجيل الخروج</span>
        </button>
      </div>
      
      <div className="p-3 text-center text-xs text-gray-400 border-t border-slate-700">
        <p className="font-medium">جميع الحقوق محفوظة © 2025</p>
        <p className="mt-1 font-medium">Mr ROUABEH KARIM</p>
        <p className="mt-1 ltr font-medium">Tél: (+213) 07.83.32.87.29</p>
        <a 
          href="https://netscolaire-dz.netlify.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-1 text-gray-300 hover:text-white transition-colors"
        >
          netscolaire-dz.netlify.app
        </a>
      </div>
    </div>
  );
};

export default Sidebar;