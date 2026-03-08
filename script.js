// ===== STORAGE KEYS =====
const STORAGE_KEYS = {
    USERS: 'portfolio_users',
    PROJECTS: 'portfolio_projects',
    MESSAGES: 'portfolio_messages',
    LANGUAGE: 'portfolio_language',
    THEME: 'portfolio_theme',
    LOGGED_IN: 'portfolio_logged_in',
    USERNAME: 'portfolio_username'
};

// ===== COUNTRY CODES =====
const COUNTRY_CODES = [
    { code: '+20', country: 'مصر', flag: '🇪🇬' },
    { code: '+966', country: 'السعودية', flag: '🇸🇦' },
    { code: '+971', country: 'الإمارات', flag: '🇦🇪' },
    { code: '+974', country: 'قطر', flag: '🇶🇦' },
    { code: '+965', country: 'الكويت', flag: '🇰🇼' },
    { code: '+973', country: 'البحرين', flag: '🇧🇭' },
    { code: '+968', country: 'عمان', flag: '🇴🇲' },
    { code: '+962', country: 'الأردن', flag: '🇯🇴' },
    { code: '+961', country: 'لبنان', flag: '🇱🇧' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' }
];

// ===== DEFAULT PROJECTS =====
const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: { ar: 'تطبيق ويب تفاعلي', en: 'Interactive Web App' },
        description: { ar: 'تطبيق لإدارة المهام اليومية', en: 'Task management application' },
        image: 'https://via.placeholder.com/400x200/1e3a8a/ffffff?text=Web+App',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: '#',
        github: '#'
    },
    {
        id: 2,
        title: { ar: 'منصة تعليمية', en: 'Learning Platform' },
        description: { ar: 'منصة لنشر الدورات التعليمية', en: 'Online course platform' },
        image: 'https://via.placeholder.com/400x200/2563eb/ffffff?text=Learning',
        technologies: ['Vue.js', 'Django', 'PostgreSQL'],
        link: '#',
        github: '#'
    },
    {
        id: 3,
        title: { ar: 'متجر إلكتروني', en: 'E-commerce Store' },
        description: { ar: 'متجر لبيع المنتجات الرقمية', en: 'Digital products store' },
        image: 'https://via.placeholder.com/400x200/3b82f6/ffffff?text=E-commerce',
        technologies: ['Next.js', 'Express', 'MySQL'],
        link: '#',
        github: '#'
    }
];

