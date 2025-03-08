import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ClipboardList, 
  Clock, 
  Calendar, 
  Users, 
  Edit, 
  Trash2, 
  ChevronLeft,
  Play
} from 'lucide-react';

// Mock test data
const mockTest = {
  id: 1,
  name: 'اختبار الذكاء العاطفي',
  type: 'نفسي',
  description: 'يقيس هذا الاختبار قدرة الطالب على فهم وإدارة العواطف الخاصة به وبالآخرين.',
  questions: 25,
  duration: 30,
  createdAt: '2023-05-10',
  instructions: 'اقرأ كل سؤال بعناية واختر الإجابة التي تعبر عن رأيك بصدق. لا توجد إجابات صحيحة أو خاطئة.',
};

// Mock students who took the test
const mockStudentTests = [
  { id: 1, student: 'أحمد محمد', date: '2023-06-10', status: 'مكتمل', score: 85 },
  { id: 2, student: 'فاطمة علي', date: '2023-06-08', status: 'مكتمل', score: 92 },
  { id: 3, student: 'عمر خالد', date: '2023-06-05', status: 'مكتمل', score: 78 },
  { id: 4, student: 'نورة سعيد', date: '2023-06-01', status: 'قيد المراجعة', score: null },
];

const TestDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('info');
  
  // In a real app, you would fetch the test data based on the ID
  const test = mockTest;
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4 space-x-reverse">
          <button 
            onClick={() => navigate('/tests')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-3xl font-bold text-gray-800">{test.name}</h1>
        </div>
        <div className="flex space-x-2 space-x-reverse">
          <Link 
            to={`/tests/${id}?edit=true`}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <Edit size={20} />
            <span>تعديل</span>
          </Link>
          <button 
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
          >
            <Trash2 size={20} />
            <span>حذف</span>
          </button>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'info'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('info')}
            >
              معلومات الاختبار
            </button>
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'students'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
               }`}
              onClick={() => setActiveTab('students')}
            >
              الطلاب
            </button>
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm ${
                activeTab === 'questions'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('questions')}
            >
              الأسئلة
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'info' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">معلومات الاختبار</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ClipboardList className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">اسم الاختبار</p>
                      <p className="text-sm text-gray-500">{test.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ClipboardList className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">نوع الاختبار</p>
                      <p className="text-sm text-gray-500">{test.type}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Clock className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">مدة الاختبار</p>
                      <p className="text-sm text-gray-500">{test.duration} دقيقة</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <ClipboardList className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">عدد الأسئلة</p>
                      <p className="text-sm text-gray-500">{test.questions} سؤال</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Calendar className="h-5 w-5 text-gray-500" />
                    </div>
                    <div className="mr-3">
                      <p className="text-sm font-medium text-gray-900">تاريخ الإنشاء</p>
                      <p className="text-sm text-gray-500">{test.createdAt}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4 border-b pb-2">الوصف والتعليمات</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">وصف الاختبار</p>
                    <p className="text-sm text-gray-500 mt-1">{test.description}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-900">تعليمات الاختبار</p>
                    <p className="text-sm text-gray-500 mt-1">{test.instructions}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link 
                    to={`/tests/${id}/preview`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 w-fit"
                  >
                    <Play size={20} />
                    <span>معاينة الاختبار</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'students' && (
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">الطلاب الذين أجروا الاختبار</h2>
                <Link 
                  to={`/tests/${id}/assign`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2"
                >
                  <Users size={20} />
                  <span>تعيين للطلاب</span>
                </Link>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        اسم الطالب
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        تاريخ الإجراء
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الحالة
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        النتيجة
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockStudentTests.map((studentTest) => (
                      <tr key={studentTest.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{studentTest.student}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{studentTest.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            studentTest.status === 'مكتمل' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {studentTest.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {studentTest.score !== null ? `${studentTest.score}%` : '-'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-3 space-x-reverse">
                            <Link to={`/reports/generate?test=${id}&student=${studentTest.id}`} className="text-blue-600 hover:text-blue-900">
                              عرض النتائج
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'questions' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">أسئلة الاختبار</h2>
              
              <div className="space-y-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">السؤال {index + 1}</h3>
                    <p className="text-gray-800 mb-4">
                      {index === 0 && 'عندما أواجه موقفًا صعبًا، أستطيع التحكم في مشاعري.'}
                      {index === 1 && 'أستطيع فهم مشاعر الآخرين من خلال تعبيرات وجوههم.'}
                      {index === 2 && 'أجد صعوبة في التعبير عن مشاعري للآخرين.'}
                      {index === 3 && 'عندما أشعر بالغضب، أستطيع تهدئة نفسي بسرعة.'}
                      {index === 4 && 'أستطيع التكيف مع المواقف الجديدة بسهولة.'}
                    </p>
                    
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">الخيارات:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            id={`q${index}-option1`}
                            type="radio"
                            name={`question-${index}`}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label htmlFor={`q${index}-option1`} className="mr-2 block text-sm text-gray-700">
                            دائمًا
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id={`q${index}-option2`}
                            type="radio"
                            name={`question-${index}`}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label htmlFor={`q${index}-option2`} className="mr-2 block text-sm text-gray-700">
                            غالبًا
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id={`q${index}-option3`}
                            type="radio"
                            name={`question-${index}`}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label htmlFor={`q${index}-option3`} className="mr-2 block text-sm text-gray-700">
                            أحيانًا
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id={`q${index}-option4`}
                            type="radio"
                            name={`question-${index}`}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label htmlFor={`q${index}-option4`} className="mr-2 block text-sm text-gray-700">
                            نادرًا
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id={`q${index}-option5`}
                            type="radio"
                            name={`question-${index}`}
                            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                          />
                          <label htmlFor={`q${index}-option5`} className="mr-2 block text-sm text-gray-700">
                            أبدًا
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestDetails;