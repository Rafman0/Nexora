import aiStudyAssistant02036 from '../assets/images/Ai study assistant/Screenshot 2026-09-02 002036.png'
import aiStudyAssistant02054 from '../assets/images/Ai study assistant/Screenshot 2026-09-02 002054.png'
import aiStudyAssistant02110 from '../assets/images/Ai study assistant/Screenshot 2026-09-02 002110.png'
import aiStudyAssistant02148 from '../assets/images/Ai study assistant/Screenshot 2026-09-02 002148.png'
import aiStudyAssistant02221 from '../assets/images/Ai study assistant/Screenshot 2026-09-02 002221.png'
import aiStudyAssistantSeptember21 from '../assets/images/Ai study assistant/Screenshot 2026-09-21 014438.png'
import mauhubSeptember13 from '../assets/images/Mauhub/Screenshot 2026-09-13 135525.png'
import mauhub011832 from '../assets/images/Mauhub/Screenshot 2026-09-21 011832.png'
import mauhub011850 from '../assets/images/Mauhub/Screenshot 2026-09-21 011850.png'
import mauhub011912 from '../assets/images/Mauhub/Screenshot 2026-09-21 011912.png'
import mauhub011955 from '../assets/images/Mauhub/Screenshot 2026-09-21 011955.png'
import mauhub012014 from '../assets/images/Mauhub/Screenshot 2026-09-21 012014.png'
import mauhub012032 from '../assets/images/Mauhub/Screenshot 2026-09-21 012032.png'
import plantDiseaseOctober5_141454 from '../assets/images/Plant diease detection/Screenshot 2026-10-05 141454.png'
import plantDiseaseOctober5_141529 from '../assets/images/Plant diease detection/Screenshot 2026-10-05 141529.png'
import plantDiseaseOctober5_141549 from '../assets/images/Plant diease detection/Screenshot 2026-10-05 141549.png'
import plantDiseaseOctober8_111226 from '../assets/images/Plant diease detection/Screenshot 2026-10-08 111226.png'
import plantDiseaseOctober8_111450 from '../assets/images/Plant diease detection/Screenshot 2026-10-08 111450.png'
import plantDiseaseOctober8_122333 from '../assets/images/Plant diease detection/Screenshot 2026-10-08 122333.png'

const projects = [
  {
    id: 'ai-study-assistant',
    title: 'Ai Study Assistant',
    category: 'AI and EdTech',
    description:
      'An intelligent learning platform that helps students understand complex topics through personalized learning paths, and AI-powered guidance.',
    problem:
      'When students encounter difficult topics, general-purpose study materials may not address the specific concepts they are struggling with. Without a clear learning path or timely guidance, it can be harder to build understanding and know what to focus on next.',
    solution:
      'The AI Study Assistant brings personalized learning paths and AI-powered guidance together in one learning experience. It is designed to help students work through complex subjects with more focused support, follow a clearer path through their studies, and get guidance relevant to their learning needs.',
    features: [
      'Personalized learning paths',
      'AI-powered learning guidance',
      'Support for understanding complex topics',
    ],
    technologies: [
      'PHP',
      'JavaScript',
      'MySQL',
      'Bootstrap 5',
      'HTML5',
      'CSS3',
      'artificial intelligence',
      'EdTech',
    ],
    screenshots: [
      { src: aiStudyAssistant02036, alt: 'AI Study Assistant landing page' },
      { src: aiStudyAssistant02054, alt: 'AI Study Assistant screenshot, September 2 at 00:20:54' },
      { src: aiStudyAssistant02110, alt: 'AI Study Assistant screenshot, September 2 at 00:21:10' },
      { src: aiStudyAssistant02148, alt: 'AI Study Assistant screenshot, September 2 at 00:21:48' },
      { src: aiStudyAssistant02221, alt: 'AI Study Assistant screenshot, September 2 at 00:22:21' },
      { src: aiStudyAssistantSeptember21, alt: 'AI Study Assistant screenshot, September 21' },
    ],
    liveUrl: 'https://ai-study-assistant-gwoo.onrender.com',
    githubUrl: null,
  },
  {
    id: 'mauhub',
    title: 'MAUHUB – Academic Resource Platform',
    category: 'Education / EdTech',
    description:
      'An academic resource platform designed to help 100-level university students access organized course summaries and learning materials. MAUHUB provides a centralized space where students can easily find and access relevant academic resources to support their learning.',
    problem:
      '100-level university students need course summaries and learning materials that are easy to find and organized around their studies. When relevant resources are spread across different places or are difficult to navigate, locating useful material can interrupt study and make it harder to stay focused.',
    solution:
      'MAUHUB provides a centralized academic resource platform for 100-level students. It organizes course summaries and learning materials in one place, giving students a more direct way to find resources relevant to their courses and return to them as they study.',
    features: [
      'Organized course summaries',
      'Centralized access to learning materials',
      'Resources designed for 100-level university students',
    ],
    technologies: [
      'PHP',
      'MySQL',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Bootstrap 5',
      'EdTech',
    ],
    screenshots: [
      { src: mauhub011832, alt: 'MAUHUB landing page' },
      { src: mauhub011850, alt: 'MAUHUB screenshot, September 21 at 01:18:50' },
      { src: mauhub011912, alt: 'MAUHUB screenshot, September 21 at 01:19:12' },
      { src: mauhub011955, alt: 'MAUHUB screenshot, September 21 at 01:19:55' },
      { src: mauhub012014, alt: 'MAUHUB screenshot, September 21 at 01:20:14' },
      { src: mauhub012032, alt: 'MAUHUB screenshot, September 21 at 01:20:32' },
      { src: mauhubSeptember13, alt: 'MAUHUB mobile page' },
    ],
    liveUrl: null,
    githubUrl: null,
  },
  {
    id: 'plant-disease-detection',
    title: 'Plant Disease Detection System',
    category: 'Artificial Intelligence / Agriculture Tech',
    description:
      'An AI-powered agricultural solution designed to identify plant diseases from leaf images. The system uses image-based disease classification to help users recognize potential plant health problems and support better-informed crop management decisions.',
    problem:
      'Visible symptoms on a leaf can be difficult to identify consistently by eye, and uncertainty about a plant’s condition can make it harder to decide what to investigate or how to manage a crop. Growers need a practical way to turn a leaf image into useful initial information.',
    solution:
      'The system uses image-based disease classification to analyze a submitted leaf image and identify a potential plant disease. By presenting a classification result that users can review, it is designed to support earlier recognition of possible plant-health problems and provide an additional input for informed crop-management decisions.',
    features: [
      'Identify plant diseases from leaf images',
      'Image-based disease classification',
      'Support for better-informed crop management',
    ],
    technologies: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'Image Classification',
      'PlantVillage Dataset',
      'AI',
    ],
    screenshots: [
      { src: plantDiseaseOctober5_141454, alt: 'Plant Disease Detection dashboard' },
      { src: plantDiseaseOctober5_141529, alt: 'Plant Disease Detection screenshot, October 5 at 14:15:29' },
      { src: plantDiseaseOctober5_141549, alt: 'Plant Disease Detection screenshot, October 5 at 14:15:49' },
      { src: plantDiseaseOctober8_111226, alt: 'Plant Disease Detection screenshot, October 8 at 11:12:26' },
      { src: plantDiseaseOctober8_111450, alt: 'Plant Disease Detection screenshot, October 8 at 11:14:50' },
      { src: plantDiseaseOctober8_122333, alt: 'Plant Disease Detection screenshot, October 8 at 12:23:33' },
    ],
    liveUrl: null,
    githubUrl: null,
  },
]

export default projects