// ===== TRANSLATIONS =====
const TRANSLATIONS = {
    ar: {
        home: 'الرئيسية',
        about: 'نبذة عني',
        projects: 'المشاريع',
        contact: 'اتصل بنا',
        login: 'تسجيل دخول',
        register: 'إنشاء حساب',
        logout: 'تسجيل خروج',
        admin: 'لوحة التحكم',
        light: 'فاتح',
        dark: 'مظلم',
        heroTitle: 'أهلاً، أنا محمد الحبال ',
        heroSubtitle: 'مبرمج ويب ومطور مشاريع إبداعية',
        aboutTitle: '  أهلاً، أنا  محمد الحبال',
        aboutDesc1: 'مطور ويب شغوف ببناء تطبيقات وحلول رقمية مبتكرة. أمتلك خبرة في العديد من التقنيات الحديثة في عالم البرمجة.',
        aboutDesc2: 'أؤمن بقوة البرمجيات في تغيير العالم وتحسين حياة الناس. على مر السنوات، عملت على مشاريع متنوعة مع فرق مختلفة، مما صقل مهاراتي في العمل الجماعي وحل المشكلات.',
        location: 'القاهرة، مصر',
        experience: 'خبرة: 3+ سنوات',
        // education: 'بكالوريوس حاسبات ومعلومات',
        languages: 'العربية (اللغة الأم)، الإنجليزية (متقدم)',
        skills: 'المهارات',
        myProjects: 'مشاريعي',
        viewProject: 'عرض المشروع',
        viewCode: 'الكود المصدري',
        contactMe: 'تواصل معي',
        contactInfo: 'معلومات الاتصال',
        contactInfoDesc: 'يمكنك التواصل معي عبر',
        sendMessage: 'أرسل لي رسالة',
        yourName: 'الاسم',
        yourEmail: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال',
        createAccount: 'إنشاء حساب جديد',
        alreadyHaveAccount: 'لديك حساب بالفعل؟',
        loginHere: 'سجل دخول هنا',
        dontHaveAccount: 'ليس لديك حساب؟',
        registerHere: 'أنشئ حساب هنا',
        password: 'كلمة المرور',
        confirmPassword: 'تأكيد كلمة المرور',
        fullName: 'الاسم الكامل',
        username: 'اسم المستخدم',
        email: 'البريد الإلكتروني',
        usernameOrEmail: 'اسم المستخدم أو البريد',
        adminHint: 'للدخول كأدمن: admin / admin123',
        adminPanel: 'لوحة التحكم',
        totalUsers: 'إجمالي المستخدمين',
        totalProjects: 'إجمالي المشاريع',
        totalMessages: 'إجمالي الرسائل',
        users: 'المستخدمين',
        messages: 'الرسائل',
        addProject: 'إضافة مشروع جديد',
        projectTitleAr: 'العنوان (عربي)',
        projectTitleEn: 'العنوان (إنجليزي)',
        projectDescAr: 'الوصف (عربي)',
        projectDescEn: 'الوصف (إنجليزي)',
        projectImage: 'رابط الصورة',
        projectTech: 'التقنيات (مفصولة بفواصل)',
        add: 'إضافة',
        edit: 'تعديل',
        delete: 'حذف',
        save: 'حفظ',
        cancel: 'إلغاء',
        confirmDelete: 'هل أنت متأكد من الحذف؟',
        messageSent: 'تم إرسال رسالتك بنجاح!',
        messageError: 'حدث خطأ، حاول مرة أخرى',
        allRights: 'جميع الحقوق محفوظة',
        verifyIdentity: 'تأكيد الهوية',
        codeSent: 'تم إرسال رمز التحقق إلى',
        verify: 'تحقق',
        resendCode: 'إعادة إرسال الرمز',
        otpExpired: 'انتهت صلاحية الرمز',
        otpSuccess: 'تم التحقق بنجاح',
        otpInvalid: 'رمز التحقق غير صحيح',
        continue: 'متابعة',
        loginError: 'بيانات الدخول غير صحيحة',
        userExists: 'المستخدم موجود بالفعل',
        emailOrPhone: 'البريد الإلكتروني أو رقم الهاتف',
        joinDate: 'تاريخ التسجيل',
        required: 'مطلوب',
        back: 'رجوع',
        date: 'التاريخ',
        from: 'من',
        success: 'تم بنجاح',
        close: 'إغلاق',
        view: 'عرض',
        actions: 'الإجراءات',
        status: 'الحالة',
        read: 'مقروء',
        unread: 'غير مقروء',
        noUsers: 'لا يوجد مستخدمين',
        noProjects: 'لا توجد مشاريع',
        noMessages: 'لا توجد رسائل'
    },
    en: {
        home: 'Home',
        about: 'About Me',
        projects: 'Projects',
        contact: 'Contact',
        login: 'Login',
        register: 'Register',
        logout: 'Logout',
        admin: 'Admin',
        light: 'Light',
        dark: 'Dark',
        heroTitle: "Hi, I'm Mohamed ELhapal",
        heroSubtitle: 'Web Developer & Creative Project Builder',
        aboutTitle: "Hi, I'm Mohamed ELhapal",
        aboutDesc1: 'A passionate web developer dedicated to building innovative digital applications and solutions. I have experience in various modern technologies  programming world.',
        aboutDesc2: 'I believe in the power of software to change the world and improve people\'s lives. Over the years, I have worked on diverse projects with different teams, which has honed my teamwork and problem-solving skills.',
        location: 'Cairo, Egypt',
        experience: 'Experience: 3+ Years',
       // education: 'Bachelor of Computer Science',
        languages: 'Arabic (Native), English (Advanced)',
        skills: 'Skills',
        myProjects: 'My Projects',
        viewProject: 'View Project',
        viewCode: 'Source Code',
        contactMe: 'Contact Me',
        contactInfo: 'Contact Information',
        contactInfoDesc: 'You can reach me through',
        sendMessage: 'Send Me a Message',
        yourName: 'Your Name',
        yourEmail: 'Your Email',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        createAccount: 'Create New Account',
        alreadyHaveAccount: 'Already have an account?',
        loginHere: 'Login here',
        dontHaveAccount: "Don't have an account?",
        registerHere: 'Register here',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        fullName: 'Full Name',
        username: 'Username',
        email: 'Email',
        usernameOrEmail: 'Username or Email',
        adminHint: 'Admin login: admin / admin123',
        adminPanel: 'Admin Panel',
        totalUsers: 'Total Users',
        totalProjects: 'Total Projects',
        totalMessages: 'Total Messages',
        users: 'Users',
        messages: 'Messages',
        addProject: 'Add New Project',
        projectTitleAr: 'Title (Arabic)',
        projectTitleEn: 'Title (English)',
        projectDescAr: 'Description (Arabic)',
        projectDescEn: 'Description (English)',
        projectImage: 'Image URL',
        projectTech: 'Technologies (comma separated)',
        add: 'Add',
        edit: 'Edit',
        delete: 'Delete',
        save: 'Save',
        cancel: 'Cancel',
        confirmDelete: 'Are you sure you want to delete?',
        messageSent: 'Your message has been sent!',
        messageError: 'An error occurred',
        allRights: 'All Rights Reserved',
        verifyIdentity: 'Verify Identity',
        codeSent: 'Verification code sent to',
        verify: 'Verify',
        resendCode: 'Resend Code',
        otpExpired: 'Code expired',
        otpSuccess: 'Verified successfully',
        otpInvalid: 'Invalid code',
        continue: 'Continue',
        loginError: 'Invalid credentials',
        userExists: 'User already exists',
        emailOrPhone: 'Email or Phone',
        joinDate: 'Join Date',
        required: 'Required',
        back: 'Back',
        date: 'Date',
        from: 'From',
        success: 'Success',
        close: 'Close',
        view: 'View',
        actions: 'Actions',
        status: 'Status',
        read: 'Read',
        unread: 'Unread',
        noUsers: 'No users',
        noProjects: 'No projects',
        noMessages: 'No messages'
    }
};

