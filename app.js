const STORAGE_KEY = 'madkarti_ai_state_v1';

const defaultState = {
  profile: {
    studentName: 'الطالب',
    schoolYear: '2025-2026',
    systemName: 'ثانوية عامة',
    streamName: 'علمي علوم',
    selectedSubjects: ['اللغة العربية', 'الرياضيات', 'الفيزياء']
  },
  curriculum: {
    subjects: [
      {
        id: crypto.randomUUID(),
        name: 'اللغة العربية',
        description: 'مادة أساسية في القراءة والنصوص والتعبير',
        chapters: [
          {
            id: crypto.randomUUID(),
            name: 'النصوص الأدبية',
            lessons: [
              {
                id: crypto.randomUUID(),
                title: 'البلاغة',
                status: 'جارٍ',
                startDate: '2025-10-01',
                targetDate: '2025-10-10',
                expectedMinutes: 55,
                proficiency: 35,
                notes: 'مطلوب مراجعة أسئلة البلاغة في النصوص.',
                sources: ['https://example.com/ar/grammar'],
                reviewCount: 1,
                summary: 'يتحدث هذا الدرس عن أساليب التراكيب اللغوية والمعاني البلاغية في النصوص.',
                coreIdea: 'فهم العلاقة بين الكلمات والمعنى المقصود في النص.',
                mainTopics: 'الأسلوب - التشبيه - المجاز - التوكيد.',
                understanding: 'يفهم الطالب كيف يقرأ النص بعمق ويح��ل معانيه.',
                previousLink: 'يرتبط بالدرس السابق عن المبنى والمعنى في النصوص.',
                prerequisites: 'إتقان قواعد القراءة السريعة ومعاني المفردات الأساسية.',
                sourceStatus: 'بيانات تجريبية قابلة للاستبدال بمناهج رسمية.'
              }
            ]
          }
        ]
      },
      {
        id: crypto.randomUUID(),
        name: 'الرياضيات',
        description: 'مادة أساسية في التحليل والهندسة والتمارين.',
        chapters: [
          {
            id: crypto.randomUUID(),
            name: 'المعادلات',
            lessons: [
              {
                id: crypto.randomUUID(),
                title: 'المعادلات من الدرجة الأولى',
                status: 'غير بدأت',
                startDate: '',
                targetDate: '2025-10-15',
                expectedMinutes: 60,
                proficiency: 10,
                notes: '',
                sources: [],
                reviewCount: 0,
                summary: 'يتحدث هذا الجزء عن إيجاد قيمة المجهول في معادلات بسيطة.',
                coreIdea: 'توازن الطرفين في المعادلة.',
                mainTopics: 'الإشارة - النقل - التبسيط.',
                understanding: 'يستطيع الطالب حل معادلات حسابية بأسلوب منطقي.',
                previousLink: 'يرتبط بالعمليات الحسابية الأساسية.',
                prerequisites: 'إتقان جمع وطرح وضرب وقسمة الأعداد.',
                sourceStatus: 'المعلومة غير متاحة في البيانات الحالية.'
              }
            ]
          }
        ]
      }
    ]
  },
  schedule: {
    wakeTime: '06:30',
    sleepTime: '23:00',
    dailyMinutes: 240,
    targetHours: 4,
    generatedPlan: [
      { id: crypto.randomUUID(), title: 'مراجعة اللغة العربية', subject: 'اللغة العربية', type: 'مراجعة', start: '2025-10-21T08:00', duration: 60 },
      { id: crypto.randomUUID(), title: 'حل مسائل الرياضيات', subject: 'الرياضيات', type: 'حل أسئلة', start: '2025-10-21T10:00', duration: 75 },
      { id: crypto.randomUUID(), title: 'مذاكرة الفيزياء', subject: 'الفيزياء', type: 'مذاكرة جديدة', start: '2025-10-21T13:00', duration: 70 }
    ]
  },
  tasks: [
    { id: crypto.randomUUID(), title: 'إكمال درس البلاغة', subject: 'اللغة العربية', dueDate: '2025-10-22', priority: 'عالية', description: 'حل أسئلة التطبيق في الدرس', completed: false },
    { id: crypto.randomUUID(), title: 'تدريب على المعادلات', subject: 'الرياضيات', dueDate: '2025-10-23', priority: 'متوسطة', description: '5 مسائل من درس المعادلات', completed: true }
  ],
  goals: [
    { id: crypto.randomUUID(), title: 'إنهاء باب البلاغة', progress: 65, target: 100 },
    { id: crypto.randomUUID(), title: 'حل 20 سؤالًا رياضيًا', progress: 50, target: 100 }
  ],
  exams: [
    {
      id: crypto.randomUUID(),
      title: 'اختبار عربي شهري',
      subject: 'اللغة العربية',
      date: '2025-10-28T09:00',
      duration: 90,
      totalScore: 100,
      achievedScore: 74,
      notes: 'تنقصه مراجعة التعبير وقواعد النحو.'
    }
  ],
  events: [
    { id: crypto.randomUUID(), title: 'مراجعة أسبوعية', date: '2025-10-26', type: 'event', description: 'مراجعة ملخصات المادة' },
    { id: crypto.randomUUID(), title: 'تجربة فيزيائية', date: '2025-10-27', type: 'note', description: 'إعداد ملخص التنفيذ' }
  ],
  notes: [
    { id: crypto.randomUUID(), title: 'ملاحظات اليوم', date: '2025-10-21', body: 'بدأت جيدًا، ركزت على البلاغة والرياضيات.' }
  ],
  focus: {
    mode: 'focus',
    secondsLeft: 1500,
    timerRunning: false,
    history: [
      { id: crypto.randomUUID(), subject: 'اللغة العربية', lesson: 'البلاغة', duration: 25, date: '2025-10-21' },
      { id: crypto.randomUUID(), subject: 'الرياضيات', lesson: 'المعادلات', duration: 35, date: '2025-10-20' }
    ]
  },
  reviews: [
    { id: crypto.randomUUID(), title: 'مراجعة درس البلاغة', subject: 'اللغة العربية', dueDate: '2025-10-24', difficulty: 'متوسط' },
    { id: crypto.randomUUID(), title: 'مراجعة المعادلات', subject: 'الرياضيات', dueDate: '2025-10-25', difficulty: 'صعب' }
  ],
  sources: [
    { id: crypto.randomUUID(), name: 'ملخص العربي', url: 'https://example.com', subject: 'اللغة العربية', type: 'video' },
    { id: crypto.randomUUID(), name: 'ملف رياضيات', url: 'https://example.com/pdf', subject: 'الرياضيات', type: 'pdf' }
  ],
  settings: {
    theme: 'light',
    aiProvider: 'local',
    aiEndpoint: '',
    notificationsEnabled: false
  },
  assistant: {
    lastSuggestion: 'ابدأ بمراجعة المادة الأكثر تراكمًا ثم خصص 20 دقيقة لمهمة واحدة.'
  }
};

