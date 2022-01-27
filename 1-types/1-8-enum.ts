{
  /**
   * Enum
   */
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10
  const MONDAY = 0;
  const Tuesday = 1
  const WEDNESDAY = 2
  const DAYS_ENUM = Object.freeze({'MONDAY':0,'tuesday':1,'wednes'})
  const dayOfToday = DAYS_ENUM.MONDAY

  // TypeScript
  enum Days {
    Monday, //
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; // enum 대신 이렇게 union사용가능

  console.log(Days.Monday);
  let day = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  // 가능한 쓰지 않는게 좋음.
  // enum으로 타입이 지정된 변수에 다른 어떤 수도 할당 가능하다는 것이 문제
  //   타입이 정확하게 보장되지 않음

  let dayOfWeek: DaysOfWeek = 'Monday'
  dayOfWeek='Wednesday'
}
