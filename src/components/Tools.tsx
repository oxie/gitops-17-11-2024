import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import CategoryGroup from './tools/CategoryGroup';
import { toolCategories } from './tools/ToolCategories';
import SectionContainer from './common/SectionContainer';
import SectionTitle from './common/SectionTitle';

const CategoryList = memo(function CategoryList() {
  return (
    <div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      role="list"
      aria-label="Technology categories"
    >
      {toolCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
        >
          <CategoryGroup {...category} />
        </motion.div>
      ))}
    </div>
  );
});

function Tools() {
  return (
    <SectionContainer 
      id="technology"
      ariaLabelledBy="tools-title"
    >
      <SectionTitle
        id="tools-title"
        title="Technology Stack"
        description="Production-grade open source solutions powered by battle-tested tools"
        icon={Terminal}
      />
      <CategoryList />
    </SectionContainer>
  );
}

export default memo(Tools);