// نظام إدارة عقود الاعتماد الأكاديمي - الإصدار النهائي
// تاريخ: 2025-12-09

// إحصائيات الجامعات (39 جامعة)
const universities = [
    { name: 'جامعة الملك عبد العزيز', count: 83, rank: 1 },
    { name: 'جامعة طيبة', count: 39, rank: 2 },
    { name: 'جامعة الإمام عبد الرحمن بن فيصل', count: 36, rank: 3 },
    { name: 'جامعة الإمام محمد بن سعود الإسلامية', count: 34, rank: 4 },
    { name: 'جامعة الملك فيصل', count: 29, rank: 5 },
    { name: 'جامعة جدة', count: 20, rank: 6 },
    { name: 'جامعة الأميرة نورة بنت عبد الرحمن', count: 19, rank: 7 },
    { name: 'الجامعة الإسلامية', count: 18, rank: 8 },
    { name: 'جامعة أم القرى', count: 17, rank: 9 },
    { name: 'جامعة الملك خالد', count: 16, rank: 10 },
    { name: 'جامعة الجوف', count: 15, rank: 11 },
    { name: 'جامعة حائل', count: 14, rank: 12 },
    { name: 'جامعة القصيم', count: 13, rank: 13 },
    { name: 'جامعة تبوك', count: 12, rank: 14 },
    { name: 'جامعة الحدود الشمالية', count: 11, rank: 15 },
    { name: 'جامعة نجران', count: 10, rank: 16 },
    { name: 'جامعة الباحة', count: 9, rank: 17 },
    { name: 'جامعة جازان', count: 8, rank: 18 },
    { name: 'جامعة شقراء', count: 7, rank: 19 },
    { name: 'جامعة المجمعة', count: 6, rank: 20 },
    { name: 'جامعة الملك سعود', count: 6, rank: 21 },
    { name: 'جامعة بيشة', count: 5, rank: 22 },
    { name: 'جامعة حفر الباطن', count: 4, rank: 23 },
    { name: 'الجامعة السعودية الإلكترونية', count: 3, rank: 24 },
    { name: 'جامعة الأمير سطام بن عبد العزيز', count: 3, rank: 25 },
    { name: 'جامعة الطائف', count: 3, rank: 26 },
    { name: 'جامعة المؤسس', count: 2, rank: 27 },
    { name: 'جامعة الملك عبدالله للعلوم والتقنية', count: 2, rank: 28 },
    { name: 'جامعة الملك فهد للبترول والمعادن', count: 2, rank: 29 },
    { name: 'جامعة جدة للعلوم والتكنولوجيا', count: 1, rank: 30 },
    { name: 'جامعة الملك سعود بن عبد العزيز للعلوم الصحية', count: 1, rank: 31 },
    { name: 'جامعة الملك فيصل الإلكترونية', count: 1, rank: 32 },
    { name: 'جامعة اليمامة', count: 1, rank: 33 },
    { name: 'جامعة دار العلوم', count: 1, rank: 34 },
    { name: 'جامعة رياض العلم', count: 1, rank: 35 },
    { name: 'جامعة عفت', count: 1, rank: 36 },
    { name: 'جامعة فهد بن سلطان', count: 1, rank: 37 },
    { name: 'كليات الريادة', count: 1, rank: 38 },
    { name: 'كليات عنيزة', count: 1, rank: 39 }
];

// إحصائيات الإدارات (5 إدارات)
const departments = [
    { name: 'إدارة برامج العلوم الإنسانية والتربوية', count: 156, percentage: 35.1, rank: 1 },
    { name: 'إدارة برامج الهندسة وعلوم الحاسب', count: 125, percentage: 28.1, rank: 2 },
    { name: 'إدارة البرامج الطبية والصحية', count: 89, percentage: 20.0, rank: 3 },
    { name: 'إدارة برامج إدارة الأعمال', count: 51, percentage: 11.5, rank: 4 },
    { name: 'إدارة برامج العلوم والرياضيات', count: 24, percentage: 5.4, rank: 5 }
];

