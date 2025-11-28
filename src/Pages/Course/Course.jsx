import { useRef, useEffect } from 'react';
import { Testimonial } from '../Home/Testimonial/Testimonial';
import { CourseBanner } from './CourseBanner/CourseBanner';
import { CourseFaq } from './CourseFaq/CourseFaq';
import { NextBatch } from './NextBatch/NextBatch';
import { ThisCourse } from './ThisCourse/ThisCourse';

export const Course = () => {
  const faqRef = useRef(null);

  // useEffect(() => {
  //   document.title = 'Course Details | Nazmul Motion';
  // }, []);

  const scrollToFaq = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <CourseBanner scrollToFaq={scrollToFaq} />
      <NextBatch />
      <ThisCourse />
      <CourseFaq ref={faqRef} />
      {/* <Testimonial /> */}
    </div>
  );
};
