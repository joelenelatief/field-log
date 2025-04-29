import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeIn = (element: Element) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  });
};

export const slideIn = (
  element: Element,
  direction: 'left' | 'right' | 'up' | 'down' = 'left'
) => {
  const x = direction === 'left' ? -100 : direction === 'right' ? 100 : 0;
  const y = direction === 'up' ? -100 : direction === 'down' ? 100 : 0;

  return gsap.from(element, {
    x,
    y,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
  });
};

export const scrollAnimation = (
  element: Element,
  animation: gsap.TweenVars
) => {
  return gsap.from(element, {
    ...animation,
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      toggleActions: 'play none none reverse',
    },
  });
};
