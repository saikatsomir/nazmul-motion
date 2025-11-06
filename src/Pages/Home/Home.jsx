import { Banner } from './Banner/Banner';
import { HomeCourse } from './Banner/HomeCourse/HomeCourse';
import { Choice } from './Choice/Choiche';
import { LearningPath } from './LearningPath/LearningPath';
import { ServiceSkills } from './ServiceSkills/ServiceSkill';
import { Testimonial } from './Testimonial/Testimonial';
import { WhyMe } from './WhyMe/WhyMe';

export const Home = () => {
  return (
    <>
      <Banner />
      <ServiceSkills />
      <Choice />
      <HomeCourse />
      <LearningPath />
      <WhyMe />
      {/* <Testimonial /> */}
    </>
  );
};
