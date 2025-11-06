import { Testimonial } from '../Home/Testimonial/Testimonial';
import { CourseBanner } from './CourseBanner/CourseBanner';
import { CourseFaq } from './CourseFaq/CourseFaq';
import { NextBatch } from './NextBatch/NextBatch';
import { ThisCourse } from './ThisCourse/ThisCourse';

export const Course = () => {
  return (
    <div>
      <CourseBanner />
      <NextBatch />
      <ThisCourse />
      <CourseFaq />
      {/* <Testimonial /> */}
    </div>
  );
};
