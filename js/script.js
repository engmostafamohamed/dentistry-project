'use strict';

//Go to whatsapp
const whatsappLink = document.querySelector('.whatsapp-link');

whatsappLink.addEventListener('click', () => {
    const url = `https://wa.me/966547574741?text=${encodeURIComponent('.')}`;
    window.open(url, '_blank')
});

// Language Toggler
const translations = {
    en: {
        home: "Home",
        general: "General Dentistry",
        services: "Services",
        cosmetic: "Cosmetic Dentistry",
        pediatric: "Pediatric Dentistry",
        restorative: "Restorative Dentistry",
        preventive: "Preventive Dentistry",
        orthodontics: "Orthodontics",
        all_services: "All Services",
        dentists: "Dentists",
        about_us: "About Us",
        faq: "FAQ",
        gallery: "Gallery",
        blog: "Blog",
        contact: "Contact",
        brand_name: "Welcome to Dential",
        brand_title: "Transforming Smiles With Precision And Gentle Touch",
        brand_description: "We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident.",
        book_appointment: "Book Appointment",
        about_us_tilte: "Professionals and Personalized Dental Excellence",
        about_us_description: "We offer high-quality dental care tailored for the whole family. From routine checkups to advanced treatments, our compassionate team ensures your smile stays healthy and confident.",
        about_us_option_1: "Personalized Treatment Plans",
        about_us_option_2: "Gentle Care for Kids and Adults",
        about_us_option_3: "State-of-the-Art Technology",
        about_us_option_4: "Flexible Appointment Scheduling",
        our_service: "Our Services",
        our_service_title: "Complete Care for Every Smile",
        our_service_description: "From routine cleanings to advanced restorations, we provide personalized dental solutions for patients of all ages.",
        general_description: "Complete oral care for every smile with cleanings, exams, and more.",
        cosmetic_description: "Enhance your smile’s beauty with whitening, veneers, and more.",
        pediatric_description: "Gentle and fun dental care for kids to grow healthy, happy smiles, and more.",
        restorative_description: "Repair and restore your teeth for lasting comfort and function, and more.",
        read_more: "Read more",
        view_all_services: "View All Services",
        working_date: "Mon to Sat 08:00 - 20:00",
        review: "Based on 23k Reviews",
        need_service: "Need Dental Services?",
        opening_hours: "Opening Hours",
        email_us: "Email Us",
        description: "This is a bilingual website example.",
        dir: "ltr",
        select_service:"Choose Offer",
        select_time: "Choose Time",
        send_message: "Book Now",                       
        book_your_appointment: "Book Your Appointment",
        book_your_appointment_description: "Book your appointment today for expert dental care tailored to your needs. Healthy, beautiful smiles start with a simple step, schedule now!",
        pages: "Pages",
        happy_patients: "Happy Patients",
        teeth_whitened: "Teeth Whitened",
        dental_implants: "Dental Implants",
        years_of_experience: "Years of Experience",
        dental_care:"Why Choose Our Dental Care",
        dental_care_title:"Exceptional Service With a Personal Touch",
        dental_care_description:"Choosing the right dental provider matters. We combine expert care, advanced technology, and a warm atmosphere to ensure every visit is comfortable, efficient, and tailored to your unique needs.",
        dental_care_1_title:"Experienced Dental",
        dental_care_1_description:"Skilled care backed by years of trusted dental experience.",
        dental_care_2_title:"Advanced Technology",
        dental_care_2_description:"Modern tools ensure accurate and efficient treatments.",
        dental_care_3_title:"Personalized Treatment",
        dental_care_3_description:"Custom care plans made to fit your smile and lifestyle.",
        dental_care_4_title:"Family-Friendly",
        dental_care_4_description:"Welcoming space for kids, teens, adults, and seniors.",
        team:"Meet Our Dental Team",
        team_title:"Committed to Your Smile",
        team_description:"Our experienced dental team is here to make every visit positive and personalized. With gentle hands and caring hearts.",
        dr_specialist_1: "Lead Dentist",
        dr_specialist_2: "Cosmetic Dentist",
        dr_specialist_3: "Pediatric Specialist",
        dr_specialist_4: "Dental Hygienist",
        question_1: "How often should I visit the dentist?",
        question_2: "What should I do in a dental emergency?",
        question_3: "Do you offer services for kids?",
        question_4: "What are my options for replacing missing teeth?",
        question_5: "Is teeth whitening safe?",
        question_answer_1: "It’s recommended to see your dentist every 6 months for a routine check-up and cleaning, unless advised otherwise.",
        question_answer_2: "Call our office immediately. We offer same-day emergency care for issues like severe pain, broken teeth, or swelling.",
        question_answer_3: "Absolutely! We provide gentle, friendly pediatric dental care for children of all ages.",
        question_answer_4: "We offer dental implants, bridges, and dentures depending on your needs and preferences.",
        question_answer_5: "Yes, when performed by a dental professional, teeth whitening is safe and effective with long-lasting results.",
        contact_us: "Contact Us",
        send_message: "Send Message",
        message: "Message",
        name: "Name",
        phone: "Phone",
        select_date: "Select Date",
        clinic_location: "Clinic Location",
        call_us: "Call Us",
        logo_description: "At Dentia, we’re dedicated to providing high-quality, personalized dental care for patients of all ages. Our skilled team uses the latest technology to ensure comfortable, efficient treatments and beautiful, healthy smiles for life.",
        testimonials: "Testimonials",
        testimonials_title: "Our Happy Customers",
        testimonials_description: "Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts here!",
    },
    ar: {
        home: "الرئيسية",
        general: "طب الأسنان العام",
        services: "الخدمات",
        cosmetic: "طب تجميل الأسنان",
        pediatric: "طب أسنان الأطفال",
        restorative: "ترميم الأسنان",
        preventive: "طب الأسنان الوقائي",
        orthodontics: "تقويم الأسنان",
        all_services: "جميع الخدمات",
        dentists: "أطباء الأسنان",
        about_us: "من نحن",
        faq: "الأسئلة الشائعة",
        gallery: "المعرض",
        blog: "المدونة",
        contact: "اتصل بنا",
        brand_name: "مرحبًا بكم في دينتيال",
        brand_title: "نرسم الابتسامات بدقة ولمسة لطيفة",
        brand_description: "نقدم رعاية أسنان عالية الجودة مصممة خصيصًا لجميع أفراد العائلة. من الفحوصات الدورية إلى العلاجات المتقدمة، يضمن فريقنا المتعاطف أن تظل ابتسامتك صحية وواثقة.",
        book_appointment: "احجز موعدًا",
        about_us_tilte: "الاحتراف والتميز الشخصي في طب الأسنان",
        about_us_description: "نقدم رعاية أسنان عالية الجودة مصممة خصيصًا لجميع أفراد العائلة. من الفحوصات الدورية إلى العلاجات المتقدمة، يضمن فريقنا المتعاطف أن تظل ابتسامتك صحية وواثقة.",
        about_us_option_1: "خطط علاج شخصية",
        about_us_option_2: "رعاية لطيفة للأطفال والبالغين",
        about_us_option_3: "تقنية متطورة",
        about_us_option_4: "جدولة مواعيد مرنة",
        our_service: "خدماتنا",
        our_service_title: "رعاية شاملة لكل ابتسامة",
        our_service_description: "من التنظيفات الروتينية إلى الترميمات المتقدمة، نقدم حلول طب الأسنان الشخصية للمرضى من جميع الأعمار.",
        general_description: " رعاية فموية شاملة لكل ابتسامة مع التنظيفات والفحوصات والمزيد.",
        cosmetic_description: "تعزيز جمال ابتسامتك مع التبييض، والقشور، والمزيد.",
        pediatric_description: "رعاية أسنان لطيفة وممتعة للأطفال لنمو ابتسامات صحية وسعيدة, والمزيد",
        restorative_description: "إصلاح وترميم أسنانك لراحة ووظيفة دائمة, والمزيد",
        read_more: "اقرأ المزيد",
        view_all_services: "عرض جميع الخدمات",
        google_rating: "تقييم جوجل",
        working_date: "من الإثنين إلى السبت 08:00 - 20:00",
        review: "بناءً على 23 ألف تقييم",
        need_service: "بحاجة إلى خدمات أسنان؟",
        opening_hours: "ساعات العمل",
        email_us: "راسلنا",
        description: "هذا مثال على موقع ثنائي اللغة.",
        dir: "rtl",
        book_your_appointment: "احجز موعدك",
        book_your_appointment_description: "احجز موعدك اليوم للحصول على رعاية أسنان متخصصة تناسب احتياجاتك. الابتسامات الصحية والجميلة تبدأ بخطوة بسيطة، احجز الآن!",
        pages: "الصفحات",
        happy_patients: "المرضى السعداء",
        teeth_whitened: "أسنان مبيضة",
        dental_implants: "زراعة الأسنان",
        years_of_experience: "سنوات من الخبرة",
        dental_care: "لماذا تختار رعاية الأسنان لدينا",
        dental_care_title: "خدمة استثنائية مع لمسة شخصية",
        dental_care_description: "نقدم رعاية أسنان عالية الجودة مصممة خصيصًا لجميع أفراد العائلة. من الفحوصات الدورية إلى العلاجات المتقدمة، يضمن فريقنا المتعاطف أن تظل ابتسامتك صحية وواثقة.",
        dental_care_1_title: "طب الأسنان ذو الخبرة",
        dental_care_1_description: "رعاية ماهرة مدعومة بسنوات من الخبرة الموثوقة في طب الأسنان.",
        dental_care_2_title: "تقنية متقدمة",
        dental_care_2_description: "تقنيات متطورة لتقديم رعاية دقيقة وفعالة.",
        dental_care_3_title: "علاج مخصص",
        dental_care_3_description: "خطط رعاية مصممة لتناسب ابتسامتك ونمط حياتك.",
        dental_care_4_title: "ملائم للعائلة",
        dental_care_4_description: "مساحة ترحيبية للأطفال والمراهقين والبالغين وكبار السن.",
        team: "تعرف على فريقنا الطبي",
        team_title: "ملتزمون بابتسامتك",
        team_description: "فريقنا الطبي ذو الخبرة هنا لجعل كل زيارة إيجابية وشخصية. بأيدٍ لطيفة وقلوبٍ محبة.",
        dr_specialist_1: "طبيب أسنان رئيسي",
        dr_specialist_2: "طبيب أسنان تجميلي",
        dr_specialist_3: "أخصائي طب أسنان الأطفال",
        dr_specialist_4: "أخصائي صحة الأسنان",
        question_1: "كم مرة يجب أن أزور طبيب الأسنان؟",
        question_2: "ماذا أفعل في حالة طوارئ الأسنان؟",
        question_3: "هل تقدمون خدمات للأطفال؟",
        question_4: "ما هي خياراتي لاستبدال الأسنان المفقودة؟",
        question_5: "هل تبييض الأسنان آمن؟",
        question_answer_1: "يوصى بزيارة طبيب الأسنان كل 6 أشهر للفحصوصات الدورية والتنظيف، ما لم يُنصح بخلاف ذلك.",
        question_answer_2: "اتصل بمكتبنا على الفور. نحن نقدم رعاية طوارئ في نفس اليوم لمشاكل مثل الألم الشديد، الأسنان المكسورة، أو التورم.",
        question_answer_3: "بالطبع! نحن نقدم رعاية أسنان للأطفال بلطف ولطف لضمان نمو ابتسامات صحية وسعيدة.",
        question_answer_4: "نقدم زراعة الأسنان والجسور والأطقم الصناعية حسب احتياجاتك وتفضيلاتك.",
        question_answer_5: "نعم، عندما يتم بواسطة طبيب أسنان محترف، فإن تبييض الأسنان آمن وفعال مع نتائج تدوم طويلاً.",
        contact_us: "اتصل بنا",
        clinic_location: "موقع العيادة",
        call_us: "الهاتف",
        logo_description: "في دينتيال، نحن ملتزمون بتقديم رعاية أسنان عالية الجودة وشخصية للمرضى من جميع الأعمار. يستخدم فريقنا الماهر أحدث التقنيات لضمان علاجات مريحة وفعالة وابتسامات جميلة وصحية تدوم مدى الحياة.",
        testimonials: "الشهادات",
        testimonials_title: "عملاؤنا السعداء",
        testimonials_description: "انضم إلى آلاف المرضى السعداء الذين يثقون بنا لرعاية لطيفة وخبيرة وابتسامات جميلة. تجربتك المثالية في طب الأسنان تبدأ هنا!",
        send_message: "إحجز الان",
        name: "الاسم",
        phone: "الهاتف",
        message: "الرسالة",
        select_service: "اختر العرض",
        select_time: "اختر الوقت",
        select_date: "اختر تاريخ",
    }
};


