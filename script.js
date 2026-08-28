/* ==========================================================================
   星游记 (Star Voyage) Personal Blog - Dynamic JavaScript logic
   Features: Theme Switcher, Real-time Search, Tag Filter, Article Modal,
             Likes/Bookmarks Counter, Mobile Menu, Toast Alerts
   ========================================================================== */

// --- Article Mock Data ---
const articles = [
    {
        id: 1,
        title: "2025 年前端开发趋势：从 React 19 到 AI 驱动的前端架构",
        category: "tech",
        categoryName: "前端技术",
        date: "2025-02-28",
        readTime: "8 分钟阅读",
        views: 3420,
        likes: 128,
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=800&q=80",
        excerpt: "随着 React 19 的正式落地、Server Components 的广泛普及以及大语言模型的融入，Web 开发的格局正在发生巨变。本文深入剖析新一代前端框架的设计思想。",
        content: `
            <p>在过去的一年中，前端开发领域经历了前所未有的技术变革。随着 AI 辅助代码生成的爆发，以及现代框架在服务端渲染（SSR）与客户端交互之间找到的全新平衡点，开发者需要重新审视我们的技术栈布局。</p>
            <h3>1. React 19 与 Server Components 的彻底融合</h3>
            <p>React 19 带来的不仅是性能优化，更是全栈开发模式的范式转变。通过内置的 Actions、useActionState 以及自动化的 Compiler 机制，开发者不再需要繁重的手动 useMemo 和 useCallback 优化。</p>
            <blockquote>“现代 Web 开发的核心目标，是在极致的用户体验与极致的开发效率之间构建坚固的桥梁。”</blockquote>
            <h3>2. AI Copilot 与智能化 UI 生成</h3>
            <p>大模型不再仅仅是代码补全工具，而是逐渐深度整合到设计系统与组件库生成中。我们可以通过自然语言实时构建高质量、易访问（Accessibility）的现代化组件。</p>
            <pre><code>// 示例：使用 React 19 Action 处理异步表单状态
const [state, formAction, isPending] = useActionState(async (prevState, formData) => {
  const result = await updateProfile(formData);
  return result;
}, null);</code></pre>
            <p>总结来看，未来前端工程师的核心竞争力将从单纯的“写代码”演变为“系统架构设计”与“审美产品交互能力”的结合。</p>
        `
    },
    {
        id: 2,
        title: "探索 LLM 智能体应用：构建真正的个人 AI 知识库助理",
        category: "ai",
        categoryName: "AI 与未来",
        date: "2025-02-20",
        readTime: "12 分钟阅读",
        views: 5890,
        likes: 256,
        image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
        excerpt: "如何结合 RAG（检索增强生成）与向量数据库，打造一个能理解你所有笔记与思考的私有化 AI 助手？本文附带完整架构设计与代码实践。",
        content: `
            <p>随着知识工作者积累的信息日益庞大，如何在数万篇文档中快速定位信息并进行总结，成为了提升生产力的关键。</p>
            <h3>RAG 架构的设计难点</h3>
            <p>简单的向量检索往往无法应对复杂的多轮语义查询。我们需要结合混合检索（Hybrid Search）、重排序（Reranking）以及上下文窗口管理。</p>
            <pre><code>// 向量匹配与重排序流
const vectorResults = await vectorStore.similaritySearch(query, topK: 10);
const rerankedResults = await reranker.rank(query, vectorResults);
return constructPrompt(query, rerankedResults.slice(0, 3));</code></pre>
            <p>通过本文搭建的开源 Agent 方案，你可以在本地使用 Ollama 结合 LangChain，实现隐私安全且高响应速度的知识大脑。</p>
        `
    },
    {
        id: 3,
        title: "打造极简极美的 Glassmorphism (毛玻璃) 视觉 UI 规范",
        category: "design",
        categoryName: "UI/UX 设计",
        date: "2025-02-15",
        readTime: "6 分钟阅读",
        views: 2150,
        likes: 95,
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
        excerpt: "毛玻璃风格不仅是通透与颜值的象征，更是建立视觉层级与细腻光影质感的重要手艺。本文分享 CSS Backdrop-Filter 的高阶用例。",
        content: `
            <p>Glassmorphism 在现代 UI 界面设计中依然占据重要地位。从 Apple VisionOS 到 Windows 11 Fluent Design，层次感与光影反射塑造了空前的立体美感。</p>
            <h3>实现毛玻璃的黄金 CSS 组合</h3>
            <p>要打造高质感的毛玻璃效果，关键不仅在于 <code>backdrop-filter: blur()</code>，更在于多层透明度与微弱光源边框的细节搭配：</p>
            <pre><code>.glass-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}</code></pre>
            <p>合理控制模糊半径与对比度，能让用户的注意力自然落于视觉核心区域。</p>
        `
    },
    {
        id: 4,
        title: "数字游民的第二年：关于自由、高效产出与心智构建",
        category: "life",
        categoryName: "随笔思考",
        date: "2025-02-05",
        readTime: "10 分钟阅读",
        views: 4100,
        likes: 310,
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        excerpt: "在清迈与巴厘岛的大自然间一边敲代码一边旅行，听起来很浪漫，但维持自律与持续输出需要一套强力的习惯系统。",
        content: `
            <p>离开传统的 9-to-5 办公室生活已经整整两年。许多人问我：数字游民生活真的如社交媒体上描绘的那般美好吗？</p>
            <h3>自律是自由的基础</h3>
            <p>没有了固定打卡制度，时间管理的粒度完全掌握在自己手中。我建立了“时间块（Time Blocking）”与“单焦点深度工作”习惯，确保每天在最清醒的 4 小时内完成关键开发任务。</p>
            <blockquote>“真正的自由不是随心所欲，而是掌控自己生活节奏的主导权。”</blockquote>
            <p>愿每一位追求独立创作的朋友，都能找到属于自己的工作与生活调和公式。</p>
        `
    },
    {
        id: 5,
        title: "CSS Grid 与 Subgrid 高阶网格布局实战指南",
        category: "tech",
        categoryName: "前端技术",
        date: "2025-01-28",
        readTime: "7 分钟阅读",
        views: 1890,
        likes: 87,
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
        excerpt: "现代 CSS 布局已经进入全自动化响应式时代。本文解析如何使用 Grid repeat(auto-fill) 与 subgrid 轻松构建复杂响应式布局。",
        content: `
            <p>曾经困扰无数字员的卡片等高与对齐问题，在 CSS Subgrid 面前变得轻而易举。</p>
            <h3>自动自适应网格定义</h3>
            <pre><code>.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
}</code></pre>
            <p>掌握这些纯 CSS 技巧，你可以完全摆脱对 JavaScript 动态计算高度的依赖。</p>
        `
    },
    {
        id: 6,
        title: "打造全栈 TypeScript 项目：从 Prisma 到 Tailwind & Next.js",
        category: "tech",
        categoryName: "前端技术",
        date: "2025-01-12",
        readTime: "15 分钟阅读",
        views: 6200,
        likes: 420,
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
        excerpt: "端到端（End-to-End）全栈类型安全能够显著降低生产环境中的 Bug 风险。看看一套完美的 TypeScript 全栈工程架构是怎样炼成的。",
        content: `
            <p>TypeScript 在全栈开发中的价值不仅在于代码补全，更在于数据模型在数据库、后端 API 与前端 UI 组件之间的无缝贯通。</p>
            <h3>类型安全的极至体验</h3>
            <p>使用 Prisma ORM 自动生成 TypeScript 类型，配合 zod 进行运行时校验，能让 API 联调效率提升两倍以上。</p>
        `
    }
];

