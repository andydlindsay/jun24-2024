class Student
  def initialize
    @cohort = 'jun 24 2024'
    @grade = 80
    @age = 42

    self.cohort = 
  end

  def my_method
    @age
  end

  # attr_reader :cohort
  # attr_writer :cohort
  # attr_accessor(:cohort, :grade, :age)
end

student = Student.new
p student.cohort

student.cohort = 'feb 15 2024'

p student