let state = loadState();
let timerInterval = null;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return deepClone(defaultState);
  }

  try {
    const parsed = JSON.parse(saved);
    return { ...deepClone(defaultState), ...parsed, profile: { ...defaultState.profile, ...(parsed.profile || {}) }, curriculum: { ...defaultState.curriculum, ...(parsed.curriculum || {}) }, schedule: { ...defaultState.schedule, ...(parsed.schedule || {}) }, settings: { ...defaultState.settings, ...(parsed.settings || {}) }, focus: { ...defaultState.focus, ...(parsed.focus || {}) } };
  } catch (err) {
    return deepClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  const badge = document.getElementById('lastSyncBadge');
  if (badge) {
    badge.textContent = 'تم الحفظ محليًا';
  }
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function showSection(targetId) {
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.section === targetId);
  });

  document.querySelectorAll('.page-panel').forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });
}

function formatDate(dateValue) {
  if (!dateValue) return 'غير محدد';
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;
  return date.toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatDateTime(dateValue) {
  if (!dateValue) return 'غير محدد';
  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return dateValue;
  return date.toLocaleString('ar-EG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function renderProfile() {
  const { profile } = state;
  document.getElementById('studentName').value = profile.studentName || '';
  document.getElementById('schoolYear').value = profile.schoolYear || '2025-2026';
  document.getElementById('systemName').value = profile.systemName || '';
  document.getElementById('streamName').value = profile.streamName || '';

  const list = document.getElementById('selectedSubjectsList');
  list.innerHTML = profile.selectedSubjects.map((subject) => `
    <li class="chip">
      <span>${subject}</span>
      <button type="button" data-remove-subject="${subject}" aria-label="حذف المادة">×</button>
    </li>
  `).join('') || '<li class="empty-state">لا توجد مواد محددة بعد.</li>';
}

function renderCurriculum() {
  const list = document.getElementById('curriculumList');
  if (!state.curriculum.subjects.length) {
    list.innerHTML = '<div class="empty-state">لا توجد مواد مضافة بعد.</div>';
    return;
  }

  list.innerHTML = state.curriculum.subjects.map((subject) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${subject.name}</strong>
        <span class="tag">${subject.chapters.length} باب</span>
      </div>
      <div>${subject.description || 'لا يوجد وصف.'}</div>
      <div class="list-actions">
        <button type="button" data-add-chapter="${subject.id}">إضافة باب</button>
        <button type="button" data-delete-subject="${subject.id}">حذف المادة</button>
      </div>
      <div class="stack-list">
        ${subject.chapters.map((chapter) => `
          <div class="card">
            <strong>${chapter.name}</strong>
            <div class="stack-list">
              ${chapter.lessons.map((lesson) => `
                <div class="list-item">
                  <div class="list-header">
                    <strong>${lesson.title}</strong>
                    <span class="tag">${lesson.status}</span>
                  </div>
                  <div><strong>هذا الدرس يتحدث عن:</strong> ${lesson.summary || 'المعلومة غير متاحة.'}</div>
                  <div><strong>الفكرة الأساسية:</strong> ${lesson.coreIdea || 'المعلومة غير متاحة.'}</div>
                  <div><strong>الموضوعات الرئيسية:</strong> ${lesson.mainTopics || 'المعلومة غير متاحة.'}</div>
                  <div><strong>ما الذي ينبغي أن يفهمه الطالب:</strong> ${lesson.understanding || 'المعلومة غير متاحة.'}</div>
                  <div><strong>العلاقة بالأجزاء السابقة أو اللاحقة:</strong> ${lesson.previousLink || 'المعلومة غير متاحة.'}</div>
                  <div><strong>المتطلبات السابقة:</strong> ${lesson.prerequisites || 'المعلومة غير متاحة.'}</div>
                  <div class="list-actions">
                    <button type="button" data-update-lesson-status="${lesson.id}" data-status="مكتمل">تمت المذاكرة</button>
                    <button type="button" data-update-lesson-status="${lesson.id}" data-status="يحتاج مراجعة">يحتاج مراجعة</button>
                    <button type="button" data-delete-lesson="${lesson.id}">حذف الدرس</button>
                  </div>
                </div>
              `).join('') || '<div class="empty-state">لا توجد دروس في هذا الباب.</div>'}
            </div>
            <div class="list-actions">
              <button type="button" data-add-lesson="${chapter.id}">إضافة درس</button>
            </div>
          </div>
        `).join('') || '<div class="empty-state">لا يوجد أبواب في هذه المادة.</div>'}
      </div>
    </div>
  `).join('');
}

function renderSchedule() {
  const settings = state.schedule;
  const generated = settings.generatedPlan || [];
  document.getElementById('wakeTime').value = settings.wakeTime || '06:30';
  document.getElementById('sleepTime').value = settings.sleepTime || '23:00';
  document.getElementById('dailyMinutes').value = settings.dailyMinutes || 240;
  document.getElementById('targetHours').value = settings.targetHours || 4;

  const list = document.getElementById('scheduleList');
  if (!generated.length) {
    list.innerHTML = '<div class="empty-state">لا توجد جلسات في الجدول بعد.</div>';
    return;
  }

  list.innerHTML = generated.map((slot, index) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${slot.title}</strong>
        <span class="tag">${slot.type}</span>
      </div>
      <div>المادة: ${slot.subject}</div>
      <div>الوقت: ${formatDateTime(slot.start)} • ${(slot.duration || 60)} دقيقة</div>
      <div class="list-actions">
        <button type="button" data-move-slot="${slot.id}" data-direction="up" ${index === 0 ? 'disabled' : ''}>↑</button>
        <button type="button" data-move-slot="${slot.id}" data-direction="down" ${index === generated.length - 1 ? 'disabled' : ''}>↓</button>
        <button type="button" data-delete-slot="${slot.id}">حذف</button>
      </div>
    </div>
  `).join('');
}

function renderCalendar() {
  document.getElementById('calendarNotes').innerHTML = state.notes.map((note) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${note.title}</strong>
        <span class="tag">${note.date}</span>
      </div>
      <div>${note.body}</div>
    </div>
  `).join('') || '<div class="empty-state">لا توجد ملاحظات يومية حتى الآن.</div>';
}

function renderTasks() {
  const list = document.getElementById('taskList');
  if (!state.tasks.length) {
    list.innerHTML = '<div class="empty-state">لا توجد مهام حتى الآن.</div>';
    return;
  }

  list.innerHTML = state.tasks.map((task) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${task.title}</strong>
        <span class="tag">${task.priority}</span>
      </div>
      <div>المادة: ${task.subject || 'غير محدد'}</div>
      <div>تاريخ الاستحقاق: ${formatDate(task.dueDate)}</div>
      <div>${task.description || 'لا يوجد وصف.'}</div>
      <div class="list-actions">
        <button type="button" data-toggle-task="${task.id}">${task.completed ? 'إعادة فتح' : 'إكمال'}</button>
        <button type="button" data-delete-task="${task.id}">حذف</button>
      </div>
    </div>
  `).join('');
}

function renderExams() {
  const countdown = document.getElementById('examsCountdown');
  const upcoming = [...state.exams].sort((a, b) => new Date(a.date) - new Date(b.date));
  if (upcoming.length) {
    const next = upcoming[0];
    const diffMs = new Date(next.date) - new Date();
    const days = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
    countdown.innerHTML = `
      <div class="metric-card">
        <div class="metric-label">الامتحان القادم</div>
        <div class="metric-value">${next.title}</div>
        <div>${formatDateTime(next.date)}</div>
        <div class="tag">متبقي ${days} يوم</div>
      </div>
    `;
  } else {
    countdown.innerHTML = '<div class="empty-state">لا توجد امتحانات مسجلة.</div>';
  }

  const list = document.getElementById('examList');
  list.innerHTML = state.exams.map((exam) => {
    const percentage = exam.totalScore ? Math.round((Number(exam.achievedScore || 0) / Number(exam.totalScore || 1)) * 100) : 0;
    return `
      <div class="list-item">
        <div class="list-header">
          <strong>${exam.title}</strong>
          <span class="tag">${exam.subject}</span>
        </div>
        <div>تاريخ: ${formatDateTime(exam.date)}</div>
        <div>المدة: ${exam.duration} دقيقة • الدرجة: ${exam.achievedScore || 0}/${exam.totalScore || 0}</div>
        <div class="progress-bar"><span style="width:${percentage}%"></span></div>
        <div>${exam.notes || 'لا توجد ملاحظات.'}</div>
        <div class="list-actions">
          <button type="button" data-delete-exam="${exam.id}">حذف</button>
        </div>
      </div>
    `;
  }).join('') || '<div class="empty-state">لا توجد امتحانات.</div>';
}

function renderFocus() {
  const history = document.getElementById('focusHistory');
  const display = document.getElementById('timerDisplay');
  const { focus } = state;
  const minutes = Math.floor(focus.secondsLeft / 60);
  const seconds = focus.secondsLeft % 60;
  display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  history.innerHTML = (focus.history || []).map((item) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${item.subject}</strong>
        <span class="tag">${item.duration} دقيقة</span>
      </div>
      <div>الدرس: ${item.lesson}</div>
      <div>التاريخ: ${formatDate(item.date)}</div>
    </div>
  `).join('') || '<div class="empty-state">لا توجد جلسات تركيز حتى الآن.</div>';
}

function renderReview() {
  const queue = document.getElementById('reviewQueue');
  queue.innerHTML = (state.reviews || []).map((item) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${item.title}</strong>
        <span class="tag">${item.difficulty}</span>
      </div>
      <div>المادة: ${item.subject}</div>
      <div>موعد المراجعة: ${formatDate(item.dueDate)}</div>
      <div class="list-actions">
        <button type="button" data-review-done="${item.id}">تمت المراجعة</button>
      </div>
    </div>
  `).join('') || '<div class="empty-state">لا توجد مراجعات مجدولة.</div>';
}

function renderStats() {
  const statsCards = document.getElementById('statsCards');
  const completedTasks = state.tasks.filter((task) => task.completed).length;
  const totalTasks = state.tasks.length || 1;
  const studyMinutes = (state.focus.history || []).reduce((sum, item) => sum + (item.duration || 0), 0);
  const avgExam = state.exams.length ? state.exams.map((exam) => ((exam.achievedScore || 0) / (exam.totalScore || 1)) * 100).reduce((a, b) => a + b, 0) / state.exams.length : 0;

  statsCards.innerHTML = `
    <div class="metric-card">
      <div class="metric-label">الوقت الفعلي</div>
      <div class="metric-value">${studyMinutes} د</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">نسبة الإنجاز</div>
      <div class="metric-value">${Math.round((completedTasks / totalTasks) * 100)}%</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">معدل الامتحانات</div>
      <div class="metric-value">${Math.round(avgExam)}%</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">المهام المتأخرة</div>
      <div class="metric-value">${state.tasks.filter((task) => !task.completed).length}</div>
    </div>
  `;

  const subjectProgress = document.getElementById('subjectProgress');
  subjectProgress.innerHTML = state.curriculum.subjects.map((subject) => {
    const chapters = subject.chapters.reduce((sum, chapter) => sum + chapter.lessons.length, 0) || 1;
    const statuses = subject.chapters.flatMap((chapter) => chapter.lessons).filter((lesson) => lesson.status === 'مكتمل' || lesson.status === 'تمت المذاكرة').length;
    const percent = Math.min(100, Math.round((statuses / chapters) * 100));
    return `
      <div class="list-item">
        <div class="list-header">
          <strong>${subject.name}</strong>
          <span>${percent}%</span>
        </div>
        <div class="progress-bar"><span style="width:${percent}%"></span></div>
      </div>
    `;
  }).join('') || '<div class="empty-state">لا توجد مواد بعد.</div>';
}

function renderLibrary() {
  const list = document.getElementById('sourceList');
  list.innerHTML = state.sources.map((source) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${source.name}</strong>
        <span class="tag">${source.type}</span>
      </div>
      <div>المادة: ${source.subject}</div>
      <div><a href="${source.url}" target="_blank" rel="noreferrer">فتح المصدر</a></div>
      <div class="list-actions">
        <button type="button" data-delete-source="${source.id}">حذف</button>
      </div>
    </div>
  `).join('') || '<div class="empty-state">لا توجد مصادر محفوظة.</div>';
}

function renderAssistant() {
  const output = document.getElementById('assistantOutput');
  output.innerHTML = `
    <h3>اقتراح المساعد</h3>
    <p>${state.assistant.lastSuggestion || 'لا يوجد اقتراح بعد.'}</p>
    <div class="list-item">
      <strong>ملاحظات:</strong>
      <div>• المواد ذات الأولوية: ${state.profile.selectedSubjects.join('، ') || 'لا توجد'}</div>
      <div>• المهام المتبقية: ${state.tasks.filter((task) => !task.completed).length}</div>
      <div>• الامتحان القادم: ${state.exams[0] ? state.exams[0].title : 'لا يوجد'}</div>
    </div>
  `;
}

function renderDashboard() {
  const overview = document.getElementById('dashboardOverview');
  const totalTasks = state.tasks.length;
  const completed = state.tasks.filter((task) => task.completed).length;
  const pending = state.tasks.filter((task) => !task.completed).length;
  const studyDaily = (state.focus.history || []).reduce((sum, item) => sum + (item.duration || 0), 0);
  const nextExam = state.exams[0];

  overview.innerHTML = `
    <div class="metric-card">
      <div class="metric-label">التاريخ</div>
      <div class="metric-value">${new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">الساعة</div>
      <div class="metric-value" id="liveClock">${new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' })}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">المهام المكتملة</div>
      <div class="metric-value">${completed}/${totalTasks}</div>
    </div>
    <div class="metric-card">
      <div class="metric-label">وقت المذاكرة اليوم</div>
      <div class="metric-value">${studyDaily} دقيقة</div>
    </div>
  `;

  const todayPlan = document.getElementById('todayPlan');
  const plan = state.schedule.generatedPlan.filter((item) => {
    const start = new Date(item.start);
    return start.toDateString() === new Date().toDateString();
  });
  todayPlan.innerHTML = plan.length ? plan.map((item) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${item.title}</strong>
        <span class="tag">${item.type}</span>
      </div>
      <div>${item.subject}</div>
      <div>${formatDateTime(item.start)} • ${item.duration} دقيقة</div>
    </div>
  `).join('') : '<div class="empty-state">لا توجد جلسات اليوم حتى الآن.</div>';

  document.getElementById('goalsList').innerHTML = (state.goals || []).map((goal) => `
    <div class="list-item">
      <div class="list-header">
        <strong>${goal.title}</strong>
        <span>${goal.progress}%</span>
      </div>
      <div class="progress-bar"><span style="width:${goal.progress}%"></span></div>
    </div>
  `).join('') || '<div class="empty-state">لا توجد أهداف مسجلة.</div>';

  document.getElementById('upcomingTasks').innerHTML = state.tasks.filter((task) => !task.completed).slice(0, 5).map((task) => `
    <div class="list-item">
      <div>${task.title}</div>
      <div>${task.subject} • ${formatDate(task.dueDate)}</div>
    </div>
  `).join('') || '<div class="empty-state">لا توجد مهام متبقية.</div>';

  const dailySummary = document.getElementById('dailySummary');
  const percent = totalTasks ? Math.round((completed / totalTasks) * 100) : 0;
  dailySummary.innerHTML = `
    <div>إجمالي المهام: ${totalTasks}</div>
    <div>المكتملة: ${completed}</div>
    <div>المتبقية: ${pending}</div>
    <div><strong>نسبة الإنجاز اليومية:</strong> ${percent}%</div>
    <div class="progress-bar"><span style="width:${percent}%"></span></div>
    <div class="tag">اقتراح: ${nextExam ? 'راجع مادة ' + nextExam.subject + ' قبل الامتحان.' : 'حدد هدفًا جديدًا.'}</div>
  `;
}

function renderSettings() {
  document.getElementById('aiProvider').value = state.settings.aiProvider || 'local';
  document.getElementById('aiEndpoint').value = state.settings.aiEndpoint || '';
  document.getElementById('notificationsEnabled').checked = !!state.settings.notificationsEnabled;
}

function renderAll() {
  renderProfile();
  renderCurriculum();
  renderSchedule();
  renderCalendar();
  renderTasks();
  renderExams();
  renderFocus();
  renderReview();
  renderStats();
  renderLibrary();
  renderAssistant();
  renderSettings();
  renderDashboard();
  document.getElementById('liveClock')?.setAttribute('data-current', new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }));
}

function addSubjectToProfile(name) {
  const subject = name.trim();
  if (!subject) return;
  if (!state.profile.selectedSubjects.includes(subject)) {
    state.profile.selectedSubjects.push(subject);
    state.curriculum.subjects.push({
      id: crypto.randomUUID(),
      name: subject,
      description: 'تمت إضافة هذه المادة من داخل الملف الدراسي.',
      chapters: []
    });
  }
  saveState();
  renderAll();
}

function removeSubject(name) {
  state.profile.selectedSubjects = state.profile.selectedSubjects.filter((item) => item !== name);
  state.curriculum.subjects = state.curriculum.subjects.filter((item) => item.name !== name);
  saveState();
  renderAll();
}

function addChapterToSubject(subjectId) {
  const subject = state.curriculum.subjects.find((item) => item.id === subjectId);
  if (!subject) return;
  const chapterName = prompt('اسم الباب أو الوحدة الجديدة؟', 'باب جديد');
  if (!chapterName) return;
  subject.chapters.push({
    id: crypto.randomUUID(),
    name: chapterName,
    lessons: []
  });
  saveState();
  renderAll();
}

function addLessonToChapter(chapterId) {
  const chapter = findChapterById(chapterId);
  if (!chapter) return;
  const title = prompt('اسم الدرس؟', 'درس جديد');
  if (!title) return;
  chapter.lessons.push({
    id: crypto.randomUUID(),
    title,
    status: 'لم يبدأ',
    startDate: '',
    targetDate: '',
    expectedMinutes: 45,
    proficiency: 0,
    notes: '',
    sources: [],
    reviewCount: 0,
    summary: 'المعلومة غير متاحة في البيانات الحالية. يرجى تحديثها عند توفر مصدر موثوق.',
    coreIdea: 'المعلومة غير متاحة في البيانات الحالية.',
    mainTopics: 'المعلومة غير متاحة في البيانات الحالية.',
    understanding: 'المعلومة غير متاحة في البيانات الحالية.',
    previousLink: 'المعلومة غير متاحة في البيانات الحالية.',
    prerequisites: 'المعلومة غير متاحة في البيانات الحالية.',
    sourceStatus: 'غير متاح حالياً'
  });
  saveState();
  renderAll();
}

function findChapterById(chapterId) {
  for (const subject of state.curriculum.subjects) {
    const chapter = subject.chapters.find((item) => item.id === chapterId);
    if (chapter) return chapter;
  }
  return null;
}

function deleteSubject(subjectId) {
  state.curriculum.subjects = state.curriculum.subjects.filter((item) => item.id !== subjectId);
  state.profile.selectedSubjects = state.profile.selectedSubjects.filter((name) => !state.curriculum.subjects.some((subject) => subject.name === name));
  saveState();
  renderAll();
}

function deleteLesson(lessonId) {
  for (const subject of state.curriculum.subjects) {
    for (const chapter of subject.chapters) {
      chapter.lessons = chapter.lessons.filter((lesson) => lesson.id !== lessonId);
    }
  }
  saveState();
  renderAll();
}

function updateLessonStatus(lessonId, status) {
  for (const subject of state.curriculum.subjects) {
    for (const chapter of subject.chapters) {
      const lesson = chapter.lessons.find((item) => item.id === lessonId);
      if (lesson) {
        lesson.status = status;
        if (status === 'مكتمل' || status === 'تمت المذاكرة') {
          lesson.proficiency = 100;
        }
      }
    }
  }
  saveState();
  renderAll();
}

function generateSchedulePlan() {
  const selectedSubjects = state.profile.selectedSubjects;
  const now = new Date();
  const dailyMinutes = Number(state.schedule.dailyMinutes) || 240;
  const writing = [];
  let current = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0);

  for (let i = 0; i < Math.min(selectedSubjects.length, 4); i++) {
    const subject = selectedSubjects[i];
    writing.push({
      id: crypto.randomUUID(),
      title: `مذاكرة ${subject}`,
      subject,
      type: i % 2 === 0 ? 'مذاكرة جديدة' : 'مراجعة',
      start: new Date(current).toISOString(),
      duration: Math.max(40, Math.round(dailyMinutes / Math.min(selectedSubjects.length, 4)))
    });
    current = new Date(current.getTime() + (Math.max(40, Math.round(dailyMinutes / Math.min(selectedSubjects.length, 4))) + 15) * 60000);
  }

  state.schedule.generatedPlan = writing;
  saveState();
  renderAll();
}

function moveScheduleSlot(slotId, direction) {
  const plan = [...state.schedule.generatedPlan];
  const index = plan.findIndex((item) => item.id === slotId);
  if (index < 0) return;
  const targetIndex = direction === 'up' ? index - 1 : index + 1;
  if (targetIndex < 0 || targetIndex >= plan.length) return;
  const temp = plan[index];
  plan[index] = plan[targetIndex];
  plan[targetIndex] = temp;
  state.schedule.generatedPlan = plan;
  saveState();
  renderAll();
}

function deleteScheduleSlot(slotId) {
  state.schedule.generatedPlan = state.schedule.generatedPlan.filter((item) => item.id !== slotId);
  saveState();
  renderAll();
}

function addManualTaskToSchedule(event) {
  event.preventDefault();
  const subject = document.getElementById('scheduleSubject').value.trim();
  const title = document.getElementById('scheduleTitle').value.trim();
  const type = document.getElementById('scheduleType').value;
  const start = document.getElementById('scheduleDate').value;
  const duration = Number(document.getElementById('scheduleDuration').value) || 45;

  if (!title || !start) {
    alert('يرجى إدخال عنوان المهمة وتاريخها.');
    return;
  }

  state.schedule.generatedPlan.push({
    id: crypto.randomUUID(),
    title,
    subject: subject || 'مادة غير محددة',
    type,
    start: new Date(start).toISOString(),
    duration
  });
  event.target.reset();
  saveState();
  renderAll();
}

function addTask(event) {
  event.preventDefault();
  const task = {
    id: crypto.randomUUID(),
    title: document.getElementById('taskTitle').value.trim(),
    subject: document.getElementById('taskSubject').value.trim() || 'عام',
    priority: document.getElementById('taskPriority').value,
    dueDate: document.getElementById('taskDueDate').value,
    description: document.getElementById('taskDescription').value.trim(),
    completed: false
  };

  if (!task.title) {
    alert('يرجى إدخال عنوان المهمة.');
    return;
  }

  state.tasks.push(task);
  event.target.reset();
  saveState();
  renderAll();
}

function toggleTask(taskId) {
  const task = state.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.completed = !task.completed;
  saveState();
  renderAll();
}

function deleteTask(taskId) {
  state.tasks = state.tasks.filter((item) => item.id !== taskId);
  saveState();
  renderAll();
}

function addExam(event) {
  event.preventDefault();
  const exam = {
    id: crypto.randomUUID(),
    title: document.getElementById('examTitle').value.trim(),
    subject: document.getElementById('examSubject').value.trim() || 'عام',
    date: document.getElementById('examDate').value,
    duration: Number(document.getElementById('examDuration').value) || 120,
    totalScore: Number(document.getElementById('examTotal').value) || 100,
    achievedScore: Number(document.getElementById('examScore').value) || 0,
    notes: document.getElementById('examNotes').value.trim()
  };

  if (!exam.title || !exam.date) {
    alert('يرجى إدخال عنوان الامتحان وتاريخه.');
    return;
  }

  state.exams.push(exam);
  event.target.reset();
  saveState();
  renderAll();
}

function deleteExam(examId) {
  state.exams = state.exams.filter((item) => item.id !== examId);
  saveState();
  renderAll();
}

function addNote(event) {
  event.preventDefault();
  const title = document.getElementById('eventTitle').value.trim();
  const date = document.getElementById('eventDate').value;
  const type = document.getElementById('eventType').value;
  const description = document.getElementById('eventDescription').value.trim();

  if (!title || !date) {
    alert('يرجى إدخال عنوان الحدث وتاريخه.');
    return;
  }

  state.events.push({
    id: crypto.randomUUID(),
    title,
    date,
    type,
    description
  });
  state.notes.push({
    id: crypto.randomUUID(),
    title,
    date,
    body: description || 'ملاحظة جديدة.'
  });
  event.target.reset();
  saveState();
  renderAll();
}

function addSource(event) {
  event.preventDefault();
  const source = {
    id: crypto.randomUUID(),
    name: document.getElementById('sourceName').value.trim(),
    url: document.getElementById('sourceUrl').value.trim(),
    subject: document.getElementById('sourceSubject').value.trim() || 'عام',
    type: document.getElementById('sourceType').value
  };

  if (!source.name || !source.url) {
    alert('يرجى إدخال اسم المصدر ورابطه.');
    return;
  }

  state.sources.push(source);
  event.target.reset();
  saveState();
  renderAll();
}

function deleteSource(sourceId) {
  state.sources = state.sources.filter((item) => item.id !== sourceId);
  saveState();
  renderAll();
}

function requestNotificationAccess() {
  if (!('Notification' in window)) {
    alert('الإشعارات غير مدعومة في هذا المتصفح.');
    return;
  }

  Notification.requestPermission().then((permission) => {
    state.settings.notificationsEnabled = permission === 'granted';
    saveState();
    renderSettings();
    renderAll();
  });
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'madhkarti-ai-backup.json';
  link.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const parsed = JSON.parse(event.target.result);
      state = { ...deepClone(defaultState), ...parsed };
      saveState();
      renderAll();
      alert('تم استيراد البيانات بنجاح.');
    } catch (err) {
      alert('ملف غير صالح. تأكد من أن النسخة الاحتياطية بصيغة JSON.');
    }
  };
  reader.readAsText(file);
}