// ===== INITIALIZATION =====
function initializeData() {
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        const defaultUsers = [
            {
                id: 1,
                username: 'admin',
                password: 'admin123',
                email: 'admin@example.com',
                fullName: 'Administrator',
                isAdmin: true,
                joinDate: new Date().toISOString()
            }
        ];
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(defaultUsers));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(DEFAULT_PROJECTS));
    }
    
    if (!localStorage.getItem(STORAGE_KEYS.MESSAGES)) {
        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify([]));
    }
}

// ===== MENU TOGGLE FOR MOBILE =====
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        // Close menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
}

// ===== LANGUAGE FUNCTIONS =====
function getCurrentLanguage() {
    return localStorage.getItem(STORAGE_KEYS.LANGUAGE) || 'ar';
}

function changeLanguage(lang) {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
    
    if (lang === 'ar') {
        document.body.classList.add('rtl');
        document.body.classList.remove('ltr');
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } else {
        document.body.classList.add('ltr');
        document.body.classList.remove('rtl');
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(lang === 'ar' ? 'العربية' : 'English')) {
            btn.classList.add('active');
        }
    });
    
    updateTranslations();
    displayProjects();
    if (window.location.pathname.includes('admin.html')) {
        displayAdminUsers();
        displayAdminProjects();
        displayAdminMessages();
        updateAdminStats();
    }
}

function translate(key) {
    const lang = getCurrentLanguage();
    return TRANSLATIONS[lang]?.[key] || key;
}

function updateTranslations() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (key && TRANSLATIONS[getCurrentLanguage()]?.[key]) {
            element.textContent = TRANSLATIONS[getCurrentLanguage()][key];
        }
    });
}

// ===== THEME FUNCTIONS =====
function getCurrentTheme() {
    return localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
}

function toggleTheme(theme) {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(theme === 'light' ? 'فاتح' : 'مظلم')) {
            btn.classList.add('active');
        }
    });
}

// ===== USER FUNCTIONS =====
function getUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS)) || [];
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
}

// ===== AUTH FUNCTIONS =====
function isLoggedIn() {
    return localStorage.getItem(STORAGE_KEYS.LOGGED_IN) === 'true';
}

function getCurrentUser() {
    return localStorage.getItem(STORAGE_KEYS.USERNAME);
}

function isAdmin() {
    return getCurrentUser() === 'admin';
}

