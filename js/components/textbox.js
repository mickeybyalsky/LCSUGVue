Vue.component('textbox', {
  props: ['name'],
  template: '<div>{{textboxes[name]}}</div>'
})

const textboxes = {
  EECS1001 : "This course is about some possible research topics in the computer science realm (topics will vary each year). If you particularly like research and want to do it in the future, you \
              will like this course. This is the easiest course you'll take, it's pass or fail, so no grade is received. To pass, you just need to attend class (attendance is checked) and do the \
              assignments, which typically aren't longer than an hour of time. Difficulty 1 / 10.",

  EECS1012_1015 : "EECS1012 and EECS1015 are both introductory programming courses. I took EECS1012 at the time because EECS1015 wasn't offered. EECS1012 is web development so you'll be learning \
                  HTML, CSS, and JavaScript. In EECS1015, you'll learn Python. Both are relatively easy and if you did any programming before, this will be very easy. Otherwise if you're new to \
                  computer science and programming as a whole, it can be challenging depending on how quickly you can learn. I recommend EECS1015 because in my opinion Python is the more valuable \
                  language to know, but if you're interested in making websites EECS1012 is a viable option too. This course is definitely on the easier side of the spectrum. Difficulty 5 / 10 if \
                  you've never programmed before, otherwise 3 / 10.",
  
  EECS1015 : "EECS1015 is an introductory to python course. You will learn about: variables, string manipulation/methods, formatting output, flow structures (if, elif, else conditions) \
              loops (for, while), functions (define and calling them), lists, tuples, dictionaries, sets, lists of lists of lists and assert statements. \
              If you have experience in coding (with Java, for example) from high school, you should have a good foundation for this course. You will just learn how to apply these concepts \
              in Python's syntax instead of Java \
              If you don't have much experience in coding this course may be a little fast paced for you and it may seem overwhelming, but if you put in the effort and learn on the side a bit it is doable. \
              Do keep in mind after all that this course is recommended for those that want a heavier introductory course. If you are new to coding, you might wanna take EECS1012\
              This course is definitely on the easier side of the spectrum. Difficulty 6 / 10 if you've never programmed before, otherwise 3 / 10.",
              
  EECS1019 : "Discrete math is not like your average mathematics such as advanced functions or calculus. This is about math that is related to computer science, and includes topics like logic, Boolean \
              algebra, set theory, graph theory, proofs with induction, and more. I found the first half of this course to be easy, but it definitely ramped up when we started doing proofs, counting \
              principles, and more. This can be a very theory heavy and abstract course, so I recommend not grouping this with other hard courses. Overall difficulty 7 / 10.",

  EECS1022 : "A more difficult version of EECS1012. Instead of web development, you'll be making mobile apps using Java and Android Studio. Java is the main 'language' York University teaches in, \
              you'll have another 3-4 courses to take that use Java, so make sure you leave the course being comfortable with it. I found this course to be challenging because I never coded before, \
              so it was a mix of struggling to learn Java as well as struggling to use Android Studio. You can't fall behind in lectures, or you're going to be really swamped. Difficulty 7 / 10 if \
              you've never programmed before (especially if you don't know any OOP languages), 4 / 10 otherwise.",

  MATH1300 : "This is calculus I - mainly derivatives with some integrals near the end. If you did well in calculus in high school, you'll find majority of this course content to be similar, with \
              the newer content not being that much more challenging. If you struggled with calculus in high school, you'll most likely struggle here too. Read the textbook; it really helped. \
              Difficulty 6 / 10 if you did poorly in high school calculus, 4 / 10 otherwise.",

  MATH1310 : "This is calculus II - which is entirely about integrals. There is an insane ramp in difficulty between calculus I and II, so choose your professor wisely, some are harder than others. \
              I would say this is one of the hardest first year courses, have to pay attention, can't skip lectures, textbook is a must, and don't take this course with EECS1019. Difficulty 9 / 10. \
              Possibly subjective because I hate math.",

  SCIENCES : "You need 6.0 science credits from a list of courses, which typically means taking two biology, two chemistry, one of each, or one physics course (biology and chemistry is 3.0 while \
              physics is 6.0). I went with two chemistries (CHEM1000, CHEM1001) since I did well in it in high school and walked away with two As. Play to your strengths and take what you find easy.",

  ELECTIVES_1 : "You need 90.0 / 120.0 credits for the regular / honours degree. The computer science, science, and math requirements don't fill it completely, so you'll be taking electives here \
                and there. You can view taking electives in your first year in one of two ways: first year courses are the easiest so it would be a good opportunity to knock off some electives, \
                but on the otherhand since the transition from high school to university can be tough you'd want to settle into the new environment first before overloading on courses. \
                Personally I advise on not taking more than 5 courses a semester.",

  EECS2001 : "Theory intensive course, including topics like automata theory, Turing machines, formal languages, and more. If you don't know what any of that means, I don't either still. Can be very \
              abstract at times and hard to follow. Don't take this course with Jeffery Edmonds. Difficulty 8 / 10.",

  EECS2011 : "One of the most important courses in second year alongside EECS2030. It's important to master data structures because these concepts, alongside algorithms, is what you're tested on \
              in programming interviews. I was definitely carefree the first time I took this course, got a D, and retook it in the summer where I got an A. Easy beginning but when you touch trees and graphs \
              is when it starts to get really hard. Take this course very seriously! Difficulty 7 / 10.",

  EECS2021 : "Definitely an annoying course. You'll be learning about really low level fundamentals about how computers work and use low-level assembly languages like RISC-V and Verilog. I've never used RISC-V \
              or Verilog since I finished the course, so I wouldn't invest too much time in learning how to develop in these languages. Was really interesting at times, and also had a heavy workload. The labs \
              can take a REALLY long time to do. Textbook is practically necessary for this course. Difficulty 7 / 10.",

  EECS2030 : "One of the most important courses in second year alongside EECS2011. This is a Java course that goes into depth about Object Oriented Programming, which is very important and helped me to become \
              a fairly more competent developer. I enjoyed this course a lot, and has a relatively lighter courseload compared to other second year courses. Difficulty 3 / 10.",

  EECS2031 : "Your first C course. I found this course to be challenging because I was only used to Java and Python, so picking up C was kind of hard. You'll also be working with Linux commands, Bash scripting, \
              and more. This is a pretty important course as well, so invest a decent amount of time into it. Have you been using Windows or Mac the entire time? Are you used to hitting 'run' in your IDEs to \
              execute code? Now you'll be getting into the nitty gritty and learning how to use a terminal and execute code from there. Difficulty 6 / 10.",

  MATH1090 : "Follow-up to EECS1019. I found this course to be much easier than EECS1019. It's still a lot of logic, but much less mathematical and formal. Some chapters can be abstract. Difficulty 5 / 10.",

  MATH2030 : "Note: if you're deciding to NOT do your honours, you don't have to take this course. Otherwise, you do. I won't be taking this course since I've opted to do the 90.0 credit program, so I don't \
              really have a good description of this course. From my friends who have taken this course, they all say it's hard. Probability, math, calculus, proofs. Difficulty 8 / 10.",

  ELECTIVES_2 : "Read my excerpt on electives under year 1. If you didn't take any courses in first year, now would be a good time to knock off 1 or 2.",

  EECS3000 : "Note: if you're deciding to NOT do your honours, you don't have to take this course. Otherwise, you do. This course is about ethics in computer science. You'll be reading a lot of papers and \
              writing essays in this one - no coding whatsoever. When I took this, the course was composed of six short papers, attendance, and an exam. The final exam was brutal. Course is really boring. \
              You can squeak by with a C or B by doing the assignments and you can skip all the lectures, but if you want an A you need a lot of work. Difficulty 4 / 10.",

  EECS3101 : "One of the most important third year courses alongside EECS3221 and EECS3311. This course is about writing and analyzing algorithms. Lots of math, extremely heavy workload, and has its fair \
              share of theory. If you're a LeetCode / competitive programming nerd then this course should be fine. Take this course seriously. Difficulty 8 / 10.",

  EECS3311 : "My friends and I used to joke about this course a lot, calling it 'the gatekeeper' since it holds so many people back from graduation. It's less on the difficulty side, but there's just an \
              obscene amount of work. I took this in 2019 when it used to be taught in a crappy and proprietary langauge 'Eiffel' but after years of complaining, the course is now taught in Java / Python. \
              That significantly decreases the difficulty of this course. This course is about writing good software, teaches design principles, and how to be a better engineer overall. At the time of taking \
              the course I'd say it was a 10 / 10 since it was taught in Eiffel, but now it should be a manageable 7.5 / 10.",

  EECS3215_3221: "Your degree says you can take one of EECS3215 or EECS3221, but 99% of students will be taking EECS3221. This is because by the time you reach third year and get to the point where you decide \
                  between these two courses, you'll notice you needed to take a second year physics course to be able to take EECS3215, which is a requirement most students don't have. Since I'm taking the \
                  EECS3221 route, I'll talk about that. It's about operating systems, and is taught in C. Pretty heavy courseload. Talks about A LOT of extremely important concepts. Heavy courseload, but \
                  also very interesting course too. Don't take Jia Xu. Difficulty 9 / 10.",

  EECS3401_3421_3461 : "I went with the EECS3421 route. I really enjoyed it and found it interesting, and was also made me a better developer by the end of it. It teaches databases, what they are, how to \
                        use them, SQL, how to make a proper ER diagrams and plan good database schemas, and much more. After taking this course I went back and revisted some of my old personal projects, \
                        making them more sophisicated and incorporating a database into them. Fun course and decent workload. Difficulty 6 / 10.",

  ELECTIVES_3 : "Read my excerpt on electives under year 1 and year 2. At this point in time you should have several electives done, and nearing the end of your degree. If you're taking the non-honours \
                degree then you should be done at the end of this year.",

  EECS4XXX : "Note: if you're deciding to NOT do your honours, you don't have to take ANY fourth year EECS courses. There are no mandatory 4XXX level EECS courses. When you get to this point, you take \
              the courses that interest you the most, fulfill the requirements of your degree, and graduate. You have to take a minimum of 12.0 credits of 4XXX level EECS courses, but you can take as \
              many as you want. This is one of the biggest selling points why people will drop out of the honours and graduate with the regular degree - you get to graduate ONE YEAR sooner. In my \
              personal opinion, the only reason you should stay in the honours is if you aren't entirely sure what you want to do when you graduate, and take more courses to explore your interests.",

  ELECTIVES_4 : "Read my excerpt under year 1, year 2, and year 3. Take as many courses as you need to fulfill your degree requirements. My general point of view on electives is take them as needed, \
                don't overwhelm yourself, core courses come first and electives later. An elective should never be so overwhelming that your grades in the main courses suffer.",

  OTHER : "There are a lot of other requirements that are sprinkled into getting the degree that occasionally get overlooked. For example, if you're in the honours you need 12.0 credits at the EECS4XXX level. \
          You need 42.0 credits at the 3XXX level or higher. You need 30.0 credits outside of computer science and mathematics. You need 24.0 credits in the science disciplines. There are a lot, so make sure \
          you keep checking your academic calendar, degree progress report, and check-in with guidance counsellors regularly to make sure you're hitting all the requirements.",

  ME : "Hey I'm Chris -- the reason I made this guide is because a lot of people would reach out to me asking common questions, so I put this website together as a way to answer all those common questions, \
        document everything I've learned over the years, things I wish I knew when I was a first year student, and more. I was inspired when I saw students from other universities making guides like this, \
        so I wanted to do the same. If there's any concerns you have about the content on this guide, want a topic added, or want to contribute, then feel free to message me on Discord, @chrispy#8933. \
        Probably when I graduate and other people inherit this, then there will be more people to reach out to, so yeah.",
}