function resetData() {
  if (!confirm('هل تريد حذف جميع البيانات؟')) return;
  state = deepClone(defaultState);
  saveState();
  renderAll();
}

function updateSettings(event) {
  event.preventDefault();
  state.settings.aiProvider = document.getElementById('aiProvider').value;
  state.settings.aiEndpoint = document.getElementById('aiEndpoint').value.trim();
  state.settings.notificationsEnabled = document.getElementById('notificationsEnabled').checked;
  if (state.settings.notificationsEnabled) requestNotificationAccess();
  saveState();
  renderAll();
}

function updateProfile(event) {
  event.preventDefault();
  state.profile.studentName = document.getElementById('studentName').value.trim() || 'الطالب';
  state.profile.schoolYear = document.getElementById('schoolYear').value;
  state.profile.systemName = document.getElementById('systemName').value.trim() || 'ثانوية عامة';
  state.profile.streamName = document.getElementById('streamName').value.trim() || 'علمي علوم';
  saveState();
  renderAll();
}

function updateSchedule(event) {
  event.preventDefault();
  state.schedule.wakeTime = document.getElementById('wakeTime').value;
  state.schedule.sleepTime = document.getElementById('sleepTime').value;
  state.schedule.dailyMinutes = Number(document.getElementById('dailyMinutes').value) || 240;
  state.schedule.targetHours = Number(document.getElementById('targetHours').value) || 4;
  saveState();
  renderAll();
}