function updateAuthUI() {
    const authContainer = document.getElementById('authButtons');
    if (!authContainer) return;
    
    if (isLoggedIn()) {
        const username = getCurrentUser();
        authContainer.innerHTML = `
            <span class="user-info">
                <i class="fas ${isAdmin() ? 'fa-crown' : 'fa-user'}"></i>
                ${username}
            </span>
            ${isAdmin() ? '<a href="admin.html" class="auth-btn login" data-translate="admin">لوحة التحكم</a>' : ''}
            <a href="#" onclick="logout(); return false;" class="auth-btn register" data-translate="logout">تسجيل خروج</a>
        `;
    } else {
        authContainer.innerHTML = `
            <a href="login.html" class="auth-btn login" data-translate="login">تسجيل دخول</a>
            <a href="register.html" class="auth-btn register" data-translate="register">إنشاء حساب</a>
        `;
    }
    updateTranslations();
}

function logout() {
    localStorage.removeItem(STORAGE_KEYS.LOGGED_IN);
    localStorage.removeItem(STORAGE_KEYS.USERNAME);
    window.location.href = 'index.html';
}

function checkAdminAccess() {
    if (!isLoggedIn() || !isAdmin()) {
        window.location.href = 'login.html';
    }
}

// ===== PROJECTS FUNCTIONS =====
function getProjects() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PROJECTS)) || [];
}

function saveProjects(projects) {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
}

function addProject(project) {
    const projects = getProjects();
    const newProject = {
        ...project,
        id: Date.now(),
        technologies: project.technologies.split(',').map(t => t.trim())
    };
    projects.push(newProject);
    saveProjects(projects);
    if (window.location.pathname.includes('admin.html')) {
        displayAdminProjects();
    }
    displayProjects();
    updateAdminStats();
}

function updateProject(id, updatedData) {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id === id);
    if (index !== -1) {
        projects[index] = updatedData;
        saveProjects(projects);
        if (window.location.pathname.includes('admin.html')) {
            displayAdminProjects();
        }
        displayProjects();
        updateAdminStats();
    }
}

function deleteProject(id) {
    const projects = getProjects();
    const filteredProjects = projects.filter(p => p.id !== id);
    saveProjects(filteredProjects);
    if (window.location.pathname.includes('admin.html')) {
        displayAdminProjects();
    }
    displayProjects();
    updateAdminStats();
}

function displayProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const projects = getProjects();
    const lang = getCurrentLanguage();
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = '<p style="text-align: center;">' + translate('noProjects') + '</p>';
        return;
    }
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-img" style="background-image: url('${project.image}');"></div>
            <div class="project-content">
                <h3>${project.title[lang]}</h3>
                <p>${project.description[lang]}</p>
                <div class="tech-tags">
                    ${project.technologies.map(t => `<span>${t}</span>`).join('')}
                </div>
                <a href="${project.link}" class="btn btn-sm" target="_blank">${translate('viewProject')}</a>
                <a href="${project.github}" class="btn btn-sm" target="_blank">${translate('viewCode')}</a>
            </div>
        </div>
    `).join('');
}

// ===== PROJECT ADMIN FUNCTIONS =====
function displayAdminProjects() {
    const container = document.getElementById('adminProjectsList');
    if (!container) return;
    
    const projects = getProjects();
    const lang = getCurrentLanguage();
    
    if (projects.length === 0) {
        container.innerHTML = '<p style="text-align: center;">' + translate('noProjects') + '</p>';
        return;
    }
    
    let html = '';
    projects.forEach(project => {
        html += `
            <div class="project-item" data-project-id="${project.id}">
                <div class="project-info">
                    <h4>${project.title[lang]}</h4>
                    <p>${project.description[lang].substring(0, 100)}...</p>
                    <div class="tech-tags">
                        ${project.technologies.map(t => `<span>${t}</span>`).join('')}
                    </div>
                </div>
                <div class="project-admin-actions">
                    <button class="btn-warning btn-sm" onclick="editProject(${project.id})">
                        <i class="fas fa-edit"></i> ${translate('edit')}
                    </button>
                    <button class="btn-danger btn-sm" onclick="deleteProjectConfirm(${project.id})">
                        <i class="fas fa-trash"></i> ${translate('delete')}
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    updateTranslations();
}

