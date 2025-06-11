function getAverage(scores) {
  const scoresSum = scores.reduce((sum, score) => sum + score, 0);
  return scoresSum / scores.length;
}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// console.log(getGrade(96));

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return (
    grade === "A++" ||
    grade === "A" ||
    grade === "B" ||
    grade === "C" ||
    grade === "D"
  );
}
// console.log(hasPassingGrade(100));

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