function handleAiAction(action) {
  const tasksLeft = state.tasks.filter((task) => !task.completed).length;
  const upcoming = state.exams[0];

  let suggestion = 'ابدأ بمراجعة المادة الأكثر تراكمًا ثم ركز على المهمة الصغيرة التالية.';
  if (action === 'plan') {
    suggestion = `أنشأت خطة يومية مناسبة لوقت المذاكرة المتبقي: خصص 40 دقيقة للمادة ذات الأولوية ثم 25 دقيقة للمراجعة، مع 10 دقائق راحة. عدد المهام المتبقية: ${tasksLeft}.`;
  } else if (action === 'backlog') {
    suggestion = 'قسّم المتأخرات إلى ثلاث مجموعات: أسئلة، مراجعة، ومذاكرة جديدة. ابدأ بأصغر المهمة ثم قم بترتيب بقية اليوم.';
  } else if (action === 'review') {
    suggestion = `أقترح مراجعة الدروس التي تقل نسبتها عن 60% أولاً، خاصة إذا كانت مرتبطة بامتحان ${upcoming ? upcoming.title : 'قريب'}.`;
  } else if (action === 'priority') {
    suggestion = 'رتب الأولويات كما يلي: أولاً الامتحانات القادمة، ثم المواد الأساسية، ثم المهام المتأخرة.';
  }

  state.assistant.lastSuggestion = suggestion;
  saveState();
  renderAssistant();
}