function editProject(projectId) {
    const projects = getProjects();
    const project = projects.find(p => p.id === projectId);
    
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = translate('edit') + ' ' + translate('project');
    
    modalBody.innerHTML = `
        <form id="editProjectForm">
            <div class="form-group">
                <label>${translate('projectTitleAr')}</label>
                <input type="text" id="editTitleAr" value="${project.title.ar.replace(/"/g, '&quot;')}" required>
            </div>
            <div class="form-group">
                <label>${translate('projectTitleEn')}</label>
                <input type="text" id="editTitleEn" value="${project.title.en.replace(/"/g, '&quot;')}" required>
            </div>
            <div class="form-group">
                <label>${translate('projectDescAr')}</label>
                <textarea id="editDescAr" required>${project.description.ar.replace(/"/g, '&quot;')}</textarea>
            </div>
            <div class="form-group">
                <label>${translate('projectDescEn')}</label>
                <textarea id="editDescEn" required>${project.description.en.replace(/"/g, '&quot;')}</textarea>
            </div>
            <div class="form-group">
                <label>${translate('projectImage')}</label>
                <input type="url" id="editImage" value="${project.image.replace(/"/g, '&quot;')}" required>
            </div>
            <div class="form-group">
                <label>${translate('projectTech')}</label>
                <input type="text" id="editTech" value="${project.technologies.join(', ')}" required>
            </div>
            <div class="modal-actions">
                <button type="submit" class="btn btn-success">${translate('save')}</button>
                <button type="button" class="btn btn-danger" onclick="closeModal()">${translate('cancel')}</button>
            </div>
        </form>
    `;
    
    modal.classList.add('active');
    
    document.getElementById('editProjectForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const updatedProject = {
            ...project,
            title: {
                ar: document.getElementById('editTitleAr').value,
                en: document.getElementById('editTitleEn').value
            },
            description: {
                ar: document.getElementById('editDescAr').value,
                en: document.getElementById('editDescEn').value
            },
            image: document.getElementById('editImage').value,
            technologies: document.getElementById('editTech').value.split(',').map(t => t.trim()),
            link: project.link,
            github: project.github
        };
        
        updateProject(projectId, updatedProject);
        closeModal();
    });
}

function deleteProjectConfirm(projectId) {
    if (confirm(translate('confirmDelete'))) {
        deleteProject(projectId);
    }
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
}

// ===== MESSAGES FUNCTIONS =====
function getMessages() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES)) || [];
}

function saveMessages(messages) {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
}

// ===== CONTACT FORM =====
function submitContactForm(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    const message = {
        id: Date.now(),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || '',
        subject: formData.get('subject') || '',
        message: formData.get('message'),
        date: new Date().toISOString(),
        read: false
    };
    
    const messages = getMessages();
    messages.unshift(message);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
    
    alert(translate('messageSent'));
    form.reset();
}

// ===== REGISTER FUNCTIONS =====
let currentVerificationMethod = 'email';
let pendingUser = null;

function showRegisterForm() {
    const container = document.getElementById('registerFormContainer');
    if (!container) return;
    
    const countryOptions = COUNTRY_CODES.map(c => 
        `<option value="${c.code}">${c.flag} ${c.country} (${c.code})</option>`
    ).join('');
    
    container.innerHTML = `
        <h2 class="form-title" data-translate="createAccount">إنشاء حساب جديد</h2>
        
        <div class="verification-methods">
            <button class="method-btn active" onclick="setVerificationMethod('email')">
                <i class="fas fa-envelope"></i>
                <span data-translate="email">البريد الإلكتروني</span>
            </button>
            <button class="method-btn" onclick="setVerificationMethod('phone')">
                <i class="fas fa-phone"></i>
                <span data-translate="phone">رقم الهاتف</span>
            </button>
        </div>
        
        <form id="registerStep1Form">
            <div class="form-group">
                <label data-translate="fullName">الاسم الكامل</label>
                <input type="text" id="fullName" required>
            </div>
            
            <div class="form-group">
                <label data-translate="username">اسم المستخدم</label>
                <input type="text" id="username" required>
            </div>
            
            <div id="emailField" class="form-group">
                <label data-translate="email">البريد الإلكتروني</label>
                <input type="email" id="email">
            </div>
            
            <div id="phoneField" class="form-group" style="display: none;">
                <label data-translate="phone">رقم الهاتف</label>
                <div class="phone-input-group">
                    <select id="countryCode" class="country-select">
                        ${countryOptions}
                    </select>
                    <input type="tel" id="phone" placeholder="123456789">
                </div>
            </div>
            
            <div class="form-group">
                <label data-translate="password">كلمة المرور</label>
                <input type="password" id="password" required>
            </div>
            
            <div class="form-group">
                <label data-translate="confirmPassword">تأكيد كلمة المرور</label>
                <input type="password" id="confirmPassword" required>
            </div>
            
            <button type="submit" class="btn btn-primary" data-translate="continue">متابعة</button>
        </form>
        
        <div class="form-footer">
            <p data-translate="alreadyHaveAccount">لديك حساب بالفعل؟</p>
            <a href="login.html" data-translate="loginHere">سجل دخول هنا</a>
        </div>
    `;
    
    document.getElementById('registerStep1Form').addEventListener('submit', handleRegisterStep1);
    updateTranslations();
}

