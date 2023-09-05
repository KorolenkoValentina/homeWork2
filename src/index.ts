enum Status {
  Active,
  Inactive,
}

enum Position {
  Lecturer = "Lecturer",
  Assistant = "Assistant",
}

class Lecturer {
  private _name: string;
  private _surname: string;
  private _position: Position;
  private _company: string;
  private _experience: number;
  private _courses: string[];

  constructor(
    name: string,
    surname: string,
    position: Position,
    company: string,
    experience: number,
    courses: string[]
  ) {
    this._name = name;
    this._surname = surname;
    this._position = position;
    this._company = company;
    this._experience = experience;
    this._courses = courses;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get position(): Position {
    return this._position;
  }

  get company(): string {
    return this._company;
  }

  get experience(): number {
    return this._experience;
  }

  get courses(): string[] {
    return this._courses;
  }
}


class School {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  // Properties
  private _areas: Area[] = [];
  private _lecturers: Lecturer[] = [];

  get areas(): Area[] {
    return this._areas;
  }

  get lecturers(): Lecturer[] {
    return this._lecturers;
  }
 // Methods
  removeArea(area: Area):void {
    const index = this._areas.indexOf(area);
    if (index !== -1) {
      this._areas.splice(index, 1);
    }
  }

  addLecturer(lecturer: Lecturer):void {
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturer: Lecturer): void {
    const index = this._lecturers.indexOf(lecturer);
    if (index !== -1) {
      this._lecturers.splice(index, 1);
    }
  }
  addArea(area: Area):void {
    this._areas.push(area);
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  // Properties
   private _levels: Level[] = [];
   private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  // Methods
  addLevel(level: Level): void {
    this._levels.push(level);
  }

  removeLevel(level: Level): void {
    const index = this._levels.indexOf(level);
    if (index !== -1) {
      this._levels.splice(index, 1);
    }
  }

  get name(): string {
    return this._name;
  }

  get levels(): Level[] {
    return this._levels;
  }
}

class Level {
  // implement getters for fields and 'add/remove group' methods

   // Properties
  private _groups: Group[] = [];
  private _name: string;
  private _description: string;

  constructor(name: string, description: string) {
    this._name = name;
    this._description = description;
  }
  // Methods
  addGroup(group: Group): void {
    this._groups.push(group);
  }

  removeGroup(group: Group): void {
    const index = this._groups.indexOf(group);
    if (index !== -1) {
      this._groups.splice(index, 1);
    }
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): Group[] {
    return this._groups;
  }
}

class Group {
  // implement getters for fields and 'add/remove student' and 'set status' methods
  // Properties
  private _students: Student[] = [];
   _directionName: string;
   _levelName: string;
   _status: Status = Status.Active;

  constructor(directionName: string, levelName: string) {
    this._directionName = directionName;
    this._levelName = levelName;
  }
  // Methods
  addStudent(student: Student): void {
    this._students.push(student);
  }

  removeStudent(student: Student): void {
    const index = this._students.indexOf(student);
    if (index !== -1) {
      this._students.splice(index, 1);
    }
  }

  setStatus(status: Status): void {
    this._status = status;
  }

//   showPerformance() {
//     const sortedStudents = this._students.toSorted((a, b) => b.getPerformanceRating() - a.getPerformanceRating());
//     return sortedStudents;
//   }

// Add the 'toSorted' method
toSorted(comparator: (a: Student, b: Student) => number): Student[] {
    return [...this._students].sort(comparator);
  }
}

class Student {
  // implement 'set grade' and 'set visit' methods

   // Properties
  private _firstName: string;
  private _lastName: string;
  private _birthYear: number;
  private _grades: Record<string, number> = {}; // Work name to mark
  private _visits: Record<string, boolean> = {}; // Lesson to present

   constructor(firstName: string, lastName: string, birthYear: number) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }
   // Methods
  setGrade(workName: string, mark: number): void {
    this._grades[workName] = mark;
  }

  setVisit(lesson: string, present: boolean): void {
    this._visits[lesson] = present;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

   getPerformanceRating(): number {
    const gradeValues = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade =
      gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
    const attendancePercentage =
      (Object.values(this._visits).filter((present) => present).length /
        Object.values(this._visits).length) *
      100;

    return (averageGrade + attendancePercentage) / 2;
  }
}

