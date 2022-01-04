Vue.component('textbox', {
  props: ['name'],
  template: '<div>{{courseDescriptions[name]}}</div>'
})

const courseDescriptions = {
  EECS1001 : "This course is about some possible research topics in the computer science realm (topics will vary each year). If you particularly like research and want to do it in the future, you \
              will like this course. This is the easiest course you'll take, it's pass or fail, so no grade is received. To pass, you just need to attend class (attendance is checked) and do the \
              assignments, which typically aren't longer than an hour of time. Difficulty 1 / 10.",

  EECS1012 : "This is an introductory programming course. You'll learn the fundamentals, such as what variables are, beginner programming logic (conditional logic, loops, program tracing), and \
              the basics of web development. You'll be working with HTML, CSS, and JavaScript in this course. If you did any programming on your own or in high school, this will be very easy. \
              If you didn't, you can still end with a high grade as long as you put in the time and effort needed (which is minimal). This course is definitely on the easier side of the spectrum. \
              Difficulty 5 / 10 if you've never programmed before, otherwise 3 / 10.",

  EECS1019 : "Discrete math is not like your average mathematics such as advanced functions or calculus. This is about math that is related to computer science, and includes topics like logic, Boolean \
              algebra, set theory, graph theory, proofs with induction, and more. I found the first half of this course to be easy, but it definitely ramped up when we started doing proofs, counting \
              principles, and more. This can be a very theory heavy and abstract course, so I recommend not grouping this with other hard courses. Overall difficulty 7 / 10.",

  EECS1022 : "A more difficult version of EECS1012. Instead of web development, you'll be making mobile apps using Java and Android Studio. Java is the main 'language' York University teaches in, \
              you'll have another 3-4 courses to take that use Java, so make sure you leave the course being comfortable with it. I found this course to be challenging because I never coded before, \
              so it was a mix of struggling to learn Java as well as struggling to use Android Studio. You can't fall behind in lectures, or you're going to be really swamped. Difficulty 7 / 10 if \
              you've never programmed before (especially if you don't know any OOP languages), 4 / 10 otherwise.",

  MATH1300 : "This is Calculus 1 - mainly derivatives with some integrals near the end. If you did well in calculus in high school, you'll find majority of this course content to be similar, with \
              the newer content not being that much more challenging. If you struggled with calculus in high school, you'll most likely struggle here too. Read the textbook; it really helped. \
              Difficulty 6 / 10 if you did poorly in high school calculus, 4 / 10 otherwise.",

  MATH1310 : "",

  ELECTIVES_1 : "",
}

const EECS1001 = new Vue({ el: '#EECS1001' })
const EECS1012 = new Vue({ el: '#EECS1012' })
const EECS1019 = new Vue({ el: '#EECS1019' })
const EECS1022 = new Vue({ el: '#EECS1022' })
const MATH1300 = new Vue({ el: '#MATH1300' })
const MATH1310 = new Vue({ el: '#MATH1310' })
const ELECTIVES_1 = new Vue({ el: '#ELECTIVES_1' })