function setVerificationMethod(method) {
    currentVerificationMethod = method;
    
    document.querySelectorAll('.method-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('emailField').style.display = method === 'email' ? 'block' : 'none';
    document.getElementById('phoneField').style.display = method === 'phone' ? 'block' : 'none';
}

function handleRegisterStep1(e) {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPass) {
        alert(translate('confirmPassword'));
        return;
    }
    
    let contactValue;
    if (currentVerificationMethod === 'email') {
        contactValue = document.getElementById('email').value;
        if (!contactValue) {
            alert(translate('email') + ' ' + translate('required'));
            return;
        }
    } else {
        const countryCode = document.getElementById('countryCode').value;
        const phone = document.getElementById('phone').value;
        if (!phone) {
            alert(translate('phone') + ' ' + translate('required'));
            return;
        }
        contactValue = countryCode + phone;
    }
    
    const users = getUsers();
    const exists = users.some(u => 
        u.username === username || 
        u.email === contactValue || 
        u.phone === contactValue
    );
    
    if (exists) {
        alert(translate('userExists'));
        return;
    }
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('current_otp', otp);
    localStorage.setItem('otp_time', Date.now().toString());
    
    pendingUser = {
        fullName,
        username,
        password,
        [currentVerificationMethod === 'email' ? 'email' : 'phone']: contactValue
    };
    
    showOTPForm(contactValue);
    
    console.log('=================================');
    console.log(`🔐 OTP for ${contactValue}: ${otp}`);
    console.log('=================================');
    alert(`🔐 رمز التحقق الخاص بك هو: ${otp}\n(تم إرساله إلى ${contactValue})`);
}
function showOTPForm(contactValue) {
    const container = document.getElementById('registerFormContainer');
    
    container.innerHTML = `
        <h2 class="form-title" data-translate="verifyIdentity">تأكيد الهوية</h2>
        
        <p style="text-align: center; margin-bottom: 2rem;">
            <span data-translate="codeSent">تم إرسال رمز التحقق إلى</span>
            <br>
            <strong>${contactValue}</strong>
        </p>
        
        <div class="otp-container">
            <input type="text" class="otp-input" maxlength="1" onkeyup="moveToNext(this, 1)" onkeydown="handleBackspace(this, event)" autofocus>
            <input type="text" class="otp-input" maxlength="1" onkeyup="moveToNext(this, 2)" onkeydown="handleBackspace(this, event)">
            <input type="text" class="otp-input" maxlength="1" onkeyup="moveToNext(this, 3)" onkeydown="handleBackspace(this, event)">
            <input type="text" class="otp-input" maxlength="1" onkeyup="moveToNext(this, 4)" onkeydown="handleBackspace(this, event)">
            <input type="text" class="otp-input" maxlength="1" onkeyup="moveToNext(this, 5)" onkeydown="handleBackspace(this, event)">
            <input type="text" class="otp-input" maxlength="1" onkeyup="moveToNext(this, 6)" onkeydown="handleBackspace(this, event)">
        </div>
        
        <div class="timer" id="timer">05:00</div>
        
        <button class="btn btn-primary" onclick="verifyOTP()" data-translate="verify">تحقق</button>
        
        <div style="text-align: center; margin-top: 1rem;">
            <button class="resend-btn" onclick="resendOTP('${contactValue}')" data-translate="resendCode">إعادة إرسال الرمز</button>
        </div>
        
        <div style="text-align: center; margin-top: 1rem;">
            <a href="#" onclick="showRegisterForm(); return false;" data-translate="back">رجوع</a>
        </div>
    `;
    
    startTimer(300);
    updateTranslations();
}