// State Management
let currentCategory = 'all';
let searchQuery = '';
let likedArticles = JSON.parse(localStorage.getItem('likedArticles') || '[]');
let bookmarkedArticles = JSON.parse(localStorage.getItem('bookmarkedArticles') || '[]');

// --- DOM Elements ---
const articlesGrid = document.getElementById('articles-grid');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryTags = document.getElementById('category-tags');
const noResults = document.getElementById('no-results');
const resetFilterBtn = document.getElementById('reset-filter-btn');
const themeToggleBtn = document.getElementById('theme-toggle');
const articleModal = document.getElementById('article-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalContent = document.getElementById('modal-content');
const backToTopBtn = document.getElementById('back-to-top');
const newsletterForm = document.getElementById('newsletter-form');
const newsletterToast = document.getElementById('newsletter-toast');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const closeDrawerBtn = document.getElementById('close-drawer-btn');
const currentYearSpan = document.getElementById('current-year');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderArticles();
    setupEventListeners();
    updateYear();
});

// Update Year in Footer
function updateYear() {
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
}

// --- Theme Management ---
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
        icon.className = 'fa-solid fa-sun';
    } else {
        icon.className = 'fa-solid fa-moon';
    }
}

// --- Render Articles ---
function renderArticles() {
    const filtered = articles.filter(article => {
        const matchesCategory = currentCategory === 'all' || article.category === currentCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              article.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        articlesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    articlesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    articlesGrid.innerHTML = filtered.map(article => {
        const isLiked = likedArticles.includes(article.id);
        const isBookmarked = bookmarkedArticles.includes(article.id);
        const likeCount = article.likes + (isLiked ? 1 : 0);

        return `
            <article class="article-card" data-id="${article.id}">
                <div class="card-image-wrapper">
                    <img src="${article.image}" alt="${article.title}" class="card-image" loading="lazy">
                    <span class="card-category-badge">${article.categoryName}</span>
                </div>
                <div class="card-content">
                    <div class="card-meta">
                        <span class="card-meta-item"><i class="fa-regular fa-calendar"></i> ${article.date}</span>
                        <span class="card-meta-item"><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
                    </div>
                    <h3 class="card-title">${article.title}</h3>
                    <p class="card-excerpt">${article.excerpt}</p>
                    <div class="card-footer">
                        <div class="author-info">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Alex Lin" class="author-avatar">
                            <span class="author-name">Alex Lin</span>
                        </div>
                        <div class="card-actions">
                            <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-id="${article.id}" title="点赞">
                                <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                                <span class="like-count">${likeCount}</span>
                            </button>
                            <button class="action-btn bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${article.id}" title="收藏">
                                <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// --- Modal Functionality ---
function openArticleModal(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    const isLiked = likedArticles.includes(article.id);
    const isBookmarked = bookmarkedArticles.includes(article.id);
    const likeCount = article.likes + (isLiked ? 1 : 0);

    modalContent.innerHTML = `
        <div class="modal-article-header">
            <span class="modal-article-category">${article.categoryName}</span>
            <h1 class="modal-article-title">${article.title}</h1>
            <div class="modal-article-meta">
                <span><i class="fa-regular fa-user"></i> Alex Lin</span>
                <span><i class="fa-regular fa-calendar"></i> ${article.date}</span>
                <span><i class="fa-regular fa-clock"></i> ${article.readTime}</span>
                <span><i class="fa-regular fa-eye"></i> ${article.views} 次阅读</span>
            </div>
        </div>
        <img src="${article.image}" alt="${article.title}" class="modal-article-cover">
        <div class="modal-article-body">
            ${article.content}
        </div>
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--border-glass); display: flex; gap: 16px; justify-content: center;">
            <button class="btn btn-secondary like-btn ${isLiked ? 'liked' : ''}" data-id="${article.id}">
                <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart" style="color: ${isLiked ? '#ef4444' : 'inherit'}"></i>
                ${isLiked ? '已赞' : '点赞文章'} (${likeCount})
            </button>
            <button class="btn btn-secondary bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" data-id="${article.id}">
                <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark" style="color: ${isBookmarked ? '#f59e0b' : 'inherit'}"></i>
                ${isBookmarked ? '已收藏' : '收藏本文'}
            </button>
        </div>
    `;

    articleModal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
    articleModal.classList.remove('open');
    document.body.style.overflow = '';
}

// --- Toggle Likes & Bookmarks ---
function toggleLike(id, event) {
    if (event) event.stopPropagation();
    const index = likedArticles.indexOf(id);
    if (index > -1) {
        likedArticles.splice(index, 1);
    } else {
        likedArticles.push(id);
    }
    localStorage.setItem('likedArticles', JSON.stringify(likedArticles));
    renderArticles();

    // If modal is open, refresh modal view button state
    if (articleModal.classList.contains('open')) {
        openArticleModal(id);
    }
}

function toggleBookmark(id, event) {
    if (event) event.stopPropagation();
    const index = bookmarkedArticles.indexOf(id);
    if (index > -1) {
        bookmarkedArticles.splice(index, 1);
    } else {
        bookmarkedArticles.push(id);
    }
    localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
    renderArticles();

    // If modal is open, refresh modal view button state
    if (articleModal.classList.contains('open')) {
        openArticleModal(id);
    }
}

// --- Setup Event Listeners ---
function setupEventListeners() {
    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        clearSearchBtn.style.display = searchQuery.length > 0 ? 'block' : 'none';
        renderArticles();
    });

    // Clear search
    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderArticles();
    });

    // Reset filter button
    resetFilterBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        currentCategory = 'all';
        document.querySelectorAll('.tag-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === 'all');
        });
        renderArticles();
    });

    // Category filter buttons
    categoryTags.addEventListener('click', (e) => {
        const tagBtn = e.target.closest('.tag-btn');
        if (!tagBtn) return;

        document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
        tagBtn.classList.add('active');

        currentCategory = tagBtn.getAttribute('data-category');
        renderArticles();
    });

    // Grid card clicks for reading or action buttons
    articlesGrid.addEventListener('click', (e) => {
        const likeBtn = e.target.closest('.like-btn');
        if (likeBtn) {
            const id = parseInt(likeBtn.getAttribute('data-id'));
            toggleLike(id, e);
            return;
        }

        const bookmarkBtn = e.target.closest('.bookmark-btn');
        if (bookmarkBtn) {
            const id = parseInt(bookmarkBtn.getAttribute('data-id'));
            toggleBookmark(id, e);
            return;
        }

        const card = e.target.closest('.article-card');
        if (card) {
            const id = parseInt(card.getAttribute('data-id'));
            openArticleModal(id);
        }
    });

    // Modal internal clicks
    modalContent.addEventListener('click', (e) => {
        const likeBtn = e.target.closest('.like-btn');
        if (likeBtn) {
            const id = parseInt(likeBtn.getAttribute('data-id'));
            toggleLike(id, e);
            return;
        }

        const bookmarkBtn = e.target.closest('.bookmark-btn');
        if (bookmarkBtn) {
            const id = parseInt(bookmarkBtn.getAttribute('data-id'));
            toggleBookmark(id, e);
            return;
        }
    });

    // Modal close events
    modalCloseBtn.addEventListener('click', closeArticleModal);
    articleModal.addEventListener('click', (e) => {
        if (e.target === articleModal) {
            closeArticleModal();
        }
    });

    // ESC key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && articleModal.classList.contains('open')) {
            closeArticleModal();
        }
    });

    // Scroll event for Floating Back to Top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Mobile Drawer events
    mobileMenuBtn.addEventListener('click', () => {
        mobileDrawer.classList.add('open');
    });

    closeDrawerBtn.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
    });

    document.querySelectorAll('.drawer-item').forEach(item => {
        item.addEventListener('click', () => {
            mobileDrawer.classList.remove('open');
        });
    });

    // Newsletter Form Submit
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && emailInput.value) {
            newsletterToast.className = 'form-toast success';
            newsletterToast.innerHTML = '<i class="fa-solid fa-circle-check"></i> 感谢订阅！验证邮件已发送至你的邮箱。';
            emailInput.value = '';
            setTimeout(() => {
                newsletterToast.innerHTML = '';
            }, 5000);
        }
    });
}
