import React from 'react';
import { skills } from './skillsData';
import { motion } from 'framer-motion';

const Skill = () => {
  return (
    <div className='py-24 '>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl font-bold text-center text-secondary mb-4'>My Skills</h2>
        <p className='text-xl text-secondary text-center mb-16'>Tech I love and build with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className='text-lg font-semibold text-gray-800 mb-1'>{skill.name}</h3>
              <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="h-full bg-gradient-to-r from-[#8a2be2] to-[#c8a2c8] rounded-full transition-all duration-500"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default Skill;
