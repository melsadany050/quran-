تحويل التطبيق إلى APK (أندرويد)

المتطلبات: Node.js (الإصدار 18 أو أحدث) و Android Studio.

1) افتح الطرفية داخل هذا المجلد ونفّذ:
   npm install
   npx cap add android
   npx cap sync android
   npx cap open android

2) في Android Studio انتظر انتهاء Gradle ثم:
   Build > Build Bundle(s) / APK(s) > Build APK(s)
   سيظهر ملف app-debug.apk للتجربة المباشرة على الجوال.

3) للنشر في Google Play: Build > Generate Signed Bundle / APK
   واختر Android App Bundle (AAB).

تغيير اسم الحزمة: عدّل appId في capacitor.config.json (مثل com.yourname.quran)
قبل تنفيذ الأمر npx cap add android.

بعد أول تشغيل: الإعدادات (Aa) > تحميل، لتحميل المصحف كاملًا مرة واحدة.

لآيفون: npm i @capacitor/ios ثم npx cap add ios (يتطلب جهاز Mac و Xcode).
