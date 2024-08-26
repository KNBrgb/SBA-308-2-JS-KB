// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript",
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50,
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150,
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500,
      },
    ],
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47,
      },
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150,
      },
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400,
      },
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39,
      },
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140,
      },
    },
  ];
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  function getLearnerData(course, ag, submissions) {
    try {
      if (ag.course_id !== course.id) {
        throw new Error("You shall not pass!");
      }
    } catch (error) {
      console.log(error);
      return;
    }
  
    //     // here, we would process this data to achieve the desired result.
    const result = [];
    const learnerId = {};
  
    submissions.forEach((item) => {
      // console.log(item.learner_id)
  
      if (!learnerId.includes(item.learner_id)) {
        console.log(learnerId);
        learnerId.push[item.learner_id] = { scoreTotal: 0 };
      }
  
      let score = item.submission.score;
      let submitDate = new Date(item.submission.submitted_at);
      learnerId[item.learner_id].scoreTotal += Number(score);
  
      ag.assignments.forEach((assignment) => {
        let dueDate = new Date(assignment.due_at);
        let pointsPossible = assignment.points_possible;
  
  
        if (submitDate > dueDate) {
          let lateSubScore = score - pointsPossible * 0.1;
          console.log("last submission", lateSubScore);
        } else if (submitDate <= dueDate) {
          console.log("on time submission", score);
        }
      } );
   
      
    });
    return result;
  }
  const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  console.log(result);
  
  // foreach submissions should stay there, contains the learner id, that id is also the assignment id
  // avg goes in learner submissionsF
  