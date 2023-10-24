import BannerSq from "@/banners/BannerSq";
import Navbar from "@/components/Nav";


const PrivacyPolicy = () => {
  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto">
        <BannerSq />
    </div>
    <div className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">سياسة الخصوصية</h1>
    
        {/* مقدمة (Introduction) */}
        <h2 className="text-xl font-semibold mb-2">1. مقدمة</h2>
        <p className="text-gray-700 mb-4">
            مرحبًا بكم في موقعنا الإلكتروني، الذي يهدف إلى تقديم المقالات والمعرفة في مجموعة متنوعة من المواضيع ومشاركة القصص والاقتباسات.
        </p>
    
        {/* جمع المعلومات (Information Collection) */}
        <h2 className="text-xl font-semibold mb-2">2. جمع المعلومات</h2>
        <p className="text-gray-700 mb-4">
            يمكننا أن نجمع معلومات شخصية عنك عندما تتفاعل مع محتوى الموقع أو تقدم مشاركاتك. يمكن أن تتضمن هذه المعلومات الاسم وعنوان البريد الإلكتروني وغيرها من التفاصيل التي تختار مشاركتها.
        </p>
    
        {/* استخدام المعلومات (Use of Information) */}
        <h2 className="text-xl font-semibold mb-2">3. استخدام المعلومات</h2>
        <p className="text-gray-700 mb-4">
            نحن نستخدم المعلومات التي نجمعها لتقديم محتوى ذو جودة عالية، وتحسين تجربة المستخدم، ومشاركة القصص والمعرفة، وتخصيص المحتوى والإعلانات.
        </p>
    
        {/* ملفات تعريف الارتباط والتتبع (Cookies and Tracking) */}
        <h2 className="text-xl font-semibold mb-2">4. ملفات تعريف الارتباط والتتبع</h2>
        <p className="text-gray-700 mb-4">
            نستخدم ملفات تعريف الارتباط وأدوات التتبع لتحسين تجربة المستخدم وتقديم إعلانات مخصصة. يمكنك تعديل إعدادات ملفات تعريف الارتباط إذا كنت ترغب.
        </p>
    
        {/* مشاركة المعلومات (Data Sharing) */}
        <h2 className="text-xl font-semibold mb-2">5. مشاركة المعلومات</h2>
        <p className="text-gray-700 mb-4">
            قد نشارك بعض المعلومات مع أطراف ثالثة (مثل الشبكات الاجتماعية) لمشاركة المحتوى وتوفير وظائف إضافية على الموقع.
        </p>
    
        {/* الأمان (Security) */}
        <h2 className="text-xl font-semibold mb-2">6. الأمان</h2>
        <p className="text-gray-700 mb-4">
            نحن نتخذ التدابير الأمنية لحماية المعلومات الشخصية وضمان سرية المعلومات.
        </p>
    
        {/* حقوق المستخدم (User Rights) */}
        <h2 className="text-xl font-semibold mb-2">7. حقوق المستخدم</h2>
        <p className="text-gray-700 mb-4">
            المستخدمين لديهم حق الوصول إلى معلوماتهم الشخصية وتصحيحها أو حذفها ومزيد من الحقوق. يمكنك الاتصال بنا لمزيد من المعلومات.
        </p>
    
        {/* الاتصال بنا (Contact) */}
        <h2 className="text-xl font-semibold mb-2">8. الاتصال بنا</h2>
        <p className="text-gray-700 mb-4">
            لأي استفسار إضافي أو توضيحات حول سياسة الخصوصية الخاصة بنا، يرجى الاتصال بنا على البريد الإلكتروني: <a href="mailto:houedd608@email.com">houedd608@email.com</a>.
        </p>
        </div>
    </div>
  </>
  );
};

export default PrivacyPolicy;