// تهيئة النظام
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    renderUniversitiesStats();
    renderDepartmentsStats();
    renderAllContracts();
    setupFilters();
});

// تهيئة التبويبات
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            
            // إزالة الفئة النشطة من جميع الأزرار والمحتويات
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // إضافة الفئة النشطة للزر والمحتوى المحدد
            this.classList.add('active');
            document.getElementById(tabName + 'Tab').classList.add('active');
        });
    });
}

// عرض إحصائيات الجامعات
function renderUniversitiesStats() {
    const grid = document.getElementById('universitiesGrid');
    grid.innerHTML = universities.slice(0, 10).map(uni => `
        <div class="university-card">
            <div class="university-rank">#${uni.rank}</div>
            <div class="university-info">
                <h4>${uni.name}</h4>
                <p class="university-count">${uni.count} عقد</p>
            </div>
        </div>
    `).join('');
}

// عرض إحصائيات الإدارات
function renderDepartmentsStats() {
    const grid = document.getElementById('departmentsGrid');
    grid.innerHTML = departments.map(dept => `
        <div class="department-card">
            <div class="department-rank">#${dept.rank}</div>
            <div class="department-info">
                <h4>${dept.name}</h4>
                <div class="department-stats">
                    <span class="dept-count">${dept.count} عقد</span>
                    <span class="dept-percentage">${dept.percentage}%</span>
                </div>
            </div>
        </div>
    `).join('');
}

// عرض جميع العقود
function renderAllContracts() {
    renderContracts('scheduled', getScheduledContracts());
    renderContracts('notScheduled', getNotScheduledContracts());
    renderContracts('undefined', getUndefinedContracts());
}

// الحصول على العقود المجدولة
function getScheduledContracts() {
    return contractsData.filter(c => c.visitComplianceStatus === 'تم جدولة الزيارة' || c.visitComplianceStatus === 'تم جدولة الزيارة - متأخر');
}

// الحصول على العقود غير المجدولة
function getNotScheduledContracts() {
    return contractsData.filter(c => c.visitComplianceStatus === 'لم تتم الجدولة - متأخر');
}

// الحصول على العقود غير المحددة
function getUndefinedContracts() {
    return contractsData.filter(c => !c.visitComplianceStatus || c.visitComplianceStatus === '');
}