function moveToNext(input, nextIndex) {
    if (input.value.length === 1 && nextIndex < 6) {
        document.querySelectorAll('.otp-input')[nextIndex].focus();
    }
    
    // Auto verify when all fields are filled
    const inputs = document.querySelectorAll('.otp-input');
    const allFilled = Array.from(inputs).every(i => i.value.length === 1);
    if (allFilled) {
        verifyOTP();
    }
}

function handleBackspace(input, event) {
    if (event.key === 'Backspace' && input.value.length === 0) {
        const inputs = document.querySelectorAll('.otp-input');
        const index = Array.from(inputs).indexOf(input);
        if (index > 0) {
            inputs[index - 1].focus();
        }
    }
}

function startTimer(duration) {
    const timerDisplay = document.getElementById('timer');
    let timer = duration;
    
    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (timer === 0) {
            clearInterval(interval);
            timerDisplay.textContent = '00:00';
        }
        timer--;
    }, 1000);
}

function resendOTP(contactValue) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('current_otp', otp);
    localStorage.setItem('otp_time', Date.now().toString());
    
    console.log('=================================');
    console.log(`🔐 New OTP for ${contactValue}: ${otp}`);
    console.log('=================================');
    alert(`🔐 رمز التحقق الجديد: ${otp}`);
    
    startTimer(300);
}

function verifyOTP() {
    const inputs = document.querySelectorAll('.otp-input');
    const enteredOTP = Array.from(inputs).map(i => i.value).join('');
    const storedOTP = localStorage.getItem('current_otp');
    const otpTime = parseInt(localStorage.getItem('otp_time') || '0');
    const now = Date.now();
    
    if (now - otpTime > 5 * 60 * 1000) {
        alert(translate('otpExpired'));
        return;
    }
    
    if (enteredOTP === storedOTP && pendingUser) {
        const users = getUsers();
        const newUser = {
            id: Date.now(),
            ...pendingUser,
            isAdmin: false,
            joinDate: new Date().toISOString(),
            verified: true
        };
        
        users.push(newUser);
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
        
        localStorage.removeItem('current_otp');
        localStorage.removeItem('otp_time');
        
        alert(translate('otpSuccess'));
        window.location.href = 'login.html';
    } else {
        alert(translate('otpInvalid'));
    }
}

// ===== LOGIN FUNCTIONS =====
function showLoginForm() {
    const container = document.getElementById('loginFormContainer');
    if (!container) return;
    
    container.innerHTML = `
        <h2 class="form-title" data-translate="login">تسجيل الدخول</h2>
        
        <form id="loginForm">
            <div class="form-group">
                <label data-translate="emailOrPhone">البريد الإلكتروني أو رقم الهاتف</label>
                <input type="text" id="loginValue" placeholder="example@email.com أو +201234567890" required>
            </div>
            
            <div class="form-group">
                <label data-translate="password">كلمة المرور</label>
                <input type="password" id="loginPassword" required>
            </div>
            
            <button type="submit" class="btn btn-primary" data-translate="login">تسجيل دخول</button>
        </form>
        
        <div class="form-footer">
            <p data-translate="dontHaveAccount">ليس لديك حساب؟</p>
            <a href="register.html" data-translate="registerHere">أنشئ حساب هنا</a>
        </div>
        
        <div class="admin-hint">
            <p>👑 admin / admin123</p>
        </div>
    `;
    
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    updateTranslations();
}

function handleLogin(e) {
    e.preventDefault();
    
    const loginValue = document.getElementById('loginValue').value;
    const password = document.getElementById('loginPassword').value;
    
    // Admin check
    if (loginValue === 'admin' && password === 'admin123') {
        localStorage.setItem(STORAGE_KEYS.LOGGED_IN, 'true');
        localStorage.setItem(STORAGE_KEYS.USERNAME, 'admin');
        window.location.href = 'admin.html';
        return;
    }
    
    const users = getUsers();
    const user = users.find(u => 
        (u.username === loginValue || u.email === loginValue || u.phone === loginValue) && 
        u.password === password
    );
    
    if (user) {
        localStorage.setItem(STORAGE_KEYS.LOGGED_IN, 'true');
        localStorage.setItem(STORAGE_KEYS.USERNAME, user.username);
        window.location.href = 'index.html';
    } else {
        alert(translate('loginError'));
    }
}

