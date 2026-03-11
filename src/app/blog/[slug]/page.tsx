'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { HiClock, HiArrowLeft } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import styles from '@/styles/BlogPost.module.css';

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useLanguage();
  const config = useConfig();
  const slug = params.slug as string;

  const post = config.blog.posts.find((p) => p.slug === slug) || {
    title: 'Artículo no encontrado',
    date: '',
    readTime: '',
    category: '',
    content: '<p>Lo sentimos, este artículo no existe.</p>',
    excerpt: '',
    slug: '',
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      <button onClick={() => router.back()} className={styles.backButton}>
        <HiArrowLeft size={20} />
        {t('blog.backToBlog')}
      </button>

      <div className={styles.header}>
        <div className={styles.category}>{post.category}</div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <span className={styles.date}>{post.date}</span>
          <span className={styles.separator}>•</span>
          <div className={styles.metaItem}>
            <HiClock size={16} />
            <span>{post.readTime} {t('blog.readTime')}</span>
          </div>
        </div>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className={styles.footer}>
        <p>{t('blog.share')}</p>
      </div>
    </motion.article>
  );
}
