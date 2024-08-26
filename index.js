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
  const learnerData = {};
  //     // here, we would process this data to achieve the desired result.
  // const result = [];
  //

  submissions.forEach((submission) => {
    // console.log(item.learner_id)
    const learnerId = submission.learner_id;
    const score = submission.submission.score;
    const submitDate = new Date(submission.submission.submitted_at);

    if (!learnerData[learnerId]) {
      console.log(learnerId);
      learnerData[learnerId] = { scoreTotal: 0 };
    }

    // let score = item.submission.score;
    learnerData[learnerId].scoreTotal += score;

    ag.assignments.forEach((assignment) => {
      if (assignment.id === submission.assignment_id) {
        const dueDate = new Date(assignment.due_at);
        const pointsPossible = assignment.points_possible;

        if (submitDate > dueDate) {
          let lateSubScore = score - pointsPossible * 0.10;
          console.log("late submission", lateSubScore);
        } else if (submitDate <= dueDate) {
          console.log("on time submission", score);
        }
      }
    });
  });
  return learnerData;
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);

// foreach submissions should stay there, contains the learner id, that id is also the assignment id
// avg goes in learner submissionsF
