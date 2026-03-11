'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { HiClock, HiArrowRight } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';
import { useConfig } from '@/context/ConfigContext';
import styles from '@/styles/PageLayout.module.css';
import blogStyles from '@/styles/Blog.module.css';

export default function BlogPage() {
  const { t } = useLanguage();
  const config = useConfig();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <h1 className={styles.pageTitle}>{t('blog.title')}</h1>
        <div className={styles.titleUnderline} />
        <p className={blogStyles.intro}>
          {t('blog.intro')}
        </p>
      </motion.div>

      <div className={blogStyles.grid}>
        {config.blog.posts.map((post, i) => (
          <motion.article
            key={i}
            className={blogStyles.card}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <div className={blogStyles.category}>{post.category}</div>
            <h2 className={blogStyles.title}>{post.title}</h2>
            <p className={blogStyles.excerpt}>{post.excerpt}</p>
            <div className={blogStyles.meta}>
              <div className={blogStyles.metaItem}>
                <HiClock size={16} />
                <span>{post.readTime} {t('blog.readTime')}</span>
              </div>
              <span className={blogStyles.date}>{post.date}</span>
            </div>
            <Link href={`/blog/${post.slug}`} className={blogStyles.readMore}>
              {t('blog.readMore')} <HiArrowRight size={16} />
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