// عرض العقود
function renderContracts(type, contracts) {
    const containerId = type + 'Contracts';
    const resultsId = type + 'Results';
    
    const container = document.getElementById(containerId);
    const resultsSpan = document.getElementById(resultsId);
    
    resultsSpan.textContent = contracts.length;
    
    container.innerHTML = contracts.map(contract => `
        <div class="contract-card">
            <div class="contract-header">
                <span class="contract-id">عقد رقم: ${contract.id}</span>
                <span class="contract-status ${getStatusClass(contract.status)}">${contract.status}</span>
            </div>
            
            <div class="contract-body">
                <div class="contract-field">
                    <span class="field-label">🏛️ الجامعة:</span>
                    <span class="field-value">${contract.university}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">📋 الإدارة:</span>
                    <span class="field-value">${contract.department}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">📚 البرنامج:</span>
                    <span class="field-value">${contract.program}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">🎓 الدرجة:</span>
                    <span class="field-value">${contract.degree}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">📊 نسبة الإنجاز:</span>
                    <span class="field-value">${contract.progress}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">📅 تاريخ بداية العقد:</span>
                    <span class="field-value">${contract.contractStart}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">📅 تاريخ نهاية العقد:</span>
                    <span class="field-value">${contract.contractEnd}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">📄 استلام الوثائق:</span>
                    <span class="field-value">${contract.docsReceived || 'غير محدد'}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">✅ جدولة الزيارة:</span>
                    <span class="field-value">${contract.visitScheduled || 'غير محدد'}</span>
                </div>
                
                <div class="contract-field highlight-field">
                    <span class="field-label">📆 التاريخ الفعلي المجدول لزيارة المراجعين:</span>
                    <span class="field-value">${contract.reviewersVisitScheduled || '<span class="not-scheduled-text">لم تتم الجدولة</span>'}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">📋 حالة الوثائق:</span>
                    <span class="field-value">${contract.docsComplianceStatus || 'غير محدد'}</span>
                </div>
                
                <div class="contract-field">
                    <span class="field-label">⚡ حالة الجدولة:</span>
                    <span class="field-value">${contract.visitComplianceStatus || 'غير محددة'}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// الحصول على فئة الحالة
function getStatusClass(status) {
    const statusMap = {
        'تحت الإجراء': 'status-progress',
        'مكتمل': 'status-complete',
        'معلق': 'status-pending',
        'ملغي': 'status-cancelled'
    };
    return statusMap[status] || 'status-default';
}

// إعداد الفلاتر
function setupFilters() {
    // ملء قوائم الفلاتر
    populateFilters();
    
    // إعداد أحداث البحث والفلترة لكل تبويب
    setupTabFilters('scheduled');
    setupTabFilters('notScheduled');
    setupTabFilters('undefined');
}

// ملء قوائم الفلاتر
function populateFilters() {
    const tabs = ['Scheduled', 'NotScheduled', 'Undefined'];
    
    tabs.forEach(tab => {
        // فلتر الجامعات
        const universitySelect = document.getElementById('universityFilter' + tab);
        universities.forEach(uni => {
            const option = document.createElement('option');
            option.value = uni.name;
            option.textContent = uni.name;
            universitySelect.appendChild(option);
        });
        
        // فلتر الإدارات
        const departmentSelect = document.getElementById('departmentFilter' + tab);
        departments.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.name;
            option.textContent = dept.name;
            departmentSelect.appendChild(option);
        });
        
        // فلتر نسب الإنجاز
        const progressSelect = document.getElementById('progressFilter' + tab);
        const progressOptions = [
            '0% - التخطيط',
            '20% - التقديم',
            '40% - زيارة التحقق',
            '60% - إعداد تقرير التحقق',
            '80% - اتخاذ القرار',
            '100% - إصدار القرار'
        ];
        progressOptions.forEach(prog => {
            const option = document.createElement('option');
            option.value = prog;
            option.textContent = prog;
            progressSelect.appendChild(option);
        });
    });
}

// إعداد فلاتر كل تبويب
function setupTabFilters(type) {
    const tabType = type.charAt(0).toUpperCase() + type.slice(1);
    
    const searchInput = document.getElementById('search' + tabType);
    const universityFilter = document.getElementById('universityFilter' + tabType);
    const departmentFilter = document.getElementById('departmentFilter' + tabType);
    const progressFilter = document.getElementById('progressFilter' + tabType);
    
    [searchInput, universityFilter, departmentFilter, progressFilter].forEach(element => {
        element.addEventListener('input', () => applyFilters(type));
        element.addEventListener('change', () => applyFilters(type));
    });
}

// تطبيق الفلاتر
function applyFilters(type) {
    const tabType = type.charAt(0).toUpperCase() + type.slice(1);
    
    const searchValue = document.getElementById('search' + tabType).value.toLowerCase();
    const universityValue = document.getElementById('universityFilter' + tabType).value;
    const departmentValue = document.getElementById('departmentFilter' + tabType).value;
    const progressValue = document.getElementById('progressFilter' + tabType).value;
    
    let contracts;
    if (type === 'scheduled') {
        contracts = getScheduledContracts();
    } else if (type === 'notScheduled') {
        contracts = getNotScheduledContracts();
    } else {
        contracts = getUndefinedContracts();
    }
    
    // تطبيق الفلاتر
    contracts = contracts.filter(contract => {
        const matchSearch = !searchValue || contract.program.toLowerCase().includes(searchValue);
        const matchUniversity = !universityValue || contract.university === universityValue;
        const matchDepartment = !departmentValue || contract.department === departmentValue;
        const matchProgress = !progressValue || contract.progress === progressValue;
        
        return matchSearch && matchUniversity && matchDepartment && matchProgress;
    });
    
    renderContracts(type, contracts);
}