// ===== ADMIN FUNCTIONS =====
function displayAdminUsers() {
    const container = document.getElementById('adminUsersList');
    if (!container) return;
    
    const users = getUsers();
    
    if (users.length === 0) {
        container.innerHTML = '<p style="text-align: center;">' + translate('noUsers') + '</p>';
        return;
    }
    
    container.innerHTML = users.map(user => {
        const joinDate = new Date(user.joinDate).toLocaleDateString(
            getCurrentLanguage() === 'ar' ? 'ar-EG' : 'en-US'
        );
        
        return `
            <div class="user-card ${user.isAdmin ? 'admin-card' : ''}">
                ${user.isAdmin ? '<div class="user-badge">ADMIN</div>' : ''}
                <div class="user-avatar">${(user.fullName || user.username)[0]}</div>
                <div class="user-info-item">
                    <i class="fas fa-user"></i>
                    <span><strong>${user.fullName || user.username}</strong></span>
                </div>
                <div class="user-info-item">
                    <i class="fas fa-envelope"></i>
                    <span>${user.email}</span>
                </div>
                ${user.phone ? `
                <div class="user-info-item">
                    <i class="fas fa-phone"></i>
                    <span>${user.phone}</span>
                </div>
                ` : ''}
                <div class="user-info-item">
                    <i class="fas fa-calendar"></i>
                    <span>${translate('joinDate')}: ${joinDate}</span>
                </div>
            </div>
        `;
    }).join('');
}

function displayAdminMessages() {
    const container = document.getElementById('adminMessagesList');
    if (!container) return;
    
    const messages = getMessages();
    
    if (messages.length === 0) {
        container.innerHTML = '<p style="text-align: center;">' + translate('noMessages') + '</p>';
        return;
    }
    
    let html = '<table class="admin-table">';
    html += '<tr><th>' + translate('date') + '</th><th>' + translate('from') + '</th><th>' + translate('email') + '</th><th>' + translate('subject') + '</th><th>' + translate('status') + '</th></tr>';
    
    messages.forEach(msg => {
        const date = new Date(msg.date).toLocaleDateString(
            getCurrentLanguage() === 'ar' ? 'ar-EG' : 'en-US'
        );
        html += `
            <tr>
                <td>${date}</td>
                <td>${msg.name}</td>
                <td>${msg.email}</td>
                <td>${msg.subject || '-'}</td>
                <td>${msg.read ? '✓ ' + translate('read') : '● ' + translate('unread')}</td>
            </tr>
        `;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function updateAdminStats() {
    const users = getUsers().length;
    const projects = getProjects().length;
    const messages = getMessages().length;
    
    document.getElementById('totalUsers') && (document.getElementById('totalUsers').textContent = users);
    document.getElementById('totalProjects') && (document.getElementById('totalProjects').textContent = projects);
    document.getElementById('totalMessages') && (document.getElementById('totalMessages').textContent = messages);
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    event.target.classList.add('active');
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeData();
    setupMobileMenu();
    
    const savedLang = getCurrentLanguage();
    changeLanguage(savedLang);
    
    const savedTheme = getCurrentTheme();
    toggleTheme(savedTheme);
    
    updateAuthUI();
    displayProjects();
    
    if (window.location.pathname.includes('admin.html')) {
        checkAdminAccess();
        displayAdminUsers();
        displayAdminProjects();
        displayAdminMessages();
        updateAdminStats();
        
        const addProjectForm = document.getElementById('addProjectForm');
        if (addProjectForm) {
            addProjectForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const project = {
                    title: {
                        ar: document.getElementById('projectTitleAr').value,
                        en: document.getElementById('projectTitleEn').value
                    },
                    description: {
                        ar: document.getElementById('projectDescAr').value,
                        en: document.getElementById('projectDescEn').value
                    },
                    image: document.getElementById('projectImage').value,
                    technologies: document.getElementById('projectTech').value,
                    link: '#',
                    github: '#'
                };
                
                addProject(project);
                alert(translate('add') + ' ' + translate('success'));
                e.target.reset();
                updateAdminStats();
            });
        }
    }
    
    if (window.location.pathname.includes('register.html')) {
        showRegisterForm();
    }
    
    if (window.location.pathname.includes('login.html')) {
        showLoginForm();
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContactForm);
    }
});