function deleteReview(reviewId) {
  state.reviews = state.reviews.filter((item) => item.id !== reviewId);
  saveState();
  renderAll();
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

function updateClock() {
  const clock = document.getElementById('liveClock');
  if (clock) {
    clock.textContent = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
  }
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const { focus } = state;
    if (focus.secondsLeft > 0 && focus.timerRunning) {
      focus.secondsLeft -= 1;
      saveState();
      renderFocus();
    } else {
      if (focus.timerRunning) {
        focus.history.push({
          id: crypto.randomUUID(),
          subject: document.getElementById('timerSubject').value || 'عام',
          lesson: document.getElementById('timerLesson').value || 'جلسة',
          duration: Number(document.getElementById('timerMode').value === 'focus' ? 25 : 10),
          date: new Date().toISOString()
        });
      }
      focus.timerRunning = false;
      clearInterval(timerInterval);
      timerInterval = null;
      saveState();
      renderFocus();
      if (state.settings.notificationsEnabled && 'Notification' in window && Notification.permission === 'granted') {
        new Notification('انتهت جلسة التركيز', { body: 'حان وقت الاستراحة أو مراجعة الدرس.' });
      }
    }
  }, 1000);
}

function toggleTimer() {
  state.focus.timerRunning = !state.focus.timerRunning;
  if (state.focus.timerRunning) {
    startTimer();
  } else if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  saveState();
  renderFocus();
}

