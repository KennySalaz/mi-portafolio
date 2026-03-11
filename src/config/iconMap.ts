import { IconType } from 'react-icons';
import {
    HiHome, HiDocumentText, HiBriefcase, HiMail, HiNewspaper, HiChip,
    HiChartBar, HiShoppingCart, HiTemplate, HiClipboardList, HiHeart,
    HiLocationMarker, HiCheckCircle, HiStar, HiClock, HiPaperAirplane,
} from 'react-icons/hi';
import { HiCodeBracket, HiAcademicCap } from 'react-icons/hi2';
import { FaLinkedin, FaGithub, FaWhatsapp, FaTwitter, FaInstagram, FaDribbble, FaBehance, FaYoutube, FaTiktok } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import {
    SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiTypescript, SiJavascript,
    SiTailwindcss, SiCss3, SiHtml5, SiPostgresql,
    SiMongodb, SiGit, SiDocker, SiFigma, SiJira, SiTrello, SiNotion,
    SiNodedotjs, SiPython, SiFirebase, SiAmazon, SiVercel, SiNetlify,
    SiGraphql, SiRedux, SiSass, SiStyledcomponents, SiNuxtdotjs, SiExpo,
    SiLinear, SiAsana, SiSlack, SiVite, SiWebpack, SiJest, SiCypress,
    SiStorybook, SiPostman,
} from 'react-icons/si';

const iconMap: Record<string, IconType> = {
    // Navigation / General
    HiHome,
    HiDocumentText,
    HiBriefcase,
    HiMail,
    HiNewspaper,
    HiChip,
    HiChartBar,
    HiShoppingCart,
    HiTemplate,
    HiClipboardList,
    HiHeart,
    HiLocationMarker,
    HiCheckCircle,
    HiStar,
    HiClock,
    HiPaperAirplane,
    HiCodeBracket,
    HiAcademicCap,
    IoMdDownload,

    // Social
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
    FaTwitter,
    FaInstagram,
    FaDribbble,
    FaBehance,
    FaYoutube,
    FaTiktok,

    // Tech Icons
    SiReact,
    SiNextdotjs,
    SiVuedotjs,
    SiAngular,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiCss3,
    SiHtml5,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiDocker,
    SiFigma,
    SiJira,
    SiTrello,
    SiNotion,
    SiNodedotjs,
    SiPython,
    SiFirebase,
    SiAmazon,
    SiVercel,
    SiNetlify,
    SiGraphql,
    SiRedux,
    SiSass,
    SiStyledcomponents,
    SiNuxtdotjs,
    SiExpo,
    SiLinear,
    SiAsana,
    SiSlack,
    SiVite,
    SiWebpack,
    SiJest,
    SiCypress,
    SiStorybook,
    SiPostman,
};

export function getIcon(name: string): IconType | undefined {
    return iconMap[name];
}

export default iconMap;
