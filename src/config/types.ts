export interface ThemeColors {
    '--bg-primary': string;
    '--bg-secondary': string;
    '--text-primary': string;
    '--text-secondary': string;
    '--border-color': string;
    '--accent-color': string;
    '--accent-hover': string;
    '--card-bg': string;
    '--hover-bg': string;
    '--shadow-sm': string;
    '--shadow-md': string;
    '--shadow-lg': string;
}

export interface ThemeConfig {
    defaultTheme: 'light' | 'dark';
    colors: {
        light: ThemeColors;
        dark: ThemeColors;
    };
    font: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    label: string;
}

export interface ProfileConfig {
    name: string;
    initials: string;
    role: string;
    email: string;
    phone?: string;
    location: string;
    availability: string;
    avatarUrl?: string;
    socialLinks: SocialLink[];
    badges: string[];
    cvUrl?: string;
}

export interface NavPage {
    id: string;
    icon: string;
    labelKey: string;
}

export interface NavigationConfig {
    pages: NavPage[];
}

export interface StatConfig {
    number: number;
    suffix: string;
    labelKey: string;
}

export interface HomeConfig {
    techChips: string[];
    stats: StatConfig[];
}

export interface TestimonialConfig {
    name: string;
    role: string;
    avatar: string;
    textKey: string;
    rating: number;
}

export interface EducationItem {
    period: string;
    title: string;
    institution: string;
}

export interface ExperienceItem {
    period: string;
    title: string;
    company: string;
}

export interface AboutConfig {
    education: EducationItem[];
    experience: ExperienceItem[];
    skills: Record<string, string[]>;
}

export interface ProjectConfig {
    titleKey: string;
    category: string;
    descKey: string;
    achievementsKey?: string;
    tags: string[];
    icon: string;
    url?: string;
}

export interface WorkConfig {
    projects: ProjectConfig[];
}

export interface TechSkill {
    name: string;
    icon: string;
    level: number;
    color: string;
}

export interface TechCategory {
    titleKey: string;
    skills: TechSkill[];
}

export interface TechStackConfig {
    categories: TechCategory[];
}

export interface ContactMethod {
    icon: string;
    label: string;
    value: string;
    link?: string;
}

export interface ContactConfig {
    methods: ContactMethod[];
}

export interface BlogPostConfig {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    content: string;
}

export interface BlogConfig {
    posts: BlogPostConfig[];
}

export interface MetaConfig {
    title: string;
    description: string;
    lang: string;
}

export interface PortfolioConfig {
    meta: MetaConfig;
    theme: ThemeConfig;
    profile: ProfileConfig;
    navigation: NavigationConfig;
    home: HomeConfig;
    testimonials: TestimonialConfig[];
    about: AboutConfig;
    work: WorkConfig;
    techStack: TechStackConfig;
    contact: ContactConfig;
    blog: BlogConfig;
    translations: Record<string, Record<string, string>>;
}
