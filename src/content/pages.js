import Lesson0 from '@/components/lessons/first/LessonViewHome.vue'
import Lesson1 from '@/components/lessons/first/LessonViewFirst.vue'
import Lesson2 from '@/components/lessons/first/LessonViewSecond.vue'
import Lesson3 from '@/components/lessons/first/LessonViewThird.vue'
import Lesson4 from '@/components/lessons/second/LessonViewFourth.vue'
import Lesson5 from '@/components/lessons/second/LessonViewFifth.vue'
import Lesson6 from '@/components/lessons/second/LessonViewSixth.vue'

export default [
  { title: 'Всем привет студентики!', page: 0, comp: Lesson0 },
  { title: 'Глава 1.1', page: 1, comp: Lesson1 },
  { title: 'Глава 1.2', page: 2, comp: Lesson2 },
  { title: 'Глава 1.3', page: 3, comp: Lesson3 },
  { title: 'Глава 2.1', page: 4, comp: Lesson4 },
  { title: 'Глава 2.2', page: 5, comp: Lesson5 },
  { title: 'Глава 2.3', page: 6, comp: Lesson6 },
]