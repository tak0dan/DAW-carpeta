package Subject;

import java.util.Objects;

public class Subject implements Comparable<Subject> {

    private String name;
    private int week_hours;

    public Subject(String name, int week_hours) {
        this.name = name;
        this.week_hours = week_hours;
    }

    public String getName() {
        return name;
    }

    public int getWeek_hours() {
        return week_hours;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setWeek_hours(int week_hours) {
        this.week_hours = week_hours;
    }

    @Override
    public String toString() {
        return "Subject{name='" + name + "', week_hours=" + week_hours + "}";
    }

    // Logical equality: same subject name = same subject
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Subject)) return false;
        Subject subject = (Subject) o;
        return Objects.equals(name, subject.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name);
    }

    // Sorting alphabetically by name
    @Override
    public int compareTo(Subject other) {
        return this.name.compareToIgnoreCase(other.name);
    }
}