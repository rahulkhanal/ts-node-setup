import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { StudentEntity } from '../../entities/sql/student.entity';
import { Repository } from 'typeorm';

@Service()
export class StudentService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>
  ) { }

  async createStudent(name: string, age: number, email: string): Promise<StudentEntity> {
    const student = this.studentRepository.create({ name, age, email });
    return this.studentRepository.save(student);
  }

  async getAllStudents(): Promise<StudentEntity[]> {
    return this.studentRepository.find();
  }

  async getStudentById(id: number): Promise<StudentEntity | null> {
    return this.studentRepository.findOne({ where: { id } });
  }

  async updateStudent(id: number, name?: string, age?: number, email?: string): Promise<StudentEntity | undefined> {
    const student = await this.studentRepository.findOne({ where: { id } });
    if (!student) return undefined;

    if (name !== undefined) student.name = name;
    if (age !== undefined) student.age = age;
    if (email !== undefined) student.email = email;

    return this.studentRepository.save(student);
  }

  async deleteStudent(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
