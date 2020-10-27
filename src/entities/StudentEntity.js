export  class StudentEntity {
    name;
    group;
    timing;
    grades;
    doubt;

    constructor(name, group,timing,grades, doubt) {
        this.name = name;
        this.group = group;
        this.timing = timing;
        this.doubt = doubt;
        this.grades = grades;
    }
}