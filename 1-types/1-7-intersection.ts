{
  /**
   * Opposite from union
   * 모든것을 다 합한 성격
   * Union : or
   * intersection : and
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeID: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeID, person.work());
  }

  internWork({
    name: "Kainy",
    score: 30,
    employeeID: 2,
    work: () => {},
  });
  // 이 처럼 Student 와 Wroker
}