function resetTimer() {
  state.focus.timerRunning = false;
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  const mode = document.getElementById('timerMode').value;
  state.focus.secondsLeft = mode === 'shortBreak' ? 300 : mode === 'longBreak' ? 600 : 1500;
  saveState();
  renderFocus();
}

function bindEvents() {
  document.querySelectorAll('.nav-btn').forEach((button) => {
    button.addEventListener('click', () => showSection(button.dataset.section));
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    state.settings.theme = document.body.classList.contains('dark') ? 'dark' : 'light';
    saveState();
  });

  document.getElementById('profileForm').addEventListener('submit', updateProfile);
  document.getElementById('subjectSelectionForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('customSubject').value;
    addSubjectToProfile(name);
    document.getElementById('customSubject').value = '';
  });
    document.getElementById('selectedSubjectsList').addEventListener('click', (event) => {
    if (event.target.matches('[data-remove-subject]')) {
      removeSubject(event.target.dataset.removeSubject);
    }
  });

  document.getElementById('curriculumSubjectForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('curriculumSubjectName').value.trim();
    const description = document.getElementById('curriculumSubjectDescription').value.trim();
    if (!name) return alert('يرجى إدخال اسم المادة.');
    state.curriculum.subjects.push({
      id: crypto.randomUUID(),
      name,
      description: description || 'لا يوجد وصف.' ,
      chapters: []
    });
    state.profile.selectedSubjects = [...new Set([...state.profile.selectedSubjects, name])];
    document.getElementById('curriculumSubjectName').value = '';
    document.getElementById('curriculumSubjectDescription').value = '';
    saveState();
    renderAll();
  });

  document.getElementById('scheduleForm').addEventListener('submit', updateSchedule);
  document.getElementById('generateScheduleBtn').addEventListener('click', generateSchedulePlan);
  document.getElementById('manualTaskForm').addEventListener('submit', addManualTaskToSchedule);

  document.getElementById('taskForm').addEventListener('submit', addTask);
  document.getElementById('examForm').addEventListener('submit', addExam);
  document.getElementById('calendarForm').addEventListener('submit', addNote);
  document.getElementById('sourceForm').addEventListener('submit', addSource);
  document.getElementById('settingsForm').addEventListener('submit', updateSettings);

  document.getElementById('exportDataBtn').addEventListener('click', exportData);
  document.getElementById('resetDataBtn').addEventListener('click', resetData);
  document.getElementById('importDataInput').addEventListener('change', (event) => importData(event.target.files[0]));

  document.querySelectorAll('[data-ai-action]').forEach((button) => {
    button.addEventListener('click', () => handleAiAction(button.dataset.aiAction));
  });

  document.getElementById('focusStart').addEventListener('click', toggleTimer);
  document.getElementById('focusPause').addEventListener('click', () => {
    state.focus.timerRunning = false;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
    saveState();
    renderFocus();
  });
  document.getElementById('focusReset').addEventListener('click', resetTimer);
  document.getElementById('timerMode').addEventListener('change', resetTimer);

  document.addEventListener('click', (event) => {
    const target = event.target.closest('[data-add-chapter]');
    if (target) addChapterToSubject(target.dataset.addChapter);

    const lessonTarget = event.target.closest('[data-add-lesson]');
    if (lessonTarget) addLessonToChapter(lessonTarget.dataset.addLesson);

    const deleteTarget = event.target.closest('[data-delete-subject]');
    if (deleteTarget) deleteSubject(deleteTarget.dataset.deleteSubject);

    const deleteLessonTarget = event.target.closest('[data-delete-lesson]');
    if (deleteLessonTarget) deleteLesson(deleteLessonTarget.dataset.deleteLesson);

    const statusTarget = event.target.closest('[data-update-lesson-status]');
    if (statusTarget) updateLessonStatus(statusTarget.dataset.updateLessonStatus, statusTarget.dataset.status);

    const slotMove = event.target.closest('[data-move-slot]');
    if (slotMove) moveScheduleSlot(slotMove.dataset.moveSlot, slotMove.dataset.direction);

    const slotDelete = event.target.closest('[data-delete-slot]');
    if (slotDelete) deleteScheduleSlot(slotDelete.dataset.deleteSlot);

    const taskToggle = event.target.closest('[data-toggle-task]');
    if (taskToggle) toggleTask(taskToggle.dataset.toggleTask);

    const taskDelete = event.target.closest('[data-delete-task]');
    if (taskDelete) deleteTask(taskDelete.dataset.deleteTask);

    const examDelete = event.target.closest('[data-delete-exam]');
    if (examDelete) deleteExam(examDelete.dataset.deleteExam);

    const sourceDelete = event.target.closest('[data-delete-source]');
    if (sourceDelete) deleteSource(sourceDelete.dataset.deleteSource);

    const reviewDone = event.target.closest('[data-review-done]');
    if (reviewDone) {
      deleteReview(reviewDone.dataset.reviewDone);
    }
  });
}

function init() {
  if (document.body.classList.contains('dark') || state.settings.theme === 'dark') {
    document.body.classList.add('dark');
  }

  bindEvents();
  renderAll();
  registerServiceWorker();
  setInterval(updateClock, 1000);
}

window.addEventListener('DOMContentLoaded', init);