const languageBtn = document.getElementById('languageBtn');
let currentLanguge = localStorage.getItem('language') || 'ar';
let dir = localStorage.getItem('direction') || 'rtl';

// Function to update all translatable elements
// function updateTranslations() {
//     const elements = Array.from(document.querySelectorAll('[data-i18n]')).filter(el => el.offsetParent !== null);
//     elements.forEach((element) => {
//         const key = element.getAttribute('data-i18n');
//         if (key && translations[currentLanguge][key]) {
//             element.textContent = translations[currentLanguge][key];
//         }
//     });
// }

function updateTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (key && translations[currentLanguge][key]) {
            const translatedText = translations[currentLanguge][key];

            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder) {
                    element.placeholder = translatedText;
                } else {
                    element.value = translatedText;
                }
            } else if (element.tagName === 'OPTION') {
                element.textContent = translatedText;
                element.value = translatedText; // optional
            } else {
                element.textContent = translatedText;
            }
        }
    });
}
    

languageBtn.addEventListener('click', (e) => {
    e.preventDefault();

    currentLanguge = currentLanguge === 'en' ? 'ar' : 'en';
    dir = currentLanguge === 'en' ? 'ltr' : 'rtl';
    document.documentElement.lang = currentLanguge;
    document.documentElement.dir = dir;

    localStorage.setItem('language', currentLanguge);
    localStorage.setItem('direction', dir);
    updateTranslations();
});


// Set default language to Arabic on first load
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem('language')) {
        currentLanguge = "ar";
        dir = "rtl";
        localStorage.setItem('language', currentLanguge);
        localStorage.setItem('direction', dir);
    }

    document.documentElement.dir = dir;
    document.documentElement.lang = currentLanguge;
    updateTranslations();
    //date Picker
    // flatpickr("#datepicker", {
    //   dateFormat: "Y-m-d",  // Format: 2025-06-12
    //   enableTime: false,    // No time picker
    //   altInput: true,       // Optional: show user-friendly text
    //   altFormat: "F j, Y"   // Example: June 12, 2025
    // });
})



//Get Date
// const input = document.getElementById("datepicker");

// input.addEventListener("change", () => {
// const selectedDate = input.value;
// console.log("Selected date:", selectedDate);
// // Example output: "2025-06-12"
// });

// Language toggle functionality
// document.querySelectorAll(".langToggle").forEach(function (element) {
// 	element.addEventListener("click", function (e) {
// 		e.preventDefault();
// 		currentLang = currentLang === "ar" ? "en" : "ar";
// 		document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

// 		localStorage.setItem('Language', currentLang);
// 		localStorage.setItem('direction', document.documentElement.dir);

// 		updateTranslations();
// 	});
// });
