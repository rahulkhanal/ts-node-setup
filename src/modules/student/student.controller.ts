import { JsonController, Post, Get, Put, Delete, Param, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { StudentService } from './student.service';
import { StudentEntity } from '../../entities/sql/student.entity';
import { CreateStudentDto } from './dto/student-create.dto';
import { StudentUpdateDto } from './dto/student-update.dto';

@JsonController('/students')
export class StudentController {
  constructor(
    @Inject()
    private studentService: StudentService
  ) { }

  @Post('/')
  async create(@Body() createStudentDto: CreateStudentDto): Promise<StudentEntity> {
    return this.studentService.createStudent(createStudentDto.name, createStudentDto.age, createStudentDto.email);
  }

  @Get('/')
  async getAll(): Promise<StudentEntity[]> {
    return this.studentService.getAllStudents();
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<StudentEntity | null> {
    return this.studentService.getStudentById(id);
  }

  @Put('/:id')
  async update(
    @Param('id') id: number,
    @Body() updateStudentDto: StudentUpdateDto
  ): Promise<StudentEntity | undefined> {
    return this.studentService.updateStudent(id, updateStudentDto.name, updateStudentDto.age, updateStudentDto.email);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.studentService.deleteStudent(id);
  }
}