// Year 1 courses
const EECS1001 = new Vue({ el: '#EECS1001' })
const EECS1012_1015 = new Vue({ el: '#EECS1012_1015' })
const EECS1019 = new Vue({ el: '#EECS1019' })
const EECS1022 = new Vue({ el: '#EECS1022' })
const MATH1300 = new Vue({ el: '#MATH1300' })
const MATH1310 = new Vue({ el: '#MATH1310' })
const SCIENCES = new Vue({ el: '#SCIENCES' })
const ELECTIVES_1 = new Vue({ el: '#ELECTIVES_1' })

// Year 2 courses
const EECS2001 = new Vue({ el: '#EECS2001' })
const EECS2011 = new Vue({ el: '#EECS2011' })
const EECS2021 = new Vue({ el: '#EECS2021' })
const EECS2030 = new Vue({ el: '#EECS2030' })
const EECS2031 = new Vue({ el: '#EECS2031' })
const MATH1090 = new Vue({ el: '#MATH1090' })
const MATH2030 = new Vue({ el: '#MATH2030' })
const ELECTIVES_2 = new Vue({ el: '#ELECTIVES_2' })

// Year 3 courses
const EECS3000 = new Vue({ el: '#EECS3000' })
const EECS3101 = new Vue({ el: '#EECS3101' })
const EECS3311 = new Vue({ el: '#EECS3311' })
const EECS3215_3221 = new Vue({ el: '#EECS3215_3221' })
const EECS3401_3421_3461 = new Vue({ el: '#EECS3401_3421_3461' })
const ELECTIVES_3 = new Vue({ el : '#ELECTIVES_3' })

// Year 4 courses
const EECS4XXX = new Vue({ el: '#EECS4XXX' })
const ELECTIVES_4 = new Vue({ el: '#ELECTIVES_4' })

// Other
const OTHER = new Vue({ el: '#OTHER' })

// About author
const ME = new Vue({ el: '#ME' })
